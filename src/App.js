import "./App.css";

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
    </>
  );
}

export default App;
