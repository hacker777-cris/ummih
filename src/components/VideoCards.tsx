import type React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface Props {
  onNext: () => void;
}

import glassesVideo from "../assets/glasses.mp4";
import hairVideo from "../assets/hair.mp4";
import lovelyVideo from "../assets/lovely.mp4";

const videos = [
  { src: glassesVideo, caption: "Too cute to handle in glasses" },
  { src: hairVideo, caption: "Every strand, effortlessly perfect" },
  { src: lovelyVideo, caption: "Her beauty rivals the sunset" },
];

const VideoCards: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="video-container">
      <div className="hearts-container">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`floating-heart heart-${i}`}
            size={16}
            color="#ff6b95"
          />
        ))}
      </div>
      <h2 className="title">Echoes of Your Beauty</h2>
      <div className="subtitle">Every second with you is pure magic...</div>
      <div className="video-grid">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="video-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 20px rgba(255, 107, 149, 0.2)",
            }}
          >
            <div className="video-wrapper">
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                onError={(e) =>
                  console.error(`Error loading video: ${video.src}`, e)
                }
              />
            </div>
            <div className="caption-wrapper">
              <Heart size={16} className="caption-heart" />
              <p className="caption">{video.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="next-button"
      >
        Open Your Heart's Surprise ❤️
      </motion.button>

      <style jsx>{`
        .video-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #fff5f7 0%, #fff 100%);
        }

        .hearts-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .floating-heart {
          position: absolute;
          animation: float-up 15s linear infinite;
          opacity: 0.6;
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 10px;
          background: linear-gradient(45deg, #ff6b95, #ff3366);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding: 20px 0;
        }

        .subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 40px;
          font-style: italic;
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .video-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .video-wrapper {
          width: 100%;
          height: 450px;
          overflow: hidden;
          position: relative;
        }

        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .caption-wrapper {
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.95);
        }

        .caption {
          font-size: 1rem;
          color: #333;
          margin: 0;
        }

        .next-button {
          display: block;
          margin: 0 auto;
          padding: 15px 30px;
          font-size: 1.1rem;
          background: linear-gradient(45deg, #ff6b95, #ff3366);
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 149, 0.3);
        }

        .next-button:hover {
          box-shadow: 0 6px 20px rgba(255, 107, 149, 0.4);
        }

        @media (max-width: 768px) {
          .video-container {
            padding: 10px;
          }

          .title {
            font-size: 1.8rem;
            padding: 15px 10px;
          }

          .subtitle {
            font-size: 1rem;
            padding: 0 15px;
            margin-bottom: 25px;
          }

          .video-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 10px;
          }

          .video-wrapper {
            height: 400px;
          }
        }

        @media (max-width: 480px) {
          .video-wrapper {
            height: 350px;
          }

          .title {
            font-size: 1.5rem;
          }

          .next-button {
            padding: 12px 25px;
            font-size: 1rem;
          }
        }

        ${[...Array(20)]
          .map(
            (_, i) => `
          .heart-${i} {
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 15}s;
            animation-duration: ${15 + Math.random() * 10}s;
          }
        `,
          )
          .join("")}
      `}</style>
    </div>
  );
};

export default VideoCards;
