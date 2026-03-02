import type { Metadata } from 'next'
import { SITE_CONFIG } from '../../data'
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Database, 
  Server,
  Mail,
  Cloud
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Monolith to Microservices Migration - Case Study',
  description: `Case study of microservices migration by ${SITE_CONFIG.fullName}. Zero-downtime architecture transformation.`,
}

const techStack = [
  { name: 'Node.js', category: 'Runtime' },
  { name: 'GraphQL', category: 'API' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Docker', category: 'Container' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Kafka', category: 'Messaging' },
]

const architecture = [
  { icon: Server, title: 'API Gateway', desc: 'Unified entry point' },
  { icon: Layers, title: 'Microservices', desc: 'Domain-driven services' },
  { icon: Database, title: 'Data Layer', desc: 'Per-service databases' },
  { icon: Cloud, title: 'Cloud Infra', desc: 'AWS + Containers' },
]

const results = [
  'Achieved zero downtime during migration',
  'Improved scalability with independent service scaling',
  'Faster deployments with smaller deploy units',
  'Better fault isolation across the system',
]

export default function MicroservicesMigrationCaseStudyPage() {
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
            <span className="text-sm text-zinc-500">Architecture Migration</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Monolith to Microservices Migration
          </h1>
        </div>

        {/* Hero Card */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['Node.js', 'GraphQL', 'MongoDB', 'Docker'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
            Transformation of a monolithic application into a modern microservices 
            architecture. Achieved high availability during migration with seamless 
            data synchronization.
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
              This project involved migrating a large monolithic application to a 
              microservices architecture. The migration was executed using the 
              strangler fig pattern—gradually replacing monolith functionality 
              with microservices while maintaining full system availability.
            </p>
            <p>
              Each service was designed around business capabilities, with its own 
              database and deployment pipeline, enabling teams to develop and deploy 
              independently.
            </p>
          </div>
        </section>

        {/* Problem & Solution Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Problem */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Problem</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              The monolithic application had become difficult to scale and deploy. 
              Small changes required full application redeployment. Different modules 
              had conflicting scaling needs, and the database was becoming a bottleneck. 
              Development velocity was slowing as the codebase grew.
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Implemented a microservices architecture using Node.js and GraphQL. 
              Services communicate through event-driven patterns using Kafka. Each 
              service owns its data store, and the API gateway handles routing and 
              composition. Migration was done incrementally to minimize risk.
            </p>
          </div>
        </div>

        {/* Architecture */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Architecture</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Domain-driven microservices with event-driven communication
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
          <h2 className="text-2xl font-bold text-white">Planning a microservices migration?</h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss strategies for migrating your monolith with minimal disruption.
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
