import React from "react";
import AllQuestions from "./AllQuestions";
import TestGen from "./TestGen";
import TestResults from "./TestResults";
import Leaderboard from "./Leaderboard";
import Credits from "./Credits";
import Mascot from "./Mascot";

function ActivityBox() {
    return (
        <div>
            <TestGen />
            <TestResults />
            <AllQuestions />
            <Mascot />
            <Credits />
            <Leaderboard />
        </div>
    );
}

export default ActivityBox;