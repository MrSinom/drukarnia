import OfferTile from "../components/OfferTile";
import "./Offer.style.css";
import baner from "../assets/baner_frontlight.png";
import mesh from "../assets/mesh.png";
import backlight from "../assets/backlit.png";
import blackout from "../assets/blackout.png";  
import plandeka from "../assets/plandeka.png";
import mono from "../assets/mono.png";
import oneway from "../assets/oneway.png";
import whiteback from "../assets/whiteback.png";  
import blueback from "../assets/blueback.png";
import baner2 from "../assets/silesia3bannery_06.jpg";
import siatka2 from "../assets/siatka2.jpg";
import mono2 from "../assets/folia2.jpg";
import oneway2 from "../assets/oneway2.jpg";
import plandeka2 from "../assets/plandeka2.jpg";
import backlite2 from "../assets/backlite2.jpg";
import blackout2 from "../assets/blackout2.jpg";
function Offers() {
  const offers = [
     
  {
    title: "Frontlight",
    image: baner,
    hoverImage: baner2,
    description:
      "Materiał winylowy 300–500 g/m². Szerokość do 5.0 m. Zastosowanie: banery reklamowe, reklamy wielkoformatowe, elewacje, systemy napinające.",
  },
  {
    title: "Mesh",
    image: mesh,
     hoverImage: siatka2,
    description:
      "Materiał winylowy przepuszczający światło i powietrze. 280–330 g/m². Szerokość do 5.0 m. Zastosowanie: elewacje budynków, konstrukcje wolnostojące.",
  },
  {
    title: "Blackout",
    image: blackout,
    hoverImage: blackout2,
    description:
      "Materiał winylowy do druku dwustronnego. 300–700 g/m². Szerokość do 5.0 m. Zastosowanie: banery dwustronne.",
  },
  
  {
    title: "Plandeki",
    image: plandeka,
    hoverImage: plandeka2,
    description:
      "Ciężki materiał winylowy. 650–900 g/m² (Panama). Szerokość do 3.2 m. Zastosowanie: banery reklamowe, pokrycia pojazdów.",
  },
  {
    title: "Monomer",
    image: mono,
    hoverImage: mono2,
    description:
      "Folia samoprzylepna monomeryczna. Mat / błysk / przezroczysta. Szerokości: 1, 1.37, 1.52, 2 m. Zastosowanie: tablice, naklejki, billboardy.",
  },
  {
    title: "One Way Vision",
    image: oneway,
    hoverImage: oneway2,
    description:
      "Folia perforowana. Szerokości: 0.98, 1.27, 1.37 m. Zastosowanie: witryny sklepowe, szyby pojazdów.",
  },
  {
    title: "Backlit",
    image: backlight,
    hoverImage: backlite2,
    description:
      "Folia samoprzylepna do podświetleń. Satyna. Szerokość: 1.37 m. Zastosowanie: kasetony, plexi.",
  },
  {
    title: "White Back",
    image: whiteback,
    description:
      "Papier biały, kredowany, półmat. 150 g/m². Szerokości: 1.27 m, 1.6 m. Zastosowanie: citylighty, plakaty.",
  },
  {
    title: "Blue Back",
    image: blueback,
    description:
      "Papier biały z niebieskim spodem, mat. 120 g/m². Szerokość: 1.37 m. Zastosowanie: billboardy, tapety, plakaty.",
  }
  ];

  return (
    <section className="offers-page">
      <h1>Oferta</h1>

      <div className="offers-grid">
        {offers.map((item, index) => (
          <OfferTile key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Offers;
