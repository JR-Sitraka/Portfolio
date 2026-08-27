import { TbCode, TbCpu, TbLayout2 } from "react-icons/tb";

/**
 * PrincipleCard is an informational container: it holds no link, button or
 * other focusable descendant, takes no tabindex, and is never made clickable.
 * It therefore has no focus state — the boundary change is pointer hover only.
 */
function PrincipleCard({ Icon, title, body }) {
  return (
    <article className="principle">
      <div className="principle__icon">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="t-h4 principle__title">{title}</h3>
      <p className="t-body-sm principle__body">{body}</p>
    </article>
  );
}

const PRINCIPLES = [
  {
    Icon: TbLayout2,
    title: "Interfaces people can follow",
    body:
      "I want each screen to communicate clearly, with useful feedback, accessible " +
      "interactions, and motion that serves a purpose.",
  },
  {
    Icon: TbCode,
    title: "Logic I can explain",
    body:
      "I value predictable behaviour, understandable structure, and verifying the " +
      "paths people actually use—not only the happy path.",
  },
  {
    Icon: TbCpu,
    title: "AI with a reason",
    body:
      "I'm learning to use LLMs, retrieval, and agent workflows where they solve a " +
      "real product problem—not merely to add AI to a project.",
  },
];

export default function AboutSection() {
  return (
    <section className="section wrap" id="about">
      <div className="about__grid reveal">
        <div className="about__intro">
          <span className="eyebrow t-eyebrow">ABOUT</span>
          <h2 className="t-h2">Learning broadly.<br />Building carefully.</h2>
          <p className="t-body-lg about__body">
            I&apos;m a student software engineer building responsive web and mobile products
            while expanding into AI engineering. I enjoy working where clear interfaces,
            dependable application logic, and thoughtful technical decisions come together.
          </p>
        </div>

        <div className="about__cards">
          {PRINCIPLES.map(({ Icon, title, body }) => (
            <PrincipleCard key={title} Icon={Icon} title={title} body={body} />
          ))}
        </div>
      </div>
    </section>
  );
}
