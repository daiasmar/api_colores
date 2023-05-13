const express = require('express')
const server = express()

server.get('/', (req,res) => {
    res.json({ hola : 'adios' })
})

server.use((req,res) => {
    res.status(400)
    res.json({ error : 'no tengo respuesta para esta peticion' })
})

server.listen(4000)