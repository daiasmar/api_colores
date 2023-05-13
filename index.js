const express = require('express')
const server = express()

server.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

server.get('/', (req,res) => {
    let [r,g,b] = [0,0,0].map(() => Math.floor(Math.random()*256))
    res.json({r,g,b})
})

server.use((req,res) => {
    res.status(400)
    res.json({ error : 'no tengo respuesta para esta peticion' })
})

server.listen(4000)