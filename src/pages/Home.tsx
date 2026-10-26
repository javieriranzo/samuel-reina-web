import './Home.css'

/** Home provisional (fase 1): comprueba tokens, tipografías y estados del cursor. */
export function Home() {
  return (
    <main className="home">
      <p className="label home__label">Cantante · Actor de doblaje</p>
      <h1 className="home__title">
        Samuel
        <br />
        <em>Reina</em>
      </h1>
      <div className="home__voices">
        <a href="#musica" className="home__voice" data-cursor="play">
          <span className="label">▶ La voz que se ve</span>
          <span className="home__voice-title">La música</span>
        </a>
        <a href="#doblaje" className="home__voice" data-cursor="rec">
          <span className="label home__live">● La voz que no se ve</span>
          <span className="home__voice-title">
            <em>El doblaje</em>
          </span>
        </a>
      </div>
      <p className="label">TC 00:00:00:01 · En construcción</p>
    </main>
  )
}
