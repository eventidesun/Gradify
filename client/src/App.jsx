import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assignments" element={<h1>Assignments Page</h1>} />
                <Route path="/settings" element={<h1>Settings Page</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
