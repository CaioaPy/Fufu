import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/imgs/Logo.png";
import npc from "../assets/imgs/NPC Generator.png";
import dice from "../assets/imgs/Roll Dice.png";

function Navbar() {
    return (
        <div className="divNavBar">
            <div className="buttonEsquerda">
                <Link to="/npcgen"><img className="npc" src={npc} alt="NPC Generator"/></Link>
            </div>

            <div className="buttonMeio">
                <Link to="/"><img className="logo" src={logo} alt="Home"/></Link>
            </div>

            <div className="buttonDireita">
                <Link to="/dice"><img className="dice" src={dice} alt="Roll Dice"/></Link>
            </div>
        </div>
    )
}

export default Navbar;
