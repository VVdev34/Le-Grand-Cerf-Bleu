import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Actualites from './pages/Actualites.jsx';
import Agenda from './pages/Agenda.jsx';
import Compagnie from './pages/Compagnie.jsx';
import Creations from './pages/Creations.jsx';
import Contacts from './pages/Contacts.jsx';
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element = {<Landing/>}></Route>
          <Route path="actualites" element={<Actualites />} />
          <Route path="compagnie" element={<Compagnie />} />
          <Route path="creations" element={<Creations />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

