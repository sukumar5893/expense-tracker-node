const router = require('express')()
const usersService = require('../services/usersService')

// router.get('/', async (req, res) => {
//     const users = await usersService.getUsers()
//     res.header("Access-Control-Allow-Origin", " *")
//     res.json({ users: users })
// })

// router.post('/', (req, res) => {
//     console.log(JSON.stringify(req.body, undefined, 4));
//     res.json({ message: 'Users POST' })
// })

router.post('/', async (req, res) => {
    try {
        console.log("usercontroller")
        await usersService.insertUser(req.body)
        res.json({ message: 'User Inserted' })
    }
    catch (err) {
        res.status(422).json({ message: err })
    }
})
// router.get('/:id', async (req, res) => {
//     const { id } = req.params
//     const user = await usersService.getUserById(parseInt(id))
//     res.json({ users: user })
// })

module.exports = router;