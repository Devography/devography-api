
const express = require('express')
const router = express.Router()

const Language = require('../models/languageSchema')



// router.get('/', async (req, res) => {
// 	try {
// 		const languages = await Language.find();
// 		res.json(languages);
// 	} catch (err) {
// 		console.error(err);
// 	}
// });
// router.get('/', async (req, res) => {
// 	try {
// 		const languages = await Language.findById(req.params.id);
// 		res.json(languages);
// 	} catch (err) {
// 		console.error(err);
// 	}
// });

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

// router.put('/:id', async (req, res) => {
// 	try {
// 		const language = await Language.findByIdAndUpdate(req.params.id);
//         res.json(language);
// 	} catch (err) {
// 		console.error(err);
// 	}
// });

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
// router.post('/', async (req,res) =>{
//     console.log(req.body)
//    const newLanguage = await Language.create(req.body)
//    res.json(newLanguage)
// })

/* ANOTHER ONE:

router.post('/', async (req,res) =>{
 try{
    console.log(req.body)
     const commentData = req.body
   const languageID = commentData.languageID
   const language = await Language.findById(languageID)
   language.comments.push(commentData);
   const updatedLanguage = await language.save();
   res.status(201).json(updatedLanguage);
}catch(err){
   console.log(err)
}
})

*/



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
// router.delete('/:id', async(req,res)=>{
//     try{
//         const newLanguage = await Language.findByIdAndDelete(req.params.id);
//         res.status(201).json(newLanguage);
//     } catch (err){
//         console.log(err)
//     }
// })

module.exports = router