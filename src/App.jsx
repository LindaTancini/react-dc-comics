// IMPORTO I COMPONENTI
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  //CREO L'ARRAY DEI LINK DEL FOOTER
  const footerLinks = {
    dcComics: [
      "Characters",
      "Comics",
      "Movies",
      "TV",
      "Games",
      "Videos",
      "News",
    ],
    shop: ["Shop DC", "Shop DC Collectibles"],
    dc: [
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
    ],
    sites: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"],
  };

  console.log(footerLinks);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
