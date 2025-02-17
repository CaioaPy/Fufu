import { useState, useEffect } from 'react';
import axios from 'axios';
import './NpcGenerator.css';
import Navbar from '../assets/navbar';

function NpcGenerator() {
  const [character, setCharacter] = useState(null);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(50);
  const [region, setRegion] = useState('');
  const [gender, setGender] = useState('');

  const fetchCharacter = async () => {
    try {
      const response = await axios.get('https://fufu-lj60.onrender.com/api/Character', {
        params: { minAge, maxAge, region, gender },
      });
      setCharacter(response.data);
    } catch (error) {
      console.error('Erro no GET:', error);
    }
  };

  useEffect(() => {
    fetchCharacter;
  }, []);

  return (
    <div className="npc-generator">
      <Navbar />
      <div className="npc-content">
        <h1 className="npc-title">NPC Generator</h1>
        
        <div className="npc-form">
          <h2 className="npc-subtitle">Create a New Character</h2>
          
          <div className="npc-input">
            <label>Min Age:</label>
            <input
              type="number"
              value={minAge}
              onChange={(e) => setMinAge(Number(e.target.value))}
            />
          </div>
          
          <div className="npc-input">
            <label>Max Age:</label>
            <input
              type="number"
              value={maxAge}
              onChange={(e) => setMaxAge(Number(e.target.value))}
            />
          </div>
          
          <div className="npc-input">
            <label>Region:</label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
          
          <div className="npc-input">
            <label>Gender:</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          
          <button onClick={fetchCharacter} className="npc-button">Generate Character</button>
        </div>

        {character && (
          <div className="npc-details">
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
      </div>
    </div>
  );
}

export default NpcGenerator;
