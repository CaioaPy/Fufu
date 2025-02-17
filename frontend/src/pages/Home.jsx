import Navbar from '../assets/navbar';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="homepage">
            <Navbar />
            <div className="main-container">
                <h1>Welcome to Fufu!</h1>
                <p className="home-description">
                    Fufu is the perfect website to enhance your RPG sessions with ease and creativity. Whether you're rolling dice, creating characters, or building entire adventures, Fufu makes it easier than ever to dive into your favorite RPG games!
                </p>
                <div className="cta">
                    <h2>Start Your Adventure Today!</h2>
                    <p>Explore our tools and features designed for RPG enthusiasts.</p>
                    <div className="cta-buttons">
                        <Link to="/dice">
                            <button className="cta-button">Roll Dice</button>
                        </Link>
                        <p className="cta-button-description">Roll virtual dice to add a random element to your RPG adventures.</p>
                        
                        <Link to="/npcgen">
                            <button className="cta-button">Create Characters</button>
                        </Link>
                        <p className="cta-button-description">Generate unique RPG characters with random attributes and backgrounds.</p>
                    </div>
                </div>
                <div className="repository">
                    <h2>Check Out Our Repository</h2>
                    <p>Our project is open source! Feel free to visit our repository and contribute. Pull requests are always welcome!</p>
                    <a href="https://github.com/CaioaPy/Fufu" target="_blank" rel="noopener noreferrer">
                        <button className="cta-button">Visit Repository</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
