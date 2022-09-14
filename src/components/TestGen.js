import React, {useState, useHistory, useParams} from "react";
import AllQuestions from "./AllQuestions";
import { Routes, Route } from "react-router-dom";
import TestSelector from "./TestSelector";
import IndivQuestion from "./IndivQuestion";
function TestGen({questions}) {
    // const history = useHistory();
    const [testCategory, setTestCategory] = useState("Geography");
    const [testDifficulty, setTestDifficulty] = useState("Easy");
    const [gaming, setGaming] = useState(false);
    function handleCategoryChange (e) {
        setTestCategory(e.target.value)
        return testCategory
    };
    function handleDifficultyChange (e) {
        setTestDifficulty(e.target.value)
        return testDifficulty
    };
    function toggleGaming () {
        setGaming(!gaming)
    };
    return gaming ? (
        <div className="testgen">
           <AllQuestions
                questions={questions}
                onToggleGaming={toggleGaming}/>
        </div>
    ) : (
        <div className="testgen">
            <TestSelector
                handleCategoryChange={handleCategoryChange}
                handleDifficultyChange={handleDifficultyChange}
                onToggleGaming={toggleGaming} />
        </div>
    )
}
export default TestGen