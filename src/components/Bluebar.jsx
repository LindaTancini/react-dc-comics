// IMPORTO IMMAGINI
// DIGITAL COMICS
import imgDigitalComics from "../assets/img/buy-comics-digital-comics.png";
//MERCHANDISE
import imgMerchandise from "../assets/img/buy-comics-merchandise.png";
//SUBSCRIBE
import imgSubscribe from "../assets/img/buy-comics-subscriptions.png";
//SHOP
import imgShop from "../assets/img/buy-comics-shop-locator.png";
//VISA
import imgVisa from "../assets/img/buy-dc-power-visa.svg";

// CREO FUNZIONE DEL COMPONENTE DIV, DOVE CONTERRA' LA SUA STRUTTURA HTML
function Bluebar() {
  return (
    <div className="container-bluebar">
      <div className="icon-container">
        <img src={imgDigitalComics} alt="Digital Comics" />
        <span>DIGITAL COMICS</span>
      </div>
      <div className="icon-container">
        <img src={imgMerchandise} alt="DC Merchandise" />
        <span>DC MERCHANDISE</span>
      </div>
      <div className="icon-container">
        <img src={imgSubscribe} alt="Subscription" />
        <span>SUBSCRIPTION</span>
      </div>
      <div className="icon-container">
        <img src={imgShop} alt="Shop Locator" />
        <span>COMIC SHOP LOCATOR</span>
      </div>
      <div className="icon-container">
        <img src={imgVisa} alt="DC Visa" />
        <span>DC POWER VISA</span>
      </div>
    </div>
  );
}

// ESPORTO FUNZIONE BLUEBAR
export default Bluebar;
