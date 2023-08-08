const express = require("express");

const answerModel = require('../Database/AnswerModel')

const answerRouter = express.Router();

answerRouter.route('/answerQuestion')
    .post(async (req, res) => {
        let data = req.body;

        try {
            let answer = await answerModel.create(data);
            return res.status(200).json({
                status: true,
                answer: answer
            })
        } catch (e) {
            return res.status(500).json({
                status: false,
                message: 'Request Failed....'
            })
        }

    })

answerRouter.route('/getAnswer')
    .post(async(req, res) => {
        let questionId = req.body.questionId
        try {
            let answer =await answerModel.find({questionId: questionId});
            res.status(200).json({
                status: true,
                answer: answer
            })
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                status: false,
                message: 'Request Failed....'
            })
        }
    })

module.exports = answerRouter;