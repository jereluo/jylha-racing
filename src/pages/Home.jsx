import heroImage from '../assets/hero.jpg'

function Home() {
  return (
    <section
      className="hero-section full-width"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      <div className="hero-content">
        <h1>Jylhä Racing – Moottoriurheilua sydämellä</h1>
        <div className="hero-buttons">
          <a href="/gallery" className="hero-button">Katso kuvia</a>
          <a href="/contact" className="hero-button">Ota yhteyttä</a>
        </div>
      </div>
    </section>
  )
}

export default Home
