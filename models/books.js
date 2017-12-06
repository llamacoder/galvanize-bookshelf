const knex = require('../knex')


function getAll() {
  return knex('books').select('id', 'title', 'author', 'genre', 'description',
              'cover_url as coverUrl', 'created_at as createdAt',
              'updated_at as updatedAt').orderBy('title')
}

function create(title, author, genre, description, coverUrl) {
  return knex('books').insert({'title': title, 'author': author,
                               'genre': genre, 'description': description,
                               'cover_url': coverUrl}).returning(['id', 'title', 'author', 'genre', 'description',
                                           'cover_url as coverUrl'])
}

function getOne(id) {
  return knex('books').select('id', 'title', 'author', 'genre', 'description',
              'cover_url as coverUrl', 'created_at as createdAt',
              'updated_at as updatedAt').where('id', id)
}

function updateOne(id, title, author, genre, description, coverUrl) {
  console.log("Updating... " + id + title + author);
  return knex('books').where('id', id)
    .update({'title': title, 'author': author,
                               'genre': genre, 'description':description,
                               'cover_url': coverUrl})
    .returning(['id', 'title', 'author', 'genre', 'description',
                'cover_url as coverUrl', 'created_at as createdAt',
                'updated_at as updatedAt'])
}

function deleteOne(id) {
  return knex('books').where('id', id)
    .del()
    .returning(['title', 'author', 'genre', 'description',
                'cover_url as coverUrl', 'created_at as createdAt',
                'updated_at as updatedAt'])
}


module.exports = {
  getAll, create, getOne, updateOne, deleteOne
}
