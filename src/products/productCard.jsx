//CREO FUNZIONE CHE CONTIENE LA STRUTTURA DELLA CARD
function productCard() {
  return (
    <div className="card-container">
      <div className="img-card">
        <img src="#" alt="testo" />
      </div>
      <div className="text-card">
        <p>Testo Card</p>
      </div>
    </div>
  );
}

// ESPORTO CARD
export default productCard;
