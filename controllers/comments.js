
const express = require('express')
const router = express.Router()

const Language = require('./../models/languages')


router.post('/', (req, res, next) => {
    console.log('we hit the route')
 
  const reviewData = req.body

  const LanguageId = reviewData.LanguageId

  Language.findById(LanguageId)
    .then(Language => {
      // add review to Language
      Language.reviews.push(reviewData)
      // save Language
      return Language.save()
    })
    // send responsne back to client
    .then(Language => res.status(201).json({Language: Language}))
    .catch(next)
})

// DESTROY
// DELETE /reviews/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Language.findOne({ 'reviews._id': id })
    .then(Language => {
      Language.reviews.id(id).remove()
      return Language.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE
// PATCH /reviews/:id
router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const reviewData = req.body

  Language.findOne({
    'reviews._id': id,
  })
    .then(Language => {
      const review = Language.reviews.id(id)
      review.set(reviewData)
      return Language.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router