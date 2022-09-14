import React from "react";
import IndivQuestion from "./IndivQuestion";

function AllQuestions({questions}) {
    // console.log(questions);
    

    return (
        <div>
            {
            questions.map(question => {
               return( <IndivQuestion key={question.id} question={question}/> )
            })
            }
            <input id="testsubmit" type="submit" value=" Submit!" />
        </div>
    );
}
export default AllQuestions;