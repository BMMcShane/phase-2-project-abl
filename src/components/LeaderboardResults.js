import React, {useState}from "react";

function LeaderboardResults({userResult}) {
    
    return (
            <tr className="userData">
                <td>ranking</td>
                <td>{userResult.username}</td>
                <td>{userResult.category}</td>
                <td>{userResult.difficulty}</td>
                <td>{userResult.score}</td>
            </tr>
    )};

export default LeaderboardResults;