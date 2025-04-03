// IMPORTO IL LOGO
import logoImage from "../assets/img/dc-logo.png";

// CREO FUNZIONE DEL COMPONENTE NAV, DOVE CONTERRA' LA SUA STRUTTURA HTML
function Navbar() {
  return (
    <nav>
      <img src={logoImage} alt="DC Logo" />
      <ul>
        <li>
          <a href="#">CHARACTERS</a>
        </li>
        <li>
          <a href="#">COMICS</a>
        </li>
        <li>
          <a href="#">MOVIES</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">GAMES</a>
        </li>
        <li>
          <a href="#">COLLECTIBLES</a>
        </li>
        <li>
          <a href="#">VIDEOS</a>
        </li>
        <li>
          <a href="#">FANS</a>
        </li>
        <li>
          <a href="#">NEWS</a>
        </li>
        <li>
          <a href="#">SHOP</a>
        </li>
      </ul>
    </nav>
  );
}

// ESPORTO FUNZIONE NAVBAR
export default Navbar;
