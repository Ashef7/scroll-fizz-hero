import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CarIllustration() {
  return (
    <svg className="car-art" viewBox="0 0 1000 470" role="img" aria-label="Stylized red sports car illustration">
      <defs>
        <linearGradient id="body" x1="0" x2="0.8" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff6a52" />
          <stop offset="48%" stopColor="#e63225" />
          <stop offset="100%" stopColor="#8f1718" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#52636a" />
          <stop offset="100%" stopColor="#111c22" />
        </linearGradient>
        <linearGradient id="rim" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f6f2e9" />
          <stop offset="100%" stopColor="#9b9c9a" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feGaussianBlur stdDeviation="15" />
        </filter>
      </defs>
      <ellipse cx="500" cy="367" rx="355" ry="30" fill="#171717" opacity=".22" filter="url(#shadow)" />
      <path d="M137 294 C164 265 218 250 291 239 L385 161 C416 135 451 121 499 122 L651 130 C688 133 715 151 744 186 L809 234 C848 245 872 266 879 294 L868 329 L793 344 L218 345 L145 327 Z" fill="url(#body)" stroke="#8f1a19" strokeWidth="5" strokeLinejoin="round"/>
      <path d="M319 235 L401 166 C422 149 448 140 480 141 L514 143 L512 235 Z" fill="url(#glass)" stroke="#d9d0c4" strokeWidth="4" />
      <path d="M530 143 L647 150 C672 152 690 168 710 193 L743 235 L530 235 Z" fill="url(#glass)" stroke="#d9d0c4" strokeWidth="4" />
      <path d="M518 145 L520 235" stroke="#e8e1d7" strokeWidth="5" />
      <path d="M174 284 C246 264 298 259 363 260 L721 260 C778 260 823 270 853 290" fill="none" stroke="#ff927a" strokeWidth="6" opacity=".8"/>
      <path d="M153 303 L225 298 L247 315 L166 321 Z" fill="#f7e8bf" />
      <path d="M799 289 L854 299 L847 315 L786 311 Z" fill="#ffdfbb" />
      <path d="M252 328 L760 328" stroke="#651315" strokeWidth="8" />
      <path d="M388 269 L422 269 L411 293 L379 293 Z" fill="#a51e1d" />
      <path d="M552 269 L588 269 L600 293 L566 293 Z" fill="#a51e1d" />
      <g>
        <circle cx="292" cy="328" r="69" fill="#151719" />
        <circle cx="292" cy="328" r="48" fill="url(#rim)" />
        <circle cx="292" cy="328" r="31" fill="#303638" />
        <circle cx="292" cy="328" r="12" fill="#c8c8c3" />
        <path d="M292 286 L300 315 L328 306 L307 329 L329 350 L300 342 L292 371 L284 342 L255 350 L277 329 L255 306 L284 315 Z" fill="#aeb0ab"/>
      </g>
      <g>
        <circle cx="736" cy="328" r="69" fill="#151719" />
        <circle cx="736" cy="328" r="48" fill="url(#rim)" />
        <circle cx="736" cy="328" r="31" fill="#303638" />
        <circle cx="736" cy="328" r="12" fill="#c8c8c3" />
        <path d="M736 286 L744 315 L772 306 L751 329 L773 350 L744 342 L736 371 L728 342 L699 350 L721 329 L699 306 L728 315 Z" fill="#aeb0ab"/>
      </g>
      <path d="M397 356 L635 356" stroke="#f4f2ed" strokeWidth="3" opacity=".7" />
      <path d="M180 341 L205 346 L220 355 L184 355 Z" fill="#191b1c" />
      <path d="M813 342 L850 337 L836 354 L805 355 Z" fill="#191b1c" />
    </svg>
  )
}

const stats = [
  { value: '92%', label: 'DRIVE TO EXPLORE' },
  { value: '76%', label: 'BUILT FOR THE BOLD' },
  { value: '100%', label: 'ALWAYS IN MOTION' },
]

function App() {
  const root = useRef(null)
  const car = useRef(null)
  const headline = useRef(null)
  const statsRef = useRef([])
  const scrollHint = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.fromTo(headline.current,
        { autoAlpha: 0, y: 28, letterSpacing: '0.32em' },
        { autoAlpha: 1, y: 0, letterSpacing: '0.2em', duration: 1.05 }
      )
      intro.fromTo(statsRef.current,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.14 },
        '-=0.48'
      )
      intro.fromTo('.hero-copy, .topbar, .hero-footer',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.7, stagger: 0.12 },
        '-=0.7'
      )

      gsap.to(car.current, {
        y: 250,
        x: 95,
        rotate: -9,
        scale: 0.72,
        ease: 'none',
        scrollTrigger: {
          trigger: '.scroll-stage',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      })

      gsap.to('.orbit-ring', {
        rotate: 110,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.scroll-stage',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.4,
        },
      })

      gsap.to(scrollHint.current, {
        autoAlpha: 0,
        y: 10,
        scrollTrigger: {
          trigger: '.scroll-stage',
          start: 'top top',
          end: 'top+=100 top',
          scrub: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={root}>
      <section className="scroll-stage">
        <div className="hero-screen">
          <header className="topbar">
            <a className="brand" href="#" aria-label="Itz Fizz home">itz<span>fizz</span><i>®</i></a>
            <div className="top-note"><span className="live-dot" /> A LITTLE MORE FEELING</div>
            <a className="menu-link" href="#story">THE EXPERIENCE <span>↗</span></a>
          </header>

          <div className="hero-content">
            <div className="eyebrow hero-copy"><span>01 / THE OPEN ROAD</span><span>DESIGNED TO FEEL ALIVE</span></div>
            <h1 ref={headline}>W E L C O M E <em>I T Z</em> F I Z Z</h1>
            <p className="hero-subtitle hero-copy">LESS ORDINARY. <span>MORE EVERYTHING.</span></p>

            <div className="stats-row">
              {stats.map((stat, i) => (
                <div className="stat" key={stat.value} ref={el => statsRef.current[i] = el}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="car-wrap" ref={car}>
            <div className="orbit-ring" />
            <CarIllustration />
            <span className="car-label">FZ / 01 <i>SPORT SERIES</i></span>
          </div>

          <div className="hero-footer">
            <span>ENGINEERED FOR THE FEELING</span>
            <span className="scroll-hint" ref={scrollHint}><span className="scroll-line" /> SCROLL TO MOVE</span>
            <span>CHENNAI · EVERYWHERE</span>
          </div>
        </div>
        <div className="scroll-space" aria-hidden="true" />
      </section>

      <section id="story" className="story-section">
        <div className="story-top"><span>02 / KEEP GOING</span><span>THE JOURNEY IS THE POINT</span></div>
        <div className="story-main">
          <p className="story-kicker">NOT JUST A WAY TO GET THERE.</p>
          <h2>Make room<br />for <span>the feeling.</span></h2>
          <p className="story-description">A little curiosity. A little courage. A whole lot of road ahead. This is your reminder to take the long way home.</p>
          <a className="story-cta" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>BACK TO THE TOP <span>↑</span></a>
        </div>
        <footer className="story-footer"><span>ITZ FIZZ® — CONCEPT EXPERIENCE</span><span>MADE TO MOVE YOU ↗</span></footer>
      </section>
    </main>
  )
}

export default App