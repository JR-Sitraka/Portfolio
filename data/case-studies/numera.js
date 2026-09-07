/**
 * Numera — case-study content module.
 *
 * Transcribed from the approved draft numera-case-study-draft.md,
 * SHA-256 a4689c41e51ea94da781809c73e833f883814a13edbf0ca86b75d1c8b960924a,
 * using the extraction map in the approved implementation proposal.
 *
 * Loaded server-side only, by lib/caseLoaders.js from getStaticProps. It is
 * never imported by the homepage or any client component, so none of this
 * content reaches the homepage bundle.
 *
 * This draft carries no decision-shaped section and merges limitations and
 * claims into one, so there is no `decision` section and a single
 * `limitation` callout. No derived field, no split and no composed value
 * appears here; every unit is transcribed.
 *
 * Two media slots are declared and both resolve to null. `dashboard` names an
 * asset that exists and is hash-gated in the Phase 1 record, but this packet
 * references no asset by path, so it renders nothing like the unproduced
 * `matched-session` capture.
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
/* Evidence ids are an ordered array and that order is content. A grouped
   marker such as *(N1, N2, N3, N4, N5)* is ONE node carrying five ordered
   ids — never split into separate nodes, never sorted, never de-duplicated. */
const ev = (...ids) => ({ t: "evidence", ids });

/* block nodes */
const p = (...content) => ({ type: "paragraph", content });
const list = (...items) => ({ type: "list", ordered: false, items });
const table = (headers, rows) => ({ type: "table", headers, rows });

export const content = {
  meta: {
    /* projectTitle duplicates utils/portfolioData.js -> numera.title. The
       duplication is deliberate and verified as consistent, not resolved by a
       runtime lookup that would recouple the route to homepage data. */
    projectTitle: "Numera",
    title: "Numera — Sitraka Josoa",
    /* Derived from the hero: formatting removed, evidence nodes omitted. */
    description:
      "Numera — one product, two platforms, and a shared core you can prove is identical with one command.",
  },

  links: {
    /* Exactly portfolioData's numera.links. This entry carries both a live
       and a repo value, so both are declared. */
    live: "https://numera-v2.vercel.app",
    repo: "https://github.com/JR-Sitraka/Numera-V2",
  },

  hero: [
    strong(
      t(
        "Numera — one product, two platforms, and a shared core you can prove is identical with one command."
      )
    ),
    t(" "),
    ev("N1", "N13"),
  ],

  inShort: [
    [
      t(
        "A number-recognition trainer for non-native English speakers, running both directions — word-to-number and number-to-word — split evenly across each session. "
      ),
      ev("N20"),
      t(" Shipped as a React web app and a React Native app on Expo SDK 52. "),
      ev("N18", "N21"),
      t(" 2,368 lines web, 1,617 mobile. "),
      ev("N19"),
    ],
    [
      strong(
        t(
          "Four modules define game behaviour and must be byte-identical across both repositories."
        )
      ),
      t(" They are, and the check is one command anyone can run. "),
      ev("N1", "N13"),
    ],
    [
      strong(t("505 tests, all passing")),
      t(
        ", defining that shared behaviour once — living with the web copy, deliberately not duplicated into mobile. "
      ),
      ev("N6", "N7"),
    ],
    [
      t(
        "Web has a verified production deployment; for mobile, what is verified is a clean build. The case study keeps those apart. "
      ),
      ev("N15", "N16", "N17"),
    ],
  ],

  sections: [
    /* 1 */
    {
      type: "prose",
      heading: [t("The boundary")],
      blocks: [
        p(
          t(
            "Most \"cross-platform\" claims mean a framework. This one is a line drawn by hand, with a rule attached."
          )
        ),
        p(
          t("Four modules hold how the game behaves, each with a responsibility stated in its own header: "),
          c("levelsData.js"),
          t(
            " is the question bank — four levels of twenty, every question carrying its direction as explicit data rather than inferred at runtime; "
          ),
          c("rng.js"),
          t(" is seeded, injectable randomness, pure by design; "),
          c("rules.js"),
          t(" holds the platform-neutral rules, its header saying they are "),
          em(t("consumed identically by web and mobile")),
          t("; "),
          c("session.js"),
          t(" builds a session from the other two. "),
          ev("N22"),
          t(" All four are authored in the web repository and "),
          strong(t("vendored into mobile unchanged")),
          t(". The mobile README states the rule: "),
          em(t("a mismatch is a defect, not a variant.")),
          t(" "),
          ev("N13")
        ),
        p(
          t("Everything that touches a platform stays on its own side. Mobile carries "),
          c("storage.js"),
          t(" and "),
          c("theme.js"),
          t(" and its own component tree; web has neither. "),
          ev("N12"),
          t(" Persistence is the clearest case — "),
          c("localStorage"),
          t(" on web, "),
          c("AsyncStorage"),
          t(
            " with named keys on mobile: the same persistence responsibility, implemented through different platform APIs. "
          ),
          ev("N11")
        ),
        p(
          t(
            "The split is chosen, not inherited. The mobile README names what is kept platform-specific — rendering, styling and design tokens, persistence, sound, haptics, safe areas, animation timing tied to a stylesheet — because each depends on a platform integration. "
          ),
          ev("N24"),
          t(
            " They could be abstracted behind a shared layer; this project doesn't, on purpose."
          )
        ),
      ],
    },

    /* 2 — carries the packet's first `code` block */
    {
      type: "prose",
      heading: [t("The claim you can check yourself")],
      blocks: [
        p(t("One command, run from each checkout:")),
        {
          type: "code",
          /* The draft's four-space indentation marker is removed as a
             structural transformation; every remaining character and all
             remaining internal whitespace is byte-exact. Not executed. */
          code:
            "git rev-parse HEAD:src/core/levelsData.js HEAD:src/core/rng.js HEAD:src/core/rules.js HEAD:src/core/session.js",
        },
        p(
          t("At the published tips, both return the same four hashes: "),
          /* one grouped marker, five ordered ids — not five nodes */
          ev("N1", "N2", "N3", "N4", "N5")
        ),
        table(
          [[t("Module")], [t("Blob")]],
          [
            [[c("levelsData.js")], [c("041081100ae5ce525b0e6bd6b9bf2cf75a8363ff")]],
            [[c("rng.js")], [c("87457d518be55ccdf33c4a893bb957c143b3eb1c")]],
            [[c("rules.js")], [c("90ddd56a2e22468683c2aa191a88efc38d417bf4")]],
            [[c("session.js")], [c("0abece8f3238f067d5d18b6b05a1320d95c9757f")]],
          ]
        ),
        p(
          t("The README specifies "),
          c("git rev-parse"),
          t(" rather than "),
          c("git hash-object"),
          t(" for a measured reason: with "),
          c("core.autocrlf=true"),
          t(", "),
          c("hash-object"),
          t(
            " reads the line-ending-translated working file and can report a mismatch for identical content. Comparing committed blobs sidesteps translation entirely and gives the same answer on every platform. "
          ),
          ev("N13")
        ),
        p(t("Most portfolio claims ask to be believed. This one doesn't.")),
      ],
    },

    /* 3 */
    {
      type: "prose",
      heading: [t("One suite, one definition")],
      blocks: [
        p(
          t("The canonical behaviour is defined once: "),
          strong(t("505 tests across two files, all passing in 1.07 seconds.")),
          t(" "),
          ev("N6")
        ),
        p(
          c("session.test.js"),
          t(
            " carries 499, covering determinism, seed variation, session shape, level isolation, answer and option preservation, balanced answer positions, and purity — the properties that make a seeded session reproducible rather than merely random. "
          ),
          ev("N8"),
          t(" "),
          c("rules.test.js"),
          t(" covers the constants, the third-strike session shape, "),
          c("isLevelFailed"),
          t(
            " either side of the limit, and accuracy including a non-positive question count. "
          ),
          ev("N9")
        ),
        p(
          t(
            "The rules are a single source of truth, not a pair of parallel implementations: a 7,000 ms timer, three strikes, 14 questions per session, seven prompts per direction, four options. "
          ),
          ev("N10"),
          t(" An import/redeclaration audit across both published trees found six call sites importing from "),
          c("core/rules.js"),
          t(" — three in each repository — and "),
          strong(t("zero redeclarations")),
          t(" of any of the eight constants outside that file. "),
          ev("N23")
        ),
        p(
          strong(t("The suite is deliberately not vendored into mobile.")),
          t(" "),
          ev("N7"),
          t(
            " One definition, one place. The mobile README says so in as many words, and draws the boundary the suite does "
          ),
          em(t("not")),
          t(" cover: it verifies the byte-identical core modules, "),
          strong(t("not")),
          t(" mobile rendering, platform integration or device behaviour. "),
          ev("N14")
        ),
      ],
    },

    /* 4 */
    {
      type: "prose",
      heading: [t("Two kinds of evidence, kept apart")],
      blocks: [
        p(t("These are not the same claim, and the case study does not merge them:")),
        p(
          strong(t("Web — deployed.")),
          t(" A Vercel production deployment in state "),
          c("READY"),
          t(" for the exact published commit. "),
          ev("N15")
        ),
        p(
          strong(t("Mobile — a verified build.")),
          t(
            " No published mobile artifact has been verified: no linked Vercel project or GitHub Actions workflow was found, and the repository's EAS builds are manually invoked. "
          ),
          ev("N16"),
          t(
            " What is verified is that the app bundles: a clean install of 481 packages, Metro launched, and the Android bundle served at 6,154,645 bytes across 770 modules. What is "
          ),
          strong(t("not")),
          t(
            " verified is device or emulator rendering, iOS, or any behaviour after the bundle loads. "
          ),
          ev("N17")
        ),
        p(
          t(
            "A clean bundle proves the code assembles. It does not prove the app looks right on a phone."
          )
        ),
      ],
    },

    /* 5 — limitations and claims-not-made merged into one section */
    {
      type: "callout",
      variant: "limitation",
      heading: [t("Limitations and claims not made")],
      blocks: [
        list(
          [
            strong(t("No verified evidence of users, downloads or engagement.")),
            t(
              " Neither repository establishes any, and no usage surface was examined."
            ),
          ],
          [
            strong(t("No store publication or install evidence has been verified.")),
            /* "N16" here is prose in the draft, not an evidence marker: it is
               carried as text and must not become an evidence node. */
            t(
              " App Store and Play Store surfaces were not checked; N16 records only that no linked Vercel project or GitHub Actions workflow was found and that EAS builds are manually invoked. "
            ),
            ev("N16"),
          ],
          [
            strong(t("Mobile has no test suite of its own")),
            t(", and its README says so. Device behaviour is unverified. "),
            ev("N14", "N17"),
          ],
          [
            strong(t("Parity is verified for the four core modules only.")),
            t(
              " It is a byte-identity claim about those files at those commits — not a claim that the two apps behave identically in every respect. "
            ),
            ev("N1", "N14"),
          ],
          [
            strong(t("The 505-test result is Agent-verified")),
            t(", from a real run against the published tip. "),
            ev("N6"),
          ]
        ),
      ],
    },

    /* 6 — renders the 25 top-level evidenceMap rows */
    { type: "evidenceMap" },

    /* 7-8 — both slots resolve to null under this packet's no-asset-reference
       boundary, so MediaSection renders nothing for each. */
    { type: "media", slot: "matched-session" },
    { type: "media", slot: "dashboard" },
  ],

  evidenceMap: [
    {
      id: "N1",
      claim: [
        t("Four shared-core modules are byte-identical across both published repositories"),
      ],
      source: [
        c("git rev-parse origin/main:src/core/<f>"),
        t(" vs "),
        c("origin/master:src/core/<f>"),
        t(", run at both tips"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "N2",
      claim: [c("levelsData.js"), t(" = "), c("041081100ae5ce525b0e6bd6b9bf2cf75a8363ff")],
      source: [t("as above")],
      tier: "Agent-verified",
    },
    {
      id: "N3",
      claim: [c("rng.js"), t(" = "), c("87457d518be55ccdf33c4a893bb957c143b3eb1c")],
      source: [t("as above")],
      tier: "Agent-verified",
    },
    {
      id: "N4",
      claim: [c("rules.js"), t(" = "), c("90ddd56a2e22468683c2aa191a88efc38d417bf4")],
      source: [t("as above")],
      tier: "Agent-verified",
    },
    {
      id: "N5",
      claim: [c("session.js"), t(" = "), c("0abece8f3238f067d5d18b6b05a1320d95c9757f")],
      source: [t("as above")],
      tier: "Agent-verified",
    },
    {
      id: "N6",
      claim: [
        t("Canonical suite: "),
        strong(t("505 tests across 2 files, all passing, 1.07 s")),
        t(" — "),
        c("session.test.js"),
        t(" 499, "),
        c("rules.test.js"),
        t(" 6"),
      ],
      source: [
        c("npx vitest run"),
        t(" (Vitest 2.1.9) executed against the published web tip"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "N7",
      claim: [
        t("The suite lives beside the shared core in the web repository and is "),
        strong(t("not vendored")),
        t(" into mobile"),
      ],
      source: [
        c("Numera-V2/src/core/{rules,session}.test.js"),
        t("; absent from "),
        c("mobile/src/core/"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "N8",
      claim: [
        c("session.test.js"),
        t(
          " exercises determinism, seed variation, session shape, level isolation, answer/option preservation, balanced answer positions, and purity"
        ),
      ],
      source: [c("describe"), t(" blocks in "), c("src/core/session.test.js")],
      tier: "Agent-verified",
    },
    {
      id: "N9",
      claim: [
        c("rules.test.js"),
        t(" exercises rule constants, third-strike session shape, preserved timing values, "),
        c("isLevelFailed"),
        t(" above and below the strike limit, and accuracy including a non-positive question count"),
      ],
      source: [c("describe"), t("/"), c("it"), t(" blocks in "), c("src/core/rules.test.js")],
      tier: "Agent-verified",
    },
    {
      id: "N10",
      claim: [
        t("Game constants, single source: "),
        c("TIMER_DURATION_MS = 7000"),
        t(", "),
        c("TIMER_TICK_MS = 100"),
        t(", "),
        c("AUTO_ADVANCE_DELAY_MS = 2000"),
        t(", "),
        c("FAIL_OVERLAY_DELAY_MS = 600"),
        t(", "),
        c("STRIKE_LIMIT = 3"),
        t(", "),
        c("SESSION_LENGTH = 14"),
        t(", "),
        c("PROMPTS_PER_DIRECTION = 7"),
        t(", "),
        c("OPTION_COUNT = 4"),
      ],
      source: [c("src/core/rules.js:3-14")],
      tier: "Agent-verified",
    },
    {
      id: "N11",
      claim: [
        t("Persistence diverges by platform: web uses "),
        c("localStorage"),
        t("; mobile uses "),
        c("AsyncStorage"),
        t(", with named keys in "),
        c("src/storage.js"),
      ],
      source: [c("Numera-V2/src/App.jsx:10-27"), t("; "), c("mobile/src/storage.js:1-6")],
      tier: "Agent-verified",
    },
    {
      id: "N12",
      claim: [
        t("Mobile carries platform-only modules absent from web — "),
        c("storage.js"),
        t(", "),
        c("theme.js"),
        t(" (hex design tokens), and components under "),
        c("src/components/"),
      ],
      source: [c("mobile/src/"), t(" inventory vs "), c("Numera-V2/src/"), t(" inventory")],
      tier: "Agent-verified",
    },
    {
      id: "N13",
      claim: [
        t("The public "),
        c("mobile/README.md"),
        t(" documents the boundary, the single-line verification command, and the "),
        c("core.autocrlf=true"),
        t(" caveat that makes "),
        c("git hash-object"),
        t(" unreliable for this check"),
      ],
      source: [c("mobile/README.md"), t(", \"Shared core\"")],
      tier: "Agent-verified",
    },
    {
      id: "N14",
      claim: [
        t(
          "That README states plainly: no automated test suite runs in mobile; the canonical suite verifies the shared-core modules, "
        ),
        strong(t("not")),
        t(" mobile rendering, platform integration or device behavior"),
      ],
      source: [c("mobile/README.md"), t(", \"Tests\"")],
      tier: "Agent-verified",
    },
    {
      id: "N15",
      claim: [
        t("Web is deployed: Vercel project "),
        c("numera-v2"),
        t(" linked to "),
        c("JR-Sitraka/Numera-V2"),
        t(", production deployment "),
        c("dpl_4iL8S5Ht1cfR6VzZ3fqPa5AWKrEB"),
        t(" in state "),
        c("READY"),
        t(" for commit "),
        c("3f436d02…"),
      ],
      source: [t("Vercel API, queried directly")],
      tier: "Agent-verified",
    },
    {
      id: "N16",
      claim: [
        strong(t("No published mobile artifact has been verified.")),
        t(
          " No linked Vercel project or GitHub Actions workflow was found, and the repository's EAS builds are manually invoked. App Store and Play Store surfaces were "
        ),
        strong(t("not")),
        t(" checked"),
      ],
      source: [
        t("Vercel project list; "),
        c("git ls-files"),
        t(" shows no "),
        c(".github/"),
        t("; "),
        c("mobile/eas.json"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "N17",
      claim: [
        t("Mobile evidence is a build, not a deployment: "),
        c("npm install"),
        t(" clean (481 packages), "),
        c("expo start --offline"),
        t(
          " launched Metro, Android bundle served HTTP 200 at 6,154,645 bytes across 770 modules. "
        ),
        strong(t("Not verified:")),
        t(" device or emulator rendering, iOS, any behavior after bundle load"),
      ],
      source: [t("Executed locally against the mobile tree")],
      tier: "Agent-verified",
    },
    {
      id: "N18",
      claim: [t("Mobile targets Expo SDK 52 ("), c("expo ~52.0.49"), t(")")],
      source: [c("mobile/package.json")],
      tier: "Agent-verified",
    },
    {
      id: "N19",
      claim: [t("Web source 2,368 lines JS/JSX/CSS; mobile source 1,617 lines JS/JSX")],
      source: [c("wc -l"), t(" over each "), c("src/"), t(" tree")],
      tier: "Agent-verified",
    },
    {
      id: "N20",
      claim: [
        t(
          "Product: a number-recognition trainer for non-native English speakers, using high-speed repetition and instant feedback. Questions carry an explicit "
        ),
        c("direction"),
        t(" field with both "),
        c("word-to-number"),
        t(" and "),
        c("number-to-word"),
        t(" values, and "),
        c("PROMPTS_PER_DIRECTION = 7"),
        t(" splits each 14-question session evenly between the two"),
      ],
      source: [
        c("Numera-V2/README.md:1-5"),
        t("; "),
        c("src/core/levelsData.js"),
        t(" direction values and header comment; "),
        c("src/core/rules.js:13"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "N21",
      claim: [
        t("Frameworks: web declares "),
        c("react ^19.2.6"),
        t(" and "),
        c("react-dom ^19.2.6"),
        t("; mobile declares "),
        c("expo ~52.0.49"),
        t(", "),
        c("react 18.3.1"),
        t(", "),
        c("react-native 0.76.9"),
      ],
      source: [c("Numera-V2/package.json"), t("; "), c("mobile/package.json")],
      tier: "Agent-verified",
    },
    {
      id: "N22",
      claim: [
        t("Module responsibilities, from each file's own header and exports: "),
        c("levelsData.js"),
        t(" — 4 levels × 20 questions, each "),
        c("{ prompt, options[4], answer, direction }"),
        t(", direction explicit data never inferred at runtime (1 export); "),
        c("rng.js"),
        t(" — seeded injectable randomness, pure, same seed same stream (3 exports); "),
        c("rules.js"),
        t(" — platform-neutral game rules, \"consumed identically by web and mobile\" (10 exports); "),
        c("session.js"),
        t(" — session construction, importing from "),
        c("rng.js"),
        t(" and "),
        c("rules.js"),
        t(" (1 export)"),
      ],
      source: [
        t("Header comments and "),
        c("export"),
        t(" declarations in each of the four files"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "N23",
      claim: [
        strong(t("Import/redeclaration audit across both published repositories.")),
        t(" Six call sites import from "),
        c("core/rules.js"),
        t(" — web "),
        c("App.jsx:4"),
        t(", "),
        c("EndOverlay.jsx:2"),
        t(", "),
        c("GameBoard.jsx:10"),
        t("; mobile "),
        c("NumeraApp.jsx:7"),
        t(", "),
        c("components/EndOverlay.jsx:10"),
        t(", "),
        c("components/GameBoard.jsx:20"),
        t(". Zero redeclarations of any of the eight constants outside "),
        c("rules.js"),
        t(" in either "),
        c("src/"),
        t(" tree"),
      ],
      source: [
        c("grep"),
        t(" for imports and for "),
        c("const|let|var <CONSTANT>"),
        t(" across both trees, excluding "),
        c("core/rules.js"),
      ],
      tier: "Agent-verified",
    },
    {
      id: "N24",
      claim: [
        t(
          "The published mobile README names what is deliberately platform-specific: rendering, styling and design tokens, persistence (AsyncStorage rather than localStorage), sound, haptics, safe areas, and animation timing tied to a stylesheet"
        ),
      ],
      source: [
        c("mobile/README.md"),
        t(", \"Platform-specific, deliberately not shared\""),
      ],
      tier: "Agent-verified",
    },
    {
      id: "N25",
      claim: [
        c("numera-dashboard-1600x950.jpg"),
        t(
          " is hash-gated in the Phase 1 durable record — 23,630 bytes, SHA-256 "
        ),
        c("C5F2F334…023820F"),
        t(
          ", captured from the live app, no application state fabricated — and independently re-verified by the planning seat against the published Portfolio tree"
        ),
      ],
      source: [
        c("implementation-status.md"),
        t(" (Phase 1 record); "),
        c("phase-2-status.md"),
        t(" re-verification table"),
      ],
      tier: "Agent-verified",
    },
  ],
};

export default content;
