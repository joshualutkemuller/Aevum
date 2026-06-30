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
