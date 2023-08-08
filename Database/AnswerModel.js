const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    
    answerId:{
        type: String,
        required: true
    },

    questionId:{
        type: String,
        required: true
    },

    answerText:{
        type: String,
        required: true
    },

});

const answerModel = mongoose.model('Answers', answerSchema);

module.exports = answerModel;