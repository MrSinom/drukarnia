import "./Preparation.style.css";

function Preparation() {
  return (
    <section className="preparation-page">
      <div className="prep-container">
        <h1>Przygotowanie plików</h1>

        {/* SEKCJA 1 */}
        <div className="prep-section">
          <h2>Jak przygotować plik?</h2>

          <ul className="prep-list">
            <li>
              Pliki kolorowe przygotuj w przestrzeni <strong>CMYK</strong>
              (profil ICC: <strong>Coated Fogra39</strong>).
            </li>
            <li>
              Wydruki czarno-białe w trybie <strong>GRAYSCALE</strong>.
            </li>
            <li>
              Kolory <strong>PANTONE</strong> przekształć do odpowiednich modeli barw.
            </li>
            <li>
              Pliki rastrowe najlepiej dostarczać jako <strong>TIFF</strong>,
              spłaszczone – bez masek, kanałów i warstw.
            </li>
            <li>
              Akceptowane formaty: <strong>PDF, EPS</strong>.
            </li>
            <li>
              Czcionki należy zamienić na <strong>krzywe</strong>.
            </li>
            <li>
              Prosimy o podanie kolorystyki Pantone dla kluczowych elementów
              oraz ewentualnych wydruków próbnych.
            </li>
            <li>
              Nazwa pliku powinna umożliwiać łatwą identyfikację pracy.
            </li>
            <li>
              Do zamówienia dołącz plik tekstowy zawierający:
              nazwę firmy, nazwę pracy, wymiary netto, rodzaj materiału
              oraz opis wykończenia.
            </li>
          </ul>
        </div>

        {/* SEKCJA 2 */}
        <div className="prep-section highlight">
          <h2>Dostarczanie plików</h2>
          <p>
            Akceptujemy wszystkie nośniki magnetyczne i optyczne.
            Możliwe jest również dostarczenie plików na serwer FTP.
          </p>
          </div>
      </div>
    </section>
  );
}

export default Preparation;
