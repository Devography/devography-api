const mongoose = require('mongoose');
const commentSchema = require('./comments');


const languageSchema = new mongoose.Schema(
	{
		name: {String},
        author: {String},
        year: {String},
        logo: {String},
	}, {
		reviews: [reviewSchema]
	},
	{
		timestamps: true
	},
);
const Language = mongoose.model('Language', languageSchema);
module.exports = Language;