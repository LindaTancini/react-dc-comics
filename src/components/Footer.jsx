// IMPORTO IMMAGINI
// FACEBOOK
import imgFacebook from "../assets/img/footer-facebook.png";
// TWITTER
import imgTwitter from "../assets/img/footer-twitter.png";
// YOUTUBE
import imgYoutube from "../assets/img/footer-youtube.png";
// PINTEREST
import imgPinterest from "../assets/img/footer-pinterest.png";
// PERISCOPE
import imgPeriscope from "../assets/img/footer-periscope.png";
// LOGO DC
import imgBigLogo from "../assets/img/dc-logo-bg.png";

// CREO FUNZIONE DEL COMPONENTE FOOTER, DOVE CONTERRA' LA SUA STRUTTURA HTML
// IMPOSTO IL PARAMETRO LINKSDCOMICS ECC.,SARANNO LE PROPS
// AD OGNUNO PASSO IL PARAMETRO CON IL SEGUENTE INDICE
function Footer({ linksDcComics, linksShop, linksDc, linksSites }) {
  return (
    <footer>
      <div className="footer-container">
        <div className="micro-layout">
          <h4>DC COMICS</h4>
          <ul>
            <li>
              <a href="#"> {linksDcComics[0]} </a>
            </li>
            <li>
              <a href="#">{linksDcComics[1]}</a>
            </li>
            <li>
              <a href="#">{linksDcComics[2]}</a>
            </li>
            <li>
              <a href="#">{linksDcComics[3]}</a>
            </li>
            <li>
              <a href="#">{linksDcComics[4]}</a>
            </li>
            <li>
              <a href="#">{linksDcComics[5]}</a>
            </li>
            <li>
              <a href="#">{linksDcComics[6]}</a>
            </li>
          </ul>
          <h4>SHOP</h4>
          <ul>
            <li>
              <a href="#">{linksShop[0]}</a>
            </li>
            <li>
              <a href="#">{linksShop[1]}</a>
            </li>
          </ul>
        </div>
        <div className="micro-layout">
          <h4>DC</h4>
          <ul>
            <li>
              <a href="#">{linksDc[0]}</a>
            </li>
            <li>
              <a href="#">{linksDc[1]}</a>
            </li>
            <li>
              <a href="#">{linksDc[2]}</a>
            </li>
            <li>
              <a href="#">{linksDc[3]}</a>
            </li>
            <li>
              <a href="#">{linksDc[4]}</a>
            </li>
            <li>
              <a href="#">{linksDc[5]}</a>
            </li>
            <li>
              <a href="#">{linksDc[6]}</a>
            </li>
            <li>
              <a href="#">{linksDc[7]}</a>
            </li>
            <li>
              <a href="#">{linksDc[8]}</a>
            </li>
            <li>
              <a href="#">{linksDc[9]}</a>
            </li>
            <li>
              <a href="#">{linksDc[10]}</a>
            </li>
          </ul>
        </div>
        <div className="micro-layout">
          <h4>SITES</h4>
          <ul>
            <li>
              <a href="#">{linksSites[0]}</a>
            </li>
            <li>
              <a href="#">{linksSites[1]}</a>
            </li>
            <li>
              <a href="#">{linksSites[2]}</a>
            </li>
            <li>
              <a href="#">{linksSites[3]}</a>
            </li>
            <li>
              <a href="#">{linksSites[4]}</a>
            </li>
          </ul>
        </div>
        <img className="footer-img" src={imgBigLogo} alt="Logo DC" />
      </div>
      <div className="smallfooter-container">
        <button>SIGN-UP NOW!</button>
        <div className="social">
          <span>FOLLOW US</span>
          <img src={imgFacebook} alt="Facebook" />
          <img src={imgTwitter} alt="Twitter" />
          <img src={imgYoutube} alt="Youtube" />
          <img src={imgPinterest} alt="Pinterest" />
          <img src={imgPeriscope} alt="Periscope" />
        </div>
      </div>
    </footer>
  );
}

// ESPORTO FUNZIONE FOOTER
export default Footer;
