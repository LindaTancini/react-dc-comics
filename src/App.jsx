// IMPORTO I COMPONENTI
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
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
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
