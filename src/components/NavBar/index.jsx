import { Link } from "react-router-dom";
import "./style.css";

export function NavBar({ logo, pagina1, pagina2, pagina3 }) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="pages">
          <Link to="/">{pagina1}</Link>
          <Link to="/contato">{pagina2}</Link>
          <Link to="/sobre">{pagina3}</Link>
        </div>
      </ul>
    </nav>
  );
}
