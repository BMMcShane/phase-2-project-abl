import React, {useState} from "react";
import IndivQuestion from "./IndivQuestion";

function AllQuestions({questions, handleEnd}) {
    let cheatSheet = [];
    let submittedAnswers = [];
    let score;
    // const [submittedAnswer, setSubmittedAnswer] = useState("")

    function buildCheatSheet(questions) {
        cheatSheet.length = 0 ; 
        questions.forEach(question => {
            cheatSheet.push(question.correctAnswer)
        });
        console.log(cheatSheet);
        buildSubmittedAnswerArray();
    };
    
    // function handleInputChange() {
    // };
    function buildSubmittedAnswerArray() {        
        let answer1 = document.getElementById(1).textContent;
        let answer2 = document.getElementById(2).textContent;
        let answer3 = document.getElementById(3).textContent;
        let answer4 = document.getElementById(4).textContent;
        let answer5 = document.getElementById(5).textContent;
        let answer6 = document.getElementById(6).textContent;
        let answer7 = document.getElementById(7).textContent;
        let answer8 = document.getElementById(8).textContent;
        let answer9 = document.getElementById(9).textContent;
        let answer10 = document.getElementById(10).textContent;
        let submittedAnswers = [answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10];
        console.log(submittedAnswers);
        compareAnswers(cheatSheet, submittedAnswers);
    };
    function compareAnswers(correct, submitted) {
        let intersection = correct.filter(x => submitted.includes(x));
        let score = intersection.length;
        console.log(score);
        // handleEnd();
    };

    let count = 0
    return (
        <div onLoad={() => buildCheatSheet(questions)}>
            {
            questions.map(question => {
                let questNum = count +1;
                count++;
               return( <IndivQuestion key={question.id} questNum={questNum} question={question}/> )
            })
            }
            <input onClick={()=>buildCheatSheet(questions)} id="testsubmit" type="submit" value="Submit!" />
        </div>
    )
}
export default AllQuestions;