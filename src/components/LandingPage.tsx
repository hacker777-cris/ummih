import type React from "react";
import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
}

const LandingPage: React.FC<Props> = ({ onNext }) => {
  return (
    <motion.div
      className="landing-page"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hey Ummih, I made this for you…</h1>
      <p>Are you ready for a journey?</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
      >
        Begin Our Journey
      </motion.button>
    </motion.div>
  );
};

export default LandingPage;
