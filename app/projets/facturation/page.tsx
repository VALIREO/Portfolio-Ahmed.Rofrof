import ProjectGallery from "../../components/project-gallery";
import Image from "next/image";

const projects = [
  {
    number: "01",
    images: [
      { src: "/images/facturation.png", alt: "Page d'accueil de l'application de facturation" },
      { src: "/images/Page%20login.png", alt: "Ecran de connexion de l'application de facturation" },
      { src: "/images/ssssssssssssssssss.png", alt: "Tableau de bord de l'application de facturation" },
    ],
    category: "Application web · Sup Management · 02/2026 — 04/2026",
    title: "Gestion de facturation",
    description:
      "Une application SaaS pour g\u00e9rer les clients, les produits et services, les devis et les factures.",
    technologies: ["React.js", "Laravel", "API REST", "MySQL"],
    accent: "from-violet-600 to-indigo-500",
    mark: "01 / Facturation",
  },
  {
    number: "02",
    images: [
      {
        src: "/images/Capture%20d'%C3%A9cran%202026-03-14%20163902.png",
        alt: "Page d'accueil du projet de gestion RH Plenitude",
      },
      {
        src: "/images/Capture%20d'%C3%A9cran%202026-03-14%20173357.png",
        alt: "Tableau de bord du projet de gestion RH Plenitude",
      },
    ],
    category: "Application web · Group Pl\u00e9nitude · 04/2025 — 05/2025",
    title: "Gestion des ressources humaines",
    description:
      "Une application RH avec des fonctionnalit\u00e9s CRUD et un tableau de bord bas\u00e9 sur Metronic.",
    technologies: ["CRUD", "Metronic", "PHP", "MySQL"],
    accent: "from-cyan-600 to-blue-500",
    mark: "02 / Ressources humaines",
  },
];

const experience = [
  {
    period: "Mai 2026 — Sept. 2026",
    title: "Support technique",
    organization: "Concentrix",
    detail: "Accompagnement et assistance technique aux utilisateurs.",
  },
  {
    period: "Ao\u00fbt 2025 — F\u00e9v. 2026",
    title: "Support technique (Agent Mailer)",
    organization: "E Market Solutions",
    detail: "Support technique et outils de communication par e-mail.",
  },
];

const education = [
  {
    period: "2025 — 2026",
    title: "Licence Professionnelle en G\u00e9nie Informatique",
    organization: "Sup Management",
  },
  {
    period: "2023 — 2025",
    title: "Technicien Sp\u00e9cialis\u00e9 en D\u00e9veloppement Digital",
    organization: "OFPPT Al Adarissa",
  },
];

const skillGroups = [
  {
    title: "D\u00e9veloppement",
    skills: "HTML, CSS, JavaScript, PHP, Java, Python",
  },
  {
    title: "Frameworks et outils",
    skills: "React, Laravel, Spring Boot, Bootstrap, Git",
  },
  {
    title: "Donnees",
    skills: "MySQL, SQL, Oracle",
  },
  {
    title: "Reseaux et e-mail",
    skills: "DNS, SMTP, SPF, DKIM, DMARC",
  },
];

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#accueil" className="flex items-center gap-3" aria-label="Ahmed Rofrof, accueil">
            <span className="flex size-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold tracking-wide text-white">
              AR
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-900">Ahmed Rofrof</span>
          </a>

          <nav aria-label="Navigation principale">
            <ul className="flex items-center gap-4 text-sm font-medium text-slate-600 sm:gap-8">
              <li><a className="transition hover:text-violet-700" href="#projets">Projets</a></li>
              <li><a className="hidden transition hover:text-violet-700 sm:inline" href="#parcours">Parcours</a></li>
              <li><a className="transition hover:text-violet-700" href="#competences">Comp&#233;tences</a></li>
              <li>
                <a className="rounded-full bg-slate-950 px-4 py-2.5 text-white transition hover:bg-violet-700" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="accueil" className="relative isolate overflow-hidden bg-slate-950 text-white">
          <div aria-hidden="true" className="absolute -right-32 -top-40 -z-10 size-[34rem] rounded-full bg-violet-700/30 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-64 left-1/4 -z-10 size-[32rem] rounded-full bg-cyan-700/20 blur-3xl" />

          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                <span className="size-2 rounded-full bg-emerald-400" />
                Disponible pour de nouvelles opportunit&#233;s
              </p>

              <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
                D&#233;veloppeur web <span className="text-violet-300">Full Stack</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Je cr&#233;e des applications web utiles, de l&apos;interface React aux API Laravel et aux bases de donn&#233;es MySQL.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#projets" className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  D&#233;couvrir mes projets <span aria-hidden="true">&#8599;</span>
                </a>
                <a href="mailto:ahmed.rofrof@gmail.com" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Me contacter
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-7">
              <Image
                src="/images/profile.jpg"
                alt="Portrait d'Ahmed Rofrof"
                width={600}
                height={600}
                className="mx-auto mb-6 size-36 rounded-full border-4 border-white/20 object-cover object-top shadow-lg sm:size-40"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">En quelques mots</p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm text-slate-400">Specialite</dt>
                  <dd className="mt-1 font-medium text-white">Applications web Full Stack</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-400">Stack principale</dt>
                  <dd className="mt-1 font-medium text-white">React · Laravel · MySQL</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-400">Diplome</dt>
                  <dd className="mt-1 font-medium text-white">Licence Professionnelle en G&#233;nie Informatique</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="projets" className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Projets s&#233;lectionn&#233;s</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Du concret, du fonctionnel.</h2>
              </div>
              <p className="max-w-md text-slate-600">Des applications de gestion pensees pour simplifier les taches du quotidien.</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.number} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                  <div className={`relative flex min-h-56 items-end overflow-hidden bg-gradient-to-br ${project.accent} p-7 sm:min-h-64 sm:p-9`}>
                    <div aria-hidden="true" className="absolute -right-10 -top-16 size-64 rounded-full border border-white/20" />
                    <div aria-hidden="true" className="absolute -right-2 -top-8 size-48 rounded-full border border-white/20" />
                    <div className="relative flex w-full items-end justify-between gap-4 text-white">
                      <span className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.mark}</span>
                      <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm backdrop-blur">{project.number}</span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9">
                    <ProjectGallery images={project.images} projectName={project.title} />
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{project.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies utilis&#233;es">
                      {project.technologies.map((technology) => (
                        <li key={technology} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">{technology}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="parcours" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Exp&#233;rience</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Un parcours polyvalent.</h2>
              <ol className="mt-9 space-y-8 border-l border-slate-200 pl-6">
                {experience.map((item) => (
                  <li key={item.organization} className="relative">
                    <span aria-hidden="true" className="absolute -left-[1.93rem] top-1 size-3 rounded-full border-2 border-violet-600 bg-white" />
                    <p className="text-sm font-medium text-violet-700">{item.period}</p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="text-slate-700">{item.organization}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Formation</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Apprendre et construire.</h2>
              <ol className="mt-9 space-y-4">
                {education.map((item) => (
                  <li key={item.organization} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <p className="text-sm font-medium text-violet-700">{item.period}</p>
                    <h3 className="mt-2 font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.organization}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="competences" className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Comp&#233;tences</p>
            <div className="mt-3 grid gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Les outils que j&apos;utilise pour donner vie aux id&#233;es.</h2>
              <p className="max-w-lg leading-7 text-slate-300">Du d&#233;veloppement d&apos;interfaces et d&apos;API &#224; la gestion des bases de donn&#233;es et des services e-mail.</p>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                  <dt className="font-semibold text-white">{group.title}</dt>
                  <dd className="mt-2 leading-7 text-slate-300">{group.skills}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 rounded-3xl bg-violet-50 p-7 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Parlons de votre prochain projet.</h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">Je suis disponible pour un emploi, un stage ou une mission freelance.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:ahmed.rofrof@gmail.com" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">Envoyer un e-mail</a>
              <a href="https://www.linkedin.com/in/ahmed-rofrof" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-400 hover:text-violet-700">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Ahmed Rofrof</p>
          <a className="transition hover:text-violet-700" href="mailto:ahmed.rofrof@gmail.com">ahmed.rofrof@gmail.com</a>
        </div>
      </footer>
    </>
  );
}
