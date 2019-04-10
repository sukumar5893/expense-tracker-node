const knex = require('../db')

// exports.getUsers = async () => {
//     const result = await knex.select("*").from("user_table")
//     return result;

// }

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