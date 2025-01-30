import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "./components/LandingPage";
import PhotoCards from "./components/PhotoCards";
import VideoCards from "./components/VideoCards";
import FinalStage from "./components/FinalStage";
import "./App.css";

const stages = ["landing", "photos", "videos", "final"];

const App: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const nextStage = () => {
    setCurrentStage((prev) => Math.min(prev + 1, stages.length - 1));
  };

  return (
    <div className="app">
      <div className="floating-hearts">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={stages[currentStage]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentStage === 0 && <LandingPage onNext={nextStage} />}
            {currentStage === 1 && <PhotoCards onNext={nextStage} />}
            {currentStage === 2 && <VideoCards onNext={nextStage} />}
            {currentStage === 3 && <FinalStage />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
