import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const FinalStage: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showHeartfeltMessage, setShowHeartfeltMessage] = useState(false);

  const handleYes = () => {
    setShowConfetti(true);
    setShowHeartfeltMessage(true);
  };

  const moveNoButton = () => {
    setNoButtonPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <div className="final-stage">
      <AnimatePresence>
        {!showHeartfeltMessage && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>You've made my world brighter in so many ways.</h2>
            <p>
              I've loved every moment getting to know you, and I want to make
              this Valentine's Day as special as you are.
            </p>
            <div className="proposal-buttons">
              <motion.button
                className="yes-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleYes}
              >
                Yes, I'll be your Valentine!
              </motion.button>
              <motion.button
                className="no-button"
                style={{ position: "relative" }}
                animate={noButtonPosition}
                onHoverStart={moveNoButton}
              >
                No, thanks
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHeartfeltMessage && (
          <motion.div
            className="heartfelt-message"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2>My Dearest Valentine</h2>
            <p>
              Your "yes" means the world to me. From the moment I met you, I
              knew there was something special between us. Your smile brightens
              my darkest days, and your laughter is the sweetest melody to my
              ears.
            </p>
            <p>
              With you, every day feels like Valentine's Day. Your kindness,
              your strength, and your beautiful soul inspire me to be the best
              version of myself. I promise to cherish, and support you with all
              my heart, not just today, but every day.
            </p>
            <p>
              Thank you for being you, and for choosing to be my Valentine.
              Here's to many more adventures, laughs, and loving moments
              together.
            </p>
            <p className="signature">With all my love,</p>
            <p className="signature">Cris</p>
          </motion.div>
        )}
      </AnimatePresence>

      {showConfetti && <Confetti />}
    </div>
  );
};

export default FinalStage;
