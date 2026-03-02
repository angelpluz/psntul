import type { Metadata } from 'next'
import { SITE_CONFIG } from '../../data'
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Database, 
  Bot,
  Mail,
  BrainCircuit
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Concierge & Knowledge Retrieval System - Case Study',
  description: `Case study of the AI Concierge system built by ${SITE_CONFIG.fullName}. LLM-powered assistant with RAG for customer and operational queries.`,
}

const techStack = [
  { name: 'OpenAI API', category: 'LLM' },
  { name: 'LangChain', category: 'Framework' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Vector DB', category: 'Storage' },
  { name: 'REST APIs', category: 'Integration' },
  { name: 'Redis', category: 'Cache' },
]

const architecture = [
  { icon: Bot, title: 'LLM Layer', desc: 'OpenAI GPT + Prompt Engineering' },
  { icon: BrainCircuit, title: 'RAG Pipeline', desc: 'Vector search + Context injection' },
  { icon: Database, title: 'Knowledge Base', desc: 'Structured data + Documents' },
  { icon: Layers, title: 'Automation', desc: 'Workflow triggers + Actions' },
]

const results = [
  'Reduced response time from hours to seconds',
  'Consistent, accurate answers across all queries',
  'Easier maintenance with centralized knowledge base',
  'Scalable architecture for adding new use cases',
]

export default function AIConciergeCaseStudyPage() {
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
            <span className="text-sm text-zinc-500">AI & Automation</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Concierge & Knowledge Retrieval System
          </h1>
        </div>

        {/* Hero Card */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['LLM', 'RAG', 'Node.js', 'Automation'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
            An AI assistant that answers customer and operational questions by combining 
            LLMs with structured data retrieval and automation workflows. Designed for 
            fast, consistent responses and easier future expansion.
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
              The AI Concierge system serves as an intelligent interface between users 
              and organizational knowledge. By combining Large Language Models with 
              Retrieval-Augmented Generation (RAG), the system provides accurate, 
              context-aware responses to both customer inquiries and internal operational questions.
            </p>
            <p>
              The architecture prioritizes response consistency and maintainability, 
              allowing non-technical teams to update knowledge bases without modifying code.
            </p>
          </div>
        </section>

        {/* Problem & Solution Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Problem */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Problem</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Customer service and operations teams were spending significant time 
              answering repetitive questions. Information was scattered across 
              documents, databases, and legacy systems. Response quality varied 
              depending on staff experience, and scaling support was becoming 
              increasingly expensive.
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Implemented a RAG-based AI system that retrieves relevant information 
              from structured knowledge bases before generating responses. The system 
              integrates with existing workflows through APIs and can trigger automated 
              actions based on user intent.
            </p>
          </div>
        </div>

        {/* Architecture */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Architecture</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Modular AI pipeline with retrieval augmentation
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
          <h2 className="text-2xl font-bold text-white">Interested in AI integration?</h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss how AI can streamline your operations and improve customer experience.
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
