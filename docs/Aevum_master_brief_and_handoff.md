# Aevum — master design brief & LLM handoff
*Version 1 · June 2026 · single source of truth (supersedes the earlier plan + chapter docs; attach only this one)*

A calm, ASMR-first, no-fail puzzle game in the Monument Valley tradition. Each chapter is a **period of human history** rebuilt as serene, impossible architecture. You guide a small wanderer — *the Keeper* — through eras that have "forgotten their own shape," gently coaxing each one's tangled geometry back into harmony. No enemies, no timers, no score, no way to fail. When a structure resolves, the era *remembers itself*: light returns, the soundscape settles, the world exhales.

---

## 0. How to use this document with an LLM

Attach this whole file, then paste the role prompt below, then pick a task from the queue in §12.

**Role prompt (paste this first):**
> You are a senior game designer and technical audio designer helping develop *Aevum*, a calm, ASMR-first, no-fail, impossible-geometry puzzle game themed around historical eras. Treat the attached master brief as ground truth. Honor the locked decisions in §2 and do not reopen them without flagging a clear reason. Match the established tone: calm, all-ages, no dark patterns, no urgency. Whenever you design anything interactive, specify four things together — the **interaction**, the **visual**, the **sound** (which ASMR trigger), and the **haptic**. Prefer concrete, buildable detail over vague vision language. If a request conflicts with the brief, say so before proceeding.

**How to drive it:** work one task at a time from §12, ask it to keep outputs in the brief's formats (beat tables, Foley lists, frame storyboards), and feed its results back in as you go.

---

## 1. The game in one screen

- **Logline:** *A puzzle game you breathe with — drift through the eras of history as impossible, dreamlike architecture, set each one gently right, and let the sand, the rain, and the clockwork settle your mind.*
- **Three pillars:** (1) impossible geometry / optical-illusion puzzles; (2) historical eras as the through-line; (3) calm + ASMR as a first-class system, not a skin.
- **Audience:** all ages; people who want to unwind or wind down, not be challenged or pressured.
- **Tone:** serene, warm, unhurried, trustworthy.
- **Differentiator:** beautiful calm puzzlers exist (Monument Valley, GRIS, Behind the Frame, Alba) but almost none are **ASMR-first**, and none double as a genuine **wind-down / sleep companion**. That's the open lane.
- **Working title:** *Aevum* (Latin, "an age/eternity"). Alternates: Vesper, Lull, The Long Hour, Hourwell.

---

## 2. Locked decisions (do not reopen)

- Themes are **historical time periods**, not real branded places (avoids licensing risk; gives each chapter its own Foley palette).
- **No-fail foundation:** no timer, no score, no death, no streaks, no FOMO. The player cannot get permanently stuck; the game nudges gently instead of failing.
- **Calm + ASMR is the core**, with the audio designer treated as a co-lead. Sound-first: the puzzle object and the ASMR trigger are the same thing.
- **Three app states:** Journey (story play), Calm (awake unwinding), Sleep (falling asleep). Both calm modes ship.
- **The mode principle:** Calm = *trigger-rich and interactive*; Sleep = *bed-rich and hands-free*. They use opposite sound design, not the same scene dimmed.
- **Two lead chapters:** Edo Japan and Renaissance Italy.
- **Learning is opt-in, whispered, three-tier, never blocks progress.**
- **Ethical design:** no ads, no dark patterns, reduced-motion respected by default, per-trigger sound controls for misophonia.
- **Tech direction:** Unity (URP); impossible geometry via screen-space connection logic (points connect when aligned on screen, not in 3D); FMOD or Wwise for adaptive audio; platform haptics; mobile-first with Switch / Steam / Apple Arcade as natural homes.

---

## 3. Open questions (decide these)

1. **Vertical-slice lead era:** Edo (richest ASMR palette) or Renaissance (its real history *is* the mechanic)?
2. **How far to build the wellness/sleep side** — a calm mode within a game, or a genuine second product / storefront category?
3. **Funding/route:** self-fund vertical slice, seek a publisher, or pursue an Apple Arcade / platform deal?
4. **Monetization specifics:** premium price point; which eras are base vs. paid packs; whether any tasteful subscription exists for sleep content.
5. **Art pipeline & team:** in-house vs. contract for stylized 3D; who is the co-lead audio/Foley designer.
6. **Scope:** ship at 8 eras or 10; how many puzzles per chapter (current chapters are 6 beats).

---

## 4. Design state — the world

**Pillars.** (1) *Impossible geometry* — Escher/Monument Valley illusions. (2) *Eras as worlds* — a journey through history with a distinct sensory identity per chapter. (3) *Calm + ASMR* — see §7 and §10.

**Narrative frame.** Time has "tangled." You play the Keeper, moving quietly through eras whose architecture has come loose from sense. There are no villains — only gentle restoration. Solving a structure lets the era *remember itself*. The arc across the game runs cool-and-ancient → warm-and-mechanical → luminous-and-hopeful, giving the whole game a felt emotional shape.

**Era slate (condensed).**

| Era | Architecture & signature illusion | ASMR palette | Learning hook |
|---|---|---|---|
| Neolithic / Stone | Megaliths; solstice light-beam alignment | Wind on stone, low drum, fire | Astronomy, raising megaliths |
| Ancient Egypt | Pyramids; shifting **sand** reveals paths; counterweights | Pouring sand, reed brush, stone echo | Hieroglyphs, ramp engineering |
| Tang / Song China | Moon gates; **reflection-symmetry** in water | Water, bamboo chimes, tea pour | Gardens, the compass |
| Islamic Golden Age | Muqarnas; architecture *is* an impossible tessellation | Fountains, page turns, birdsong | Algebra, the astrolabe |
| Medieval Gothic | Vaults; **colored light** through glass paints the path | Choral hum, candle, rain, bells | Gothic engineering, manuscripts |
| **Edo Japan** | Sliding **shoji** reorder space | Rain on paper, water, chimes, wood | Ukiyo-e, joinery (see §5) |
| **Renaissance Italy** | **Perspective / anamorphosis** | Quill, chisel, fountain, pages | Linear perspective (see §6) |
| Industrial / Victorian | **Gear trains** & pneumatic lifts | Ticking, soft steam, ratchets | The clock, the steam engine |
| Jazz Age / Art Deco | Symmetry; impossible verticals | Vinyl crackle, brush-drum jazz, rain | Deco design, the radio |
| Solarpunk future | **Light/energy routing** (gentle finale) | Synth pads, leaves, water | Hopeful: "time, healed" |

**Optical-illusion toolkit.** Impossible connections (align on screen, not in 3D); forced perspective & anamorphosis (Renaissance); rotation/perspective shift (China, Deco); light & shadow as geometry (Neolithic, Gothic); reflection & symmetry (China, Japan); ambiguous figure-ground (Egypt, Industrial). Difficulty rises by *layering* illusions, never by adding pressure.

**Learning / lore — three opt-in tiers.** (1) Play: solvable by intuition, zero reading. (2) Ambient: collectible "hour-cards," a charming sentence or two, softly narrated. (3) Deep-dive: an optional *Almanac of Hours* codex. Narration uses a soft, close-mic voice that doubles as an ASMR trigger.

**Accessibility & ethics.** Colorblind-safe (never color alone — pair with shape/position); one-handed play; full narration option; no flashing; scalable text; per-trigger sound mute/boost (misophonia care); explicitly no streaks, FOMO, ads, or manipulative loops.

---

## 5. Chapter A — Edo Japan: "The Floating Hour"

**Feel:** dusk and soft rain, a garden reflecting itself, vermilion against teal water.
**Mechanic spotlight — sliding shoji:** paper screens that physically *reorder* space; sliding one panel swaps whole rooms into places they shouldn't be (a sliding-tile puzzle made of architecture). Sliding is also the chapter's signature sound.

| Beat | What you do | Illusion | Signature sound |
|---|---|---|---|
| 1. Sliding veranda | Slide a screen; two broken walkways align through the empty frame | Impossible connection | Shoji *shhk*, sandals, first rain |
| 2. Still-water garden | Calm ripples so the pagoda's reflection becomes walkable | Reflection-as-path | Water trickle, koi plip, one bamboo clack |
| 3. Moon gate | Rotate stone rings until the path threads and the circle completes | Rotational + forced perspective | Stone grind, wind, distant bell on lock |
| 4. The paper house | Slide many screens; each swaps a whole room (core mechanic, full strength) | Impossible space | Layered slides, paper crinkle, hard rain, kettle |
| 5. Torii ascent | Climb a gate-tunnel that loops upward; one gate per slow breath | Penrose ascent + breathing-bridge | Sandals echoing, wind through gates, low drum |
| 6. Lantern release | Float lanterns in sequence; the reflection completes, the era settles | Resolution | Lantern paper, water, far koto/flute, one long bell |

**Foley to field-record:** shoji sliding (light & heavy); paper crinkle; rain on paper/thatch ×3 intensities; water trickle/drip/pour; koi splash; *shishi-odoshi* bamboo clack on stone; *furin* wind-bell (glass & iron); *geta* sandals on stone & wood; stone lantern scrape; kettle & tea pour; *koto* pluck; *shakuhachi* breath-flute; deep *bonshō* temple bell (long decay); evening crickets; wind through bamboo.

**Hour-cards (lore):** *Ukiyo-e* (team-made woodblock prints of the "floating world") · *No nails* (joinery; paper screens make one room into many) · *Borrowed scenery* (shakkei) · *The deer-scarer* (shishi-odoshi marks silence) · *Lanterns home* (Obon toro nagashi) · *Summer bells* (furin cool the heat) · *The way of tea* (ichi-go ichi-e) · *The long calm* (~250 years of Edo peace).

---

## 6. Chapter B — Renaissance Italy: "The Vanishing Point"

**Feel:** golden hour over a stone piazza; the world only makes sense from the right angle.
**Mechanic spotlight — perspective itself:** the era's real breakthrough is the puzzle. Structures resolve into a walkable whole only from one viewpoint (the vanishing point); you move the viewpoint to snap fragments into a building. Linear perspective and anamorphosis are the toolkit.

| Beat | What you do | Illusion | Signature sound |
|---|---|---|---|
| 1. Apprentice's easel | Rotate the viewpoint until a broken colonnade lines up at the vanishing point | Forced perspective (tutorial) | Charcoal, easel creak, fountain |
| 2. Anamorphic floor | Find the one oblique angle where floor fragments resolve into a staircase | Anamorphosis (the Holbein trick) | Marble taps, piazza echo, pigeons, far bell |
| 3. Vanishing stair | Walk a stair whose converging lines make top and bottom connect | Penrose ascent via one-point perspective | Stone steps, chisel taps echoing, fresco hush |
| 4. The workshop | Assemble Leonardo's self-supporting bridge / geared lift; raise a platform | Mechanical, tactile geometry | Wooden gears, rope-and-pulley, dividers tick, quill |
| 5. Fresco wall | Trace orthogonals to the vanishing point; drawn lines become real beams | Painted illusion made solid | Brush on wet plaster, chalk snap-line, water in pigment, far choir |
| 6. The dome | Align herringbone courses & the oculus to flood the dome with light | Convergence resolves (finale) | Vast reverb, one sustained choral note, wind at the oculus, bells |

**Foley to field-record:** quill scratch; charcoal & chalk on paper; chalk snap-line; fresco brush on wet plaster; pigment ground in a mortar; marble chisel taps (several weights); wooden dividers tick on parchment; heavy page-turns; wooden gears creaking; rope-and-pulley strain; courtyard fountain; piazza ambience (flagstone steps, pigeons, low murmur); church bells (several sizes); sustained organ/choral drone; guttering candle; cathedral-interior reverb.

**Hour-cards (lore):** *The vanishing point* (Brunelleschi, ~1420) · *Orthogonals* (guide-lines to the vanishing point) · *The hidden shape* (anamorphosis; Holbein's skull) · *Leonardo's bridge* (self-supporting, no nails) · *The impossible dome* (herringbone spiral, no full frame) · *Painting into the wall* (buon fresco) · *The workshop* (botteghe & apprentices) · *Ideas, multiplied* (the press & humanism).

---

## 7. The two modes (Calm vs Sleep)

**The principle.** Awake-and-soothed wants *discrete* sound — the tap, clack, pour you cause yourself. Falling-asleep wants the opposite: *continuous, low, predictable* sound, because a sharp transient that delights an awake listener jolts a drowsy one awake. So **Calm = trigger-rich & interactive; Sleep = bed-rich & hands-free.**

| | Calm mode | Sleep mode |
|---|---|---|
| Goal | Unwind, fidget, focus | Fall asleep |
| Interaction | High — touch everything | None required |
| Sound | Discrete ASMR triggers | Continuous low bed, triggers removed |
| Motion | Lively, responsive | Slows toward stillness |
| Light | Full, adjustable | Dims to black |
| Music | Generative, builds with you | Thins, lengthens, fades |
| Exit | Whenever | Timer, or one tap |
| Length | 5–20 min | 15–60+ min |

**Calm mode** is a free-play diorama of any unlocked era — touch any object for its signature sound + haptic + tiny animation; a generative layer builds as you play (§10.2); a weather/time dial re-skins scene and soundscape; optional breathing guide; save a favorite scene.
**Sleep mode** is a scene you leave running: pick era, timer (15/30/45/60/∞), and "dim to black" or "audio-only"; everything slows and thins over the timer (§10.3); one soft "good night," then voice gone; a single tap fades to wake; built dark for OLED.

Per chapter: *Edo Calm* = rainy garden, trip the deer-scarer, ring the furin, float a lantern. *Edo Sleep* = rain on the paper roof as the bed, a temple bell at long intervals, last lantern dimming on black water. *Renaissance Calm* = golden-hour piazza, running fountain, chalk-lines, gears, a far campanile. *Renaissance Sleep* = fountain trickle and a faraway choir drone under a darkening dome, candles going out one by one.

---

## 8. Storyboard — Edo "The Paper House" (beat 4), frame by frame

The single fullest expression of the shoji mechanic. Goal: cross from the entrance veranda to a far inner room and light an *andon* lantern. The rooms are connected by sliding screens, but the space behind each screen isn't fixed — sliding reorders the house.

| # | What happens (camera · world · player) | Sound & haptic | Purpose |
|---|---|---|---|
| 1 | Camera drifts over a rain-wet house at night; paper screens glow warm. The Keeper stands on the *engawa*. A single unlit lantern glows across an impossible gap — visible, unreachable. The nearest screen carries a soft highlight. | Rain building on the roof; a far temple bell; a low kettle simmer. | Establish goal + the one affordance. |
| 2 | Player drags the first shoji. It slides aside to reveal a room that "shouldn't" be there — the garden, not the hallway — and a walkway now connects forward. | Soft *shhk*; a low, slow haptic pulse. | Teach: sliding changes what's behind. |
| 3 | Keeper steps in and tries the next screen; sliding it reveals a soft paper wall — no path. No penalty; a different screen gives a faint pulse. | Paper flex; a gentle dead-end tone (not a buzzer). | Teach: slide back freely, explore, never punished. |
| 4 | Player notices that sliding one specific screen also shifts the *distant* lantern room closer. The "aha": it isn't a corridor — it's a tile puzzle in 3D. | Rain swells; a single *shishi-odoshi* clack off in the garden. | Reveal the impossible-space twist. |
| 5 | Player slides screens in sequence to march the lantern room adjacent to the Keeper. Each correct slide adds a soft koto note to the score. | Layered *shhk*s; each adds one *koto* pluck; haptic per slide. | The puzzle proper; adaptive-audio payoff (§10.2). |
| 6 | The reordered rooms align into one continuous floor; the on-screen path connects. Keeper walks across, sandals on wood, rain easing. | *Geta* on wood; rain softening; pads swell warmly. | Impossible connection resolves. |
| 7 | Keeper reaches the *andon*; a tap lights it. Warm bloom spreads; rain drops to a gentle patter; a *furin* chimes once. The house settles — screens even out, the interior reflection becomes whole. | Lantern paper; a single *furin* chime; one low temple bell. | Resolution: the era "remembers itself." |
| 8 | The lit lantern reveals the next torii path (links to beat 5). An hour-card ("No nails") surfaces, optional, softly whispered. Camera exhales outward; a diorama snapshot is saved to Calm mode. | Whispered card (opt-in); ambient settles to a quiet bed. | Reward, lore, transition, Calm-mode unlock. |

Design notes: the whole sequence has **no fail state** — wrong orders just slide again; if the player idles ~20s a candidate screen pulses softly. Nothing is timed. Every interaction binds visual + sound + haptic together (the rule in §0).

---

## 9. One-page pitch deck

**1 · Title.** *Aevum* — a calm puzzle game you breathe with. Drift through the eras of history rebuilt as impossible, dreamlike architecture, and set each one gently right.

**2 · The opportunity.** Calm games are beloved (Monument Valley, GRIS, Alba) — yet almost none are ASMR-first, and none double as a real wind-down / sleep companion. Open lane, two audiences.

**3 · What it is.** Impossible-geometry puzzles, one historical era per chapter. No fail, no timer, no score. Opt-in history whispered in. All ages.

**4 · The hook.** Three states: **Journey** (play), **Calm** (fidget/unwind), **Sleep** (fall asleep to an era). Calm is trigger-rich; Sleep is bed-rich — built on opposite sound design.

**5 · Why it relaxes.** Sound-first: the puzzle object *is* the ASMR trigger. Egypt is pouring sand; Edo is rain and sliding paper; Renaissance is chisels and fountains. Backed by synced haptics, adaptive audio, and reduced-motion by default.

**6 · Look & feel.** Soft low-poly; pastel era palettes that warm across time — Edo at dusk, Renaissance at golden hour. (See concept art.)

**7 · Content.** 8–10 eras, expandable as paid era packs. Lead chapters: Edo Japan and Renaissance Italy, each fully designed.

**8 · Audience & ethics.** All ages; explicitly no streaks, FOMO, or ads — a product you can trust to wind down with.

**9 · Business.** Premium one-time purchase + era packs. Strong fit for Switch, Steam, and Apple Arcade. Optional, tasteful sleep-content angle.

**10 · Roadmap & ask.** Vertical slice (one era, full field-recorded Foley) → core game → release. **Ask:** [funding / publisher / platform deal — fill in].

**11 · Team needs.** A co-lead audio/Foley designer (critical), a Unity gameplay engineer, and a stylized-3D artist.

---

## 10. Adaptive audio logic

**10.1 Architecture (stems).**
- **BED** — continuous loops: rain, water, room tone, wind. The foundation; always present, level varies.
- **PADS / harmony** — slow evolving drones in the era's key; intensity scales with engagement.
- **MELODY / motifs** — sparse instrument phrases (Edo: koto, shakuhachi; Renaissance: choir, lute/organ), triggered by milestones or (in Calm) by touches; quantized to a slow grid.
- **TRIGGERS / Foley** — discrete ASMR one-shots (shoji slide, clack, chisel, pour); interaction-driven, spatialized, each with a synced haptic.
- **ACCENTS** — resolution stingers (temple bell, choral swell) on solves.

Middleware: FMOD or Wwise. Global parameters (RTPCs): `engagement`, `progress`, `timeOfDay`, `sleepTimer`, `calmIntensity`, plus per-category user gains. Everything is slow, quantized, and generously reverbed; no percussive tempo anywhere.

**10.2 Calm mode — generative build.**
```
start:            BED + one soft PAD (low). No melody.
on meaningful touch:
    play that object's FOLEY one-shot + haptic
    engagement += k        (engagement decays slowly, ~20–30s to baseline when idle)
as engagement crosses thresholds (rising):
    t1 -> add PAD layers
    t2 -> introduce sparse MELODY motifs (quantized, slow)
    t3 -> richer harmony
cap: a gentle ceiling — never builds to "intense"
on idle: engagement decays -> layers recede back to BED + pad
weather/time dial: selects BED set + musical key/palette
```
Net effect: the music breathes with attention — the more you (calmly) play, the fuller it gets, then it recedes when you rest.

**10.3 Sleep mode — thinning curve over timer T.**
- **Phase 1 (0–15% T):** scene as-is, but transients soften; MELODY stops; one soft "good night."
- **Phase 2 (15–55%):** TRIGGERS removed entirely; only BED + slow PAD; reverb lengthens; any pad movement halves in tempo; light dims golden → indigo.
- **Phase 3 (55–90%):** BED simplifies to one or two continuous elements (e.g., rain + a far bell at lengthening intervals); pad thins to a single low drone; volume begins a gentle taper; screen → near-black/black.
- **Phase 4 (90–100%):** final slow taper to silence; stop. (Audio-only mode: screen already off.)
- **Wake:** one tap → 2–3s fade up to a low resting state (not full brightness). Optional "sunrise" alarm fades light + birdsong over ~90s.
- **Hard rule:** in Sleep mode, no discrete transient is ever louder than the bed, and the spacing between any intermittent event only ever *increases*.

**10.4 Journey mode score.** BED + PAD throughout; MELODY motifs on small discoveries; ACCENT stinger on each solve; the era's full soundscape "settles into harmony" on chapter completion.

**10.5 Trigger taxonomy → behavior.**

| Category | Example (Edo / Renaissance) | Calm | Sleep | Haptic |
|---|---|---|---|---|
| Pouring/granular | sand, pigment grind | fires | removed | fine stipple |
| Water | trickle, fountain | fires | kept as continuous BED | soft swell |
| Brushing/scratching | quill, fresco brush | fires | removed | light grain |
| Sliding/folding | shoji, paper | fires | removed | low slow pulse |
| Ticking/ratchet | gears, dividers | fires | removed | crisp tick |
| Tapping/clack | chisel, shishi-odoshi | fires | removed | sharp tap |
| Chime/bell | furin, campanile | fires | kept, intervals lengthen | light tick |
| Whisper/voice | lore narration | on tap | one "good night" then off | none |

**10.6 Haptics.** Every FOLEY one-shot maps to a haptic envelope keyed to its sound (deep thunk = low/slow; granular = fine stipple; chime = light tick). Haptics default **off** in Sleep mode.

**10.7 Per-user tuning.** A master plus per-category sliders (mute "ticking," boost "water," etc.), honored across all three modes. This is both an accessibility feature and an ASMR-quality feature (misophonia-safe).

---

## 11. Production roadmap & vertical slice

- **Phase 0 — Vertical slice (the proof).** One era, end to end, full polish, with real field-recorded Foley, adaptive audio, haptics, and 4–6 beats. It exists to answer two questions: *does the ASMR/calm loop actually relax people, and does impossible-geometry-by-era hold attention without urgency?* Test on real players with a simple before/after calm self-report; watch session length and return-to-Calm-mode behavior.
- **Phase 1 — Core game.** Lock the puzzle toolkit and audio pipeline; produce 4–5 eras; ship the Almanac, Calm mode, and accessibility/trigger controls.
- **Phase 2 — Release.** Round to 8–10 eras; add Sleep mode; polish; launch mobile + Switch/Steam.
- **Phase 3 — Expansion.** New era packs and seasonal sleep dioramas; explore the wellness positioning as a second front.

**Risks & mitigations:** ASMR is subjective → per-trigger tuning. Audio production is expensive/specialized → it's also the moat; prove it in the slice before scaling. Strong incumbents → differentiate on *ASMR-first + the time-travel spine + a real sleep companion.* "Calm reads as boring" → the impossible-geometry "oh, I see it" payoff keeps it a game.

---

## 12. Task queue for tomorrow (ready-to-paste prompts)

Each begins with the anchor so the LLM stays grounded. Pick one at a time.

1. *Using the attached Aevum master brief, storyboard Renaissance beat 5 ("The fresco wall") frame by frame, matching the format and rules of the Edo "Paper House" storyboard in §8.*
2. *Using the brief, write the full hour-card set (8 cards) for one more era of my choice — pick from the slate in §4 — with accurate, charming 1–2 sentence cards in the §5/§6 style.*
3. *Using §10, draft an FMOD (or Wwise) event list and RTPC sheet that implements the Calm-mode build and Sleep-mode thinning curve, with parameter names and value ranges.*
4. *Using the brief, write a vertical-slice production schedule and budget assumptions for the Edo chapter, including a shot list for the Foley recording session in §5.*
5. *Using §9, expand the pitch deck into speaker notes for a 5-minute publisher pitch, plus the three slides most likely to draw hard questions and how to answer them.*
6. *Using §8 and the no-fail rule, design the hint/idle-nudge pacing across all six Edo beats — when and how the game gently helps without ever failing the player.*
7. *Using the slate in §4, propose 6 additional eras for the era-pack pipeline, each with a signature impossible-geometry mechanic, an ASMR palette, and a one-line lore hook, in the table format.*
8. *Using the brief, draft the in-game accessibility & sound-settings screen: every per-category toggle, the breathing-guide option, reduced-motion, narration, and the Sleep-mode timer/dim/audio-only controls.*

---
## Later backlog
- Implement the Calm mode interaction layer with per-trigger Foley, haptics, and generative calm audio logic.
- ~~Build Sleep mode with timer/dim controls, bed-rich sound, and safe low-motion transitions.~~ Done in the web prototype (`aevum-app`): timer (15/30/45/60/∞), dim-to-black vs. audio-only, and the §10.3 four-phase thinning curve (soften → bed-only → near-black taper → silence) with tap-to-wake. Text/visual only — no real audio yet, so still needs FMOD/Wwise integration below.
- Integrate the vertical slice with FMOD/Wwise adaptive audio and stem-based mixing.
- Validate the Edo chapter with user testing and calm-mode feedback.
- Expand the pitch deck into publisher-facing speaker notes and Q&A responses.

---
## 13. Glossary (keep terms consistent)

- **Aevum** — working title.
- **The Keeper** — the player-character wanderer.
- **Journey / Calm / Sleep** — the three app states.
- **Hour-card** — a collectible lore snippet; the *Almanac of Hours* is the full codex.
- **Beat** — one puzzle within a chapter (chapters currently have 6).
- **BED / PAD / MELODY / TRIGGER / ACCENT** — the five audio stem types (§10.1).
- **Trigger-rich vs bed-rich** — the Calm-vs-Sleep sound-design principle.
- **Impossible connection** — two points joining because they align on screen, not in 3D.
- **Remembers itself** — the resolution beat when a solved era settles into light and harmony.

---

## 14. Task queue outputs — Round 1 (Tasks 1–8)

---

### 14.1 Renaissance beat 5 storyboard — "The Fresco Wall" (frame by frame)

**Goal:** The Keeper enters a half-frescoed chapel apse. A gap in the floor breaks the path forward. A painted beam on the wet-plaster wall hints at a bridge — but only chalk-lining orthogonals from the vanishing point will make paint become load-bearing stone. Complete five orthogonals; the walkway solidifies; the dome (beat 6) is revealed.

| # | What happens (camera · world · player) | Sound & haptic | Purpose |
|---|---|---|---|
| 1 | Camera drifts into the apse from above; a single charcoal mark (the vanishing point) sits on bare wet plaster. The Keeper stands at the broken floor edge — the gap is visible, and a painted beam on the far wall hovers, unconnected, over it. A chalk-line on a peg is the only highlight. | Chapel hush; a candle gutters; a distant choir holds one soft note. | Establish the goal and the one affordance. |
| 2 | Player takes the chalk-line and snaps it from the vanishing point to the first painted fragment. The line thwacks taut; the fragment's edge "agrees" — a sliver of painted beam thickens fractionally into stone, catching the light differently. | Crisp *snap-line* thwack; chalk-dust puff; a short low haptic snap. | Teach: a true orthogonal makes paint solid. |
| 3 | Player tries snapping to a fragment at the wrong angle; the line stretches but goes slack, the paint stays flat and matte. No penalty — the chalk-line simply recoils to the peg, ready again. | A soft string-slack *fwp*; a gentle settle tone (no buzzer). | Teach: only true converging lines work; free to retry, never punished. |
| 4 | Player notices the angle that "agreed" also lines up with a second fragment far down the wall, beyond what looked reachable. The "aha": the orthogonals form one network, not separate beams — the whole wall is a single convergence. | A soft bloom of reverb as the chapel seems to "open"; one far bell tolls once. | Reveal the perspective-network twist: the chapter's core illusion at full strength. |
| 5 | Player snaps four more orthogonals in sequence. Each thickens a fragment into stone. Each correct line adds one sustained choir tone to the chord building in the room. | Layered *snap-line* thwacks; each adds one held choir note; haptic snap per line. | The puzzle proper — adaptive-audio payoff, choir chord builds with each correct line. |
| 6 | The completed network resolves: all painted beams thicken into one continuous stone walkway spanning the gap. The transformation is a single slow motion — flat paint becomes load-bearing stone. | A low stone-settling groan; the chord resolves to a held major triad; reverb lengthens. | Impossible connection resolves: painted illusion made solid. |
| 7 | Keeper crosses the walkway; footsteps shift from hollow echo to solid stone mid-step. Reaching the far wall, a tap completes the last orthogonal; wet plaster dries into permanence as golden light fills the apse from above. | Footsteps shift timbre as stone solidifies; one sustained organ chord; a single bell. | Resolution: the era remembers itself, painting set permanent. |
| 8 | The dried fresco reveals the oculus of the dome ahead (links to beat 6). An hour-card ("Painting into the wall") surfaces, optional, softly whispered. Camera exhales back to take in the whole wall — the vanishing point now invisible, its work done. A diorama snapshot saves to Calm mode. | Whispered card (opt-in); ambient settles to fountain trickle + distant choir bed. | Reward, lore, transition, Calm-mode unlock. |

Design notes: no fail state — wrong-angle lines go slack and recoil freely; if the player idles ~20s, the nearest true-orthogonal fragment catches a thin shaft of light. Nothing is timed. Every interaction binds visual + sound + haptic together (the rule in §0).

---

### 14.2 Hour-cards — Ancient Egypt: "The River and the Stone"

*The shifting sand* — Engineers poured sand into sealed chambers beneath stone blocks, then let it drain through narrow slots; as the sand fell away, the stones lowered — slow, exact, and silent — into place.

*Hieroglyphs* — Picture-signs that are also sounds: a single owl can mean a bird, or the letter "m," depending on how it sits beside its neighbours.

*The ramp debate* — No one alive watched the pyramids rise; historians still argue whether it was one long straight ramp, a spiralling ramp hugging each face, or levers and sledges riding wetted sand.

*The shaduf* — A pivot-arm with a heavy stone on one end and a bucket on the other; the counterweight does most of the lifting — the same balancing principle that may have helped raise the largest casing blocks.

*The reed brush* — Scribes cut reeds to a fine point and dipped them in soot-and-water ink; the same gesture made a tax record, a love poem, or a prayer for the crossing into the afterlife.

*Stone that echoes* — The empty chambers inside a pyramid hold a long, low standing-wave resonance that no ancient text explains — acoustics that seem to have happened, and then been left deliberately alone.

*True north* — The Great Pyramid's sides align to true north within a fraction of a degree, sighted by the circling stars; no compass existed yet.

*The Nile's gift* — Flood season stilled the farms for months each year, freeing a large, paid, well-fed workforce — the pyramids were almost certainly built on that window, not by slaves in chains.

---

### 14.3 FMOD / Wwise event list and RTPC sheet

#### Global RTPCs

| RTPC | Range | Driven by | Affects |
|---|---|---|---|
| `engagement` | 0–100 | +k per meaningful touch (Calm); decays to 0 in ~20–30 s idle | PAD layer count, MELODY gate, BED level fine-trim |
| `progress` | 0–1 per chapter | Journey beat completions | ACCENT stinger variant, lighting parameter mirror |
| `timeOfDay` | 0–1 (dawn → night) | Weather / time dial (Calm); chapter-fixed in Journey | BED set crossfade, musical key / palette |
| `sleepTimer` | 0–1 (elapsed ÷ total); −1 = ∞ | Sleep mode countdown | Drives Sleep phase state machine (see below) |
| `calmIntensity` | 0–1 (default 0.85) | Designer-tuned ceiling, not exposed to player | Multiplies PAD/MELODY send bus — enforces the "gentle ceiling, never intense" rule |
| `reverbAmount` | 0–1 | Driven by sleepTimer phase 2 ramp | Wet/dry mix on the global reverb send |
| `sleepFade` | 0–1 | sleepTimer phase 3–4 ramp | Master output taper to silence |
| `gain_BED` … `gain_ACCENT` | 0–1 (default 0.8 each) | Per-category user slider (settings screen, §14.8) | Per-stem bus volume; persists across all three modes |
| `gain_Pouring`, `gain_Water`, `gain_Brushing`, `gain_Sliding`, `gain_Ticking`, `gain_Tapping`, `gain_Chime`, `gain_Voice` | 0–1 (default 0.8 each) | Per-trigger-category user slider (misophonia controls) | Individual one-shot sub-bus volume |

#### Event list

**BED (looping, crossfaded)**

| Event | Notes |
|---|---|
| `BED_Edo_Rain_Light / _Med / _Heavy` | Crossfade group; local `rainIntensity` RTPC (0–1) driven by `engagement` in Calm, by Sleep phase in Sleep |
| `BED_Edo_RoomTone` | Always running at low level; provides the "room" for spatial events |
| `BED_Edo_Wind_Bamboo` | Optional layer, keyed to `timeOfDay` > 0.6 |
| `BED_Renaissance_Piazza` | Distant murmur, pigeons, flagstone ambience |
| `BED_Renaissance_Fountain` | Continuous trickle; doubles as Sleep-mode primary BED element |
| `BED_Renaissance_RoomTone_Cathedral` | Interior reverb bed |

**PAD (looping, layered per engagement thresholds)**

| Event | Threshold |
|---|---|
| `PAD_Edo_Low` | Always on (Calm start state); single drone |
| `PAD_Edo_Mid` | `engagement` ≥ t1 = 25 |
| `PAD_Edo_High` | `engagement` ≥ t2 = 55; capped by `calmIntensity` |
| `PAD_Renaissance_Low / _Mid / _High` | Same thresholds, parallel set |

**MELODY (one-shot phrases, quantized to a slow grid)**

| Container | Contents | Gate condition |
|---|---|---|
| `MEL_Edo_Koto` | Phrases 01–06 (random, no-repeat) | `engagement` ≥ t2; quantized to 1-bar grid at 44 BPM feel |
| `MEL_Edo_Shakuhachi` | Phrases 01–04 | Same gate; slightly sparser scheduler |
| `MEL_Renaissance_Choir` | Phrases 01–06 | `engagement` ≥ t2 |
| `MEL_Renaissance_Lute` | Phrases 01–04 | Same gate |

Quantization: FMOD — use Music Tracks with Transition Markers at the bar boundary; Wwise — Music Segments with Exit Cue set to "Next Bar."

**TRIGGER (discrete one-shots, spatialized; each carries a linked haptic envelope ID)**

| Event | Haptic envelope | Category bus |
|---|---|---|
| `TRG_Edo_Shoji_Slide_Light`, `_Heavy` | Low slow pulse | `gain_Sliding` |
| `TRG_Edo_PaperCrinkle` | Light grain | `gain_Sliding` |
| `TRG_Edo_KoiSplash` | Soft swell | `gain_Water` |
| `TRG_Edo_ShishiOdoshi_Clack` | Sharp tap | `gain_Tapping` |
| `TRG_Edo_Furin_Glass`, `_Iron` | Light tick | `gain_Chime` |
| `TRG_Edo_Geta_Stone`, `_Wood` | Crisp tap | `gain_Tapping` |
| `TRG_Edo_Kettle_Pour` | Fine stipple | `gain_Pouring` |
| `TRG_Renaissance_Quill_Scratch` | Light grain | `gain_Brushing` |
| `TRG_Renaissance_Chisel_01/02/03` | Sharp tap (weight-scaled) | `gain_Tapping` |
| `TRG_Renaissance_Dividers_Tick` | Crisp tick | `gain_Ticking` |
| `TRG_Renaissance_Gears_Creak` | Low slow pulse | `gain_Sliding` |
| `TRG_Renaissance_Pulley_Strain` | Low slow pulse | `gain_Sliding` |
| `TRG_Renaissance_SnapLine_Thwack` | Short sharp snap | `gain_Tapping` |

**ACCENT (one-shots, resolution-only)**

| Event | Trigger |
|---|---|
| `ACC_Edo_TempleBell_Long` | Beat resolve + Sleep phase 3 interval fires |
| `ACC_Edo_BeatResolve_Stinger` | Each of beats 1–5 |
| `ACC_Edo_ChapterResolve` | Beat 6 / full Edo completion |
| `ACC_Renaissance_ChoralSwell` | Beat resolve |
| `ACC_Renaissance_ChapterResolve` | Dome completion |

#### Calm-mode build logic

```
on session start:
  play BED (full set) + PAD_Low. No melody.

on meaningful_touch (any TRIGGER fires):
  engagement += 12          // tune in playtest
  play TRG_<object>         // + haptic callback

engagement decays at –0.5 / s when no touch (resets to 0 in ~20–30 s)

as engagement crosses thresholds:
  t1 = 25  → fade in PAD_Mid over 800 ms
  t2 = 55  → fade in PAD_High (× calmIntensity ceiling); open MELODY gate
  t3 = 80  → richer harmonic content in PAD_High variant (swap to alt loop)

PAD_High send = PAD_High_base × calmIntensity   // enforces gentle ceiling

on idle (engagement < 5, sustained > 5 s):
  fade out PAD_Mid + PAD_High over 1200 ms; close MELODY gate
  return to BED + PAD_Low
```

#### Sleep-mode thinning curve (state machine driven by `sleepTimer`)

| Phase | `sleepTimer` | Audio actions |
|---|---|---|
| **1 — Settling** | 0.00–0.15 | Close MELODY gate; fire `VO_GoodNight_<Era>` once; ramp `gain_Sliding`, `gain_Tapping`, `gain_Brushing`, `gain_Ticking`, `gain_Pouring` → 0 over the phase duration |
| **2 — Bed only** | 0.15–0.55 | All TRIGGER sub-buses = 0; ramp `reverbAmount` 0→0.6 over 60 s; cross-fade `timeOfDay` toward night palette; lighting RTPC `colorTemp` gold→indigo (same RTPC, drives renderer too) |
| **3 — Thinning** | 0.55–0.90 | Cross-fade BED to single primary element (BED_Edo_Rain_Med or BED_Renaissance_Fountain); re-fire ACC_<Era>_TempleBell_Long on a scheduler whose interval only ever *increases* (formula: `interval_n = interval_0 × 1.4^n`, starting at 90 s); thin PAD to PAD_Low only; begin `sleepFade` 0→0.3 taper |
| **4 — Last taper** | 0.90–1.00 | Complete `sleepFade` 0.3→0 taper; screen → near-black |
| **Ended** | 1.00 | Audio stopped. Await wake input. |

**Hard rule enforcement:** TRIGGER and ACCENT buses are routed through a sidechain compressor keyed to the BED bus — BED is the sidechain source, one-shots are the detector target, with a hard ceiling ratio so no one-shot peak ever exceeds the current BED level. (Inverted from normal game mixing; Sleep mode requires it per §10.3.)

**Wake:** `Sleep_WakeRequested` event crossfades `sleepFade` and all closed buses back to a fixed "low resting" snapshot over 2–3 s, independent of which phase was active.

---

### 14.4 Vertical-slice production schedule and budget — Edo chapter

#### 12-week schedule

| Weeks | Milestone |
|---|---|
| 1–2 | Pre-production: lock beat-by-beat design (§5 + §8 already complete); block all 6 beats as gray-box geometry in Unity URP; prototype screen-space connection logic on beat 1 (shoji → impossible walkway) |
| 3–4 | Art pass: stylised low-poly modeling for veranda, still-water garden, moon-gate courtyard, paper house interior, torii tunnel, and lantern-release dock; dusk lighting palette established |
| **Week 3** | **Foley recording session (1–2 days; see shot list below)** |
| 4–5 | Audio integration: FMOD/Wwise project set up; BED / PAD / MELODY / TRIGGER / ACCENT events wired per §14.3; RTPC hookup to gameplay parameters |
| 5–6 | Gameplay scripting: shoji slide-to-reorder logic (beat 4 core puzzle); moon-gate rotation (beat 3); Penrose-ascent torii loop (beat 5); lantern-release sequencing (beat 6) |
| 6–7 | Calm mode: touch-anywhere triggers for Edo diorama; generative build logic (§10.2) wired to `engagement` RTPC |
| 7–8 | Sleep mode: timer / dim / audio-only controls; §10.3 thinning curve wired to `sleepTimer`; wake flow |
| 8–9 | Haptics: per-trigger envelopes (§10.6) mapped to platform haptic API |
| 9–10 | Accessibility: reduced-motion toggle; per-category sound sliders; narration on/off; colorblind-safe pass (shape + position, no color-only reliance) |
| 10–11 | Polish: idle-nudge pacing across all 6 beats (§14.6); VO recording for 8 hour-cards + "good night" line; final lighting / post pass |
| 11 | Internal playtest + build the before/after calm self-report instrument (§11) |
| 12 | External playtest round; bug fix; ship the slice |

#### Budget assumptions

*(§3 Q3/Q5 unresolved — costs below flag where decisions change the number)*

| Line | Assumption |
|---|---|
| Unity gameplay engineer | 12 weeks; rate TBD per §3 Q5 (in-house vs. contractor) |
| Stylised 3D artist | 8 weeks active (weeks 3–10 overlap) |
| Audio / Foley co-lead | 6 weeks — includes 2-day field session + FMOD integration; this hire is the single highest-risk gap per §9 slide 11 |
| Foley recording session | 1–2 day location / studio day-rate + portable recorder rental if not owned (shotgun + contact mic minimum) |
| VO narrator | Half-day session: 8 hour-card whispers + 1 "good night" line + optional sunrise wake line |
| FMOD / Wwise licence | Free indie tier likely sufficient at this scale; confirm ceiling before FMOD Studio Pro |
| Playtest incentives | Small thank-you for 8–12 external playtesters for the before/after calm self-report round |
| **Flag** | Real figures depend on §3 Q3 (funding route) and Q5 (team model); this schedule assumes a ~3-person core: 1 engineer, 1 artist, 1 audio lead, with the existing design output in this brief |

#### Foley recording shot list (Edo chapter, §5)

| Category | Items to record | Setup notes |
|---|---|---|
| **Sliding / wood** | Shoji slide — light and heavy; paper crinkle; *geta* sandals on stone; *geta* on wood | Build a practical shoji rig: wooden track + stretched washi panel on a hard floor. Close-mic with a cardioid at the panel face + a contact/piezo mic on the track rail to capture the woody transient. Record 5–6 takes of each weight. |
| **Water** | Rain on paper/thatch — 3 intensities (light patter, medium, driving); water trickle; drip into still water; kettle pour | Angle a real washi-and-thatch panel at ~30° for the rain source; vary distance for the three intensities. Record the trickle from a small vessel, not a tap — plastic resonance reads wrong. |
| **Stone / metal** | *Shishi-odoshi* bamboo-on-stone clack; *furin* wind-bell (glass and iron, separately); stone lantern scrape; koi splash | Source or borrow a real *furin* pair if budget allows — the glass vs. iron timbre is distinct and hard to synth convincingly. Record the *furin* in a naturally reverberant outdoor space for the long free-decay tail needed in Sleep mode. |
| **Tonal / instrument** | *Koto* pluck (single notes + short phrases); *shakuhachi* breath-flute (breathy attacks + sustained tones); deep *bonshō* temple bell (record at multiple distances for the very long decay) | Hire players if budget allows — these are MELODY-stem source material and the highest identity-defining recordings in the session. Record the *bonshō* in as large / reverberant a space as accessible. |
| **Ambience** | Evening crickets; wind through bamboo grove | Field-record on location if feasible; high-quality library supplement otherwise. These are BED-stem material and less identity-critical than the named props. |

**Mic kit minimum:** shotgun mic (general close work), contact/piezo mic (track rails, kettle, stone surfaces), portable recorder with ≥2 clean preamps. Record everything dry with a separate room-tone take — all reverb treatment is applied in FMOD/Wwise per §14.3, not baked into the source files.

---

### 14.5 Pitch deck — speaker notes and hard-question prep

*Notes are written for spoken delivery at ~27 s per slide, totalling ~5 minutes for 11 slides.*

**Slide 1 — Title**
"Aevum is a calm puzzle game you breathe with. We're going to show you three things in the next five minutes: a real gap in the market, a design that fills it in an entirely new way, and why we're the team to build it."

**Slide 2 — The opportunity**
"Calm games are one of the most resilient genres on mobile and Switch — Monument Valley, GRIS, Alba have all done extremely well. But here's the gap: almost none of them are ASMR-first, and none double as a real sleep companion. ASMR on YouTube draws hundreds of millions of monthly views. That audience exists, is large, and is underserved by games. Aevum is built for them."

**Slide 3 — What it is**
"Impossible-geometry puzzles, one historical era per chapter — Edo Japan, Renaissance Italy, and so on. No fail state, no timer, no score. The player cannot permanently get stuck. And history is whispered in, three tiers deep, entirely opt-in."

**Slide 4 — The hook (three states)**
"The differentiator is the three-state structure: Journey for story, Calm for fidget-and-unwind, Sleep for falling asleep to an era. Calm and Sleep are built on opposite sound design — Calm is trigger-rich and interactive; Sleep is bed-rich and hands-free. That's not a skin on top of the game. It's a distinct product within the same content."

**Slide 5 — Why it relaxes**
"The key design lock: the puzzle object and the ASMR trigger are the same thing. In Edo, you slide a paper screen — that's both the mechanic and the sound. In Renaissance, you snap a chalk-line to a vanishing point — that's the puzzle and the satisfying crack. Everything is backed by synced haptics and per-trigger sound controls, including misophonia-safe category muting."

**Slide 6 — Look and feel**
"Soft low-poly, pastel era palettes that warm across time — Edo at dusk, Renaissance at golden hour. Think Monument Valley's silhouette clarity with a handmade warmth. [show concept art here]"

**Slide 7 — Content**
"8–10 eras at launch, expandable as paid era packs. Two lead chapters fully designed and partially prototyped: Edo Japan and Renaissance Italy. The impossible-geometry toolkit, the adaptive audio pipeline, and the three-state structure are all chapter-agnostic — new eras drop in."

**Slide 8 — Audience and ethics**
"All ages, explicitly no streaks, no FOMO, no ads. This is a product a parent hands a child, or a clinician recommends to a patient. It's also a product that earns trust and gets recommended precisely because it doesn't try to manipulate the player — and that trust is the moat."

**Slide 9 — Business**
"Premium one-time purchase, era packs as expansions. Strong natural fit for Switch, Steam, and Apple Arcade — each of those platforms has rewarded calm, premium-feel games. Optional, tasteful sleep-content angle is a second positioning we can develop post-launch without changing the core product."

**Slide 10 — Roadmap and ask**
"Phase 0 is a vertical slice — one era, end to end, with real field-recorded Foley and adaptive audio, 4–6 beats, user-tested with a before/after calm self-report. It answers two questions: does the ASMR loop actually relax people, and does impossible-geometry-by-era hold attention without urgency? We're bringing that to you [insert ask: funding / publishing deal / platform commitment]."

**Slide 11 — Team**
"We have design, production, and the brief locked. The two critical hires are a co-lead audio/Foley designer — who is as much a co-creator as a sound engineer — and a Unity gameplay engineer. [introduce team]. The ask also covers making those hires."

---

#### Three slides most likely to draw hard questions

**Slide 2 — "The opportunity" (the market claim)**

*Hard question:* "Monument Valley has been out for ten years. Alba, GRIS, and a dozen others exist. Why hasn't anyone done ASMR-first already — is there actually a gap, or is there a reason it doesn't work?"

*Answer:* The gap exists because ASMR and games have almost never been designed together from first principles — ASMR content lives on YouTube, games have borrowed its aesthetic as a skin (lo-fi backgrounds, soft palettes) without treating the trigger as the game mechanic. The one-sentence case: there is a hundred-million-view audience on YouTube that comes back every night to fall asleep to ASMR; not one game has a dedicated sleep companion mode built on real ASMR sound design, not spa music. The sleep angle is the unlock, because sleep is a use-case games have almost entirely ignored. Monument Valley doesn't have a sleep timer. Alba doesn't have a thinning soundscape. We do.

**Slide 9 — "Business" (monetization specifics)**

*Hard question:* "Premium + era packs on mobile is a hard sell right now. Have you considered subscription, or going free-to-play with a soft paywall?"

*Answer:* The locked no-dark-patterns decision (§2) is a feature, not a constraint — it's the reason the sleep use-case is credible. A F2P or subscription model on a sleep app creates an anxiety loop: "do I still have this tomorrow?" Premium one-time purchase removes that entirely, and that purity is part of the pitch to Apple Arcade / Switch, both of which have rewarded premium calm games (Monument Valley 1 & 2 together are over 150M downloads at paid price points). A tasteful optional subscription for new sleep dioramas / seasonal content is viable post-launch, but only after the premium trust base is established. We won't compromise §2 to close a deal.

**Slide 10 — "Roadmap and ask" (the blank)**

*Hard question:* "You have a prototype and a doc. What have you actually built, and what are you asking for specifically?"

*Answer:* We have a fully designed and playable web vertical slice of the Edo chapter — 3 beats interactive, Calm mode with triggers, Sleep mode with timer and thinning curve, built and running. The ask for Phase 0 is [specific figure / resource / deal structure — fill in before pitch]. Phase 0 produces a Unity build with real field-recorded Foley, adaptive audio, 6 beats, and a playtest cohort with before/after calm self-reports. That is the proof-of-concept that de-risks Phase 1 for both sides. We are not asking you to fund a full game — we are asking you to fund the evidence.

---

### 14.6 Hint / idle-nudge pacing — all six Edo beats (no-fail rule)

**General principle:** three tiers of nudge, all non-blocking, all reset instantly on any player action. The game never auto-solves and never penalises. Idle is not failure — some players are looking, reading, or resting.

| Beat | What "idle" means | Tier 1 (~20 s) | Tier 2 (~45 s) | Tier 3 (~90 s) | No-fail guarantee |
|---|---|---|---|---|---|
| **1. Sliding veranda** | The shoji panel untouched | The panel pulses with a warm edge-glow | Pulse repeats + a single soft *shhk* preview plays from the panel, unprompted | Camera drifts slowly to frame the shoji and the gap beyond, holds 2 s, returns | Only one interactive object exists at this beat; there is no "wrong" choice |
| **2. Still-water garden** | The pond surface untouched | Pond gets a faint circular ripple-glow from its centre | Ripple-glow + one gentle koi-plip sound plays on its own | Camera drifts to the pagoda's reflection and lingers briefly | Calming the pond has no fail state — it only settles, never breaks |
| **3. Moon gate** | Rings untouched, or stalled mid-rotation for 20 s | Stone rings get a soft directional highlight on their leading edge | Highlight + a faint stone-grind preview plays in the correct rotation direction | Camera drifts along the arc the rings need to travel, returns | Rings rotate freely in either direction and wrap; no position is permanently wrong |
| **4. The paper house** | No screen slid for 20 s, or the same non-progressing screen slid repeatedly | The single screen that advances the lantern room pulses warm (per §8 design notes) | Pulse repeats + that screen's *shhk* plays once, unprompted | Camera drifts toward the unlit lantern room to remind the player of the goal | Any screen can be slid back; idle nudge never forces or blocks a slide |
| **5. Torii ascent** | No gate passed for 20 s | The next gate in the ascending loop gets a soft warm halo | Halo + the breathing-bridge pacing cue (the slow in/out breath sound) gently emphasises the rhythm | Camera holds a slow upward drift through the next gate | Gates lead only forward at the player's own pace; the loop has no timer and no backward failure |
| **6. Lantern release** | No lantern floated for 20 s | The next unlit lantern pulses a warm amber | Pulse + a single far koto note plays unprompted | Camera drifts to the reflection point where the floating lanterns will complete the pattern | Lanterns may be floated in any order that still resolves the reflection; partial completion is always valid |

**Shared rules across all beats:**
- Every nudge is visual + audio only (no gameplay-state change, no text prompt, no spoken instruction).
- Any player interaction — even touching the wrong object — resets the idle counter to zero. Exploration is never penalised.
- Tier 3 camera drift is always ≤3 s and always returns full control to the player; it cannot be triggered if the player is mid-interaction.
- No Tier 4 exists. The game does not solve puzzles for players.

---

### 14.7 Six additional eras — era-pack pipeline

| Era | Architecture & signature illusion | ASMR palette | Learning hook | Lore hook |
|---|---|---|---|---|
| **Classical Greece — "The Reasoned Forum"** | Marble agora & colonnades; *entasis* — columns are subtly curved to look perfectly straight from the standing viewer's angle; puzzle: apply the optical correction curves so distant columns read as vertical | Chisel on marble, olive-press creak, sea breeze, distant kithara | Euclidean geometry, democracy & the agora | "The columns aren't straight — they only look that way from exactly where you're meant to stand." |
| **Maya — "The Long Count"** | Stepped pyramids; the equinox shadow-serpent (a real light-and-shadow effect at Chichen Itzá); puzzle: align shadow segments across pyramid steps to build a serpent of light at the solstice angle | Hand-clap echo (the pyramid's quetzal-bird chirp), jade beads, copal crackle, distant rain | The Long Count calendar, Maya astronomy | "Clap once at the base of the steps, and the pyramid answers back — the echo sounds exactly like a sacred bird." |
| **Viking Age Scandinavia — "The Knotted Fjord"** | Longhouse + interlace woodcarving; puzzle: trace a single unbroken path through Borre-style knotwork that reorganises the longhouse interior — the path has no beginning and no end | Rope creak, wood-chisel carving, fjord water, hearth-fire crackle | Runic writing, longship navigation | "Viking knotwork has no starting point because the carver never wanted you to find one." |
| **Mughal India — "The Mirrored Garden"** | Charbagh four-part garden + Taj-style reflecting pool; puzzle: restore only one quadrant of the garden — the water mirrors it into the whole; impossible symmetry (the reflection is perfect even when the geometry isn't) | Marble-inlay tap, water-channel trickle, peacock call, garden breeze | Charbagh garden design (paradise in four rivers), Mughal-Persian fusion architecture | "A charbagh garden is built in quarters on purpose — paradise, in Persian tradition, always arrived in four rivers." |
| **Mali Empire / Timbuktu — "The Salt and the Page"** | Mudbrick madrasa & manuscript libraries; puzzle: unfold mudbrick walls like the pages of a manuscript codex — rooms open in sequence like a book being read, echoing Edo's shoji but as bound pages | Vellum page turns, reed-pen scratch, market-cloth rustle, distant call and hand drum | The Timbuktu manuscripts, trans-Saharan salt-and-gold trade | "Paper was sometimes worth more than salt, carried camel-back across the Sahara — and the libraries that held it contained hundreds of thousands of books." |
| **Inca Empire — "The Stone That Needs No Mortar"** | Machu Picchu dry-stone terracing; puzzle: rotate and slide irregular ashlar blocks until their faces interlock exactly — a jigsaw of stone that needs no mortar, locking with a satisfying fit | Stone-on-stone grinding fit, llama bell, mountain wind, aqueduct trickle | Quipu knot record-keeping, the Inca road system | "Inca masons shaped stones so exactly that, five centuries later, a knife blade still can't slip between them." |

---

### 14.8 Accessibility and sound-settings screen

*A complete screen spec. Each setting persists per-user and applies across all three modes unless noted.*

---

#### Section 1 — Sound

*"Each sound category can be adjusted or muted independently. This is an ASMR-first game — some sounds work for you, others don't. Tune it to your ears."*

| Control | Type | Default | Notes |
|---|---|---|---|
| Master volume | Slider 0–100 % | 80 % | Overall output level |
| Pouring & granular | Slider + mute toggle | 80 % / on | Sand, pigment grind, kettle pour |
| Water | Slider + mute toggle | 80 % / on | Trickle, fountain, rain, koi; kept in Sleep by default |
| Brushing & scratching | Slider + mute toggle | 80 % / on | Quill, fresco brush, charcoal |
| Sliding & folding | Slider + mute toggle | 80 % / on | Shoji, paper, gears |
| Ticking & ratchet | Slider + mute toggle | 80 % / on | Gears, wooden dividers |
| Tapping & clacking | Slider + mute toggle | 80 % / on | Chisel, *shishi-odoshi*, footsteps |
| Chimes & bells | Slider + mute toggle | 80 % / on | *Furin*, campanile; intervals lengthen in Sleep |
| Voice & whisper | Slider + mute toggle | 80 % / on | Lore narration, "good night" line |

*Mute toggle is separate from the slider so a quick re-enable restores the prior level rather than snapping to 80 %.*

---

#### Section 2 — Narration

| Control | Type | Default | Notes |
|---|---|---|---|
| Read hour-cards aloud | Toggle | On | The soft close-mic whisper triggered on card tap |
| Ambient lore whispers | Toggle | On | Occasional unprompted ambient narration during Journey |
| Narration volume | Slider | Inherits Voice & whisper slider above | Separate label for clarity |

---

#### Section 3 — Haptics

| Control | Type | Default | Notes |
|---|---|---|---|
| Haptics | Master toggle | On (Off in Sleep by default per §10.6) | |
| Intensity — sharp (taps, ticks) | Low / Med / High | Med | Covers Tapping / Ticking categories |
| Intensity — sustained (slides, swells) | Low / Med / High | Med | Covers Sliding / Water categories |
| Intensity — fine (granular, grain) | Low / Med / High | Med | Covers Pouring / Brushing categories |

*Sleep-mode haptics default to Off; the toggle is also accessible from the Sleep setup screen (§14.8, Sleep section below) for players who want gentle haptic feedback while dozing.*

---

#### Section 4 — Motion & visuals

| Control | Type | Default | Notes |
|---|---|---|---|
| Reduced motion | Toggle | Mirrors OS-level setting; defaults On if the OS requests it | Per §2 locked decision: "reduced-motion respected by default." Reduces parallax, scroll animation, and transition motion — puzzle interactions are unaffected |
| Brightness | Slider 0–100 % | System default | Overlays on display brightness; Sleep mode dims further via its own thinning curve |
| Text size | Small / Medium / Large / X-Large | Medium | Scales all UI text including hour-cards and scene-status copy |
| High-contrast outlines | Toggle | Off | Adds visible shape-outline to all interactive objects; supplements the colorblind-safe palette (never color alone, per §4) |
| One-handed mode | Toggle | Off | Remaps all interactions to a single reachable zone (right or left, configurable); swipe direction adjusted accordingly |

---

#### Section 5 — Breathing guide

| Control | Type | Default | Notes |
|---|---|---|---|
| Show breathing guide | Toggle | Off | A slow visual pulse (ring or soft glow) tied to a simple in / out cadence |
| Haptic with guide | Toggle | Off (only visible when guide is On) | Adds a low slow pulse haptic on each in / out beat |
| Pacing | Slow (4 s in / 6 s out) / Slower (5 s in / 7 s out) | Slow | Available in Calm and Sleep modes; not shown during Journey puzzles to avoid distraction |

---

#### Section 6 — Sleep mode defaults

*These defaults apply each time the player opens Sleep mode; they can always be changed on the Sleep setup screen before a session begins.*

| Control | Type | Default | Notes |
|---|---|---|---|
| Default timer | 15 / 30 / 45 / 60 min / ∞ | 30 min | |
| Default display | Dim to black / Audio-only | Dim to black | |
| Sunrise wake | Toggle | Off | When On: on wake, fades screen + birdsong/ambient over ~90 s before full brightness |
| Haptics during Sleep | Toggle | Off | Overrides the master haptics setting for Sleep sessions only |

---

#### Section 7 — About / safety footer

- *Aevum has no ads, no streaks, no timers, and no way to fail.* It will never send you a notification asking you to return.
- **Reset all sound settings to defaults** — one tap, confirmation dialog.
- **Accessibility feedback** — link to support / feedback channel.

---
