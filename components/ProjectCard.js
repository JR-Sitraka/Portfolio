import { TbArrowUpRight, TbBrandGithub, TbGitBranch } from "react-icons/tb";
import ProjectRepresentation from "@/components/ProjectRepresentation";
import { resolveTech } from "@/lib/iconMap";

/** Solid centre dot inside a thin ring, both currentColor, so the glyph always
 *  matches its label. Only the glyph animates; the chip is static. */
function LiveGlyph() {
  return <span className="live-glyph" aria-hidden="true" />;
}

/**
 * StatusChip — states a project's real status, never implying more than exists.
 *
 * The Live variant has two backing forms, selected by what sits behind it.
 * Over the dark empty-media well the translucent --status-live tint measures
 * 7.21:1. Over an image-backed well that same tint composites against the
 * screenshot instead: on the Numera capture it falls to 1.63:1, so an opaque
 * --surface backing is used there and restores the label to 9.68:1. Everything
 * else about the chip is identical between the two.
 */
/**
 * `onMedia` selects the opaque backing, and is for **photographic** media only.
 * A representation is a dark well, so it keeps the translucent form.
 */
function StatusChip({ status, onMedia }) {
  if (status === "live") {
    return (
      <span className={`status status--live${onMedia ? " status--live-on-media" : ""}`}>
        <LiveGlyph />
        Live
      </span>
    );
  }

  return (
    <span className="status status--repo">
      <TbGitBranch aria-hidden="true" />
      Repository
    </span>
  );
}

function TechTag({ name }) {
  const resolved = resolveTech(name);
  if (!resolved) return null;

  const { icon: Icon, color } = resolved;
  return (
    <span className="tag">
      <Icon color={color} aria-hidden="true" />
      {name}
    </span>
  );
}

/**
 * ProjectCard — featured and compact variants.
 *
 * Resting state: title --text-primary, outer border --border, accent top rule
 * undrawn. On hover or focus within, the title takes the project accent, the
 * top rule draws left to right, the media scales and the card lifts — while the
 * outer border strengthens to --border-interactive and stays neutral. The
 * accent never reaches the card frame.
 *
 * The media well and the title are the primary link. There is no invisible
 * stretched overlay, and no non-interactive container takes a tabIndex.
 */
export default function ProjectCard({ project, featured = false }) {
  const { title, status, description, accent, icon: ProjectIcon, media, tech, links } = project;

  const primaryHref = links.live || links.repo;
  const hasMedia = Boolean(media);
  const isRepresentation = media?.type === "representation";
  /* Only photographic media composites against unknown pixels and needs the
     opaque chip backing. */
  const chipOnPhotographicMedia = hasMedia && !isRepresentation;
  /* the reference sets --pc through an inline style object; this build carries
     it on a class instead, because .card also declares --pc and no inline style
     may set a property a CSS rule also sets */
  const accentClass = `card--${accent.replace(/^--project-/, "")}`;

  return (
    <article
      className={`card${featured ? " card--featured" : ""} ${accentClass} reveal`}
    >
      <div className="card__rule" aria-hidden="true" />

      {/* The well's link is a duplicate route to the same project as the title,
          so it leaves the accessibility tree. The status chip is a sibling of
          it rather than a descendant, so its text is not hidden with it. */}
      <div className={`card__media${hasMedia ? "" : " card__media--empty"}`}>
        <StatusChip status={status} onMedia={chipOnPhotographicMedia} />
        {/* For a photographic or empty well the link is a duplicate route to
            the same project and leaves the accessibility tree. A representation
            must expose one stable description, so there the link stays in the
            tree — still not a tab stop — and takes its name from the role="img"
            inside it. */}
        <a
          className="card__media-link"
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          {...(isRepresentation ? {} : { "aria-hidden": "true" })}
        >
          {isRepresentation ? (
            <ProjectRepresentation sequence={media.sequence} alt={media.alt} />
          ) : hasMedia ? (
            <img className="card__media-inner" src={media.src} alt={media.alt} />
          ) : (
            <span className="card__media-inner">
              <ProjectIcon aria-hidden="true" />
            </span>
          )}
        </a>
      </div>

      <div className="card__body">
        <h3 className={`${featured ? "t-h3" : "t-h4"} card__title`}>
          <a href={primaryHref} target="_blank" rel="noopener noreferrer">{title}</a>
        </h3>

        <p className={`${featured ? "t-body" : "t-body-sm"} card__desc`}>{description}</p>

        <div className="tags">
          {tech.map((name) => <TechTag key={name} name={name} />)}
        </div>

        {featured && (
          <div className="card__actions">
            {links.live && (
              <a
                className="cta-pill cta-pill--scale t-label"
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live <TbArrowUpRight aria-hidden="true" />
              </a>
            )}
            {links.repo && (
              <a
                className="btn-outline"
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub aria-hidden="true" />Repository
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
