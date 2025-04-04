// IMPORTO IL LOGO
import logoImage from "../assets/img/dc-logo.png";

// CREO FUNZIONE DEL COMPONENTE NAV, DOVE CONTERRA' LA SUA STRUTTURA HTML
// IMPOSTO IL PARAMETRO LINKS, CHE SARANNO LE PROPS
// AD OGNUNO PASSO IL LINKS CON IL SEGUENTE INDICE
function Navbar({ links }) {
  return (
    <nav>
      <img src={logoImage} alt="DC Logo" />
      <ul>
        <li>
          <a href="#">{links[0]}</a>
        </li>
        <li>
          <a href="#">{links[1]}</a>
        </li>
        <li>
          <a href="#">{links[2]}</a>
        </li>
        <li>
          <a href="#">{links[3]}</a>
        </li>
        <li>
          <a href="#">{links[4]}</a>
        </li>
        <li>
          <a href="#">{links[5]}</a>
        </li>
        <li>
          <a href="#">{links[6]}</a>
        </li>
        <li>
          <a href="#">{links[7]}</a>
        </li>
        <li>
          <a href="#">{links[8]}</a>
        </li>
        <li>
          <a href="#">{links[9]}</a>
        </li>
      </ul>
    </nav>
  );
}

// ESPORTO FUNZIONE NAVBAR
export default Navbar;
