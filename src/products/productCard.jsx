//CREO FUNZIONE CHE CONTIENE LA STRUTTURA DELLA CARD
function productCard({ comic }) {
  return (
    <div className="card-container">
      <div className="img-card">
        {/*PASSO LE PROP PER CREARE LE CARD*/}
        <img src={comic.thumb} alt={comic.series} />
      </div>
      <div className="text-card">
        <p>{comic.series}</p>
      </div>
    </div>
  );
}

// ESPORTO CARD
export default productCard;
