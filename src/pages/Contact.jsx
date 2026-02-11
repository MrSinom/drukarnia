import GoogleMap from "../components/GoogleMap";
import "./Contact.style.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Kontakt</h2>
          <p><strong>SOAOS Sp. z o.o.</strong></p>
          <p>ul. Porcelanowa 11c<br />40-246 Katowice</p>
          <p><strong>Biuro:</strong> 32 607 13 30</p>
          <p><strong>Mobile:</strong> 608 66 88 44</p>
          <p><strong>E-mail:</strong> biuro@factory.com.pl</p>
        </div>

        <form className="contact-form">
          <h3>Napisz do nas</h3>
          <input type="text" placeholder="Imię i nazwisko" required />
          <input type="email" placeholder="Adres e-mail" required />
          <textarea placeholder="Wiadomość" rows="4" required></textarea>
          <button type="submit">Wyślij</button>
        </form>

        <div className="contact-map">
          <GoogleMap />
        </div>

      </div>
    </section>
  );
}

export default Contact;
