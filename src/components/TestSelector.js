import React, {useState, useHistory} from "react";
import AllQuestions from "./AllQuestions";
import { Link, NavLink } from "react-router-dom";
function TestSelector ({ handleCategoryChange, handleDifficultyChange, onToggleGaming, handleSubmit}) {

    return (
            <div>
                <h1>Choose Your Test!</h1>
                <hr />
                <br />
                <form onSubmit={handleSubmit}>
                    <label>Choose a Category:</label>
                    <br></br>
                    <select id="categories" name="categories" onChange={handleCategoryChange}>
                        <option>-</option>
                        <option value="">General Knowledge</option>
                        <option value="">Arts and Literature</option>
                        <option value="">Film and TV</option>
                        <option value="">Food and Drink</option>
                        <option value="">Geography</option>
                        <option value="">History</option>
                        <option value="">Music</option>
                        <option value="">Science</option>
                        <option value="">Society and Culture</option>
                        <option value="">Sports and Leisure</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label>Choose a Difficulty:</label>
                    <br></br>
                    <select id="difficulties" name="difficulties" onChange={handleDifficultyChange}>
                        <option>-</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label>Choose Number of Questions:</label>
                    <br></br>
                    <input type="submit" value=" Start! "></input>
                </form>
            </div>
)};
export default TestSelector;