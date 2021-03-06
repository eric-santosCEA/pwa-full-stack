const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../modules/SignUpModels')

router.post('/signup', (request, response) => {
    const signUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(err => {
        response.json(err)
    })
    })
    


module.exports = router