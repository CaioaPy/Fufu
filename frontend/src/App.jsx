import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'

function App() {

  const [character, setCharacter] = useState(null);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(50);
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");

  const fetchCharacter = async () => {
    try {
      const response = await axios.get("https://localhost:7017/api/Character", {
        params: { minAge, maxAge, region, gender },
      });
      setCharacter(response.data);
    } catch (error) {
      console.error("erro no get :sob:", error);
    }
  };
  const postHistory = async () => {
    try {
      const response = await axios.post("https://localhost:7017/api/History");
      alert(response.data);
    } catch (error) {
      console.error("erro no post :sob:", error);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <>
    <div>
      <h1>NPC Generator</h1>

      <div>
        <h2>Generate a Character</h2>
        <label>
          Min Age: 
          <input
            type="number"
            value={minAge}
            onChange={(e) => setMinAge(Number(e.target.value))}
          />
        </label>
        <br></br>
        <label>
          Max Age: 
          <input
            type="number"
            value={maxAge}
            onChange={(e) => setMaxAge(Number(e.target.value))}
          />
        </label>
        <br></br>
        <label>
          Region: 
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Gender: 
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <br></br>
        <button onClick={fetchCharacter}>Generate</button>
      </div>

      {character && (
        <div>
          <h2>Character Details</h2>
          <p><strong>Name:</strong> {character.name}</p>
          <p><strong>Race:</strong> {character.race}</p>
          <p><strong>Class:</strong> {character.class}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Age:</strong> {character.age}</p>
          <p><strong>Region:</strong> {character.region}</p>
          <p><strong>History:</strong> {character.history}</p>
        </div>
      )}

      <button onClick={postHistory}>Send History</button>
    </div>
    </>
  )
}

export default App
