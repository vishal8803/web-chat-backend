const express = require("express");

const emailToAgentIdModel = require('../Database/EmailToAgentIdModel');

const emailToAgentIdRouter = express.Router();

emailToAgentIdRouter.route('/getAgentId')
    .post(async (req, res) => {
        let email = req.body.email;

        try {
            let data = await emailToAgentIdModel.find({ email: email });
            
            if (data.length == 0) {
                let newRow = { agentId: String(Math.floor(Math.random() * 1000000)), email: email };
                await emailToAgentIdModel.create(newRow);
                return res.status(200).json({
                    status: true,
                    agentId: newRow.agentId
                });
            } else {
                return res.status(200).json({
                    status: true,
                    agentId: data[0].agentId
                });
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                status: false,
                message: 'Failed.....'
            })
        }
    })

module.exports = emailToAgentIdRouter;