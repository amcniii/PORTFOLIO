import { createFileRoute } from "@tanstack/react-router";
import heroTexture from "@/assets/hero-texture.jpg";
import workIllustration from "@/assets/work-illustration.jpg";
import { ArrowUpRight, Github, Mail, Sparkles, Code2, BookOpen, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amani — CSE (AI & ML) Student & Python Builder" },
      { name: "description", content: "Portfolio of Amani — 3rd-year CSE (AI & ML) student at Mentor Engineering College, Muvattupuzha. Building small, useful things with Python." },
      { property: "og:title", content: "Amani — Portfolio" },
      { property: "og:description", content: "Small, useful things built with Python by a 3rd-year AI & ML student." },
    ],
  }),
  component: Index,
});

function Index() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-10">
        {/* Nav */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-clay" />
            amani
          </div>
          <div className="hidden gap-7 text-sm text-muted-foreground sm:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Say hi <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        {/* Hero */}
        <header className="mt-14 sm:mt-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="inline-block h-px w-8 bg-clay" />
            Portfolio · {year}
          </div>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]">
            Hi, I'm Amani.
            <br />
            <span className="text-ink italic">I build small,</span>
            <br />
            <span className="text-clay">useful things.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            3rd-year CSE AI & ML student at Mentor Engineering College, Muvattupuzha. Building small projects with Python, JavaScript, HTML, and CSS while learning more about AI and machine learning.
          </p>
        </header>

        {/* Bento grid */}
        <section id="work" className="mt-14 grid grid-cols-12 gap-4 sm:gap-5">
          {/* Big intro card with hero texture */}
          <article className="bento-card grain col-span-12 overflow-hidden p-0 md:col-span-7 md:row-span-2">
            <div className="relative h-full min-h-[320px]">
              <img
                src={heroTexture}
                alt=""
                width={1280}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
                <Sparkles className="h-5 w-5 text-ink" />
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Curious about what machines can learn from us.
                </h2>
                <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
                  Lately into classical ML, tiny automation scripts, and notebooks
                  that explain themselves.
                </p>
              </div>
            </div>
          </article>

          {/* Now card */}
          <article className="bento-card col-span-6 md:col-span-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
              </span>
              Now
            </div>
            <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">
              building <em className="text-ink">tiny projects</em> and collecting unfinished notebooks.
            </p>
          </article>

          {/* Location */}
          <article className="bento-card col-span-6 md:col-span-5">
            <MapPin className="h-5 w-5 text-ink" />
            <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">
              Kakkanad, <span className="text-clay">Kerala</span>
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground">UTC +5:30 · most days online after 7pm</p>
          </article>

          {/* Stack */}
<article className="bento-card col-span-6 md:col-span-3">
  <Code2 className="h-5 w-5 text-ink" />
  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
    Skills
  </p>
  <div className="mt-3 flex flex-wrap gap-2">
    {["Python", "FastAPI", "PostgreSQL", "HTML", "CSS", "JavaScript", "Git"].map((t) => (
      <span
        key={t}
        className="rounded-full border border-border bg-background/60 px-3 py-1 text-sm"
      >
        {t}
      </span>
    ))}
  </div>
</article>

{/* Experience */}
<article className="bento-card col-span-12 md:col-span-5">
  <BookOpen className="h-5 w-5 text-ink" />

  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
    Experience
  </p>
  <p className="mt-2 font-display text-lg leading-snug">
    ThoughtMinds Internship —
    <span className="text-muted-foreground">
      {" "}Built an attendance management system using FastAPI and PostgreSQL during a 1-month internship at Infopark.
    </span>
  </p>

  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
    Workshop
  </p>
  <p className="mt-2 font-display text-lg leading-snug">
    5G & IoT Workshop —
    <span className="text-muted-foreground">
      {" "}Completed a workshop focused on real-world 5G and IoT applications.
    </span>
  </p>
</article>

{/* Stats / quote */}
<article className="bento-card col-span-12 bg-ink text-background md:col-span-4">
  <p className="font-display text-2xl leading-snug">
    "Start tiny.
    <br />
    Ship anyway."
  </p>
  <p className="mt-3 text-sm text-background/70">
    — pinned in my notebook
  </p>
</article>

          {/* Illustration card */}
          <article className="bento-card grain col-span-6 overflow-hidden p-0 md:col-span-5">
            <img
              src={workIllustration}
              alt="Illustration of a laptop with floating code snippets"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </article>

{/* Mini Projects */}
<article className="bento-card col-span-12 md:col-span-7">
  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
    Mini Projects
  </p>

  <ul className="mt-4 divide-y divide-border">
    {[
      {
        name: "AttendancePro",
        desc: "Student attendance management system with FastAPI and PostgreSQL.",
        tag: "Python, FastAPI, PostgreSQL",
      },
      {
        name: "Bloom Plan",
        desc: "Task management web application for organizing daily activities.",
        tag: "HTML, CSS, JavaScript",
      },
      {
        name: "Pink Calc",
        desc: "Scientific calculator with a clean and responsive interface.",
        tag: "HTML, CSS, JavaScript",
      },
      {
        name: "Hangman",
        desc: "Interactive word-guessing game built for learning JavaScript.",
        tag: "HTML, CSS, JavaScript",
      },
    ].map((p) => (
      <li
        key={p.name}
        className="group flex items-center justify-between gap-4 py-3.5"
      >
        <div className="min-w-0">
          <p className="font-display text-base font-semibold sm:text-lg">
            {p.name}
          </p>
          <p className="truncate text-sm text-muted-foreground">
            {p.desc}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground sm:inline">
            {p.tag}
          </span>

          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
      </li>
    ))}
  </ul>
  </article>

</section>

        {/* About */}
        <section id="about" className="mt-20 grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">About</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              A student, mostly.
            </h2>
          </div>
          <div className="col-span-12 space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-8 md:text-lg">
            <p>
              I'm in my third year studying Computer Science with a specialization
              in AI &amp; Machine Learning. I like the kind of code that fits on a
              single screen and quietly does its job.
            </p>
            <p>
              When I'm not in class, I'm usually picking apart a paper I half-understand,
              breaking a model on purpose, or writing little Python tools for things
              I keep doing manually.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20 rounded-3xl border border-border bg-card p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Want to build <span className="italic text-clay">something small</span> together?
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:amani@madeit.ac.in"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> amani@madeit.ac.in
            </a>
            <a
              href="https://github.com/amcniii"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="h-4 w-4" /> github
            </a>
          </div>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {year} Amani · Mentor Engineering College, Muvattupuzha</p>
          <p>Built quietly with Python on the brain.</p>
        </footer>
      </div>
    </main>
  );
}
