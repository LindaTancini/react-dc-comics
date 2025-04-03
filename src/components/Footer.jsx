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
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="micro-layout">
          <h4>DC COMICS</h4>
          <ul>
            <li>
              <a href="#">Characters</a>
            </li>
            <li>
              <a href="#">Comics</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
          <h4>SHOP</h4>
          <ul>
            <li>
              <a href="#">Shop DC</a>
            </li>
            <li>
              <a href="#">Shop DC Collectibles</a>
            </li>
          </ul>
        </div>
        <div className="micro-layout">
          <h4>DC</h4>
          <ul>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Ad Choices</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Subscriptions</a>
            </li>
            <li>
              <a href="#">Talent Workshops</a>
            </li>
            <li>
              <a href="#">CPSC Certificates</a>
            </li>
            <li>
              <a href="#">Ratings</a>
            </li>
            <li>
              <a href="#">Shop Help</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="micro-layout">
          <h4>SITES</h4>
          <ul>
            <li>
              <a href="#">DC</a>
            </li>
            <li>
              <a href="#">MAD Magazine</a>
            </li>
            <li>
              <a href="#">DC Kids</a>
            </li>
            <li>
              <a href="#">DC Universe</a>
            </li>
            <li>
              <a href="#">DC Power Visa</a>
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
