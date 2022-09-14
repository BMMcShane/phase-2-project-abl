import React, {useState} from "react";

function IndivQuestion({question}) {
    let answers = [];
    let randomAnswers = [];

    function buildAnswerArray(question) {
        console.log(question);
        let answers = [question.correctAnswer, ...question.incorrectAnswers];
        if (answers != undefined) {
        shuffleAnswers(answers);
        };
    };

    function shuffleAnswers(answers) {
        console.log(answers);
        for (var i = answers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = answers[i];
            answers[i] = answers[j];
            answers[j] = temp;
            let randomAnswers = answers[i]
            };
        console.log(answers);
      };
    return (
        <div className="questions">
        <h2 key={question.id}>{question.question}</h2>
            <div className="column-one">
                <label className="answer" id="answer1">
                <input type="radio" name="answer"/> {answers[0]}
                </label>
                <br/>
                <br/>
                <label className="answer" id="answer2">
                <input type="radio" name="answer"/>{answers[1]}
                </label>
            </div>
            <div className="column-two">
                <label className="answer" id="answer3">
                <input type="radio" name="answer"/>{answers[2]}
                </label>
                <br/>
                <br/>
                <label className="answer" id="answer4">
                <input type="radio" name="answer"/>{answers[3]}
                </label>
            </div>
        </div>
        );
    }

export default IndivQuestion;