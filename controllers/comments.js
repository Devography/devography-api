
const express = require('express')
const router = express.Router()

const Language = require('../models/languageSchema')




router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const commentData = req.body
    Language.findOne({
          'comments._id': id,
        })
    .then(language => {
        const comment = language.comments.id(id)
        comment.set(commentData)
        return language.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})



router.post('/:id', async (req, res) => {
	try{
        const commentData = req.body
		const language = await Language.findById(req.params.id) 
        language.comments.push(commentData);
        const updatedComment = await language.save();
		res.status(201).json(updatedComment);
	}catch(err){
		console.log(err)
	}
});




router.delete('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const language = await Language.findOne({'comments._id' : id})
        language.comments.id(id).remove()
        const languageDelete = await language.save()
        res.sendStatus(204)
    } catch (err){
        console.log(err)
    }
})


module.exports = router
