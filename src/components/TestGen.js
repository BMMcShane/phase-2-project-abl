import React, {useState} from "react";
import AllQuestions from "./AllQuestions";
import TestSelector from "./TestSelector";
import {useNavigate} from "react-router-dom";

function TestGen() {

    const [testCategory, setTestCategory] = useState("General Knowledge");
    const [testDifficulty, setTestDifficulty] = useState("hard ");
    const [questions, setQuestions] = useState([])
    const [gaming, setGaming] = useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    function handleUsernameChange (e) {
        setUsername(e.target.value)
        return username
    };

    function handleStart(e) {
        e.preventDefault()
        toggleGaming();
    fetch(`https://the-trivia-api.com/api/questions?categories=${testCategory}&limit=10&difficulty=${testDifficulty}`)
    .then(response => response.json())
    .then(setQuestions)
    };

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

    function handleEnd(e) {
        e.preventDefault();
        navigate('/Leaderboard');
    }

    return gaming ? (
        <div className="testgen">
           <AllQuestions
                questions={questions}
                onToggleGaming={toggleGaming} 
                handleEnd={handleEnd}
                username={username}
                testCategory={testCategory}
                testDifficulty={testDifficulty}/>
        </div>
    ) : (
        <div className="testgen">
            <TestSelector
                handleCategoryChange={handleCategoryChange}
                handleDifficultyChange={handleDifficultyChange}
                onToggleGaming={toggleGaming} 
                handleStart={handleStart}
                handleUsernameChange={handleUsernameChange}/>
        </div>
    )
}
export default TestGen