import Header from "./Header";
import TestGen from "./TestGen";
import Leaderboard from "./Leaderboard";
import Credits from "./Credits";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect}   from "react";
import {useHistory} from "react-router-dom";
function App(){
    // const [questions, setQuestions] = useState([]);
    // useEffect(() => {
    //     fetch("https://the-trivia-api.com/api/questions")
    //     .then(response => response.json())
    //     .then(data => {
    //         setQuestions(data);
    //     })
    // }, []);
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<TestGen/>} />
                <Route path="/Leaderboard" element={<Leaderboard/>} />
                <Route path="/Credits" element={<Credits/>} />
            </Routes>
        </div>
    );
}
export default App;