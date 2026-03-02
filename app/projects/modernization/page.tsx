import type { Metadata } from 'next'
import { SITE_CONFIG } from '../../data'
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Database, 
  Code2,
  RefreshCw,
  Mail,
  Server
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legacy System Modernization (ASP → Modern Web) - Case Study',
  description: `Case study of legacy modernization by ${SITE_CONFIG.fullName}. Migrating Classic ASP to modern Next.js architecture.`,
}

const techStack = [
  { name: 'Classic ASP', category: 'Legacy' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'SQL Server', category: 'Database' },
  { name: 'REST APIs', category: 'Integration' },
  { name: 'Docker', category: 'DevOps' },
]

const architecture = [
  { icon: RefreshCw, title: 'Legacy Layer', desc: 'Classic ASP preservation' },
  { icon: Code2, title: 'Modern Frontend', desc: 'Next.js + React' },
  { icon: Server, title: 'API Bridge', desc: 'Node.js middleware' },
  { icon: Database, title: 'Data Layer', desc: 'SQL + Migration scripts' },
]

const results = [
  'Improved maintainability with modern codebase',
  'Faster feature delivery with modular architecture',
  'Preserved critical business rules during migration',
  'Reduced technical debt significantly',
]

export default function ModernizationCaseStudyPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              Case Study
            </span>
            <span className="text-sm text-zinc-500">Legacy Modernization</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Legacy System Modernization
          </h1>
          <p className="mt-2 text-xl text-zinc-500">Classic ASP → Modern Web</p>
        </div>

        {/* Hero Card */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['Classic ASP', 'Next.js', 'SQL', 'Refactor'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
            Modernized a legacy Classic ASP workflow into a modular architecture with 
            improved maintainability, cleaner data flow, and scalable front-end 
            delivery—while preserving critical business rules.
          </p>
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

        {/* Overview */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <div className="mt-4 space-y-4 text-zinc-400 leading-relaxed">
            <p>
              This project involved transforming a legacy Classic ASP application 
              into a modern web architecture. The goal was to improve developer 
              productivity, enable faster feature releases, and create a foundation 
              for future growth—without disrupting existing business operations.
            </p>
            <p>
              Critical business rules embedded in the legacy codebase were carefully 
              extracted, documented, and preserved throughout the migration process.
            </p>
          </div>
        </section>

        {/* Problem & Solution Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Problem */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Problem</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              The existing Classic ASP system was difficult to maintain and extend. 
              Finding developers with Classic ASP expertise was increasingly challenging. 
              The codebase had accumulated significant technical debt, and implementing 
              new features required extensive testing to avoid breaking existing functionality.
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              A phased migration approach was implemented, gradually replacing legacy 
              modules with modern Next.js components. An API bridge layer was created 
              to allow old and new systems to coexist during the transition period, 
              ensuring zero downtime.
            </p>
          </div>
        </div>

        {/* Architecture */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Architecture</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Phased migration with coexistence strategy
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {architecture.map((item) => (
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
        </section>

        {/* Results */}
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

        {/* Tech Stack */}
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

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Have a legacy system to modernize?</h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss a migration strategy that preserves your business logic while upgrading your technology.
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
