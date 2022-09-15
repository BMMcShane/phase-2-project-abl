import React,{useState} from "react";
import LeaderboardResults from "./LeaderboardResults";


function Leaderboard({handleCategoryChange, handleDifficultyChange}) {
    const [userResults, setUserResults] = useState([]);
    

    fetch("http://localhost:4000/leaders")
    .then((r) => r.json())
    .then(setUserResults)
    

    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <hr />
            <table className="leaderboard-scores">
                <tr id="leaderboard-categories">
                    <th>Ranking</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th>Score</th>
                </tr>
            {
            userResults.map(userResult => {
               return <LeaderboardResults key={userResult.id} userResult={userResult}/>;
            })
            }
            </table>
            <hr/>
        </div>
    );
}

export default Leaderboard;