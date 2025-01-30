import type React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface Props {
  onNext: () => void;
}

interface Photo {
  src: string;
  caption: string;
}

import favoritePhoto from "../assets/favorite.jpeg";
import beautifulPhoto from "../assets/beautiful.jpeg";
import cutePhoto from "../assets/cute.jpeg";

const photos: Photo[] = [
  { src: favoritePhoto, caption: "My favorite photo of you" },
  { src: beautifulPhoto, caption: "A photo of you looking Dropdead beautiful" },
  { src: cutePhoto, caption: "a Cute photo of you" },
];

const PhotoCards: React.FC<Props> = ({ onNext }) => {
  return (
    <motion.div
      className="photo-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="sparkles-container">
        {[...Array(15)].map((_, i) => (
          <Sparkles
            key={i}
            className={`floating-sparkle sparkle-${i}`}
            size={16}
            color="#ffd700"
          />
        ))}
      </div>

      <div className="content-wrapper">
        <h2 className="title">A Glimpse of You, My Favorite View</h2>
        <div className="subtitle">Every picture tells a story of you...</div>

        <div className="photo-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="photo-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 25px rgba(255, 107, 149, 0.25)",
              }}
            >
              <div className="photo-wrapper">
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.caption}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="photo-overlay">
                  <Heart className="overlay-heart" size={30} />
                </div>
              </div>
              <div className="caption-wrapper">
                <Heart size={16} className="caption-heart" />
                <p className="photo-caption">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="next-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
        >
          Continue your Journey ✨
        </motion.button>
      </div>

      <style jsx>{`
        .photo-container {
          min-height: 100vh;
          padding: 20px;
          background: linear-gradient(135deg, #fff5f7 0%, #fff 100%);
          position: relative;
          overflow: hidden;
        }

        .sparkles-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-sparkle {
          position: absolute;
          animation: sparkle-float 12s linear infinite;
          opacity: 0.6;
        }

        @keyframes sparkle-float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
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

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .photo-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .photo-wrapper {
          width: 100%;
          height: 450px;
          position: relative;
          overflow: hidden;
        }

        .photo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 107, 149, 0);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .photo-card:hover .photo-overlay {
          background: rgba(255, 107, 149, 0.2);
          opacity: 1;
        }

        .photo-card:hover img {
          transform: scale(1.05);
        }

        .overlay-heart {
          color: white;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
        }

        .caption-wrapper {
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.95);
        }

        .caption-heart {
          color: #ff6b95;
        }

        .photo-caption {
          font-size: 1rem;
          color: #333;
          margin: 0;
          text-align: center;
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
          .photo-container {
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

          .photo-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 10px;
          }

          .photo-wrapper {
            height: 400px;
          }
        }

        @media (max-width: 480px) {
          .photo-wrapper {
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

        ${[...Array(15)]
          .map(
            (_, i) => `
          .sparkle-${i} {
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 12}s;
            animation-duration: ${12 + Math.random() * 8}s;
          }
        `,
          )
          .join("")}
      `}</style>
    </motion.div>
  );
};

export default PhotoCards;
