// IMPORTO COMPONENTI DENTRO HEADER
import Navbar from "./Navbar";

// CREO FUNZIONE DEL COMPONENTE HEADER, DOVE CONTERRA' LA SUA STRUTTURA HTML
function Header() {
  // CREO L'ARRAY DEI LINK DELLA NAVBAR
  const navLinks = [
    "CHARACTERS",
    "COMICS",
    "MOVIES",
    "TV",
    "GAMES",
    "COLLECTIBLES",
    "VIDEOS",
    "FANS",
    "NEWS",
    "SHOP",
  ];
  console.log(navLinks);
  return (
    <header>
      <Navbar links={navLinks} />
    </header>
  );
}

// ESPORTO FUNZIONE HEADER
export default Header;

// A RIGA 22 LA NAVBAR RICEVE L'ARRAY DI LINKS
