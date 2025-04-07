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
        {/*CON MAP ITINERO TUTTI GLI ELEMENTI DELL'ARRAY COMICS E CREO LE CARD*/}
        {comics.map((comic) => (
          <ProductCard key={comics.id} comic={comic} /> //CON COMIC PASSO LE PROP
        ))}
      </div>
      <button className="load-btn">LOAD MORE</button>
    </div>
  );
}

//ESPORTO CARDLIST
export default productList;
