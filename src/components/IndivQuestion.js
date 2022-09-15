import React, {useState} from "react";

function IndivQuestion({question, questNum}) {
    let shuffledAnswers = [];
    let answers = [];
    let randomAnswers = [];
    let currentAnswer;
    let submittedAnswers = {
        qNo: questNum,
        id: question.id,
        answer: "",
    };

    function buildAnswerArray(question) {
        let answers = [question.correctAnswer, ...question.incorrectAnswers];
        if (answers != undefined) {
        shuffleAnswers(answers);
        };
    };

    function shuffleAnswers(answers) {
        for (var i = answers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = answers[i];
            answers[i] = answers[j];
            answers[j] = temp;
            let randomAnswers = answers[i]
            };
            for (var j = 0; j < answers.length + 1; j++) {
                if (answers[j] !== undefined) {
                    shuffledAnswers.push(answers[j]);
            }}
            
      };

      function handleInputChange(option) {
        let chosenAnswer = option;
        chooseAnswer(chosenAnswer);
      };

      function chooseAnswer(chosenAnswer) {
        let submittedAnswers = {
            qNo:questNum,
            id: question.id,
            answer: chosenAnswer,
        }
        let answerElement = document.getElementById(`${questNum}`);
        answerElement.textContent = submittedAnswers.answer;
      };

    return (
        <div className="questions">
            <form>
        <h2 key={question.id}>{question.question}</h2>
        {buildAnswerArray(question)}
            <div className="column-three">
                <label className="answerleft" id="answer1" onClick={() =>handleInputChange(shuffledAnswers[0])}>
                <input type="radio" name="answer" className="radio-view"/> {shuffledAnswers[0]}
                </label>
                <label className="answerright" id="answer2" onClick={() =>handleInputChange(shuffledAnswers[1])}>
                <input type="radio" name="answer" className="radio-view"/>{shuffledAnswers[1]}
                </label>
            </div>
            <br/>
            <div className="column-four">
                <label className="answerleft" id="answer3" onClick={() =>handleInputChange(shuffledAnswers[2])}>
                <input type="radio" name="answer" className="radio-view"/>{shuffledAnswers[2]}
                </label>
                <label className="answerright" id="answer4" onClick={() =>handleInputChange(shuffledAnswers[3])}>
                <input type="radio" name="answer" className="radio-view"/>{shuffledAnswers[3]}
                </label>
                <p hidden={true} id={question.id}>{question.id}</p>
            </div>
            </form>
            <p id={questNum} hidden={true}></p>
        </div>
        );
    }

export default IndivQuestion;