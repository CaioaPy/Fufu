import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <div className="divNavBar">
            <div className="buttonEsquerda">
                <Link to="/npcgen">NPC Generator</Link>
            </div>

            <div className="buttonMeio">
                <Link to="/">Home</Link>
            </div>

            <div className="buttonDireita">
                <Link to="/dice">Dice Roller</Link>
            </div>
        </div>
    )
}

export default Navbar;
