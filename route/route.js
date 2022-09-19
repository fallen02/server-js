const express = require('express')

const booksRoutes = require('./../controller/controller')

const router = express.Router()

router.get('/all', booksRoutes.booksAll)

router.post('/create', booksRoutes.booksCreate)

router.put('/delete', booksRoutes.booksDelete)

router.put('/reset', booksRoutes.booksReset)


module.exports = router