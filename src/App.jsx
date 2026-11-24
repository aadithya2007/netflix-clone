import { useState } from 'react'

const movies = [
  { title: 'The Last Horizon', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&auto=format&fit=crop' },
  { title: 'Neon City', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&auto=format&fit=crop' },
  { title: 'Wild Depths', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&auto=format&fit=crop' },
  { title: 'Crimson Tide', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&auto=format&fit=crop' },
  { title: 'Night Protocol', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&auto=format&fit=crop' },
  { title: 'The Summit', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&auto=format&fit=crop' },
]

function Row({ title, items }) {
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="card-list">
        {items.map((movie) => (
          <article className="card" key={movie.title}>
            <img src={movie.image} alt="" />
            <div className="card-overlay">
              <span className="card-title">{movie.title}</span>
              <span className="card-meta">New · 2h 8m</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [muted, setMuted] = useState(true)

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#" aria-label="Netwave home">NETWAVE</a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#series">Series</a>
          <a href="#movies">Movies</a>
          <a href="#new">New & Popular</a>
          <a href="#list">My List</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0-2a8.5 8.5 0 1 1-5.28 15.16L1.4 21l-1.4-1.4 3.84-3.82A8.5 8.5 0 0 1 10.5 2Z" /></svg>
          </button>
          <button className="profile" aria-label="Open profile menu" onClick={() => setMenuOpen(!menuOpen)}>A</button>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-backdrop" />
          <div className="hero-content">
            <p className="eyebrow"><span>N</span> ORIGINAL SERIES</p>
            <h1>THE LAST<br />HORIZON</h1>
            <p className="match"><strong>98% Match</strong> <span>2026</span> <b>16+</b> <span>Limited Series</span></p>
            <p className="synopsis">After a global signal disappears, a lone pilot crosses the forbidden frontier to find the truth behind humanity's final horizon.</p>
            <div className="hero-actions">
              <button className="play-button">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" /></svg>
                Play
              </button>
              <button className="info-button">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.5" /></svg>
                More Info
              </button>
            </div>
          </div>
          <button className="mute-button" aria-label={muted ? 'Unmute preview' : 'Mute preview'} onClick={() => setMuted(!muted)}>
            {muted ? '×' : ')))'}
          </button>
        </section>

        <div className="catalog">
          <Row title="Trending Now" items={movies} />
          <Row title="Because You Watched Sci-Fi" items={[...movies].reverse()} />
          <Row title="Popular on Netwave" items={movies.slice(2).concat(movies.slice(0, 2))} />
        </div>
      </main>
    </div>
  )
}

export default App
