import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/imgs/buttonholder.png";

function Navbar() {
    return (
        <div className="divNavBar">
            <div className="buttonEsquerda">
                <Link to="/npcgen">NPC Generator</Link>
            </div>

            <div className="buttonMeio">
                <Link to="/"><img className="logo" src={logo} alt="Home"/></Link>
            </div>

            <div className="buttonDireita">
                <Link to="/dice">Dice Roller</Link>
            </div>
        </div>
    )
}

export default Navbar;
