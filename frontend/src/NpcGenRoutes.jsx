import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NpcGenerator from './pages/NpcGenerator';
import Home from './pages/Home';

function NpcGenRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/npcgen" element={<NpcGenerator />} />
        <Route path="/dice" element={<h1>Dice Page (em construção)</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default NpcGenRoutes;
