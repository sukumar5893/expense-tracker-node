// const knex = require('../db')
// exports.login = async (username, password) => {
//     try {
//         // const credentials = await knex('users').where({ 'email': username }).select('email', 'password')
//         const { email } = await knex('users').where({ 'email': username }).select('email')
//         const { pword } = await knex('users').where({ 'password': password }).select('password')
//         if ((username === email) && (password === pword))
//             return;

//     }
//     catch (err) {
//         console.log(err)
//         throw "Invalid Credentials";
//     }


// }

exports.login = (username, password) => {
    if ((username === "priyanka@gmail.com") && (password === "priyanka"))
        return;
    throw "Invalid Credentials";
}

