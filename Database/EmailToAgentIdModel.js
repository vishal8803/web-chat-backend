const mongoose = require('mongoose');

const emailToAgentIdSchema = mongoose.Schema({
    
    agentId:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    }

});

const emailToAgentIdModel = mongoose.model('EmailToAgentId', emailToAgentIdSchema);

module.exports = emailToAgentIdModel;