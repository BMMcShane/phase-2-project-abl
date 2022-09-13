import React from "react";
import AllQuestions from "./AllQuestions";

function TestGen() {
    return (
        <div className="testgen">
            <h1>Choose Your Test!</h1>
            <form action="">
                <label for="categories">Choose a Category:</label>
                <br></br>
                <select id="categories" name="categories">
                    <option value="Geography">Geography</option>
                    <option value="Math">Math</option>
                    <option value="history">History</option>
                </select>
                <br></br>
                <br></br>
                <label for="difficulties">Choose a Difficulty:</label>
                <br></br>
                <select id="difficulties" name="difficulties">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <br></br>
                <br></br>
                <input type="submit" value=" Start! "></input>
            </form>
            <br></br>
            <AllQuestions />
            <br></br>
        </div>
    );
}

export default TestGen;