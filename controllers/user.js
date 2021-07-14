const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res, next) => {
  User.find({})
    .then((users) => res.json(users))
    .catch(next);
});
router.post('/', (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
});
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