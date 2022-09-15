import React from "react";
function TestSelector ({ handleCategoryChange, handleDifficultyChange, handleStart, handleUsernameChange}) {

    return (
            <div>
                <h1>Choose Your Test!</h1>
                <hr />
                <br />
                <form onSubmit={handleStart}>
                    <label>Choose a Category:</label>
                    <br></br>
                    <select id="categories" name="categories" onChange={handleCategoryChange}>
                        <option value="General Knowledge">-</option>
                        <option value="General Knowledge">General Knowledge</option>
                        <option value="Geography" >Geography</option>
                        <option value="History">History</option>
                        <option value="Music">Music</option>
                        <option value="Science">Science</option>
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