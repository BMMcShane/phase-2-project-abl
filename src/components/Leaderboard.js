import React from "react";


function Leaderboard({handleCategoryChange, handleDifficultyChange}) {
    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <hr />
            <label>Filters:</label>
            <select id="categories" onChange={handleCategoryChange}>
                <option value="">Any Category</option>
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
            <select id="difficulties" onChange={handleDifficultyChange}>
                <option value="">Any Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <br></br>
            <br></br>
            <div className="leaderboardSubmission">
                <h2 className="name">Name</h2>
                <hr/>
                <div className="column-one">
                    <h3>Ranking:</h3>
                    <h4>Placeholder</h4>
                    <h3>Score:</h3>
                    <h4>Placeholder</h4>
                </div><div className="column-two">
                    <h3>Difficulty:</h3>
                    <h4>Placeholder</h4>
                    <h3>Category:</h3>
                    <h4>Placeholder</h4>
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;