import { useEffect, useState } from "react";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";

/**
 * ToolboxStrip — the technologies genuinely in use, shown continuously.
 *
 * Full-bleed outer strip between --border hairlines: the one component that
 * deliberately does not align to the 1152px shell. The chip list is duplicated
 * once so the marquee loops seamlessly; the duplicate is aria-hidden so screen
 * readers hear each technology once.
 *
 * The strip keeps moving under the pointer — hover and focus-within do not
 * pause it. The control at the right edge is the only thing that changes the
 * running state.
 *
 * The strip carries tabIndex={0} because under prefers-reduced-motion the
 * animation stops and the strip becomes horizontally scrollable — it is
 * focusable precisely because it scrolls.
 */
function ChipSet({ technologies, duplicate }) {
  return (
    <div className="toolbox__set" {...(duplicate ? { "aria-hidden": "true" } : {})}>
      {technologies.map(({ name, icon: Icon, color }) => (
        <span className="chip t-label" key={name}>
          <Icon color={color} aria-hidden="true" />
          {name}
        </span>
      ))}
    </div>
  );
}

export default function ToolboxStrip({ technologies }) {
  const used = technologies.filter((technology) => technology.used);
  const [paused, setPaused] = useState(false);
  /* null until measured. Under reduced motion the control is never rendered at
     all rather than hidden: there is no animation to control, and a rendered
     control could start motion for someone who asked for none. Starting at null
     means a reduced-motion user never receives it, not even for a frame. */
  const [motionAllowed, setMotionAllowed] = useState(null);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotionAllowed(!query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <section className="toolbox" id="stack" aria-label="Technologies" tabIndex={0}>
      <div className={`toolbox__track${paused ? " is-paused" : ""}`}>
        <ChipSet technologies={used} />
        <ChipSet technologies={used} duplicate />
      </div>

      {motionAllowed && (
        <>
          <div className="toolbox__fade" aria-hidden="true" />
          <button
            className="toolbox__ctl"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            aria-label={paused ? "Play technology strip" : "Pause technology strip"}
          >
            {paused ? <TbPlayerPlayFilled aria-hidden="true" /> : <TbPlayerPauseFilled aria-hidden="true" />}
          </button>
        </>
      )}
    </section>
  );
}
