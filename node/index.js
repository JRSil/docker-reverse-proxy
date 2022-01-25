const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const insert = `INSERT INTO people (name) values ('Edilton')`
const select = `SELECT name FROM people`
connection.query(insert)
var name = connection.query(select)
connection.end()

app.get('/', (req, res) => {
    console.log('<h1>Full Cycle!</h1>')
    for (var i = 0; i < name.length; i++) {
        console.log(name[i])
    }
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})