import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { portfolioData } from "@/utils/portfolioData";

export default function NumeraPage() {
  const { projects, labLogs } = portfolioData;
  const project = projects.find(p => p.id === "numera");
  if (!project) return null;

  const notes = labLogs.filter(log => log.event.includes("Numera"));

  return (
    <>
      <Head>
        <title>Numera // Numbers in English — Sitraka Josoa</title>
        <meta
          name="description"
          content="Project detail for Numera, a live web application for learning numbers in English, plus its React Native mobile companion."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
        <Nav />

        <main style={{ flex: 1, backgroundColor: "var(--color-surface)" }}>
          <section style={{ padding: "64px 20px", backgroundColor: "var(--color-surface)" }} className="section-inner">
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                <span aria-hidden="true">&larr;</span> BACK TO EXPERIMENTS
              </a>

              <div
                className="numera-grid"
                style={{
                  display: "grid",
                  gap: "24px",
                  marginTop: "40px",
                }}
              >
                {/* MAIN BLOCK */}
                <article
                  className="numera-main"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-primary)",
                    borderRadius: "16px",
                    padding: "32px",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        border: "1px solid rgba(63, 122, 92, 0.5)",
                        backgroundColor: "var(--color-surface-alt)",
                        borderRadius: "9999px",
                        padding: "4px 12px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-accent)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-accent)",
                          display: "inline-block",
                        }}
                      />
                      Live
                    </span>
                  </div>

                  <h1
                    className="numera-h1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.25rem",
                      fontWeight: 700,
                      lineHeight: 0.95,
                      letterSpacing: "-0.04em",
                      color: "var(--color-text-primary)",
                      margin: "24px 0 0 0",
                    }}
                  >
                    NUMERA // NUMBERS IN ENGLISH
                  </h1>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
                    {project.tech.map(t => (
                      <span
                        key={t}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          border: "1px solid rgba(44, 74, 59, 0.45)",
                          borderRadius: "9999px",
                          padding: "4px 12px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          fontWeight: 500,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "var(--color-text-secondary)",
                      fontStyle: "italic",
                      margin: "32px 0 0 0",
                    }}
                  >
                    [Description coming soon]
                  </p>

                  <div
                    style={{
                      display: "flex",
                      minHeight: "224px",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      borderStyle: "dashed",
                      borderWidth: "1px",
                      borderColor: "rgba(44, 74, 59, 0.5)",
                      backgroundColor: "var(--color-surface)",
                      borderRadius: "12px",
                      padding: "32px",
                      marginTop: "32px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--color-text-secondary)",
                        textAlign: "center",
                      }}
                    >
                      Demo video coming soon
                    </p>
                  </div>
                </article>

                {/* RIGHT COLUMN */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {/* RELATED BLOCK */}
                  <article
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-primary)",
                      borderRadius: "16px",
                      padding: "32px",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: "-0.03em",
                        color: "var(--color-text-primary)",
                        margin: 0,
                      }}
                    >
                      NUMERA MOBILE
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          border: "1px solid rgba(44, 74, 59, 0.45)",
                          borderRadius: "9999px",
                          padding: "4px 12px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          fontWeight: 500,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        React Native
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        color: "var(--color-text-secondary)",
                        margin: "16px 0 0 0",
                      }}
                    >
                      Separate repository from the web version
                    </p>
                  </article>

                  {/* ACCESS & STATUS BLOCK */}
                  <article
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-primary)",
                      borderRadius: "16px",
                      padding: "32px",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--color-text-secondary)",
                        margin: 0,
                      }}
                    >
                      Access & Status
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "24px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            aria-hidden="true"
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: "var(--color-accent)",
                              display: "inline-block",
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                              color: "var(--color-text-primary)",
                            }}
                          >
                            Web
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.875rem",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            — Live
                          </span>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", paddingLeft: "20px" }}>
                          <a
                            href="#"
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "11px",
                              fontWeight: 700,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--color-text-primary)",
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.textDecoration = "underline";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.textDecoration = "none";
                            }}
                          >
                            Live Demo
                          </a>
                          <a
                            href="#"
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "11px",
                              fontWeight: 700,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--color-text-primary)",
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.textDecoration = "underline";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.textDecoration = "none";
                            }}
                          >
                            GitHub Repo
                          </a>
                        </div>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            aria-hidden="true"
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: "#9a7200",
                              display: "inline-block",
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                              color: "var(--color-text-primary)",
                            }}
                          >
                            Mobile
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.875rem",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            — Downloadable (APK via GitHub)
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "20px" }}>
                          <a
                            href="#"
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "11px",
                              fontWeight: 700,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--color-text-primary)",
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.textDecoration = "underline";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.textDecoration = "none";
                            }}
                          >
                            GitHub Repo
                          </a>
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.75rem",
                              color: "var(--color-text-secondary)",
                              fontStyle: "italic",
                            }}
                          >
                            link pending
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* PROJECT NOTES BLOCK */}
                  <article
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-primary)",
                      borderRadius: "16px",
                      padding: "32px",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--color-text-secondary)",
                        margin: 0,
                      }}
                    >
                      Project Notes
                    </h2>
                    <ol
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: "24px",
                        paddingLeft: 0,
                        listStyle: "none",
                      }}
                    >
                      {notes.map((note) => (
                        <li key={note.date} style={{ display: "flex", gap: "16px" }}>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              color: "var(--color-accent)",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            {note.date}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.875rem",
                              lineHeight: 1.65,
                              color: "var(--color-text-primary)",
                              opacity: 0.8,
                            }}
                          >
                            {note.event}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style>{`
        .numera-grid {
          grid-template-columns: 1fr;
        }

        .numera-main {
          padding: 32px;
        }

        @media (min-width: 1024px) {
          .numera-grid {
            grid-template-columns: 1.6fr 1fr;
          }

          .numera-main {
            padding: 40px;
          }

          .numera-h1 {
            font-size: 3rem;
          }
        }

        @media (min-width: 768px) {
          .numera-h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
