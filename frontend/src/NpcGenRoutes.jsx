import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NpcGenerator from './pages/NpcGenerator';
import Home from './pages/Home';
import Dice from './pages/Dice'

function NpcGenRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/npcgen" element={<NpcGenerator />} />
        <Route path="/dice" element={<Dice />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default NpcGenRoutes;
