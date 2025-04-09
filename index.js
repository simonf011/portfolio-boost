import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Home, Projects, Skills, About, Contact } from "./pages";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <header className="p-4 shadow bg-white">
          <nav className="flex justify-between items-center max-w-5xl mx-auto">
            <h1 className="text-xl font-bold">Portfolio Boost</h1>
            <div className="space-x-4">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Home</NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Projects</NavLink>
              <NavLink to="/skills" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Skills</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : ""}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600" : ""}>Contact</NavLink>
            </div>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Portfolio Boost. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
