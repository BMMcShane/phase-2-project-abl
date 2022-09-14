import React, {useState, useHistory} from "react";
import AllQuestions from "./AllQuestions";
import { Switch, Route } from "react-router-dom";
import TestSelector from "./TestSelector";
function TestGen({questions}) {
    // const history = useHistory();
    const [testCategory, setTestCategory] = useState("Geography");
    const [testDifficulty, setTestDifficulty] = useState("Easy");
    function handleCategoryChange (e) {
        setTestCategory(e.target.value)
        return testCategory
    }
    function handleDifficultyChange (e) {
        setTestDifficulty(e.target.value)
        return testDifficulty
    }
    // console.log(questions);
    // const questionsToDisplay = questions.map(question => {
    //     if (question.difficulty == testDifficulty) {
    //         return <div>{question.question}</div>
    //     }
    // })
    return (
        <div className="testgen">
            {/* <Switch>
                <Route exact path="/"> */}
                    <TestSelector handleCategoryChange={handleCategoryChange} handleDifficultyChange={handleDifficultyChange}/>
                {/* </Route>
                <Route path="/?">    */}
                    <AllQuestions questions={questions}/>
                {/* </Route>
            </Switch> */}
        </div>
    );
}
export default TestGen