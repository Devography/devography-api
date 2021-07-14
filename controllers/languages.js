const express = require('express');
const router = express.Router();
const { Error } = require('mongoose');
const Language = require('../models/languageSchema')


router.get('/', async (req, res) => {
	try {
		const languages = await Language.find();
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
    try{
        const newLanguage = await Language.create(req.body);
        res.status(201).json(newLanguage);
    } catch (err){
        console.log(err)
    }
})


router.patch('/:id', async(req,res)=>{
    try{
        const newLanguage = await Language.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json(newLanguage);
    } catch (err){
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

module.exports = router