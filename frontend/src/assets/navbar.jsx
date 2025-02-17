import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <Link to="/npcgen" className="navLink buttonEsquerda">NPC Generator</Link>
                <Link to="/" className="navLogo">Fufu</Link>
                <Link to="/dice" className="navLink buttonDireita">Roll Dice</Link>
            </div>
        </nav>
    );
}

export default Navbar;
