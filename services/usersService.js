const knex = require('../db')

exports.getLimitData = async () => {

    const id = await knex.select('id').where('email', "priyanka@gmail.com").from('users')
    const userId = id.map(function (item) { return item.id });
    console.log(userId[0])
    const totalExpense = await knex.sum('amount').from('transactions').where({
        transc_type: 'expense',
        users_id: userId[0]
    })
    const userTotalExpense = totalExpense.map(function (item) { return item.sum });
    console.log(userTotalExpense[0])

    const limitData = await knex.select('min_bal').where({ 'id': userId[0] }).from('users')
    const userLimitData = limitData.map(function (item) { return item.min_bal });
    console.log(userLimitData[0])

    console.log(totalExpense)
    console.log(limitData)
    const result = (userTotalExpense / userLimitData) * 100;
    return result;
}

// exports.getUserById = async (id) => {
//     const result = await knex('user_table').where({ 'id': id })
//     return result;
// }

exports.insertUser = async (user) => {
    try {

        const userData = JSON.parse(JSON.stringify(user))

        userData.is_deleted = 'false'
        console.log(userData.phone)

        await knex.insert(userData).table('users')

    }
    catch (err) {
        console.log(err)
        throw 'Unable to insert user!'
    }
}

exports.insertLimit = async (limit) => {
    try {

        const userLimit = JSON.parse(JSON.stringify(limit))
        console.log(userLimit.min_bal)
        result = await knex('users').max('id')
        console.log(result)
        const id = result.map(function (item) { return item.max });
        console.log(id[0])
        await knex('users').where({ 'id': id[0] }).update({ 'min_bal': userLimit.min_bal })


    }
    catch (err) {
        console.log(err)
        throw 'Unable to insert user!'
    }
}