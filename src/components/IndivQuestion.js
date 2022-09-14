import React, {useState} from "react";

function IndivQuestion({question}) {
    console.log(question)
    const [newAnswers, setNewAnswers] = useState([])
    let shuffledAnswers = [];
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
        console.log(`old answers ${answers}`);
        for (var i = answers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = answers[i];
            answers[i] = answers[j];
            answers[j] = temp;
            let randomAnswers = answers[i]
            };
            for (var j = 0; j < answers.length + 1; j++) {
                console.log(answers[j])
                if (answers[j] !== undefined) {
                    shuffledAnswers.push(answers[j]);
            }}
            
            console.log(shuffledAnswers);
      };

      console.log(newAnswers)
    return (
        <div className="questions">
        <h2 key={question.id}>{question.question}</h2>
        {buildAnswerArray(question)}
            <div className="column-three">
                <label className="answerleft">
                <input type="radio" name="answer"/> {shuffledAnswers[0]}
                </label>
                {/* <br/>
                <br/> */}
                <label className="answerright">
                <input type="radio" name="answer"/>{shuffledAnswers[1]}
                </label>
            </div>
            <br/>
            <div className="column-four">
                <label className="answerleft">
                <input type="radio" name="answer"/>{shuffledAnswers[2]}
                </label>
                {/* <br/>
                <br/> */}
                <label className="answerright">
                <input type="radio" name="answer"/>{shuffledAnswers[3]}
                </label>
            </div>
        </div>
        );
    }

export default IndivQuestion;