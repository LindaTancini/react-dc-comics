// IMPORTO I COMPONENTI
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  //CREO UN ARRAY PER OGNI SEZIONE DEL FOOTER
  const footerDcComics = [
    "Characters",
    "Comics",
    "Movies",
    "TV",
    "Games",
    "Videos",
    "News",
  ];
  const footerShop = ["Shop DC", "Shop DC Collectibles"];
  const footerDc = [
    "Terms of Use",
    "Privacy Policy",
    "Ad Choices",
    "Advertising",
    "Jobs",
    "Subscriptions",
    "Talent Workshops",
    "CPSC Certificates",
    "Ratings",
    "Shop Help",
    "Contact Us",
  ];
  const footerSites = [
    "DC",
    "MAD Magazine",
    "DC Kids",
    "DC Universe",
    "DC Power Visa",
  ];

  console.log(footerDcComics);
  console.log(footerShop);
  console.log(footerDc);
  console.log(footerSites);
  return (
    <>
      <Header />
      <Main />
      <Footer
        linksDcComics={footerDcComics}
        linksShop={footerShop}
        linksDc={footerDc}
        linksSites={footerSites}
      />
    </>
  );
}

export default App;

//A RIGA 47, IL FOOTER RICEVERE I LINK
