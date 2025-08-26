import React, { useEffect, useRef } from 'react'

function Nav() {
  return (
    <header className="nav">
      <div className="brand">
        <span className="scribble">Gloam Circus</span>
        <span className="tag">immersive performances in forsaken spaces</span>
      </div>
      <nav>
        <a href="#shows">Shows</a>
        <a href="#about">About</a>
        <a href="#tickets" className="cta">Tickets</a>
      </nav>
    </header>
  )
}

function Hero() {
  const videoRef = useRef(null)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const play = async () => {
      try { await v.play() } catch (_) {}
    }
    play()
  }, [])

  return (
    <section className="hero">
      <div className="videoWrap">
        <video
          ref={videoRef}
          className="bgVideo"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Atmospheric background footage"
        >
          <source src="https://cdn.coverr.co/videos/coverr-candle-light-6469/1080p.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-candle-light-6469/1080p.webm" type="video/webm" />
        </video>
        <div className="grain" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
      </div>
      <div className="heroContent">
        <h1 className="scribble title">where the walls remember</h1>
        <p className="lede">A roaming circus collective conjuring one-night spectacles through abandoned theaters, factories, and forgotten sanatoriums.</p>
        <div className="actions">
          <a href="#tickets" className="button primary">Enter the Gloam</a>
          <a href="#shows" className="button ghost">Upcoming Sites</a>
        </div>
      </div>
    </section>
  )
}

function Shows() {
  const cards = [
    { city: 'Detroit', title: 'Rust Cathedral', date: 'Oct 31', img: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop' },
    { city: 'Berlin', title: 'Static Waltz', date: 'Nov 15', img: 'https://images.unsplash.com/photo-1463130450665-33f0e5083bfa?q=80&w=1200&auto=format&fit=crop' },
    { city: 'Lisbon', title: 'Salt & Smoke', date: 'Dec 07', img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <section id="shows" className="shows">
      <h2 className="scribble">Upcoming Invasions</h2>
      <div className="grid">
        {cards.map((c) => (
          <article key={c.title} className="card">
            <div className="imgWrap">
              <img src={c.img} alt="Abandoned building" loading="lazy" />
              <div className="cardGrain" />
            </div>
            <div className="meta">
              <span className="city">{c.city}</span>
              <h3 className="scribble">{c.title}</h3>
              <span className="date">{c.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about">
      <div className="copy">
        <h2 className="scribble">Our Oath</h2>
        <p>
          We haunt the margins. We stitch acrobatics, smoke, and found sound into site-specific rituals that honor the ghosts of industry and art. Every show is a love letter to entropy.
        </p>
        <p>
          Audience and performer move together—through stairwells, boiler rooms, and fractured light. Expect to be guided, lost, and found again.
        </p>
        <a id="tickets" href="#" className="button primary">Claim Passage</a>
      </div>
      <div className="polaroid">
        <div className="frame">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" alt="Circus rehearsal in a dim warehouse" />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="scribble">Gloam Circus Collective</div>
      <div className="fineprint">
        <span>© {new Date().getFullYear()} Gloam</span>
        <span>contact: echo@gloam.circus</span>
        <span>instagram: @gloamcircus</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <Shows />
      <About />
      <Footer />
    </div>
  )
}
