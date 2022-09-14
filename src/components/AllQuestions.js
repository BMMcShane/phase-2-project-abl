import React from "react";
import IndivQuestion from "./IndivQuestion";
function AllQuestions({questions}) {
    console.log(questions);
    return (
        <div>
            {
            questions.map(question => {
                return (
                <div>
                <h1 key={question.id}>{question.question}</h1>
                <input type="text" name="answer"></input>
                </div>
                )
            })
            }
        </div>
    );
}
export default AllQuestions;