# Aevum — a calm journey through impossible time

*Working title. Alternatives: Vesper, Lull, The Long Hour, Hourwell.*

A Monument Valley-style puzzle game where each chapter is a **period in human history** rebuilt as serene, impossible architecture. There are no enemies, no timers, no score, and no way to fail. You guide a small wandering figure — *the Keeper* — through eras that have "forgotten their own shape," gently coaxing each one's tangled geometry back into harmony. When a structure resolves, the era *remembers itself*: light returns, sounds settle, the world exhales.

The design rests on three pillars that reinforce each other:

1. **Impossible geometry** — optical-illusion puzzles in the Escher / Monument Valley tradition.
2. **Time as the through-line** — eras give the journey a narrative arc and a distinct sensory identity per chapter.
3. **Calm and ASMR as a first-class system** — not a coat of paint, but the core of what the game *is for*.

The reason time periods work better than real places: real landmarks bring licensing risk and a "travel brochure" feel, while eras give you a built-in progression (you literally move through history), and — most importantly — **every era arrives with its own natural Foley palette.** Egypt has pouring sand. Edo Japan has rain on paper and water over stone. The Industrial age has clockwork. The puzzle mechanic and the soundscape can be drawn from the same source material, which is what makes the ASMR pillar feel earned rather than bolted on.

---

## 1. The calm / ASMR system (the heart of the redesign)

This is the differentiator, so it gets first billing. The market already has beautiful, quiet puzzle games (Monument Valley, GRIS, Behind the Frame, Alba). Almost none are **ASMR-first**. That's the open lane.

### No-fail, no-pressure foundation
Calm is impossible alongside anxiety, so the whole structure removes the usual sources of stress: no timer, no score, no death, no lives, no leaderboards, no daily streaks, no FOMO. You cannot get permanently stuck — if you idle, the world gently *suggests* (a path softly pulses, a piece hums) rather than failing you. Pacing is slow by default; the camera drifts rather than snaps.

### Sound-first, not sound-added
Treat the audio designer as a co-lead with the art director. Every interaction has a **signature tactile sound**: rotating a stone dial is a deep, woody *thunk*; sliding a paper screen is a soft *shhk*; a counterweight settling is a low, satisfying *chunk*. The score is **adaptive and partly generative** — as you solve, you unknowingly "compose" a calm soundscape, so the music feels like a consequence of your touch rather than a track playing over you. Spatial / binaural audio is mandatory (prompt the player toward headphones on launch).

### An ASMR trigger taxonomy mapped to mechanics
ASMR works through specific, repeatable sensory triggers. The design deliberately chooses puzzle objects *because of how they sound*:

- **Pouring / granular** — sand, grain, beads (Egypt, marketplaces).
- **Water** — trickle, drip, pour, ripple (gardens, fountains, aqueducts).
- **Brushing / scratching** — quill on vellum, brush on paper, chisel taps.
- **Crinkling / folding** — paper, parchment, cloth, lantern paper.
- **Ticking / ratcheting** — gears, escapements, clockwork.
- **Tapping / clicking** — wood, ceramic, glass, tile.
- **Whispering** — soft narration for lore (see §4).

Each era leans on two or three of these as its dominant texture.

### Haptics, synced to sound
On mobile and controller, every manipulation produces a soft taptic pulse tuned to its sound — the deep thunk of a stone dial carries a low, slow haptic; granular sounds carry a fine stipple of micro-pulses. This is a large part of why an interaction feels *physically satisfying*.

### Visual calm
Soft pastel palettes, low contrast, no harsh edges, generous negative space, slow parallax, and drifting ambient particles (petals, dust motes, embers, snow). **Reduced motion is respected by default**, and motion is opt-*in* rather than opt-out — fitting for a calm app.

### Breathing and rhythm (optional, woven in)
An optional slow-breath guide can sit at the edge of the screen. One signature mechanic — a "breathing bridge" — extends a path in time with a slow inhale/exhale rhythm, so progress and a calming breath cadence become the same action. Never mandatory; always tunable.

### Diorama / "fidget" mode
Once an era is solved, it becomes a **toy you can return to with no goals** — a music-box / zen-garden mode where you just touch things for their sounds. This is both a wind-down feature and a strong retention loop that doesn't rely on dark patterns.

### Bedtime / sleep mode
A dimmed palette, a sleep timer, and slowly auto-advancing ambient scenes let players "fall asleep to an era." This quietly positions the product as a **wellness / sleep app as well as a game** — a second audience and a second storefront category.

### Personalization and care
ASMR is deeply subjective, and some triggers are unpleasant or even distressing for certain people (misophonia). So: let players boost or mute *specific* trigger categories, tune palette warmth, choose narration on/off, and set ambient density. This is an accessibility feature and an ASMR-quality feature at once.

---

## 2. Eras as worlds

Each chapter is an era reimagined as impossible architecture. The era choices below pair an **architectural illusion** (the puzzle) with an **ASMR palette** (the feel) and a **learning hook** (the opt-in lore). The arc runs roughly cool-and-ancient → warm-and-mechanical → luminous-and-hopeful, so the whole game has a felt emotional shape.

| Era | Architecture & signature illusion | ASMR palette | Learning hook |
|---|---|---|---|
| **Neolithic / Stone** | Standing-stone megaliths; align them so a solstice light-beam threads the structure | Wind over stone, low drum, grinding stone, distant fire | Astronomy, solstice alignment, how megaliths were raised |
| **Ancient Egypt** | Pyramids & obelisks; shifting **sand** buries and reveals impossible paths; counterweights | Pouring sand, reed brush on papyrus, deep stone echo | Hieroglyphs, the Nile, ramp & lever engineering |
| **Tang / Song China** | Garden pagodas & moon gates; **reflection-symmetry** puzzles in still water; rotating gate rings | Water trickle, bamboo chimes, brush calligraphy, tea pour | Gardens, woodblock printing, the magnetic compass |
| **Islamic Golden Age** | Courtyards & muqarnas; the architecture *is* an impossible tessellation you rotate into alignment | Courtyard fountains, turning pages, soft birdsong | Algebra, geometry, the astrolabe, the great libraries |
| **Medieval Gothic** | Cathedrals & impossible vaults; **colored light** through stained glass paints the only walkable path | Distant choral hum, candle wax, quill, rain on stone, bells | Gothic engineering, illuminated manuscripts |
| **Edo Japan** | Pagodas, torii, raked gardens; sliding **shoji panels** reorder space | Rain on paper, water over stone, *furin* chime, wood clack | Ukiyo-e, traditional joinery, the floating world |
| **Renaissance Italy** | The era that *invented linear perspective* — **forced-perspective / anamorphic** puzzles that resolve from one viewpoint | Quill, marble chisel taps, fresco brushwork, fountain | Perspective, da Vinci's notebooks, the printing press |
| **Industrial / Victorian** | Brass clockwork & steam; rotating **gear trains** and pneumatic lifts drive the geometry | Ticking clocks, gentle steam hiss, ratchets, typewriter | The clock, the steam engine, railways |
| **Jazz Age / Art Deco** | Geometric deco towers; symmetry & repetition motifs; impossible vertical elevators | Vinyl crackle, soft brush-drum jazz, rain on a city | Deco design, electrification, the radio |
| **Solarpunk future** | An overgrown, luminous utopia; **light/energy routing** as the final, gentlest puzzle | Synth pads, wind through leaves, water | Speculative & hopeful — "time, finally healed" |

Eight to ten eras is a full game; the format extends cleanly into era packs (a Maya chapter, a Belle Époque chapter, an ancient Greece chapter). Renaissance Italy deserves to be a centerpiece — it's the one era whose *real* historical breakthrough (linear perspective) is literally the game's core mechanic.

---

## 3. The optical-illusion toolkit

The puzzle vocabulary, each illusion with a natural "home" era:

- **Impossible connections** — paths that join only because they align on screen, not in 3D (the Monument Valley signature). Universal.
- **Forced perspective & anamorphosis** — a structure that only resolves from one viewpoint. *Renaissance.*
- **Rotation & perspective shift** — turning the world or a piece changes what connects. *China, Islamic, Deco.*
- **Light & shadow as geometry** — beams and colored light define walkable space. *Neolithic, Gothic.*
- **Reflection & symmetry** — the water's reflection is also a path. *China, Japan.*
- **Ambiguous figure-ground** — what's solid vs. empty flips with attention. *Egypt, Industrial.*

Difficulty rises by *layering* these, never by adding pressure. The satisfaction curve is "oh, I *see* it now," not "I beat the clock."

---

## 4. Learning & lore — opt-in, all ages, whispered

Educational content kills calm the moment it feels like homework, so it's delivered in three layers and **never blocks progress**:

1. **Play layer** — anyone, toddler to grandparent, can solve by intuition with zero reading.
2. **Ambient layer** — optional collectible "hour-cards": a charming sentence or two of era flavor, softly narrated.
3. **Deep-dive layer** — an opt-in *Almanac of Hours* codex with richer, accurate history for the curious.

All narration uses a soft, close-mic whisper-adjacent voice — which doubles as an ASMR trigger. Learning that *is* a relaxation feature.

---

## 5. Art & audio direction

Low-poly, soft-shaded 3D with flat, warm lighting and pastel era palettes that shift subtly across the timeline (cooler and dustier in antiquity, warmer and brassier through the industrial age, luminous toward the future). The audio team should **field-record real materials** — actual sand, actual paper, actual clock escapements — rather than rely on stock libraries; the authenticity of the Foley is the product. Budget for a dedicated Foley/ASMR sound designer from day one.

---

## 6. Accessibility & ethical design

Calm and wellbeing are the brand, so the design explicitly refuses engagement dark patterns: no streaks, no manipulative push notifications, no FOMO mechanics, no loot, no rage-bait. Plus: colorblind-safe puzzles (never color alone — pair with shape/position), one-handed play, full narration option, no flashing, scalable text, and the per-trigger sound controls described in §1 (which double as misophonia care). The product should be something a person can trust to wind down with.

---

## 7. Technology

- **Engine:** Unity (URP) — best fit for the stylized low-poly look, the camera/shader work, and broad platform reach.
- **The core trick:** impossible geometry is faked with **screen-space connection logic** — two points "connect" when they line up from the current camera angle via raycasts, not because they touch in 3D. This is the well-known Monument Valley approach and it's what makes the illusions feel solid.
- **Audio:** spatial audio middleware (FMOD or Wwise) is central, not optional — adaptive/generative ambience and per-object Foley live here.
- **Haptics:** platform haptic APIs (iOS Core Haptics, controller rumble) driven off the same audio events.
- **Platforms:** mobile first (touch suits the genre), with Nintendo Switch and Steam as natural homes for a calm puzzler. Apple Arcade is a strong fit and a possible funding route.

---

## 8. Business model

A **premium one-time purchase** in the Monument Valley tradition fits the no-dark-patterns ethos best, with optional **era packs** as paid expansions. The "sleep / wind-down" positioning opens a tasteful subscription possibility (rotating ambient scenes, new sleep dioramas) — but only if it never gates the core game or pressures the player. Apple Arcade or a platform feature deal can de-risk the calm, no-monetization-hooks model. Avoid ads entirely; they are antithetical to the experience.

---

## 9. Production roadmap

**Phase 0 — Vertical slice (the proof).** Build *one* era end to end at full polish, with real field-recorded Foley, adaptive audio, haptics, and 4–6 puzzles. Pick **Edo Japan** or **Renaissance Italy** — Japan for the richest ASMR palette, Renaissance for the cleanest "the history *is* the mechanic" story. This slice exists to answer the only two questions that matter at this stage:

> Does the ASMR/calm loop actually relax people? And does impossible-geometry-by-era hold attention *without* urgency?

Test it on real players with a simple before/after calm self-report and watch session length and return-to-diorama behavior.

**Phase 1 — Core game.** Lock the puzzle toolkit and audio pipeline; produce 4–5 eras; ship the Almanac, diorama mode, and accessibility/trigger controls.

**Phase 2 — Full release.** Round the era count to 8–10, add bedtime/sleep mode, polish, and launch on mobile + Switch/Steam.

**Phase 3 — Expansion.** New era packs and seasonal sleep dioramas; explore the wellness-app positioning as a second front.

---

## 10. Risks & mitigations

- **ASMR is subjective** → per-trigger tuning and mute controls; never force a single sensory profile.
- **Audio production is expensive and specialized** → it's also the moat; budget for it deliberately and prove it in the vertical slice before scaling.
- **The "calm game" space has strong incumbents** → differentiate hard on *ASMR-first* + the *time-travel spine*. Nobody owns "the game you relax to with your headphones on, that also walks you through history."
- **Calm can read as "boring" to some** → the impossible-geometry puzzles and the "oh, I see it" payoff are the hook that keeps it a *game*, not just an ambient toy.

---

### The one-line pitch
*A puzzle game you breathe with — drift through the eras of history as impossible, dreamlike architecture, set each one gently right, and let the sand, the rain, and the clockwork settle your mind.*
