import { useEffect, useRef, useState } from "react";
import {
  TbCheck,
  TbClock,
  TbEar,
  TbKeyboard,
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbVolume,
} from "react-icons/tb";

/**
 * ProjectRepresentation — Numera's card media.
 *
 * Ported from `numera-media-concepts-round2.html` (68189 bytes, SHA-256
 * F1AC2250…D496): concepts F, D and E, their markup and their geometry. A, B
 * and C are a preserved exploration record and are not implemented.
 *
 * Semantic HTML plus inline SVG, never rasterised. Every level name, range,
 * prompt, answer and legend entry below is a real text node; the SVG carries
 * only connecting paths, rings and waveform geometry. No screenshot is used as
 * the asset here, and no product state is invented — the four level names and
 * ranges, the spoken prompt, the typed answer, the strikes and the progression
 * locks are all real Numera elements.
 *
 * The artifact is authored in a fixed 633 × 396 space. Rather than re-author
 * its numbers, that space is preserved exactly and expressed through `--u`,
 * one artifact pixel: at a 633px-wide well `--u` resolves to 1px and the
 * composition is pixel-identical to the source.
 */

/* Concept F, desktop form — progression path, authored at 633 x 396.
   Node one sits 22px lower than originally authored and the first path segment
   is re-anchored to follow it, because the Live chip overlapped its icon. */
function ConceptFDesktop() {
  return (
    <div className="rep rep--f">
      <svg
        className="rep__paths"
        viewBox="0 0 633 396"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M66 118 C 150 118, 175 176, 230 182" fill="none" stroke="#FF6A45" strokeWidth="1.5" opacity=".6" />
        <path d="M230 182 C 300 190, 320 262, 366 268" fill="none" stroke="#2A2F34" strokeWidth="1.5" strokeDasharray="5 5" />
        <path d="M366 268 C 440 274, 452 150, 498 122" fill="none" stroke="#2A2F34" strokeWidth="1.5" strokeDasharray="5 5" />
        <circle cx="66" cy="118" r="4" fill="#FF6A45" />
      </svg>

      <div className="rep__st rep__st--1 is-on">
        <div className="rep__ic"><TbNumber1 /></div>
        <div className="rep__nm">The Basics</div>
        <div className="rep__rg">[0 – 20]</div>
      </div>
      <div className="rep__st rep__st--2">
        <div className="rep__ic"><TbNumber2 /></div>
        <div className="rep__nm">The Decades</div>
        <div className="rep__rg">[20 – 100]</div>
      </div>
      <div className="rep__st rep__st--3">
        <div className="rep__ic"><TbNumber3 /></div>
        <div className="rep__nm">The Hundreds</div>
        <div className="rep__rg">[100 – 1,000]</div>
      </div>
      <div className="rep__st rep__st--4">
        <div className="rep__ic"><TbNumber4 /></div>
        <div className="rep__nm">The Big Leagues</div>
        <div className="rep__rg">[1,000 – 1,000,000+]</div>
      </div>

      <div className="rep__legend">
        <span className="rep__lg"><span className="rep__sw" />UNLOCKED</span>
        <span className="rep__lg"><span className="rep__sw rep__sw--lock" />LOCKED</span>
        <span className="rep__lg"><TbVolume />SPOKEN PROMPT</span>
        <span className="rep__lg"><TbClock />TIMED</span>
      </div>
    </div>
  );
}

/**
 * Concept F, compact form — the responsive form of F, not a new concept.
 *
 * Authored natively in a 350 x 219 space; the path is re-drawn for that box
 * rather than the desktop path scaled down. Same progression, same four nodes
 * in the same order, same solid-accent-completed / dashed-locked logic, same
 * origin dot and ground. Names only: the four ranges and the four-item legend
 * are not rendered at this size — they are 11px in the desktop authoring and
 * neither survives the width. Node one sits clear of the Live chip.
 */
function ConceptFCompact() {
  return (
    <div className="rep rep--fc">
      <svg
        className="rep__paths"
        viewBox="0 0 350 219"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M46 80 C 84 82, 92 104, 126 108" fill="none" stroke="#FF6A45" strokeWidth="1.5" opacity=".6" />
        <path d="M126 108 C 164 112, 176 148, 210 152" fill="none" stroke="#2A2F34" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M210 152 C 254 156, 262 92, 292 78" fill="none" stroke="#2A2F34" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="46" cy="80" r="3.5" fill="#FF6A45" />
      </svg>

      <div className="rep__cst rep__cst--1 is-on">
        <div className="rep__ic"><TbNumber1 /></div>
        <div className="rep__nm">The Basics</div>
      </div>
      <div className="rep__cst rep__cst--2">
        <div className="rep__ic"><TbNumber2 /></div>
        <div className="rep__nm">The Decades</div>
      </div>
      <div className="rep__cst rep__cst--3">
        <div className="rep__ic"><TbNumber3 /></div>
        <div className="rep__nm">The Hundreds</div>
      </div>
      <div className="rep__cst rep__cst--4">
        <div className="rep__ic"><TbNumber4 /></div>
        <div className="rep__nm">The Big Leagues</div>
      </div>
    </div>
  );
}

/* Concept D — the learning loop. */
const D_WAVE = [8, 14, 20, 11, 17, 9, 15, 7];

function ConceptD() {
  return (
    <div className="rep rep--d">
      <svg
        className="rep__paths"
        viewBox="0 0 633 396"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M120 92 C 300 40, 420 40, 512 92" fill="none" stroke="#2A2F34" strokeWidth="1.5" />
        <path d="M540 128 C 578 210, 560 268, 500 306" fill="none" stroke="#2A2F34" strokeWidth="1.5" />
        <path d="M470 330 C 340 372, 250 372, 150 330" fill="none" stroke="#2A2F34" strokeWidth="1.5" />
        <path d="M96 300 C 44 250, 46 160, 96 118" fill="none" stroke="#FF6A45" strokeWidth="1.5" opacity=".55" />
        <circle cx="96" cy="118" r="3.5" fill="#FF6A45" />
      </svg>

      <div className="rep__node rep__node--1">
        <div className="rep__ic"><TbVolume /></div>
        <div className="rep__cap">01 · HEAR</div>
        <div className="rep__wv">
          {D_WAVE.map((h, i) => <i key={i} style={{ height: `calc(${h} * var(--u))` }} />)}
        </div>
      </div>
      <div className="rep__node rep__node--2">
        <div className="rep__ic"><TbEar /></div>
        <div className="rep__cap">02 · RECOGNISE</div>
        <div className="rep__val">&ldquo;seventy-six&rdquo;</div>
      </div>
      <div className="rep__node rep__node--3">
        <div className="rep__ic"><TbKeyboard /></div>
        <div className="rep__cap">03 · TYPE</div>
        <div className="rep__val">76<span className="rep__caret" /></div>
      </div>
      <div className="rep__node rep__node--4">
        <div className="rep__ic"><TbCheck /></div>
        <div className="rep__cap">04 · FEEDBACK</div>
        <div className="rep__dots"><i className="is-hit" /><i className="is-hit" /><i /></div>
      </div>

      <div className="rep__centre">
        <div className="rep__cn">76</div>
        <div className="rep__cw">THE DECADES · [20 – 100]</div>
      </div>
    </div>
  );
}

/* Concept E — layered numeral field. */
const E_WAVE = [10, 18, 30, 40, 26, 14, 34, 22, 12, 28, 38, 20, 10, 24, 32, 16, 9, 20, 28, 14];

function ConceptE() {
  return (
    <div className="rep rep--e">
      <div className="rep__ghost rep__ghost--a">18</div>
      <div className="rep__ghost rep__ghost--b">640</div>
      <div className="rep__tick">LEVEL 02 · THE DECADES · [20 – 100]</div>
      <div className="rep__lead">se<span>venty</span>-six</div>
      <div className="rep__word">76 · heard, not read</div>

      <div className="rep__mid">
        <div className="rep__sm"><b>0–20</b> the basics</div>
        <div className="rep__sm"><b>20–100</b> the decades</div>
        <div className="rep__sm">100–1,000 the hundreds</div>
        <div className="rep__sm">1,000+ the big leagues</div>
      </div>

      <div className="rep__base">
        <div className="rep__wv">
          {E_WAVE.map((h, i) => <i key={i} style={{ height: `calc(${h} * var(--u))` }} />)}
        </div>
        <div className="rep__prog"><i className="is-on" /><i className="is-on" /><i /><i /></div>
      </div>
    </div>
  );
}

const CONCEPTS = { F: ConceptFDesktop, D: ConceptD, E: ConceptE };

/* Timing, ported unchanged from the artifact: 1000ms before the sequence
   starts, 1600ms of dwell per concept, 600ms of slide (in the stylesheet). */
const START_DELAY = 1000;
const DWELL = 1600;

export default function ProjectRepresentation({ sequence = ["F", "D", "E"], alt }) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(null);
  const rootRef = useRef(null);
  const startRef = useRef(null);
  const cycleRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window.matchMedia !== "function") return undefined;

    /* Short-circuit before anything is scheduled. Someone who asked for no
       motion never gets a timer, not a suppressed one. Coarse pointers stay
       static too — the sequence is a desktop pointer affordance. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;

    /* The artifact binds the sequence to the whole card, not to the well. */
    const card = root.closest(".card") || root;

    const clear = () => {
      clearTimeout(startRef.current);
      clearInterval(cycleRef.current);
      startRef.current = null;
      cycleRef.current = null;
    };

    const advance = () => {
      setCurrent((index) => {
        setPrevious(index);
        return (index + 1) % sequence.length;
      });
    };

    /* Only pointer events start it. Focus deliberately does not: a keyboard
       user is never handed an indefinite animation. */
    const onEnter = () => {
      clear();
      startRef.current = setTimeout(() => {
        advance();
        cycleRef.current = setInterval(advance, DWELL);
      }, START_DELAY);
    };

    const onLeave = () => {
      clear();
      setPrevious((p) => (p === null ? p : null));
      setCurrent(0);
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      clear();
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [sequence]);

  return (
    <div className="rep-stage" ref={rootRef} role="img" aria-label={alt}>
      {sequence.map((key, index) => {
        const Concept = CONCEPTS[key];
        if (!Concept) return null;
        const state = index === current ? " is-in" : index === previous ? " is-out" : "";
        return (
          <div className={`rep-layer${state}`} key={key} aria-hidden="true">
            {/* Both forms of F are always in the markup. The container query on
                the well decides which one paints -- no script chooses, so the
                correct form is right on first paint and survives without JS. */}
            {key === "F" ? (
              <>
                <ConceptFDesktop />
                <ConceptFCompact />
              </>
            ) : (
              <Concept />
            )}
          </div>
        );
      })}
    </div>
  );
}
