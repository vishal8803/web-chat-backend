const fs = require('fs')
const express = require('express');
const cors = require('cors');
const csv = require('csv-parser');
const db = require('./Database/DBConnection')
const questionModel = require('./Database/QuestionModel');
const questionRouter = require('./Routers/questionRouter');
const answerRouter = require('./Routers/answerRouter')



const app = express();
app.use(cors());
app.listen(3000);


app.use(express.json());
app.use('/questions', questionRouter);
app.use('/answer', answerRouter);


// Code to insert csv data into database, I have once runed it.

// const path = './question_list.csv';

// var num = 101010;

// console.log(db.models.Questions);
// fs.createReadStream(path).pipe(csv()).on('data', async (row) => {
//     var num = 10101;
//     const newRow = { ...row, 'questionId': String(Math.round(Math.random()*100000 + 987)), 'agentId': 'NA', 'isAnswered': false }
//     await questionModel.create(newRow);
//     num = num + 1;
// }).on('end', () => {
//     console.log('CSV data with new fields has been uploaded to MongoDB.');
// })

