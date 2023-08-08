const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    

    askedByUserId:{
        type: String,
        required: true
    },

    questionText:{
        type: String,
        required: true
    },
    
    questionId:{
        type: String,
        required: true
    },

    agentId: {
        type: String,
        required: true,
        default: 'NA'
    },

    isAnswered: {
        type: Boolean,
        default: false,
        required: true
    }
});

const questionModel = mongoose.model('Questions', questionSchema);

module.exports = questionModel;