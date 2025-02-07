import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SkillsOverview } from "./components/SkillsOverview";
import { SQL } from "./pages/SQL";
import { Security } from "./pages/Security";
import { Tableau } from "./pages/Tableau";
import { Excel } from "./pages/Excel";
import { Resume } from "./pages/Resume";
export function App() {
  return <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<main>
                <Hero />
                <SkillsOverview />
              </main>} />
          <Route path="/sql" element={<SQL />} />
          <Route path="/security" element={<Security />} />
          <Route path="/tableau" element={<Tableau />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>;
}