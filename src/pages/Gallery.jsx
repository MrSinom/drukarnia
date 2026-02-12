import { useState } from "react";
import "./Gallery.style.css";
import baner from "../assets/silesia3bannery_06.jpg";
import mesh from "../assets/siatka2.jpg";
import mono from "../assets/folia2.jpg";
import oneway from "../assets/oneway2.jpg";
import plandeka from "../assets/plandeka2.jpg";
import backlite from "../assets/backlite2.jpg";
import blackout from "../assets/blackout2.jpg"; 
import baner2 from "../assets/baner_frontlight.png";
import mono2 from "../assets/siatka3.jpg";     
import silos from "../assets/silos.jpg";
import baner3 from "../assets/baner3.jpg";
import kontener from "../assets/kontener.jpg";  
import skarbek from "../assets/skarbek.jpg";
import biuro from "../assets/biuro.jpg";
import technology from "../assets/technology.jpg";

const images = [
  { src: baner, title: "Realizacja 1" },
  { src: mesh, title: "Realizacja 2" },
  { src: mono, title: "Realizacja 3" },
  { src: oneway, title: "Realizacja 4" },
  { src: plandeka, title: "Realizacja 5" },
  { src: backlite, title: "Realizacja 6" },
  { src: blackout, title: "Realizacja 7" },
  { src: baner2, title: "Realizacja 8" },
    { src: silos, title: "Realizacja 9" },
  { src: mono2, title: "Realizacja 10" },
  { src: baner3, title: "Realizacja 11" },
  { src: kontener, title: "Realizacja 12" },
  { src: skarbek, title: "Realizacja 14" },
  { src: biuro, title: "Realizacja 15" },
  { src: technology, title: "Realizacja 16" },

];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const open = (index) => setCurrentIndex(index);
  const close = () => setCurrentIndex(null);

  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="gallery">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => open(index)}
          >
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox" onClick={close}>
          <button className="prev" onClick={prev}>‹</button>

          <div className="lightbox-content">
            <img
              src={images[currentIndex].src}
              alt=""
            />
            <p>{images[currentIndex].title}</p>
          </div>

          <button className="next" onClick={next}>›</button>
        </div>
      )}
    </>
  );
}

export default Gallery;
