import './App.css';
import React, {useState} from "react"

function App() {

  let [weight, setWeight] = useState("")
  let [bottles, setBottles] = useState(0)
  let [time, setTime] = useState(0)
  let [results, setResults] = useState(0)
  let [gender, setGender] = useState("male");

  function alcometerCalculation(e){
    
    e.preventDefault()

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)

    let results

      if (gender === "male") {
      results = gramsLeft / (weight * 0.7);
      } else {
      results = gramsLeft / (weight * 0.6);
      }
      results = results < 0 ? 0 : results;

      setResults(results.toFixed(1));
  };

  return (
    <div>
      <form>
        <h3>Calculating alcohol blood level</h3>
          <div>
            <label>Weight</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Bottles</label>
            <input type="number" value={bottles} onChange={(e) => setBottles(e.target.value)} />
          </div>
          <div>
            <label>Time</label>
            <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <div>
          <label>
            <span>Gender</span>
            <input type="radio" value="male" name="gender" checked={gender === 'male'} onChange={e => setGender(e.target.value)}/>
            Male
          </label>
          <label>
            <input type="radio" value="female" name="gender" checked={gender === 'female'} onChange={e => setGender(e.target.value)}/>
            Female
          </label>
          </div>
            <div>
              <p style={{ fontWeight: 'bold' }}>{results}</p>
            </div>
          <button onClick={alcometerCalculation}>Calculate</button>
      </form>
    </div>
  );
};

export default App;
