import "./OfferTile.style.css";

function OfferTile({ image, hoverImage, title, description }) {
  return (
    <div
      className="offer-tile"
      tabIndex="0"   // 🔥 umożliwia focus (mobile click)
      style={{
        "--image-default": `url(${image})`,
        "--image-hover": `url(${hoverImage})`,
      }}
    >
      <div className="offer-bg" />

      <div className="offer-overlay">
        <div className="offer-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default OfferTile;
