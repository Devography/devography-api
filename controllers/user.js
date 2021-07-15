const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res, next) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch(next);
});

router.get('/', async (req, res) => {
	try {
		const languages = await Language.find();
		res.json(languages);
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
router.patch('/:id', async(req,res)=>{
    try{
        const newLanguage = await Language.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json(newLanguage);
    } catch (err){
        console.log(err)
    }
})

module.exports = router;