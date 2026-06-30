import { useEffect, useState } from 'react'
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

type SleepPhase = 'phase1' | 'phase2' | 'phase3' | 'phase4' | 'ended'

const sleepTimerOptions: { label: string; minutes: number | null }[] = [
  { label: '15 min', minutes: 15 },
  { label: '30 min', minutes: 30 },
  { label: '45 min', minutes: 45 },
  { label: '60 min', minutes: 60 },
  { label: '∞', minutes: null },
]

const sleepPhaseCopy: Record<SleepPhase, { title: string; body: string }> = {
  phase1: {
    title: 'Settling',
    body: 'Rain on the paper roof becomes the bed. The koto motif fades. One soft "good night," then the voice is gone.',
  },
  phase2: {
    title: 'Bed only',
    body: 'Every discrete trigger is gone — just rain and a slow, low pad remain. Reverb lengthens. Light shifts from gold toward indigo.',
  },
  phase3: {
    title: 'Thinning',
    body: 'Rain thins to a soft patter. A temple bell still sounds, but the gap between rings only grows. The pad is one low drone.',
  },
  phase4: {
    title: 'Last taper',
    body: 'The last lantern dims on the black water. Volume tapers gently toward silence.',
  },
  ended: {
    title: 'Asleep',
    body: 'Silence. Tap anywhere on the scene to wake.',
  },
}

function getSleepPhase(elapsedMinutes: number, totalMinutes: number | null): SleepPhase {
  if (totalMinutes === null) {
    if (elapsedMinutes < 1) return 'phase1'
    if (elapsedMinutes < 3) return 'phase2'
    return 'phase3'
  }
  const ratio = elapsedMinutes / totalMinutes
  if (ratio >= 1) return 'ended'
  if (ratio >= 0.9) return 'phase4'
  if (ratio >= 0.55) return 'phase3'
  if (ratio >= 0.15) return 'phase2'
  return 'phase1'
}

function App() {
  const [activeMode, setActiveMode] = useState('Journey')
  const [sceneBeat, setSceneBeat] = useState<'beat1' | 'beat2' | 'beat3' | 'resolved'>('beat1')
  const [lastTrigger, setLastTrigger] = useState('Tap the shoji panel to begin the first Journey beat.')
  const [pulseKey, setPulseKey] = useState(0)

  const [sleepTimerMinutes, setSleepTimerMinutes] = useState<number | null>(30)
  const [sleepDisplay, setSleepDisplay] = useState<'dim' | 'audio'>('dim')
  const [sleepRunning, setSleepRunning] = useState(false)
  const [sleepElapsed, setSleepElapsed] = useState(0)
  const [sleepWoke, setSleepWoke] = useState(false)

  const selectedMode = modes.find((mode) => mode.key === activeMode) ?? modes[1]
  const activeStage = sceneBeat === 'beat1' ? 1 : sceneBeat === 'beat2' ? 2 : sceneBeat === 'beat3' ? 3 : 4
  const sleepPhase = getSleepPhase(sleepElapsed, sleepTimerMinutes)

  useEffect(() => {
    if (!sleepRunning || sleepPhase === 'ended') return
    const interval = window.setInterval(() => {
      setSleepElapsed((value) => value + 1)
    }, 1000)
    return () => window.clearInterval(interval)
  }, [sleepRunning, sleepPhase])

  const startSleep = () => {
    setSleepElapsed(0)
    setSleepWoke(false)
    setSleepRunning(true)
  }

  const wakeFromSleep = () => {
    setSleepRunning(false)
    setSleepWoke(true)
  }

  const exitSleepSetup = () => {
    setSleepRunning(false)
    setSleepWoke(false)
    setSleepElapsed(0)
  }

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
            {activeMode === 'Sleep' ? (
              <div
                className={`scene-frame sleep-frame ${sleepRunning ? `sleep-${sleepPhase}` : ''} ${sleepDisplay === 'audio' && sleepRunning ? 'audio-only' : ''}`}
                onClick={sleepRunning ? wakeFromSleep : undefined}
                role={sleepRunning ? 'button' : undefined}
                tabIndex={sleepRunning ? 0 : undefined}
                aria-label={sleepRunning ? 'Tap to wake' : 'Sleep scene'}
              >
                {!sleepRunning ? (
                  <div className="sleep-setup">
                    {sleepWoke ? <p className="sleep-wake-note">You woke gently. The room is still low and warm.</p> : null}
                    <p className="sleep-era-label">Edo Japan · The Floating Hour</p>
                    <div className="sleep-field">
                      <span>Timer</span>
                      <div className="trigger-list">
                        {sleepTimerOptions.map((option) => (
                          <button
                            key={option.label}
                            type="button"
                            className={`trigger-pill ${sleepTimerMinutes === option.minutes ? 'active' : ''}`}
                            onClick={() => setSleepTimerMinutes(option.minutes)}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="sleep-field">
                      <span>Display</span>
                      <div className="trigger-list">
                        <button
                          type="button"
                          className={`trigger-pill ${sleepDisplay === 'dim' ? 'active' : ''}`}
                          onClick={() => setSleepDisplay('dim')}
                        >
                          Dim to black
                        </button>
                        <button
                          type="button"
                          className={`trigger-pill ${sleepDisplay === 'audio' ? 'active' : ''}`}
                          onClick={() => setSleepDisplay('audio')}
                        >
                          Audio-only
                        </button>
                      </div>
                    </div>
                    <button type="button" className="reset-button" onClick={startSleep}>
                      Begin Sleep
                    </button>
                  </div>
                ) : (
                  <div className="sleep-running">
                    {sleepDisplay === 'dim' ? (
                      <>
                        <div className="pond" />
                        <div className={`lantern lit sleep-lantern ${sleepPhase === 'phase4' || sleepPhase === 'ended' ? 'dimmed' : ''}`}>◌</div>
                      </>
                    ) : null}
                    <div className="sleep-readout">
                      <p className="sleep-phase-title">{sleepPhaseCopy[sleepPhase].title}</p>
                      <p className="sleep-phase-body">{sleepPhaseCopy[sleepPhase].body}</p>
                      <p className="sleep-timer-readout">
                        {sleepTimerMinutes === null
                          ? `${sleepElapsed} min settled · demo-paced`
                          : `${Math.min(sleepElapsed, sleepTimerMinutes)} / ${sleepTimerMinutes} min · demo-paced`}
                      </p>
                      <p className="sleep-tap-hint">Tap anywhere to wake.</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={`scene-frame ${sceneBeat === 'resolved' ? 'resolved' : sceneBeat === 'beat3' ? 'stage3' : sceneBeat === 'beat2' ? 'active' : ''}`}
                onClick={activeMode === 'Journey' && sceneBeat === 'beat1' ? handleShoji : undefined}
                role={sceneBeat === 'beat1' && activeMode === 'Journey' ? 'button' : undefined}
                tabIndex={sceneBeat === 'beat1' && activeMode === 'Journey' ? 0 : undefined}
              >
                <div className="sky" />
                <div className="pond" />
                <div className={`path ${sceneBeat === 'beat2' || sceneBeat === 'beat3' || sceneBeat === 'resolved' ? 'active' : ''}`}>
                  <span className={`path-node start ${sceneBeat !== 'beat1' ? 'active' : ''}`} />
                  <span className={`path-node mid ${sceneBeat === 'beat3' || sceneBeat === 'resolved' ? 'active' : ''}`} />
                  <span className={`path-node end ${sceneBeat === 'resolved' ? 'active' : ''}`} />
                </div>
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
            )}
          </div>

          <div className="scene-sidebar">
            <div className="mode-switcher">
              {['Journey', 'Calm', 'Sleep'].map((mode) => (
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

            {activeMode === 'Sleep' ? (
              <div className="scene-copy">
                <h3>Sleep mode — hands-free</h3>
                <p>
                  Pick a timer and let the room thin on its own: triggers drop away first,
                  then the bed simplifies, then light and sound taper to nothing. No
                  interaction is required once it begins.
                </p>
                <p className="scene-status">
                  {sleepRunning
                    ? `${sleepPhaseCopy[sleepPhase].title} — ${sleepPhaseCopy[sleepPhase].body}`
                    : 'Set the timer and display, then begin.'}
                </p>
                {sleepRunning ? (
                  <button type="button" className="reset-button" onClick={wakeFromSleep}>
                    Wake now
                  </button>
                ) : sleepWoke ? (
                  <button type="button" className="reset-button" onClick={exitSleepSetup}>
                    Back to Sleep setup
                  </button>
                ) : null}
              </div>
            ) : activeMode === 'Journey' ? (
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
                <div className="stage-list" aria-label="Journey stage progress">
                  {[
                    { title: 'Beat 1', label: 'Slide shoji', stage: 1 },
                    { title: 'Beat 2', label: 'Light lantern', stage: 2 },
                    { title: 'Beat 3', label: 'Settle water', stage: 3 },
                  ].map((stage) => (
                    <div
                      key={stage.title}
                      className={`stage-pill ${activeStage === stage.stage ? 'active' : ''} ${activeStage > stage.stage ? 'done' : ''}`}
                    >
                      <strong>{stage.title}</strong>
                      <span>{stage.label}</span>
                    </div>
                  ))}
                </div>
                <p className="scene-status">
                  {sceneBeat === 'resolved'
                    ? 'The era remembers itself: light returns, the rain settles, and the world exhales.'
                    : sceneBeat === 'beat3'
                      ? 'Tap the water to finish the reflection.'
                      : sceneBeat === 'beat2'
                        ? 'Tap the lantern to continue the second beat.'
                        : 'Tap the shoji panel to begin the first Journey beat.'}
                </p>
                {sceneBeat === 'resolved' ? (
                  <button type="button" className="reset-button" onClick={resetScene}>
                    Replay Edo
                  </button>
                ) : null}
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
