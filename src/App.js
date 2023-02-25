import "./App.css";
import imageOne from './assets/features-one.jpg'
import imageTwo from './assets/features-two.jpg'
import imageThree from './assets/features-three.jpg'

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
      <div className="features">
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
      <div className="customers-header">
        <h3>Eksempler på våre fornøyde kunder:</h3>
      </div>
      <div className="customers-image-slider">
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
      <div className="presentation">
        <h2>Hvorfor velge <br/><span>Hendrix Hair</span><br/> som din frisør?</h2>
        <p className="italic">Hendrix Hair tar godt vare på sine frisører slik at frisørene skal kunne ta godt vare på sine kunder. Frisørenes ansiennitet er en stor fordel for å bevare forholdet mellom frisørene og kundene. Det er en av grunnene til at Hendrix Hair har klart å skaffe seg et konkurransefortrinn ovenfor sine andre aktører i frisørbransjen.</p>
        <p>Våre frisører finner du i Oslo, Stavanger, Drammen, Gjøvik, Tønsberg og Slependen(Asker) når du trenger det.</p>
        <p>Frisørene hos Hendrix Hair jobber mye med hårfargedesign og tilbyr et bredt spekter av fargemuligheter for håret: balayage, contouring, foilayage, baby lights, ombre, dip-dye, klassisk striping, crazy colors. </p>
        <p>Kom innom for en uforpliktende konsultasjon.</p>
      </div>
    </>
  );
}

export default App;
