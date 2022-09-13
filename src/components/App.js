import Header from "./Header";
import TestGen from "./TestGen";
import Leaderboard from "./Leaderboard";
import Credits from "./Credits";
import { Switch, Route } from "react-router-dom";

function App(){
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
                    <TestGen/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;