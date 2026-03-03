import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Mail,
  Server,
} from 'lucide-react'
import { SITE_CONFIG } from '../../data'

export const metadata: Metadata = {
  title: 'Legacy System Modernization & Modular Architecture - Case Study',
  description: `Case study of controlled legacy system modernization by ${SITE_CONFIG.fullName}. Incremental refactoring into a modular, API-driven architecture.`,
}

const techStack = [
  { name: 'Node.js', category: 'Runtime' },
  { name: 'API', category: 'Integration' },
  { name: 'SQL', category: 'Data Layer' },
  { name: 'Docker', category: 'Environment' },
]

const solutionSteps = [
  'Introduced an API abstraction layer to decouple frontend and backend',
  'Extracted business logic into structured service modules',
  'Standardized database access patterns',
  'Organized domain responsibilities into logical boundaries',
  'Improved environment consistency through containerized deployment',
]

const architecturePoints = [
  { icon: Layers, title: 'Modular Monolith', desc: 'Controlled modernization instead of a risky full rewrite' },
  { icon: Code2, title: 'Separated Frontend', desc: 'Presentation split away from backend business logic' },
  { icon: Server, title: 'API Layer', desc: 'Structured communication boundary between layers' },
  { icon: Database, title: 'SQL Access', desc: 'Centralized database with clearer access abstraction' },
]

const refactoringStrategy = [
  'Avoided full rewrite to reduce operational risk',
  'Applied incremental refactoring pattern',
  'Introduced abstraction layers before restructuring core logic',
  'Validated stability at each transition step',
]

const results = [
  'Improved maintainability and code clarity',
  'Reduced deployment risk during feature updates',
  'Better separation of concerns across modules',
  'Faster iteration for new functionality',
  'Cleaner foundation for future architectural evolution',
]

const moduleFolders = ['api/', 'services/', 'db/', 'modules/']

export default function MicroservicesMigrationCaseStudyPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              Case Study
            </span>
            <span className="text-sm text-zinc-500">Controlled Architectural Modernization</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Legacy System Modernization &amp; Modular Architecture
          </h1>
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['Node.js', 'API', 'SQL', 'Docker'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            Modernization of a legacy monolithic business system into a modular, API-driven
            architecture. Improved maintainability, deployment flexibility, and development
            velocity while preserving critical business logic.
          </p>
          <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
            <p className="text-sm font-medium text-blue-300">
              Controlled architectural modernization
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              A pragmatic evolution, not a disruptive rewrite.
            </p>
          </div>
          <div className="mt-6 space-y-4 leading-relaxed text-zinc-400">
            <p>
              This project modernized a legacy monolithic business system into a modular,
              API-driven architecture while preserving production stability and critical
              business logic.
            </p>
            <p>
              Instead of pursuing a risky full microservices rewrite, the system was
              incrementally restructured to improve maintainability, deployment flexibility,
              and long-term scalability.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
            >
              <Mail className="h-4 w-4" />
              Contact / Hire Me
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
            <p>
              The original system was built as a tightly coupled monolithic application where
              presentation, business logic, and database access were interwoven.
            </p>
            <p>
              Rather than replacing the system entirely, the modernization strategy focused
              on controlled architectural evolution. The objective was to introduce
              structural improvements while keeping production operations uninterrupted.
            </p>
            <p>
              This approach enabled steady progress without operational risk.
            </p>
          </div>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Problem</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The monolithic architecture created deployment rigidity and scaling
                limitations. Even small changes required full system redeployment.
              </p>
              <p>
                Shared database access patterns increased complexity, and tightly coupled
                modules slowed development velocity. Over time, technical debt accumulated
                and reduced maintainability.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              The system was incrementally refactored into a modular structure with clear
              separation of concerns:
            </p>
            <ul className="mt-4 space-y-3">
              {solutionSteps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-zinc-300">{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed text-zinc-400">
              This controlled transformation reduced technical debt while maintaining
              production continuity.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Architecture Visuals</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Two schematic views that frame the modernization clearly
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-lg font-semibold text-white">Before vs After Structure</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Before: UI, logic, and data access were mixed together. After: the system
                moved to a cleaner layered flow.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Before
                  </p>
                  <div className="mt-3 flex min-h-28 flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-5 text-center">
                    <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                      UI + Logic + DB
                    </span>
                    <p className="mt-3 text-sm text-zinc-500">
                      Tightly coupled monolithic structure where presentation, logic, and
                      data access were intertwined.
                    </p>
                  </div>
                </div>
                <div className="hidden justify-center sm:flex">
                  <ArrowRight className="h-5 w-5 text-blue-400" />
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    After
                  </p>
                  <div className="mt-3 space-y-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-4">
                    <div className="rounded-lg bg-zinc-800 px-3 py-2 text-center text-sm text-white">
                      Frontend
                    </div>
                    <div className="text-center text-xs text-blue-400">↓ API layer ↓</div>
                    <div className="rounded-lg bg-zinc-800 px-3 py-2 text-center text-sm text-white">
                      Backend Logic
                    </div>
                    <div className="text-center text-xs text-blue-400">↓ Structured access ↓</div>
                    <div className="rounded-lg bg-zinc-800 px-3 py-2 text-center text-sm text-white">
                      SQL Database
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-zinc-500">
                    Layered architecture with API abstraction, structured backend logic, and
                    clearer database boundaries.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-lg font-semibold text-white">Module Separation</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                A clearer folder and responsibility boundary makes the system feel real,
                maintainable, and easier to extend.
              </p>
              <div className="mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80">
                <div className="border-b border-zinc-800 px-4 py-3 text-xs uppercase tracking-wide text-zinc-500">
                  Structure Snapshot
                </div>
                <div className="space-y-3 p-4 font-mono text-sm text-zinc-300">
                  {moduleFolders.map((folder) => (
                    <div
                      key={folder}
                      className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2"
                    >
                      {folder}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Architecture</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Modular monolith with API boundaries and clearer deployment discipline
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {architecturePoints.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-all hover:border-blue-500/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-zinc-300">Modular Monolith with API Layer</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-zinc-300">Frontend separated from backend logic</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-zinc-300">API layer introduced for structured communication</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-zinc-300">Centralized database with improved access abstraction</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-zinc-300">Containerized environment (Docker) for consistency</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-zinc-300">Gradual refactoring to reduce technical debt</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Refactoring Strategy</h2>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <ul className="space-y-4">
              {refactoringStrategy.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-zinc-300">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Results</h2>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <ul className="space-y-4">
              {results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-zinc-300">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-2 transition-all hover:border-blue-500/30"
              >
                <span className="text-sm font-medium text-white">{tech.name}</span>
                <span className="text-xs text-zinc-500">{tech.category}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Planning a legacy modernization?</h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss how to reduce technical debt and modernize architecture without
            forcing a risky full rewrite.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
            >
              Contact / Hire Me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
            >
              View Other Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
