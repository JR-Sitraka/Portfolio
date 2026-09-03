/**
 * Starter Kit V4.2 — case-study content module.
 *
 * Transcribed from the approved draft starter-kit-case-study-draft.md,
 * SHA-256 54ecd0d9ee6fed382c1ce1c3bd9ce085581cbce07dd35181e7698652c96eb2de,
 * using the extraction map in the approved implementation proposal.
 *
 * Loaded server-side only, by lib/caseLoaders.js from getStaticProps. It is
 * never imported by the homepage or any client component, so none of this
 * content reaches the homepage bundle.
 *
 * This draft carries no decision-shaped section, so no `decision` section is
 * declared here: the schema is singular and this case study's disclosed gaps
 * are three parallel items of ordinary prose. It also merges limitations and
 * claims-not-made into one section, so there is a single `limitation` callout
 * rather than the two callouts Trailhead required. No derived field, no split
 * and no composed value appears in this module; every unit is transcribed.
 *
 * The node builders below construct plain data. The exported object contains
 * no functions and no JSX and is fully JSON-serializable, as getStaticProps
 * requires.
 */

/* inline nodes */
const t = (v) => ({ t: "text", v });
const c = (v) => ({ t: "code", v });
const strong = (...children) => ({ t: "strong", children });
const em = (...children) => ({ t: "em", children });
/* Evidence ids are an ordered array and that order is content: it is carried
   through exactly as authored, never sorted or de-duplicated. */
const ev = (...ids) => ({ t: "evidence", ids });

/* block nodes */
const p = (...content) => ({ type: "paragraph", content });
const list = (...items) => ({ type: "list", ordered: false, items });

export const content = {
  meta: {
    /* projectTitle duplicates utils/portfolioData.js -> starter-kit.title. The
       duplication is deliberate and verified as consistent, not resolved by a
       runtime lookup that would recouple the route to homepage data. */
    projectTitle: "Starter Kit V4.2",
    title: "Starter Kit V4.2 — Sitraka Josoa",
    /* Derived from the hero: formatting removed, evidence nodes omitted. */
    description:
      "Starter Kit V4.2 — a development framework with a written mechanism for refusing its own growth.",
  },

  links: {
    /* Exactly portfolioData's starter-kit.links.repo. That entry has no `live`
       value, so none is declared here. */
    repo: "https://github.com/JR-Sitraka/starter-kit-v4.2",
  },

  hero: [
    strong(
      t(
        "Starter Kit V4.2 — a development framework with a written mechanism for refusing its own growth."
      )
    ),
    t(" "),
    ev("K6", "K7"),
  ],

  inShort: [
    [
      t(
        "A specification framework for AI-assisted product development: 54 files, 2,902 lines of markdown — 13 role files, 16 playbooks, 19 templates, and a 186-line constitution of 11 numbered principles. "
      ),
      ev("K1", "K2", "K4", "K22"),
    ],
    [
      strong(t("Three context levels, for a measured reason.")),
      t(
        " A 40-line kernel is the only thing configured as a coding agent's persistent instructions; role files load per task; playbooks load only when explicitly referenced. The split exists because at least one real coding tool was confirmed to treat persistent files and referenced files very differently — a cost recurring on every task. "
      ),
      ev("K3", "K5"),
    ],
    [
      strong(t("Two mechanisms constrain the framework rather than extend it:")),
      t(
        " a two-project promotion rule, and a release-review checklist. Both are documented below with the cases where they bit."
      ),
    ],
  ],

  sections: [
    /* 1 */
    {
      type: "prose",
      heading: [t("The two-project promotion rule")],
      blocks: [
        p(
          t(
            "Most process frameworks have an intake valve and no drain: every retrospective adds guidance, and the weight lands on every future project."
          )
        ),
        p(
          t("Here, a lesson does not enter the shared framework until a "),
          strong(t("second, independent project")),
          t(
            " confirms it. One deliberately narrow exception: a severe safety, data-loss or irreversible-action risk promotes immediately. "
          ),
          ev("K6")
        ),
        p(
          t(
            "The rule was later tightened against itself. \"Second project\" carried the whole gate and was undefined, so each retrospective set its own threshold. It now requires a separately scoped engagement on a materially distinct product or codebase "
          ),
          strong(t("and materially the same finding recurring on that project's own evidence")),
          t(". "),
          ev("K7")
        ),
        p(
          strong(t("What that cost.")),
          t(
            " All eight of V4.2's provisional items were reviewed against Trailhead's retrospective and "
          ),
          strong(t("left unchanged")),
          t(
            " — not for lack of merit, but because the evidence came from a second phase of the same codebase. Two further clarifications with acknowledged merit were declined on the same grounds. "
          ),
          ev("K12", "K15")
        ),
        p(
          t(
            "A growth-control rule that never blocks anything isn't one. This one blocked its own author."
          )
        ),
      ],
    },

    /* 2 */
    {
      type: "prose",
      heading: [t("The release-review checklist")],
      blocks: [
        p(
          t("Six items, run before any version is published, by whoever assembled it. "),
          ev("K8")
        ),
        p(
          t("It exists because of a pattern confirmed across four versions: "),
          strong(
            t(
              "every release assembled without an external audit fixed the previous version's defect while committing a fresh instance of the same class."
            )
          ),
          t(
            " A research dump cured in V3 and recreated in V4; splits claimed in V4 but not performed; the promotion rule written in V4 and violated by the first V5 draft. "
          ),
          ev("K9")
        ),
      ],
    },

    /* 3 — prose: three parallel disclosed gaps, not a decision section */
    {
      type: "prose",
      heading: [t("What it does when it fails its own check")],
      blocks: [
        p(
          t("The changelog runs six version entries, v1 through V4.1, across 181 lines. "),
          ev("K10"),
          t(" One entry is absent.")
        ),
        p(
          strong(t("The V4.2 entry is missing, and it was left missing.")),
          t(
            " No V4.1 artifact was recoverable, so the two versions' changes could not be separated by diff and no release date could be established. The reasoning is recorded in one line: "
          ),
          em(t("a reconstructed entry would present inference as record.")),
          t(" Release-review check 1 is stated outright as "),
          strong(t("unsatisfiable for V4.2")),
          t(", rather than marked done. "),
          ev("K11")
        ),
        p(
          strong(t("A lifecycle ambiguity is held, not resolved.")),
          t(
            " The retrospective template defines Confirmed, Revised and Unused verdicts but no \"Retained\" state; the checklist enumerates none either. Rather than inventing one, the gap is documented and check 6 is explicitly not claimed as satisfied. "
          ),
          ev("K13")
        ),
        p(
          strong(t("A false claim was removed from the README.")),
          t(
            " It had said the V4 structure awaited a controlled comparison against V3. None was found, so the sentence was replaced with what the repository actually contains — not restated, not quietly dropped. "
          ),
          ev("K14")
        ),
        p(t("Three gaps, all disclosed, none reconstructed.")),
      ],
    },

    /* 4 */
    {
      type: "prose",
      heading: [t("Trailhead adoption")],
      blocks: [
        p(t("This case is markdown; its credibility comes from being visibly used.")),
        list(
          [
            strong(t("ADR-001, 2026-07-19")),
            t(" — Trailhead adopts V4.1 in full. The ADR records "),
            em(t("why")),
            t(
              " that version: its context-level separation mirrors the product's own retrieval model, not because it was newest. "
            ),
            ev("K17"),
          ],
          [
            strong(t("ADR-007, 2026-07-27")),
            t(
              " — the Upgrade phase adopts V4.2, the kit's first real update-propagation event, with the phase-close retrospective required to report how the changelog mechanism served it. "
            ),
            ev("K18"),
          ],
          [
            strong(t("Trailhead's 1,810-line retrospective")),
            t(
              " is the framework's own output, and applies the promotion rule to itself: its highest-value finding is marked "
            ),
            em(t("\"First observation — hold.\"")),
            t(" "),
            ev("K19"),
          ]
        ),
        p(
          t(
            "The four verification tiers live in a playbook rather than the constitution, so the coding agent can load them — it never reads "
          ),
          c("principles.md"),
          t(". "),
          ev("K20")
        ),
      ],
    },

    /* 5 */
    {
      type: "prose",
      heading: [t("Used again on this portfolio")],
      blocks: [
        p(
          t(
            "The framework ran this portfolio's repository-hygiene round: six gated commits across four repositories, each blob-verified before publication and re-verified against the live remotes afterwards. Packets were rejected for contradicting themselves before execution, and hard stops prevented unsafe execution more than once. "
          ),
          ev("K21")
        ),
        p(
          t("This "),
          strong(t("is")),
          t(" a separately scoped engagement across materially different repositories. What it has not established is "),
          strong(t("recurrence of a materially identical finding")),
          t(
            " sufficient to promote any specific framework item — the second half of the gate, and the reason nothing was promoted from it. "
          ),
          ev("K7")
        ),
      ],
    },

    /* 6 — limitations and claims-not-made merged into one section by the draft */
    {
      type: "callout",
      variant: "limitation",
      heading: [t("Limitations and claims not made")],
      blocks: [
        list(
          [
            strong(t("A documentation framework, not a software runtime.")),
            t(
              " The complete inventory is 54 files, every one markdown — no package manifest, no scripts, no configuration, nothing to execute. "
            ),
            ev("K22"),
          ],
          [
            strong(t("No external adoption or user claim.")),
            t(
              " The records establish use in the author's own projects — Trailhead across two phases, and this portfolio's hygiene round — and provide no verified evidence of external adoption or users. "
            ),
            ev("K17", "K18", "K21"),
          ],
          [
            strong(t("No effectiveness metric.")),
            t(
              " Nothing here measures the framework against a control, and the README's own prior claim of a pending comparison was removed as unsupported. "
            ),
            ev("K14"),
          ],
          [
            strong(t("No claim V3 is superseded.")),
            t(" The repository does not establish it. "),
            ev("K14"),
          ],
          [
            strong(t("No claim the release-review checklist has been fully satisfied.")),
            t(
              " Check 1 is unsatisfiable for V4.2; check 6 is explicitly not claimed as literally met. "
            ),
            ev("K11", "K13"),
          ],
          [
            strong(t("Ten files carry provisional or speculative markers.")),
            t(
              " They remain available to be consulted and used; the markers govern promotion status, not whether the files can be read. "
            ),
            ev("K16"),
          ]
        ),
      ],
    },

    /* 7 — renders the 22 top-level evidenceMap rows */
    { type: "evidenceMap" },

    /* 8 — the process diagram is unproduced, so MediaSection renders nothing:
       no wrapper, no frame, no reserved space. */
    { type: "media", slot: "process-diagram" },
  ],

  evidenceMap: [
    {
      id: "K1",
      claim: [t("54 files, 2,902 lines")],
      source: [c("find"), t("/"), c("wc -l"), t(" at the published tip")],
      tier: "Agent-verified",
    },
    {
      id: "K2",
      claim: [t("13 role files, 16 playbooks, 19 templates")],
      source: [
        c("ls roles/"),
        t(", "),
        c("ls playbooks/"),
        t(", "),
        c("find docs -name '*.template.md'"),
        t(" + 3 root"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "K3",
      claim: [
        t(
          "Kernel is 40 lines — the only file configured as a coding agent's persistent instructions"
        ),
      ],
      source: [c("kernel/AGENTS-KERNEL.md.template")],
      tier: "Agent-verified",
    },
    {
      id: "K4",
      claim: [c("principles.md"), t(" is 186 lines carrying 11 numbered principles")],
      source: [c("principles.md")],
      tier: "Agent-verified",
    },
    {
      id: "K5",
      claim: [
        t(
          "Three context levels: persistent kernel / per-task roles / explicitly-referenced playbooks. Rationale: at least one real coding tool treats persistent-instruction files and "
        ),
        c("@"),
        t("-mentioned files differently — confirmed directly, not assumed"),
      ],
      source: [c("README.md"), t(", \"Why the split\"")],
      tier: "Agent-verified",
    },
    {
      id: "K6",
      claim: [
        t(
          "Two-project promotion rule: a lesson stays project-local until independently confirmed on a second project, unless it is a severe safety, data-loss or irreversible-action risk"
        ),
      ],
      source: [c("RETROSPECTIVE.template.md"), t(" §7")],
      tier: "Agent-verified",
    },
    {
      id: "K7",
      claim: [
        t(
          "\"Second project\" defined: a separately scoped engagement involving a materially distinct product or codebase, "
        ),
        strong(t("with materially the same finding recurring on that project's own evidence")),
        t(". Same-codebase recurrence is corroborating evidence only"),
      ],
      source: [c("CHANGELOG.md"), t(", Unreleased")],
      tier: "Agent-verified",
    },
    {
      id: "K8",
      claim: [
        c("kit-release-review.md"),
        t(
          " is a 6-item pre-release checklist, run before any version is published, by whoever assembled it"
        ),
      ],
      source: [c("playbooks/kit-release-review.md")],
      tier: "Agent-verified",
    },
    {
      id: "K9",
      claim: [
        t(
          "It exists because the pattern was confirmed across four versions: every release assembled without external audit fixed the prior version's defect while committing a fresh instance of the same class"
        ),
      ],
      source: [c("playbooks/kit-release-review.md"), t(", preamble")],
      tier: "Agent-verified",
    },
    {
      id: "K10",
      claim: [
        t(
          "Changelog carries six version entries, v1 → V4.1, plus an Unreleased maintenance section; 181 lines"
        ),
      ],
      source: [c("CHANGELOG.md")],
      tier: "Agent-verified",
    },
    {
      id: "K11",
      claim: [
        strong(t("No V4.2 changelog entry exists")),
        t(
          ", left unresolved deliberately: no V4.1 artifact was recoverable, so changes could not be separated by diff and no release date was recoverable. \"A reconstructed entry would present inference as record.\" Release-review check 1 stated unsatisfiable for V4.2"
        ),
      ],
      source: [c("CHANGELOG.md"), t(", \"Considered and not adopted\"")],
      tier: "Agent-verified",
    },
    {
      id: "K12",
      claim: [
        t(
          "All eight V4.2 provisional items reviewed against Trailhead's retrospective §8 and left unchanged, the evidence being a second phase of the same codebase"
        ),
      ],
      source: [c("CHANGELOG.md"), t(", \"Provisional items — reviewed, unchanged\"")],
      tier: "Agent-verified",
    },
    {
      id: "K13",
      claim: [
        t(
          "Lifecycle ambiguity held, not resolved: §8 defines Confirmed/Revised/Unused but no \"Retained\" verdict, and check 6 enumerates no retained state. Check 6 explicitly not claimed as satisfied"
        ),
      ],
      source: [c("CHANGELOG.md"), t(", same entry")],
      tier: "Agent-verified",
    },
    {
      id: "K14",
      claim: [
        t(
          "A false README claim was removed: it had said V4 awaited a controlled comparison against V3. No completed comparison found in the artifacts inspected"
        ),
      ],
      source: [c("CHANGELOG.md"), t(", "), c("README.md"), t(" bullet")],
      tier: "Agent-verified",
    },
    {
      id: "K15",
      claim: [
        t(
          "Five items under \"Considered and not adopted\" with stated reasons, two declined specifically for resting on one codebase"
        ),
      ],
      source: [c("CHANGELOG.md"), t(", Unreleased")],
      tier: "Agent-verified",
    },
    {
      id: "K16",
      claim: [
        t("Ten files carry PROVISIONAL or PROVISIONAL-SPECULATIVE markers, with a ledger in the README"),
      ],
      source: [c("grep -rl PROVISIONAL"), t("; "), c("README.md"), t(" ledger")],
      tier: "Agent-verified",
    },
    {
      id: "K17",
      claim: [
        t(
          "Trailhead adopted V4.1 in full — kernel, roles, playbooks, docs scaffolding — on 2026-07-19, choosing that version because its context-level separation mirrors the product's own retrieval model"
        ),
      ],
      source: [c("Trailhead/docs/10-decisions/adr-001-adopt-starter-kit-v4.1.md")],
      tier: "Agent-verified",
    },
    {
      id: "K18",
      claim: [
        t(
          "Trailhead's Upgrade phase adopted V4.2 on 2026-07-27, described as the kit's first real update-propagation event, with the phase-close retrospective required to report how the changelog mechanism served it"
        ),
      ],
      source: [c("Trailhead/docs/10-decisions/adr-007-adopt-starter-kit-v4.2.md")],
      tier: "Agent-verified",
    },
    {
      id: "K19",
      claim: [
        t(
          "Trailhead's retrospective is 1,810 lines; its §8 marks its highest-value finding \"First observation — hold\""
        ),
      ],
      source: [c("Trailhead/RETROSPECTIVE.md")],
      tier: "Agent-verified",
    },
    {
      id: "K20",
      claim: [
        t(
          "The four verification tiers live in a playbook rather than the constitution, so the coding agent can load them; it never reads "
        ),
        c("principles.md"),
      ],
      source: [c("playbooks/verification-tiers.md"), t("; "), c("principles.md"), t(" #8")],
      tier: "Agent-verified",
    },
    {
      id: "K21",
      claim: [
        t(
          "Round 2 of this portfolio phase ran on the framework: six gated commits across four repositories, blob-verified before publication and re-verified against live remotes after; packets rejected for self-contradiction before execution; hard stops that prevented unsafe execution"
        ),
      ],
      source: [t("This project's durable record and the four repositories' published history")],
      tier: "Agent-verified",
    },
    {
      id: "K22",
      claim: [
        t(
          "Complete repository inventory: 54 files, all markdown — 53 "
        ),
        c(".md"),
        t(" plus one "),
        c(".md.template"),
        t(". "),
        strong(t("Zero non-markdown files")),
        t(": no package manifest, no scripts, no configuration, no executable artifact"),
      ],
      source: [c("find . -type f"), t(" at the published tip, full listing")],
      tier: "Agent-verified",
    },
  ],
};

export default content;
