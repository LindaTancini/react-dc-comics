// IMPORTO COMPONENTI
import ProductCard from "./productCard";
import comics from "../data/comics";
console.log(comics);

// CREO FUNZIONE CHE CONTIENE IL CONTAINER DELLE CARD
function productList() {
  return (
    <div className="comics-container">
      <h2 className="comics-title">CURRENT SERIES</h2>
      <div className="comics-column">
        <ProductCard />
      </div>
      <button className="load-btn">LOAD MORE</button>
    </div>
  );
}

//ESPORTO CARDLIST
export default productList;
