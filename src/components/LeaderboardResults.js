import React, {useState}from "react";

function LeaderboardResults({userResult, rankingNo}) {
    
    return (
            <tr className="userData">
                <td className="rankno">#{rankingNo}</td>
                <td>{userResult.username}</td>
                <td>{userResult.category}</td>
                <td>{userResult.difficulty}</td>
                <td>{userResult.score}</td>
            </tr>
    )};

export default LeaderboardResults;