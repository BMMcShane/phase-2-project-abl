import Header from "./Header";
import TestGen from "./TestGen";
import Leaderboard from "./Leaderboard";
import Credits from "./Credits";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {useState, useEffect}   from "react";
import {useHistory} from "react-router-dom";
function App(){
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch("https://the-trivia-api.com/api/questions")
        .then(response => response.json())
        .then(data => {
            setQuestions(data);
        })
    }, []);
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/Leaderboard">
                    <Leaderboard />
                </Route>
                <Route path="/Credits">
                    <Credits />
                </Route>
                <Route exact path="/">
                    <BrowserRouter>
                    <TestGen questions={questions}/>
                    </BrowserRouter>
                </Route>
            </Switch>
        </div>
    );
}
export default App;