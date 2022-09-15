import React, {useState, useHistory} from "react";
import AllQuestions from "./AllQuestions";
import { Link, NavLink } from "react-router-dom";
function TestSelector ({ handleCategoryChange, handleDifficultyChange, onToggleGaming, handleStart, handleUsernameChange}) {

    return (
            <div>
                <h1>Choose Your Test!</h1>
                <hr />
                <br />
                <form onSubmit={handleStart}>
                    <label>Choose a Category:</label>
                    <br></br>
                    <select id="categories" name="categories" onChange={handleCategoryChange}>
                        <option value="General Knowlege">-</option>
                        <option value="General Knowledge">General Knowledge</option>
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
                        <option value="hard">-</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label>Enter your username:</label>
                    <br></br>
                    <input type="text" name="username" placeholder="Toad" onChange={handleUsernameChange}></input>
                    <br></br>
                    <input type="submit" value=" Start! "></input>
                </form>
            </div>
)};
export default TestSelector;