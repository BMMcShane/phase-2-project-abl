import React, {useState, useHistory} from "react";
import AllQuestions from "./AllQuestions";
import { Link, NavLink } from "react-router-dom";
function TestSelector ({ handleCategoryChange, handleDifficultyChange}) {
    return (
            <div>
                <h1>Choose Your Test!</h1>
                <form action="">
                    <label for="categories">Choose a Category:</label>
                    <br></br>
                    <select id="categories" name="categories" onChange={handleCategoryChange}>
                        <option value="Geography">Geography</option>
                        <option value="Math">Math</option>
                        <option value="History">History</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label for="difficulties">Choose a Difficulty:</label>
                    <br></br>
                    <select id="difficulties" name="difficulties" onChange={handleDifficultyChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <br></br>
                    <br></br>
                    <input type="submit" value=" Start! "></input>
                </form>
            </div>
)};
export default TestSelector;