// IMPORTO COMPONENTI DENTRO HEADER
import Navbar from "./Navbar";

// CREO FUNZIONE DEL COMPONENTE HEADER, DOVE CONTERRA' LA SUA STRUTTURA HTML
function Header() {
  // CREO L'ARRAY DEI LINK DELLA NAVBAR
  const Navlinks = [
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
  console.log(Navlinks);
  return (
    <header>
      <Navbar />
    </header>
  );
}

// ESPORTO FUNZIONE HEADER
export default Header;
