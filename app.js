const bodyParser = require('body-parser')
const express = require('express')

const config = require('./config')
const user = require('./components/user/network')
const errors = require('./network/errors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/user', user)

app.use(errors)

app.listen(config.app.port, () => {
    console.log('Aplicacion escuchando por el puerto' + config.app.port)
})
