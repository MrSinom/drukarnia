import { NavLink } from "react-router-dom";
import "./home.style.css";

function Home() {
  return (
    <section className="home-split">
      
      <NavLink to="/offer" className="panel-link">
        <div className="panel left">
          <div className="glass">
            <h1>OFERTA</h1>
            <p>Poznaj naszą ofertę druku i realizacji</p>
          </div>
        </div>
      </NavLink>

      
      <NavLink to="/gallery" className="panel-link">
        <div className="panel right">
          <div className="glass">
            <h1>REALIZACJE</h1>
            <p>Zobacz nasze projekty i wykonania</p>
          </div>
        </div>
      </NavLink>
    </section>
  );
}

export default Home;
