const router = require('express')()
const authService = require('../services/authService')



router.post('/', (req, res) => {
    try {
        const { username, password } = req.body

        authService.login(username, password)
        res.json({ token: 'Successful' })

    }
    catch (err) {
        res.status(401).json({ message: err })
    }


})
module.exports = router;