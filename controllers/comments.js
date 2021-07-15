
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


router.post('/', async (req,res) =>{
    console.log(req.body)
   const newLanguage = await Language.create(req.body)
   res.json(newLanguage)
})




router.delete('/:id', async(req,res)=>{
    try{
        const newLanguage = await Language.findByIdAndDelete(req.params.id);
        res.status(201).json(newLanguage);
    } catch (err){
        console.log(err)
    }
})

module.exports = router