
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vloot from "./pages/Vloot";
import Crew from "./pages/Crew";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vloot" element={<Vloot />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

