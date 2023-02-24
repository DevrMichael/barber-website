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
    </>
  );
}

export default App;
