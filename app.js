const bodyParser = require('body-parser')
const express = require('express')

const config = require('./config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
    res.send('Aplicacion funcionando')
})
app.listen(config.app.port, () => {
    console.log('Aplicacion escuchando por el puerto' + config.app.port)
})
