const express = require('express')
const server = express()
const port = 3000

server.use(express.json())
server.use('/', require('./produtosRoute'))


server.listen(port, () => {
    console.log('listening on port ' + port)
})