
const express = require('express')
const router = express.Router()

const Language = require('../models/languageSchema')


router.get('/', async (req, res) => {
    try {
        const languages = await Language.find();
        res.json(languages);
    } catch (err) {
        console.error(err);
    }
});
router.get('/', async (req, res) => {
    try {
        const languages = await Language.findById(req.params.id);
        res.json(languages);
    } catch (err) {
        console.error(err);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const language = await Language.findByIdAndUpdate(req.params.id);
        res.json(language);
    } catch (err) {
        console.error(err);
    }
});


router.post('/:id', async (req,res) =>{
    try{
    console.log(req.body)
        
   const language = await Language.findById(req.params.id)

   language.comments.push(req.body);
   const updatedLanguage = await language.save();
   res.status(201).json(updatedLanguage);
}catch(err){
   console.log(err)
}

})





router.delete('/:id', async(req,res)=>{
    try{
        const newLanguage = await Language.findByIdAndDelete(req.params.id);
        res.status(201).json(newLanguage);
    } catch (err){
        console.log(err)
    }
})
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Language.findOne({ 'comments._id': id })
        .then((language) => {
            language.comments.id(id).remove();
            return language.save();
        })
        .then(() => res.sendStatus(204))
        .catch(next);
});
module.exports = router