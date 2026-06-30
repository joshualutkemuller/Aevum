import { useState } from 'react'
import './App.css'

const modes = [
  {
    key: 'Journey',
    title: 'Journey',
    summary: 'Solve each era as the Keeper restores its forgotten geometry.',
    bullets: ['No fail state', 'Slow, breathable pacing', 'Chapter-by-chapter history'],
  },
  {
    key: 'Calm',
    title: 'Calm',
    summary: 'Touch the world and let the soundscape grow around your attention.',
    bullets: ['Trigger-rich ASMR', 'Interactive dioramas', 'Gentle, responsive haptics'],
  },
  {
    key: 'Sleep',
    title: 'Sleep',
    summary: 'Leave a scene running as it thins into a safe, low-lit bed of sound.',
    bullets: ['Hands-free', 'Dimming light and audio', 'Soft timer-based fade'],
  },
]

const chapters = [
  {
    title: 'Edo Japan',
    subtitle: 'The Floating Hour',
    description:
      'Rain on paper, sliding shoji, and reflections that become paths.',
    accent: 'Rain • Paper • Water',
  },
  {
    title: 'Renaissance Italy',
    subtitle: 'The Vanishing Point',
    description:
      'Perspective becomes architecture as the world resolves from one angle.',
    accent: 'Quill • Marble • Fountains',
  },
]

const pillars = [
  {
    title: 'Impossible geometry',
    text: 'Each chapter turns optical illusions into calm, tactile puzzles.',
  },
  {
    title: 'Historical eras',
    text: 'Every chapter carries a distinct sensory identity and learning layer.',
  },
  {
    title: 'ASMR-first design',
    text: 'The puzzle object and the trigger are the same thing, from sound to haptics.',
  },
]

const calmTriggers = [
  {
    label: 'Lantern',
    description: 'A paper lantern warms the room and settles the rain.',
  },
  {
    label: 'Wind-bell',
    description: 'The furin rings once, then the air feels cooler.',
  },
  {
    label: 'Water',
    description: 'A ripple spreads across the pond and the reflection deepens.',
  },
]

function App() {
  const [activeMode, setActiveMode] = useState('Journey')
  const [sceneBeat, setSceneBeat] = useState<'beat1' | 'beat2' | 'beat3' | 'resolved'>('beat1')
  const [lastTrigger, setLastTrigger] = useState('Tap the shoji panel to begin the first Journey beat.')
  const [pulseKey, setPulseKey] = useState(0)

  const selectedMode = modes.find((mode) => mode.key === activeMode) ?? modes[1]

  const handleShoji = () => {
    if (sceneBeat === 'beat1') {
      setSceneBeat('beat2')
      setLastTrigger('The paper screen slides aside. One quiet gesture remains: light the lantern and let the reflection begin.')
    }
  }

  const handleLantern = () => {
    if (sceneBeat === 'beat2') {
      setSceneBeat('beat3')
      setLastTrigger('The lantern opens the path. One more touch will settle the water and complete the reflection.')
    } else {
      setLastTrigger('The lantern warms the room and the air feels easier to breathe.')
    }
  }

  const handleWater = () => {
    if (sceneBeat === 'beat3') {
      setSceneBeat('resolved')
      setLastTrigger('The pond calms. The era remembers itself: light returns, sound settles, and the world exhales.')
    } else {
      setLastTrigger('The water moves gently and the reflection deepens.')
    }
  }

  const handleTrigger = (message: string) => {
    setLastTrigger(message)
    setPulseKey((value) => value + 1)
  }

  const resetScene = () => {
    setSceneBeat('beat1')
    setLastTrigger('Tap the shoji panel to begin the first Journey beat.')
    setPulseKey((value) => value + 1)
  }

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="hero-intro">
          <div>
            <p className="eyebrow">ASMR-first impossible geometry puzzle</p>
            <h1>Aevum</h1>
            <p className="hero-copy">
              Drift through the eras of history as impossible, dreamlike architecture,
              set each one gently right, and let the sand, rain, and clockwork settle
              your mind.
            </p>
          </div>
          <div className="hero-callout">
            <p>Now showing</p>
            <strong>Edo Japan</strong>
            <span>Slide the shoji and light the lantern.</span>
          </div>
        </div>
        <div className="hero-actions">
          <button type="button" className="primary-action" onClick={() => setActiveMode('Journey')}>
            Enter Journey
          </button>
          <button type="button" className="secondary-action" onClick={() => setActiveMode('Calm')}>
            Explore Calm
          </button>
        </div>
        <div className="hero-badges">
          <span>No fail</span>
          <span>All ages</span>
          <span>Audio-led</span>
        </div>
      </section>

      <section className="prototype-section" aria-label="Edo vertical slice">
        <div className="section-heading">
          <p className="eyebrow">Vertical slice</p>
          <h2>Edo Japan — The Floating Hour</h2>
        </div>

        <div className="prototype-layout">
          <div className="scene-card">
            <div
              className={`scene-frame ${sceneBeat === 'resolved' ? 'resolved' : sceneBeat === 'beat3' ? 'stage3' : sceneBeat === 'beat2' ? 'active' : ''}`}
              onClick={activeMode === 'Journey' && sceneBeat === 'beat1' ? handleShoji : undefined}
              role={sceneBeat === 'beat1' && activeMode === 'Journey' ? 'button' : undefined}
              tabIndex={sceneBeat === 'beat1' && activeMode === 'Journey' ? 0 : undefined}
            >
              <div className="sky" />
              <div className="pond" />
              <div className="path" />
              {sceneBeat === 'resolved' ? (
                <div className="resolution-overlay">
                  <p>The era remembers itself.</p>
                  <button type="button" className="reset-button" onClick={resetScene}>
                    Replay Edo
                  </button>
                </div>
              ) : null}
              <button
                type="button"
                className={`shoji-panel ${sceneBeat === 'beat2' || sceneBeat === 'beat3' || sceneBeat === 'resolved' ? 'open' : ''}`}
                onClick={(event) => {
                  event.stopPropagation()
                  handleShoji()
                }}
                aria-label="Slide the shoji panel"
              >
                <span>shoji</span>
              </button>
              <button
                type="button"
                className={`lantern ${sceneBeat === 'beat2' || sceneBeat === 'beat3' || sceneBeat === 'resolved' ? 'lit' : ''}`}
                onClick={(event) => {
                  event.stopPropagation()
                  handleLantern()
                }}
              >
                ◌
              </button>
              <button
                type="button"
                className="bell"
                onClick={(event) => {
                  event.stopPropagation()
                  handleTrigger(
                    'A furin chime passes through the rain, soft and clear.',
                  )
                }}
              >
                ◌
              </button>
              <button
                type="button"
                className={`water ${sceneBeat === 'beat3' || sceneBeat === 'resolved' ? 'active' : ''}`}
                onClick={(event) => {
                  event.stopPropagation()
                  handleWater()
                }}
              >
                ◌
              </button>
              <div key={pulseKey} className="pulse-ring" />
            </div>
          </div>

          <div className="scene-sidebar">
            <div className="mode-switcher">
              {['Journey', 'Calm'].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  className={`mode-pill ${activeMode === mode ? 'active' : ''}`}
                  onClick={() => setActiveMode(mode)}
                >
                  {mode}
                </button>
              ))}
            </div>

            {activeMode === 'Journey' ? (
              <div className="scene-copy">
                <h3>
                  {sceneBeat === 'resolved'
                    ? 'Resolution — Era remembers itself'
                    : sceneBeat === 'beat3'
                      ? 'Beat 3 — Reflection release'
                      : sceneBeat === 'beat2'
                        ? 'Beat 2 — Lantern release'
                        : 'Beat 1 — The sliding veranda'}
                </h3>
                <p>
                  {sceneBeat === 'beat1'
                    ? 'A single shoji panel is all the room asks for. Slide it once to reveal the walkway hidden by the paper wall.'
                    : sceneBeat === 'beat2'
                      ? 'The path is opening. Light the lantern to guide the reflection and bring the garden closer.'
                      : sceneBeat === 'beat3'
                        ? 'The water is almost calm. Tap the pond to settle the last reflection and complete the scene.'
                        : 'The scene has resolved. Light returns, sound settles, and the era remembers itself.'}
                </p>
                <p className="scene-status">
                  {sceneBeat === 'resolved'
                    ? 'The era remembers itself: light returns, the rain settles, and the world exhales.'
                    : sceneBeat === 'beat3'
                      ? 'Tap the water to finish the reflection.'
                      : sceneBeat === 'beat2'
                        ? 'Tap the lantern to continue the second beat.'
                        : 'Tap the shoji panel to begin the first Journey beat.'}
                </p>
              </div>
            ) : (
              <div className="scene-copy">
                <h3>Calm mode — touch the room</h3>
                <p>
                  The scene is designed to answer each touch with a small, satisfying
                  reward: lantern light, a bell, or a ripple.
                </p>
                <div className="trigger-list">
                  {calmTriggers.map((trigger) => (
                    <button
                      key={trigger.label}
                      type="button"
                      className="trigger-pill"
                      onClick={() =>
                        handleTrigger(trigger.description)
                      }
                    >
                      {trigger.label}
                    </button>
                  ))}
                </div>
                <p className="scene-status">{lastTrigger}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mode-section" aria-label="Aevum experiences">
        <div className="section-heading">
          <p className="eyebrow">Three states</p>
          <h2>The experience breathes with your attention.</h2>
        </div>
        <div className="mode-switcher">
          {modes.map((mode) => (
            <button
              key={mode.key}
              type="button"
              className={`mode-pill ${selectedMode.key === mode.key ? 'active' : ''}`}
              onClick={() => setActiveMode(mode.key)}
            >
              {mode.title}
            </button>
          ))}
        </div>
        <div className="mode-panel">
          <div>
            <p className="eyebrow">Selected mode</p>
            <h3>{selectedMode.title}</h3>
            <p>{selectedMode.summary}</p>
          </div>
          <ul>
            {selectedMode.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="chapters-section" aria-label="Lead chapters">
        <div className="section-heading">
          <p className="eyebrow">Lead chapters</p>
          <h2>Two eras already feel like a world of their own.</h2>
        </div>
        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <article key={chapter.title} className="chapter-card">
              <p className="chapter-title">{chapter.title}</p>
              <h3>{chapter.subtitle}</h3>
              <p>{chapter.description}</p>
              <span>{chapter.accent}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="pillars-section" aria-label="Core pillars">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="pillar-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
