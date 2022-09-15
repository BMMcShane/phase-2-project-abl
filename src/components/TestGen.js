import React, {useState, useHistory, useParams} from "react";
import AllQuestions from "./AllQuestions";
import { Routes, Route } from "react-router-dom";
import TestSelector from "./TestSelector";
import IndivQuestion from "./IndivQuestion";
function TestGen() {
    // const history = useHistory();
    const [testCategory, setTestCategory] = useState("");
    const [testDifficulty, setTestDifficulty] = useState("");
    const [questions, setQuestions] = useState([])
    const [gaming, setGaming] = useState(false);
    function handleSubmit(e) {
        e.preventDefault()
        toggleGaming();
    fetch(`https://the-trivia-api.com/api/questions?categories=${testCategory}&limit=10&difficulty=${testDifficulty}`)
    .then(response => response.json())
    .then(setQuestions)
}
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
                onToggleGaming={toggleGaming} 
                handleSubmit={handleSubmit}/>
        </div>
    )
}
export default TestGen