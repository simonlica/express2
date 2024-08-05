const express = require('express')
const morgan = require('morgan')

const server2 = express()

server2.listen(3000)

//criando um middleware para gerar os logs
// server2.use(morgan('tiny'))
// server2.use(morgan(':method :url :status'))
server2.use(morgan('Método = :method | Status = :status | Url = :url'))

server2.get('/',(req,res)=>{
    res.send('teste de conexão do server2')
})