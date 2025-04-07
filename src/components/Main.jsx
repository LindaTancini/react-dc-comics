// IMPORTO COMPONENTI DENTRO MAIN
import Bluebar from "./Bluebar";
import Jumbotron from "./Jumbotron";
import ProductList from "../products/productList";

// CREO FUNZIONE DEL COMPONENTE MAIN, DOVE CONTERRA' LA SUA STRUTTURA HTML
function Main({ comics }) {
  return (
    <main>
      <Jumbotron />
      <ProductList comics={comics} />
      <Bluebar />
    </main>
  );
}

// ESPORTO FUNZIONE MAIN
export default Main;
