const express = require('express')
const server = express()
const port = 3000

server.use(express.json())
server.use('/', require('./route/produtosRoute'))


server.listen(port, () => {
    console.log('listening on port ' + port)
})