import Image from "next/image";

/**
 * MediaSection — section type "media".
 *
 * The no-placeholder rule expressed structurally. When the slot resolves to no
 * asset this returns null: no wrapper, no frame, no reserved space, no grey
 * box, no "coming soon". The surrounding prose closes up as though the slot
 * had never been declared, so there is no empty state to design.
 *
 * Assets are supplied as data through the render context. No asset resolves in
 * the Foundation packet, so every media section renders nothing today — which
 * is the correct output, not a degraded one.
 *
 * next/image rather than a plain <img>. The three existing images in this
 * project use <img> and are frozen; this file is new and unreachable, so it
 * takes the path that introduces no lint finding. The divergence is deliberate
 * and recorded, not accidental. width and height come from the slot's asset
 * data, which the media-slot schema provides; an asset missing either cannot
 * be laid out without shifting the page, so it resolves to nothing rather than
 * rendering at a guessed size.
 */
export default function MediaSection({ section, context = {} }) {
  const asset = (context.assets || {})[section.slot];
  if (!asset || !asset.src || !asset.width || !asset.height) return null;

  return (
    <figure>
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
      />
      {asset.caption && <figcaption className="t-meta-sm muted">{asset.caption}</figcaption>}
    </figure>
  );
}
