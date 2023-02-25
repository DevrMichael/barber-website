import "./App.css";
import imageOne from "./assets/features-one.jpg";
import imageTwo from "./assets/features-two.jpg";
import imageThree from "./assets/features-three.jpg";

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="">Frisør</a>
          <a href="">Bestill Time</a>
          <a href="">Kontakt Oss</a>
          <a href="">Prisliste</a>
          <a href="">Om Oss</a>
        </nav>
      </header>
      <div className="hero-container">
        <div className="hero-container-background">
          <div className="hero">
            <h1>Våre Frisører Hjelper Deg</h1>
            <h2>Finn Din Frisør Hos Oss I Dag. Bestill Time Nå!</h2>
            <button>Bestill Time</button>
          </div>
        </div>
      </div>
      <div className="features-container">
        <div>
          <h2>Bestill Time</h2>
        </div>
        <div>
          <h2>Instagram</h2>
        </div>
        <div>
          <h2>Kontakt Oss</h2>
        </div>
      </div>
      <div className="customers-header-container">
        <h3>Eksempler på våre fornøyde kunder:</h3>
      </div>
      <div className="customers-image-slider-container">
        <div className="slider-images">
          <img src={imageOne} alt="First img" />
          <img src={imageTwo} alt="Second img" />
          <img src={imageThree} alt="Third img" />
          <img src={imageOne} alt="First img" />
          <img src={imageTwo} alt="Second img" />
          <img src={imageThree} alt="Third img" />
          <img src={imageOne} alt="First img" />
          <img src={imageTwo} alt="Second img" />
          <img src={imageThree} alt="Third img" />
        </div>
      </div>
      <div className="presentation-container">
        <h2>
          Hvorfor velge <br />
          <span>Hendrix Hair</span>
          <br /> som din frisør?
        </h2>
        <p className="italic">
          Hendrix Hair tar godt vare på sine frisører slik at frisørene skal
          kunne ta godt vare på sine kunder. Frisørenes ansiennitet er en stor
          fordel for å bevare forholdet mellom frisørene og kundene. Det er en
          av grunnene til at Hendrix Hair har klart å skaffe seg et
          konkurransefortrinn ovenfor sine andre aktører i frisørbransjen.
        </p>
        <p>
          Våre frisører finner du i Oslo, Stavanger, Drammen, Gjøvik, Tønsberg
          og Slependen(Asker) når du trenger det.
        </p>
        <p>
          Frisørene hos Hendrix Hair jobber mye med hårfargedesign og tilbyr et
          bredt spekter av fargemuligheter for håret: balayage, contouring,
          foilayage, baby lights, ombre, dip-dye, klassisk striping, crazy
          colors.{" "}
        </p>
        <p>Kom innom for en uforpliktende konsultasjon.</p>
      </div>
      <div className="price-container">
        <div>
          <div className="prices">
            <div className="prices-text">
              <p>Klassisk hårklipp</p>
              <p>fra 550,-</p>
            </div>
            <div className="prices-text">
              <p>Barbering med kniv</p>
              <p>fra 450,-</p>
            </div>
            <div className="prices-text">
              <p>Skjeggtrimming</p>
              <p>fra 500,-</p>
            </div>
            <div className="prices-text">
              <p>Barneklipp</p>
              <p>fra 400,-</p>
            </div>
            <div className="prices-text">
              <p>Senior hårklipp</p>
              <p>fra 400,-</p>
            </div>
            <div className="prices-buttons">
              <a href="">Bestill Time</a>
              <a href="">Les Mer</a>
            </div>
          </div>
        </div>
        <div className="price-text">
          <p id="price-info-text">Vi har et utvalg ulike tjenester</p>
          <h2>Prisliste</h2>
          <hr />
          <p>
            Herrefrisør med fokus på det beste- hårklipp, skjeggtrimming,
            tradisjonell barbering og deluxebehandlinger.{" "}
          </p>
          <p>
            Vi spesialiserer oss på herreklipp, men alle er velkommen! Se en
            fullstendig liste over alle behandlinger og priser ved å besøke en
            av våre avdelinger.
          </p>
        </div>
      </div>
      <div className="contact-us-container">
        <div className="contact-text">
          <h1>Kontakt Oss</h1>
          <hr />
          <p>Adresse hovedkontor</p>
          <p>Åsenveien 3, 1400 Ski</p>
        </div>
        <div className="contact-form">
          <div className="contact-form-input">
            <input type="text" placeholder="Fornavn" />
            <input type="text" placeholder="Etternavn" />
            <input type="email" placeholder="E-post" />
            <input type="tel" placeholder="Mobil" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Skriv til oss her..."
          ></textarea>
          <button>Send</button>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9097302588025!2d10.725182852038872!3d59.91704547071299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd779ba357b%3A0x677038c9acc2591c!2sDet%20kongelige%20slott!5e0!3m2!1sno!2sno!4v1677333174575!5m2!1sno!2sno"
          title="map"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <footer>
        <div className="footer-links">
          <a href="">Bruksvilkår</a>
          <a href="">Personerklæring</a>
          <a href="">FAQ</a>
          <a href="">Kontakt Oss</a>
          <a href="">Last ned appen</a>
        </div>
        <div className="footer-copyright">
          <p>© 2023 Michael Siddiqi</p>
        </div>
      </footer>
    </>
  );
}

export default App;
