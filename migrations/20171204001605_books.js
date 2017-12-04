exports.up = knex => {
  return knex.schema.createTable('books', table => {
    table.increments()
    table.string('title').notNullable().defaultsTo('')
    table.string('author').notNullable().defaultsTo('')
    table.string('genre').notNullable().defaultsTo('')
    table.text('description').notNullable().defaultsTo('')
    table.text('cover_url').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('books')
}
