import type { Metadata } from 'next'
import { SITE_CONFIG } from '../../data'
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Database, 
  Cloud, 
  Code2,
  ExternalLink,
  Mail
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Toyota Thonburi Digital Platform - Case Study',
  description: `Case study of the Toyota Thonburi Digital Platform built by ${SITE_CONFIG.fullName}. A full-stack web system for automotive dealership operations.`,
}

const techStack = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'SQL', category: 'Database' },
  { name: 'REST APIs', category: 'Integration' },
  { name: 'Cloudflare', category: 'CDN' },
  { name: 'Vercel', category: 'Deployment' },
]

const architecture = [
  { icon: Code2, title: 'Frontend', desc: 'Next.js / React' },
  { icon: Layers, title: 'Backend', desc: 'API Services' },
  { icon: Database, title: 'Database', desc: 'SQL' },
  { icon: Cloud, title: 'Infrastructure', desc: 'Cloud deployment & CDN' },
]

const results = [
  'Improved user experience and responsiveness',
  'Streamlined internal workflows and data access',
  'Enhanced system maintainability for future development',
  'Reduced operational friction across business processes',
]

export default function ToyotaCaseStudyPage() {
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
            <span className="text-sm text-zinc-500">Enterprise Web System</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Toyota Thonburi Digital Platform
          </h1>
        </div>

        {/* Hero Card */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'Node.js', 'SQL', 'API Integration'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
            A full-stack digital platform designed to enhance customer interaction, 
            streamline internal operations, and integrate multiple business processes 
            into a unified modern platform for an automotive dealership environment.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
            >
              <Mail className="h-4 w-4" />
              Contact / Hire Me
            </Link>
            <a
              href="https://toyotathonburi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
            >
              Live Website
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Overview */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <div className="mt-4 space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Toyota Thonburi Digital Platform is a full-stack web system designed to enhance 
              customer interaction, streamline internal operations, and integrate multiple 
              business processes into a unified modern platform.
            </p>
            <p>
              The project focused on improving performance, scalability, and maintainability 
              compared to legacy workflows. By modernizing the technology stack and introducing 
              modular architecture, the platform now supports seamless expansion and future 
              feature development.
            </p>
          </div>
        </section>

        {/* Problem & Solution Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Problem */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Problem</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              The previous system relied on fragmented tools and legacy processes that resulted 
              in slow performance, inefficient workflows, and difficulty in scaling new features. 
              Maintaining the system was complex due to outdated architecture and limited 
              integration capabilities.
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              A modern architecture was implemented using Next.js with API-based backend 
              integration and optimized database queries. The platform introduced improved 
              UI/UX, structured data management, and modular components to support future 
              scalability and maintainability.
            </p>
          </div>
        </div>

        {/* Architecture */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Architecture</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Modular design with performance optimization at every layer
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
          <h2 className="text-2xl font-bold text-white">Interested in working together?</h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss how I can help architect a solution tailored to your business needs.
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
