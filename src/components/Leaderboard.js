import React from "react";


function Leaderboard({handleCategoryChange, handleDifficultyChange}) {
    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <hr />
            {/* <label>Filters:</label>
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
            <br></br> */}
            {/* <br></br> */}
            <table className="leaderboard-scores">
                <tr id="leaderboard-categories">
                    <th>Ranking</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th>Score</th>
                </tr>
            </table>
            <hr/>
            <table className="leaderboard-scores">
                <tr className="userData">
                    <td>ranking</td>
                    <td>name</td>
                    <td>category</td>
                    <td>difficulty</td>
                    <td>score</td>
                </tr>
            </table>
        </div>
    );
}

export default Leaderboard;