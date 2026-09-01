/**
 * Trailhead — case-study content module.
 *
 * Transcribed from the approved draft trailhead-case-study-draft.md,
 * SHA-256 fa2326ce55b2354232dea2c5a157ab07103f952460591c89366ef0f2cdd804d3,
 * using the extraction map in the approved implementation proposal.
 *
 * Loaded server-side only, by lib/caseLoaders.js from getStaticProps. It is
 * never imported by the homepage or any client component, so none of this
 * content reaches the homepage bundle.
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
const table = (headers, rows) => ({ type: "table", headers, rows });

export const content = {
  meta: {
    /* projectTitle duplicates utils/portfolioData.js -> trailhead.title. The
       duplication is deliberate and verified as consistent, not resolved by a
       runtime lookup that would recouple the route to homepage data. */
    projectTitle: "Trailhead",
    title: "Trailhead — Sitraka Josoa",
    /* Derived from the hero: formatting removed, evidence nodes omitted. */
    description:
      "Trailhead — a repository intelligence platform, and the record of an upgrade I measured and then declined to ship.",
  },

  links: {
    /* Exactly portfolioData's trailhead.links.repo. That entry has no `live`
       value, so none is declared here. */
    repo: "https://github.com/JR-Sitraka/Trailhead",
  },

  hero: [
    strong(
      t(
        "Trailhead — a repository intelligence platform, and the record of an upgrade I measured and then declined to ship."
      )
    ),
    t(" "),
    ev("E24", "E18"),
  ],

  inShort: [
    [
      t(
        "Trailhead imports a repository, parses and embeds it, and answers questions about it with citations that resolve to real file and line ranges — every claim checked against retrieved evidence before it is shown. "
      ),
      ev("E24"),
      t(
        " Next.js 14 App Router and TypeScript, PostgreSQL 17 with pgvector, Drizzle, web-tree-sitter parsing, transformers.js embeddings in-process, Groq generation. "
      ),
      ev("E21"),
    ],
    [
      t(
        "6,580 lines of TypeScript against 10,274 lines of test — 392 test cases — across 136 commits, 11 ADRs and a 1,810-line retrospective. "
      ),
      ev("E1", "E2", "E3", "E4", "E5"),
    ],
    [
      strong(
        t(
          "The flagship story is ADR-009: an embedding upgrade that met three of four benchmark criteria and was held, not shipped."
        )
      ),
      t(" "),
      ev("E14", "E18"),
      t(
        " The first throughput measurement was discarded as invalid before it was reported; the first diagnosis of the failing criterion was later proved wrong by its own author and corrected. "
      ),
      ev("E10", "E14", "E15", "E16", "E18"),
    ],
    [
      t(
        "Verification tiers are published in full, including 43 acceptance criteria with no test at all. "
      ),
      ev("E6"),
    ],
    [t("Runs locally, single-operator, no authentication. "), ev("E9", "E22")],
  ],

  sections: [
    /* 1 — Opening */
    {
      type: "prose",
      heading: [t("Opening")],
      blocks: [
        p(
          t(
            "Point Trailhead at a public GitHub repository or a ZIP and it parses the real source, detects the stack, embeds every file for semantic retrieval, and answers questions with citations that resolve to real file and line ranges — each claim checked against actually-retrieved evidence before it is shown. It also exports structured context for handing to a coding agent working in the same repository. "
          ),
          ev("E24")
        ),
        p(
          t(
            "Underneath: web-tree-sitter parsing, transformers.js embeddings in-process, vectors in PostgreSQL 17 with pgvector, generation through Groq "
          ),
          ev("E21"),
          t(
            " — 6,580 lines of TypeScript against 10,274 lines of test, across 136 commits. "
          ),
          ev("E2", "E3", "E1")
        ),
        p(t("The part worth reading is not the stack. It's ADR-009.")),
      ],
    },

    /* 2 — the flagship narrative, mapped into the decision schema */
    {
      type: "decision",
      heading: [t("The flagship narrative — ADR-009")],
      /* A derived presentation field, not transcribed content: exactly the
         phrase carried by the closing paragraph, which itself stays intact in
         consequences. No evidence node. */
      status: [t("Held — not adopted for production")],
      context: [
        p(
          strong(t("Set-up.")),
          t(
            " The upgrade was meant to be straightforward: replace a general-purpose embedding model with a code-aware one, under fixed constraints — zero-spend, fully local, transformers.js-compatible."
          )
        ),
        p(
          strong(t("Measurement, corrected before it was reported.")),
          t(
            " The first throughput run pooled chunks across files and padded to a 3,918-character outlier. It produced roughly 17,411 ms/chunk — a number that was actually memory-swapping, mislabelled as compute. "
          ),
          strong(t("That run was discarded as invalid rather than reported.")),
          t(" The corrected run replicated the application's own per-file batching path ("),
          c("poller.ts:91-97"),
          t(") against 222 real corpus chunks and re-measured the "),
          em(t("current")),
          t(
            " model on the same machine, for a like-for-like ratio rather than a comparison against a historical figure from different hardware. "
          ),
          ev("E10", "E11")
        ),
        p(
          t("The current model is "),
          c("Xenova/all-MiniLM-L6-v2"),
          t(", self-hosted in-process. "),
          ev("E23")
        ),
        table(
          [[t("Model")], [t("ms/chunk")], [t("vs. current")]],
          [
            [[t("MiniLM (current)")], [t("442.47")], [t("1×")]],
            [[t("Jina q8")], [t("2,787.78")], [t("6.3× slower")]],
            [[t("Jina fp32")], [t("5,566.12")], [t("12.6× slower")]],
          ]
        ),
        p(
          strong(t("One flagged edge case closed with real margin.")),
          t(" The candidate's "),
          c("model_max_length"),
          t(
            " is 8,192 tokens; across 148 real chunks the median was 224 and the 95th percentile 496, with a maximum of 1,098 — zero truncation, 7.5× headroom at the observed maximum. "
          ),
          ev("E12")
        ),
        p(
          strong(t("A property found that changes how the model must always be run.")),
          t(
            " Jina q8 turned out not to be batch-invariant — Δ up to 3.45e-2, against 1.04e-7 for MiniLM and 1.44e-7 for Jina fp32. Because queries are always embedded singly, a corpus embedded at any other batch size would be measured under different conditions than the queries compared against it. Batch=1 became a correctness requirement, not a performance preference. "
          ),
          ev("E13")
        ),
      ],
      outcome: [
        p(
          strong(t("The benchmark: three criteria met, one failed.")),
          t(" "),
          ev("E14")
        ),
        table(
          [[t("Criterion")], [t("Baseline")], [t("After")], [t("Verdict")]],
          [
            [[t("Known-code Top-3")], [t("50.0%")], [t("87.5%")], [t("met, +37.5pp")]],
            [
              [t("Filename-trap outranked rate")],
              [t("25.0%")],
              [t("12.5%")],
              [t("met, −12.5pp")],
            ],
            [
              [t("Semantic Top-1 / Top-3")],
              [t("0.0% / 28.6%")],
              [t("14.3% / 42.9%")],
              [t("met, both +14.3pp")],
            ],
            [
              [t("Documentation Top-3, no regression")],
              [t("75.0%")],
              [t("50.0%")],
              [strong(t("not met, −25.0pp"))],
            ],
          ]
        ),
        p(
          strong(t("First diagnosis — and it was wrong.")),
          t(
            " The failure looked like code displacing documentation in the one corpus repository holding substantial amounts of both. That reading was recorded, then tested by widening the documentation category from 8 queries to 17. "
          ),
          ev("E15")
        ),
        p(
          strong(t("The correction.")),
          t(" Under the widened manifest, the controls — questions with "),
          em(t("no code competitor at all")),
          t(
            " — degraded worst, from 66.7% to 33.3% Top-3, displaced entirely by other documentation. Matched pairs, where code competes hardest by design, "
          ),
          em(t("improved")),
          t(
            " from 75% to 100%. That is the opposite of what the first diagnosis predicts. The real mechanism: the model discriminates less well among dense, similar documentation generally. Code displacement was a symptom, not the cause. "
          ),
          ev("E16")
        ),
        p(
          t(
            "Widening did not narrow the uncertainty toward \"it's fine.\" It sharpened it toward \"it's real, and broader than first diagnosed.\" Overall Top-1 across the full 40-query manifest went net negative, 32.5% to 27.5%. "
          ),
          ev("E17")
        ),
        p(
          strong(t("The decision: hold.")),
          t(
            " MiniLM remains the repository's current configured model. No migration, no rollback needed — "
          ),
          c("trailhead_dev"),
          t(
            " was never touched at any point across the entire arc, probe through widening. The candidate is recorded as the leading code-retrieval option, not rejected, with its three real wins intact and a written bar any future mitigation must clear. "
          ),
          ev("E18")
        ),
      ],
      consequences: [
        p(
          t("The ADR itself is 398 lines and its status header now reads "),
          c("Held — not adopted for production"),
          t(". "),
          ev("E7"),
          t(
            " Every artifact is still in the repository, including the discarded first measurement, kept as a documented lesson. "
          ),
          ev("E19")
        ),
      ],
    },

    /* 3 */
    {
      type: "callout",
      variant: "note",
      heading: [t("The measurement apparatus was audited too")],
      blocks: [
        p(
          t(
            "Two real defects were found in the benchmark infrastructure itself during the evaluation, and fixed: "
          ),
          c("metrics.ts"),
          t(
            " had no status filter and would have silently scored a half-embedded repository as valid; "
          ),
          c("compare-runs.ts"),
          t(
            " hardcoded its output filename and was silently overwriting the committed baseline artifact on any other comparison pair. "
          ),
          ev("E20")
        ),
        p(
          t(
            "A benchmark that can quietly corrupt its own baseline is not a benchmark you can hold a decision against."
          )
        ),
      ],
    },

    /* 4 */
    {
      type: "prose",
      heading: [t("Verification boundaries")],
      blocks: [
        p(
          strong(t("A commit-specific evidence snapshot, not a quality score.")),
          t(" These are the verification tiers recorded in "),
          c("docs/09-testing/testing.md"),
          t(" at "),
          c("24c52d6e"),
          t(": "),
          ev("E6")
        ),
        table(
          [[t("Tier")], [t("Meaning")], [t("Count")]],
          [
            [
              [t("Agent-verified")],
              [
                t(
                  "Real evidence produced — a request/response, rows, a test run — not independently confirmed by me"
                ),
              ],
              [t("54")],
            ],
            [
              [strong(t("Not yet tested"))],
              [strong(t("No check performed at all"))],
              [strong(t("43"))],
            ],
            [
              [t("Partially verified")],
              [t("Some but not all cases exercised")],
              [t("20")],
            ],
            [
              [t("Live-verified")],
              [t("I ran or clicked through it myself and confirmed the result")],
              [t("9")],
            ],
            [[t("Code-reviewed only")], [t("Logic traced, never executed")], [t("4")]],
          ]
        ),
        p(
          t(
            "Untested items are disclosed here rather than silently promoted to a higher tier. The full record, per acceptance criterion, is in the repository."
          )
        ),
      ],
    },

    /* 5 */
    {
      type: "prose",
      heading: [t("Methodology")],
      blocks: [
        p(
          t(
            "Developed through a human-directed, evidence-gated workflow using coding agents for implementation and verification. Architecture, scope, product decisions, acceptance decisions and evidentiary standards are mine."
          )
        ),
        p(em(t("(Cross-link to the Starter Kit V4.2 case study, which follows.)"))),
      ],
    },

    /* 6 */
    {
      type: "callout",
      variant: "limitation",
      heading: [t("Honest limitations")],
      blocks: [
        list(
          [
            strong(t("No authentication.")),
            t(
              " Trailhead is built for single-operator local use and must not be deployed publicly without adding real auth. "
            ),
            ev("E9"),
          ],
          [
            t(
              "Requires Node.js 18.17+ and local PostgreSQL 17 with the pgvector extension. "
            ),
            ev("E22"),
          ],
          [t("43 acceptance criteria carry no test. "), ev("E6")]
        ),
      ],
    },

    /* 7 — appended after Honest limitations, before the media group */
    {
      type: "callout",
      variant: "boundary",
      heading: [t("Claims I deliberately did not make")],
      blocks: [
        p(t("Recorded so the omissions are visible rather than accidental:")),
        list(
          [
            strong(t("No user, adoption or performance claim.")),
            t(
              " The repository evidence establishes no external users or adoption, so none is claimed. The measured ms/chunk figures are explicitly environment-dependent on a memory-constrained machine and are not a performance claim about anything else. "
            ),
            ev("E11"),
          ],
          [
            strong(t("No \"production\" framing.")),
            t(" It runs locally, without auth."),
          ],
          [
            strong(t("No claim that the benchmark is statistically powerful.")),
            t(
              " The ADR says the control group at n=3 is directionally clear but thin, and the draft does not upgrade that."
            ),
          ],
          [
            strong(t("No claim the upgrade failed.")),
            t(
              " It is held, not rejected — three criteria were met and the candidate is recorded as leading. "
            ),
            ev("E14", "E18"),
          ]
        ),
      ],
    },

    /* 8 — renders the 24 top-level evidenceMap rows */
    { type: "evidenceMap" },

    /* 9-14 — media slots. No asset resolves in this packet, so MediaSection
       renders nothing for each: no wrapper, no frame, no reserved space. */
    { type: "media", slot: "dashboard" },
    { type: "media", slot: "explorer" },
    { type: "media", slot: "export-context" },
    { type: "media", slot: "export-json" },
    { type: "media", slot: "export-task-packet" },
    { type: "media", slot: "citation-walkthrough" },
  ],

  evidenceMap: [
    {
      id: "E1",
      claim: [t("136 commits")],
      source: [c("git rev-list --count origin/main")],
      tier: "Agent-verified",
    },
    {
      id: "E2",
      claim: [t("6,580 lines TS/TSX across 59 files")],
      source: [c("find src -name '*.ts' -o -name '*.tsx' | xargs wc -l")],
      tier: "Agent-verified",
    },
    {
      id: "E3",
      claim: [t("392 test cases, 49 files, 10,274 lines")],
      source: [c("grep -rhoP '^\\s*(it|test)\\(' tests"), t("; "), c("wc -l")],
      tier: "Agent-verified",
    },
    {
      id: "E4",
      claim: [t("11 ADRs")],
      source: [
        c("ls docs/10-decisions/"),
        t(" — "),
        c("adr-001"),
        t(" … "),
        c("adr-011"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "E5",
      claim: [t("1,810-line retrospective")],
      source: [c("wc -l RETROSPECTIVE.md")],
      tier: "Agent-verified",
    },
    {
      id: "E6",
      claim: [t("Tier tally 54/43/20/9/4")],
      source: [c("docs/09-testing/testing.md"), t(", counted at published tip")],
      tier: "Agent-verified",
    },
    {
      id: "E7",
      claim: [
        t("ADR-009 is 398 lines, status "),
        c("Held — not adopted for production"),
      ],
      source: [c("docs/10-decisions/adr-009-embedding-model-choice.md:3")],
      tier: "Agent-verified",
    },
    {
      id: "E8",
      claim: [t("Five screenshots exist")],
      source: [
        c("docs/screenshots/"),
        t(" — Dashboard, Explorer, Export-Context, Export-JSON, Export-TaskPacket"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "E9",
      claim: [
        t("No authentication; must not be publicly deployed without adding real auth"),
      ],
      source: [c("README.md:145-146")],
      tier: "Agent-verified",
    },
    {
      id: "E10",
      claim: [
        t(
          "Discarded v1 throughput methodology, ~17,411 ms/chunk, OOM mislabelled as compute"
        ),
      ],
      source: [t("ADR-009, \"Step 2 — throughput measurement… corrected methodology\"")],
      tier: "Agent-verified",
    },
    {
      id: "E11",
      claim: [
        t(
          "Corrected v2: MiniLM 442.47 ms/chunk, Jina q8 2,787.78 (6.3×), fp32 5,566.12 (12.6×)"
        ),
      ],
      source: [t("ADR-009 throughput table")],
      tier: "Agent-verified",
    },
    {
      id: "E12",
      claim: [
        t("Tokenizer headroom: "),
        c("model_max_length"),
        t(" 8192; p50 224, p95 496, max 1,098 across 148 chunks; zero truncation"),
      ],
      source: [t("ADR-009, \"Tokenizer/truncation check\"")],
      tier: "Agent-verified",
    },
    {
      id: "E13",
      claim: [
        t("Batch-invariance finding: MiniLM Δ 1.04e-7, Jina fp32 Δ 1.44e-7, "),
        strong(t("Jina q8 Δ up to 3.45e-2")),
        t(" — batch=1 required"),
      ],
      source: [t("ADR-009 Amendment 2026-07-30")],
      tier: "Agent-verified",
    },
    {
      id: "E14",
      claim: [
        t("v1.0.0 results: known_code 50→87.5%, trap 25→12.5%, semantic Top-1 0→14.3%, "),
        strong(t("documentation 75→50%")),
      ],
      source: [
        t("ADR-009 four-criteria table; "),
        c("benchmark/reports/BASELINE-2026-07-28T18-02-00-408Z.json"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "E15",
      claim: [t("Reopen diagnosis: \"code outranks documentation in mixed repos\"")],
      source: [t("ADR-009, \"Criterion 4 REOPENED\"")],
      tier: "Agent-verified",
    },
    {
      id: "E16",
      claim: [
        t("Correction: controls (no code competitor) degraded "),
        strong(t("worst")),
        t(" — 66.7→33.3% Top-3; matched pairs "),
        strong(t("improved")),
        t(" 75→100%"),
      ],
      source: [t("ADR-009 v1.1.0 classification table")],
      tier: "Agent-verified",
    },
    {
      id: "E17",
      claim: [
        t("v1.1.0 widened to 40 queries, documentation 8→17; overall Top-1 "),
        strong(t("32.5→27.5%, net negative")),
      ],
      source: [t("ADR-009 v1.1.0 section")],
      tier: "Agent-verified",
    },
    {
      id: "E18",
      claim: [
        t(
          "Final: HOLD, q8 not adopted. MiniLM remains the repository's active configured embedding model; "
        ),
        c("trailhead_dev"),
        t(
          " never touched at any point across probe → throughput → dry run → reopen → widening"
        ),
      ],
      source: [t("ADR-009 \"FINAL DECISION (2026-07-30)\"")],
      tier: "Agent-verified",
    },
    {
      id: "E19",
      claim: [t("All artifacts preserved including the discarded v1 methodology")],
      source: [t("ADR-009 \"What is preserved, not discarded\"")],
      tier: "Agent-verified",
    },
    {
      id: "E20",
      claim: [
        t("Two benchmark tooling defects found: "),
        c("metrics.ts"),
        t(" had no status filter; "),
        c("compare-runs.ts"),
        t(" silently overwrote the committed baseline"),
      ],
      source: [t("ADR-009 \"Two tooling gaps\"")],
      tier: "Agent-verified",
    },
    {
      id: "E21",
      claim: [
        t(
          "Stack: Next.js 14 App Router + TypeScript, PostgreSQL 17 + pgvector, Drizzle, web-tree-sitter (WASM), transformers.js in-process, Groq generation"
        ),
      ],
      source: [
        c("README.md:63-72"),
        t(" stack table, corroborated by "),
        c("package.json"),
        t(" dependencies ("),
        c("next ^14.2.0"),
        t(", "),
        c("drizzle-orm ^0.36.0"),
        t(", "),
        c("postgres ^3.4.0"),
        t(", "),
        c("@huggingface/transformers ^4.2.0"),
        t(", "),
        c("web-tree-sitter ^0.26.11"),
        t(", "),
        c("groq-sdk ^1.3.0"),
        t(")"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "E22",
      claim: [
        t("Prerequisites: Node.js 18.17+ and PostgreSQL 17 with the pgvector extension"),
      ],
      source: [c("README.md:81-84")],
      tier: "Agent-verified",
    },
    {
      id: "E23",
      claim: [
        t("Baseline embedding model is "),
        c("Xenova/all-MiniLM-L6-v2"),
        t(", self-hosted in-process"),
      ],
      source: [c("README.md:70"), t(" stack table")],
      tier: "Agent-verified",
    },
    {
      id: "E24",
      claim: [
        t("Function: imports a public GitHub repository or ZIP; "),
        strong(t("parses")),
        t(
          " real source via tree-sitter (functions, classes, interfaces, imports, exports); "
        ),
        strong(t("embeds")),
        t(" every file in-process for semantic retrieval; "),
        strong(
          t("answers questions with citations that resolve to real file/line ranges")
        ),
        t(", each claim checked against actually-retrieved evidence before display; "),
        strong(t("exports")),
        t(
          " structured context. Chat is described as multi-turn, evidence-grounded Q&A with inline citations"
        ),
      ],
      source: [
        c("README.md:3-5"),
        t(" (summary) and "),
        c("README.md:7-33"),
        t(" (\"What it does\", \"Screens\")"),
      ],
      tier: "Agent-verified",
    },
  ],
};

export default content;
