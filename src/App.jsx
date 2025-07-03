import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vloot from "./pages/Vloot";
import Crew from "./pages/Crew";
import "./index.css";
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/vloot" element={<Vloot />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
  
}

export default App;

