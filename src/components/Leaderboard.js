import React,{useState} from "react";
import LeaderboardResults from "./LeaderboardResults";


function Leaderboard({handleCategoryChange, handleDifficultyChange}) {
    const [userResults, setUserResults] = useState([]);
    

    fetch("https://toad-test-abl.herokuapp.com/leaders")
    .then((r) => r.json())
    .then((data) => {
        dataSort(data);
    })   
    function dataSort(data) {
    let sortedData = data;
    sortedData = [...data].sort((a, b) => b.score - a.score);
    setUserResults(sortedData)
};
let count = 0;
    return (
        <div className="leaderboard">
            <h1>Leaderboard:</h1>
            <hr />
            <br/>
            <table className="leaderboard-scores">
                <tr id="leaderboard-categories">
                    <th>Ranking:</th>
                    <th>Name:</th>
                    <th>Category:</th>
                    <th>Difficulty:</th>
                    <th>Score:</th>
                </tr>
            {
            userResults.map(userResult => {
                let rankingNo = count +1;
                count++;
               return <LeaderboardResults key={userResult.id} userResult={userResult} rankingNo={rankingNo}/>;
            })
            }
            </table>
            {/* <hr/> */}
        </div>
    );
}

export default Leaderboard;