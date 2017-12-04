'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://localhost:5432/bookshelf_dev`
    // migrations: {
    //   directory: path.join(__dirname, 'db', 'migrations')
    // },
    // seeds: {
    //   directory: path.join(__dirname, 'db', 'seeds')
    // }
  },
  test: {
    client: 'pg',
    connection: `postgres://localhost:5432/bookshelf_test`
    // migrations: {
    //   directory: path.join(__dirname, 'db', 'migrations')
    // },
    // seeds: {
    //   directory: path.join(__dirname, 'db', 'seeds')
    // }
  },

  production: {}
};
