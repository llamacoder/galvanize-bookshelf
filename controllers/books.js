const model = require('../models/books')

function getAll(req, res, next) {
  model.getAll().then(results => {
    res.status(200).json(results)
  })
}

function create(req, res, next) {
  const { title, author, genre, description, coverUrl  } = req.body
  res.set('Content-Type', 'application/json')
  if (!title)
    return next({ status: 400, message: `Title must not be blank` })
    if (!author)
      return next({ status: 400, message: `Author must not be blank` })
  if (!genre)
    return next({ status: 400, message: `Genre must not be blank` })
  if (!description)
    return next({ status: 400, message: `Description must not be blank` })
  if (!coverUrl)
    return next({ status: 400, message: `Cover URL must not be blank` })

  model.create(title, author, genre, description, coverUrl)
    .then(results => {
      res.status(200).json(results[0])
    })
}

function getOne(req, res, next) {
  const id = req.params.id
  res.set('Content-Type', 'application/json')
  isNaN(Number(id)) ? res.status(404).json({error: {status:404, message: "Not Found"}}) :
    model.getOne(Number(id)).then(results => {
      results.length === 0 ? res.status(404).json({error: {status: 404, message: "Not Found"}}) : res.status(200).json(results[0])
    })
}

function updateOne(req, res, next) {
  const { title, author, genre, description, coverUrl  } = req.body
  if (!title)
    return next({ status: 400, message: `Title must not be blank` })
  if (!author)
    return next({ status: 400, message: `Author must not be blank` })
  if (!genre)
    return next({ status: 400, message: `Genre must not be blank` })
  if (!description)
    return next({ status: 400, message: `Description must not be blank` })
  if (!coverUrl)
    return next({ status: 400, message: `Cover URL must not be blank` })
  const id = req.params.id
  isNaN(Number(id)) ? res.status(404).json({error: {status:404, message: "Not Found"}}) :
    model.updateOne(Number(id), title, author, genre, description, coverUrl)
      .then(results => {
        results.length === 0 ? res.status(404).json({error: {status: 404, message: "Not Found"}}) :
                                res.status(200).json(results[0])
      })
}

function deleteOne(req, res, next) {
  const id = req.params.id
  isNaN(Number(id)) ? res.status(404).json({error: {status:404, message: "Not Found"}}) :
    model.deleteOne(id).then(results => {
      if (results.length === 0) return next({ status: 404, message: `Not Found` })
      res.status(200).json(results[0])
    })
}


module.exports = {
  getAll, getOne, create, updateOne, deleteOne
}
