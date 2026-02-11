import "./OfferTile.style.css";

function OfferTile({ image, hoverImage, title, description }) {
  return (
    <div
      className="offer-tile"
      tabIndex="0"
      style={{
        "--image-default": `url(${image})`,
        "--image-hover": `url(${hoverImage})`,
      }}
    >
      <div className="offer-bg" />

      <div className="offer-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default OfferTile;
