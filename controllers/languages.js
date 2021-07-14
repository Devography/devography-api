const express = require('express');
const router = express.Router();
const Bookmark = require('./Language');

// INDEX
// /languages/
// retrieves all the languages from the database
router.get('/', async (req, res) => {
	try {
		const languages = await Language.find();
		res.json(languages);
	} catch (err) {
		console.error(err);
	}
});

// SHOW
// /languages/id
// show individual language
router.get('/:id', async (req, res) => {
	try {
		const language = await Language.findById(req.params.id);
        res.json(language);
	} catch (err) {
		console.error(err);
	}
});

// POST 
router.post('/', async(req,res)=>{
    try{
        const newLanguage = await Language.create(req.body);
        res.status(201).json(newLanguage);
    } catch (err){
        console.log(err)
    }
})

//UPDATE
router.put('/:id', async(req,res)=>{
    try{
        const newLanguage = await Language.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json(newLanguage);
    } catch (err){
        console.log(err)
    }
})

//DELETE
router.delete('/:id', async(req,res)=>{
    try{
        const newLanguage = await Language.findByIdAndDelete(req.params.id);
        res.status(201).json(newLanguage);
    } catch (err){
        console.log(err)
    }
})

