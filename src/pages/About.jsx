import "./About.style.css";
import teamImg from "../assets/team.jpg";
import peopleImg from "../assets/people.jpg";
import techImg from "../assets/hp-xp5300.jpg";

function About() {
  return (
    <section className="about-page">
      {/* SEKCJA 1 */}
      <div className="about-row">
        <div className="about-text">
          <h2>O nas</h2>
          <p>
            SOAOS jest cyfrową drukarnią, specjalizującą się w kompleksowych
            usługach w zakresie reklamy outdoor i druku wielkoformatowego.
            Jesteśmy postrzegani na rynku reklamy zewnętrznej jako nowoczesna
            firma, rozwijająca się w oparciu o najnowsze technologie i trendy,
            zapewniająca swoim klientom zadowolenie ze świadczonych usług oraz
            kampanii reklamowych. Najnowocześniejszy park maszynowy i
            technologie, wysokiej klasy specjaliści, pasja z jaką działamy oraz
            zaplecze logistyczne, pozwalają nam skutecznie reagować na działania
            rynku.
          </p>
        </div>

        <div className="about-image">
          <img src={teamImg} alt="SOAOS – o nas" />
        </div>
      </div>

      {/* SEKCJA 2 – ODWRÓCONA */}
      <div className="about-row reverse">
        <div className="about-text">
          <h2>Ludzie</h2>
          <p>
            Nasi pracownicy to nasz najważniejszy kapitał. Zdajemy sobie sprawę z
            tego, że to bezpośrednio od nich, ich zaangażowania, umiejętności i
            profesjonalizmu zależy Państwa zadowolenie ze współpracy. To oni – od
            działu account, projektantów, drukarzy po ekipę montażową – tworzą
            wizerunek naszej firmy. Dlatego podnosimy ich kwalifikacje poprzez
            uczestnictwo w specjalistycznych szkoleniach.
          </p>
        </div>

        <div className="about-image">
          <img src={peopleImg} alt="Zespół SOAOS" />
        </div>
      </div>

      {/* SEKCJA 3 */}
      <div className="about-row">
        <div className="about-text">
          <h2>Technologia</h2>
          <p>
            HP XP5300 Expedio Revolution jest jedną z najszybszych maszyn
            wielkoformatowych na rynku. Drukuje z roli na rolę w technologii UV,
            osiągając prędkość do 300 m²/h przy rozdzielczości 720 dpi. Zapewnia
            wysokie nasycenie kolorów, precyzję, trwałość oraz szerokie
            możliwości zastosowania materiałów do tej pory niedostępnych.
          </p>
        </div>

        <div className="about-image">
          <img src={techImg} alt="Technologia druku" />
        </div>
      </div>
    </section>
  );
}

export default About;
