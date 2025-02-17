import Navbar from '../assets/navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Dice.css';

function Dice() {
    const [sides, setSides] = useState(4);
    const [result, setResult] = useState(null);

    const fetchResult = async () => {
        try {
            const response = await axios.get('https://fufu-lj60.onrender.com/api/Dice', {
                params: {sides},
            });
            setResult(response.data);
        } catch (error) {
            console.error('Erro no GET:', error);
        }
    };

    useEffect(() => {
        fetchResult;
    }, [sides]);

    const handleSelectChange = (e) => {
        setSides(Number(e.target.value));
    };

    return (
        <div className="toppage">
            <Navbar />
            <div className="toppage-window">
                <h1>Dice Roller</h1>
                <h2>Choose the dice that you want to roll</h2>
                <select onChange={handleSelectChange} value={sides}>
                    <option value="4">D4</option>
                    <option value="6">D6</option>
                    <option value="8">D8</option>
                    <option value="10">D10</option>
                    <option value="12">D12</option>
                    <option value="20">D20</option>
                    <option value="40">D40</option>
                    <option value="50">D50</option>
                    <option value="80">D80</option>
                    <option value="100">D100</option>
                </select>
                <button onClick={fetchResult}>Roll</button>
                {result && <p>Result: {result}</p>}
            </div>
        </div>
    );
}

export default Dice;
