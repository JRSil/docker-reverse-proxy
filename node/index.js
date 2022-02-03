const express = require('express')
const consign = require('consign');
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(bodyParser.urlencoded({extended: true}))

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const create = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key (id))`
const insert = `INSERT INTO people (name) values ('Edilton')`
const select = `SELECT name FROM people`
connection.query(create)
connection.query(insert)

app.get('/', (req, res) => {
    connection.query(select, function(err, rows) {
        console.log(rows);
        res.render("index", {people: rows})
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})