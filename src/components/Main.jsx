// IMPORTO COMPONENTI DENTRO MAIN
import Bluebar from "./Bluebar";
import Jumbotron from "./Jumbotron";

// CREO FUNZIONE DEL COMPONENTE MAIN, DOVE CONTERRA' LA SUA STRUTTURA HTML
function Main() {
  return (
    <main>
      <Jumbotron />
      <Bluebar />
    </main>
  );
}

// ESPORTO FUNZIONE MAIN
export default Main;
