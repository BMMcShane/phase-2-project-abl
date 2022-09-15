import React from "react";

function TestResults({ onAddLeader, difficulty, category}) {
   
    function scoreCalc({correct, difficulty}){
        if (difficulty==='easy'){
            return correct * 5
        }
        else if(difficulty==='hard'){
            return correct * 15
        }
        else if(difficulty==='medium'){
            return correct * 10
        }
    }

    const [formData, setFormData] = useState({
        name: "",
        'score': scoreCalc,
        'difficulty': difficulty,
        'category': category,
      });
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
      function handleSubmit() {
        const newLeader = {
          name: formData.name,
          score: formData.score,
          difficulty: formData.difficulty,
          category: formData.category,
        };
        fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newLeader),
        })
          .then((r) => r.json())
          .then(onAddLeader);
      };
      
    return (
        <div id="resultstotal">
            <h1>Test Results</h1>
            <hr />
            <div id="resultsmascot">
                <img sr="" alt="" />
                <p>placeholder 1</p>
            </div>
            <div id="testresults">
                <h3>You Got</h3>
                <p>(Score) Points</p>
                <h3>Playing On</h3>
                <p>(Difficulty) Mode</p>
                <h3>In the</h3>
                <p>(Category) Category</p>
            </div>
            <div id="resultsleaderboard">
                <h3>Leaderboard</h3>
                <hr />
                <p>Spot #1</p>
                <p>Spot #2</p>
                <p>Spot #3</p>
                <hr />
                <h3>Submit Your Score!</h3>
                <p>Score</p>
                <p>Difficulty</p>
                <p>Category</p>
                <input type="text" name="name" placeholder="Name" />
                <input type="submit" name="submit" placeholder="Submit!"/>
                <br />
                <br />
            </div>
        </div>
    );
}

export default TestResults;