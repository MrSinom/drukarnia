

function GoogleMap() {
  return (
    <div className="map-container">
      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.1132929179284!2d19.0500793762102!3d50.25246830159965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cfb88c1a95ab%3A0x56d5b8c681689c2f!2sFactory%20Polska%20S.A.!5e0!3m2!1spl!2spl!4v1770841622644!5m2!1spl!2spl"  
        width="450px"
        height="450px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa lokalizacji"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
