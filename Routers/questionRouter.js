const express = require("express");

const questionModel = require('../Database/QuestionModel');

const questionRouter = express.Router()


questionRouter.route('/getQuestions')
    .post(async (req, res) => {
        let agentId = req.body.agentId;

        try {
            let alreadyAssignedQuestions = await questionModel.find({ agentId: agentId, isAnswered: false });
            if (alreadyAssignedQuestions.length != 0) {
                return res.status(200).json({
                    status: true,
                    alreadyAssignedQuestions: alreadyAssignedQuestions
                })
            } else {
                let unAnsweredQuestions = await questionModel.find({ agentId: 'NA', isAnswered: false }).limit(5);

                let questionId = [];

                for (let i = 0; i < unAnsweredQuestions.length; i++) {
                    questionId.push(unAnsweredQuestions[i].questionId);
                }



                const filter = { questionId: { $in: questionId } };
                const update = { $set: { agentId: String(agentId) } };


                const updateResult = await questionModel.updateMany(filter, update);
                if (updateResult.modifiedCount > 0) {
                    const modifiedQuestions = await questionModel.find(filter);
                    return res.status(200).json({
                        status: true,
                        assignedQuestions: modifiedQuestions
                    })
                }
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                status: false,
                message: 'Failed.....'
            })
        }
    })

questionRouter.route('/answerQuestion')
    .post(async (req, res) => {
        let questionId = req.body.questionId;

        try {
            let question = await questionModel.find({ questionId: questionId });
            
            if (question.length == 0) {
                return res.status(200).json({
                    status: false,
                    message: 'Question Id does not exist...'
                })
            } else {
                const updateResult = await questionModel.updateMany({ questionId: questionId }, { isAnswered: true });
                return res.status(200).json({
                    status: true,
                    message: 'Questions successfully updated...'
                })
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                status: false,
                message: 'Request Failed...'
            });
        }
    })

questionRouter.route('/allAnsweredQuestions')
.post(async(req, res) => {
    let agentId = req.body.agentId;

    try{
        let answeredQuestion = await questionModel.find({agentId: agentId, isAnswered: true});
        return res.status(200).json({
            status: true,
            answeredQuestion: answeredQuestion
        })
    }catch(e) {
        console.log(e);
        return res.status(500).json({
            status: false,
            message: 'Request Failed...'
        });
    }
})

module.exports = questionRouter;