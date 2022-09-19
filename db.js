const { table } = require('console')
const { exists } = require('fs')
const path = require('path')

const dbPath = path.resolve(__dirname,'db/database.sqlite')

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

knex.schema
    .hasTable('books')
        .then((exists) => {
            if(!exists){
                return knex.schema.createTable('books', (table) => {
                    table.increments('id').primary()
                    table.integer('author')
                    table.string('title')
                    table.string('pubDate')
                    table.integer('rating')
                })
                .then(() => {
                    console.log('Created Database')
                })
                .catch((error) => {
                    console.error(`There was an error creating table: ${error}`)
                })
            }
        })
        .then(() => {
            console.log('Success')
        })
        .catch((error) => {
            console.error(`There was an error setting up the database: ${error}`)
        })

//Debug

knex.select('*').from('books')
        // .then(data => console.log('data:', data))
        .catch(err => console.log(err))
    

module.exports = knex