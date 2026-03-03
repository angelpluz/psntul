import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ImageIcon,
  Mail,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import { SITE_CONFIG } from '../../data'

export const metadata: Metadata = {
  title: 'AI Assistant & Workflow Platform - Case Study',
  description: `Case study of an AI assistant and workflow platform built by ${SITE_CONFIG.fullName}. Local LLM chat, automation flows, and internal AI tooling.`,
}

const techStack = [
  { name: 'Python', category: 'Language' },
  { name: 'FastAPI', category: 'API Layer' },
  { name: 'Local LLM', category: 'Inference' },
  { name: 'Gemma 3', category: 'Model' },
  { name: 'gpt-oss', category: 'Model' },
  { name: 'TypeScript', category: 'Tooling' },
  { name: 'Prompt Workflows', category: 'Automation' },
  { name: 'UI Prototyping', category: 'Experience' },
]

const deliveryScope = [
  {
    icon: TerminalSquare,
    title: 'Assistant Interface',
    desc: 'A terminal-styled chat surface for fast internal Q&A, experimentation, and practical daily usage.',
  },
  {
    icon: Bot,
    title: 'Local Model Routing',
    desc: 'A local AI runtime that surfaces available models and supports different response paths by task.',
  },
  {
    icon: ImageIcon,
    title: 'Content Generation',
    desc: 'Connected workflows for image and content generation requests inside an existing team communication flow.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Hygiene',
    desc: 'Supporting utilities sanitize noisy text and remove empty or low-quality rows before downstream use.',
  },
]

const productScreens = [
  {
    title: 'Terminal-style AI assistant',
    caption:
      'A focused chat interface gives the assistant a clear, fast operating surface with status, model visibility, and lightweight interaction controls.',
    src: '/pic/ai-tech/552745530_31691723997108147_473766638402760873_n.jpg',
    aspect: 'aspect-[16/10]',
    span: 'lg:col-span-2',
  },
  {
    title: 'Thai-language reasoning flow',
    caption:
      'The assistant handles Thai prompts and explanatory responses, making it practical for internal use in local-language workflows.',
    src: '/pic/ai-tech/556112323_31767245852889294_3552471339926964860_n.jpg',
    aspect: 'aspect-[16/9]',
    span: '',
  },
  {
    title: 'Team-facing generation workflow',
    caption:
      'The captured Discord flow shows AI-assisted image generation inside a team conversation, useful for content iteration and rapid feedback loops.',
    src: '/pic/ai-tech/634721190_34119977454282777_5279613301201051622_n.jpg',
    aspect: 'aspect-[16/10]',
    span: '',
  },
  {
    title: 'Dataset cleanup utility',
    caption:
      'A typed cleanup routine strips noisy patterns and empty rows, helping keep training or retrieval inputs cleaner before processing.',
    src: '/pic/ai-tech/Screenshot%202026-03-03%20085425.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
]

const operationalModules = [
  'Local LLM chat for internal questions and quick reasoning tasks',
  'Model switching and visibility for different AI execution paths',
  'Image-generation and content support embedded in team workflows',
  'Prompt-driven utility flows for iterative experimentation',
  'Text sanitization and dataset cleanup for better downstream AI quality',
]

const results = [
  'Centralized multiple AI experiments into one usable internal platform',
  'Reduced friction between prototyping, content generation, and operational use',
  'Made local-model workflows more accessible through a clear chat interface',
  'Improved data quality before later automation, retrieval, or model processing',
]

export default function AIAssistantWorkflowCaseStudyPage() {
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
            <span className="text-sm text-zinc-500">AI Tooling & Automation</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Assistant & Workflow Platform
          </h1>
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['Python', 'FastAPI', 'Local LLM', 'Automation', 'AI UI'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            An internal AI platform that brings together a terminal-style assistant,
            local model routing, team-facing content generation, and supporting data
            cleanup utilities into one practical workflow stack.
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

        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Product Surfaces</h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-500">
                The provided screens show a mix of local chat UX, model-aware AI usage,
                team workflow integration, and supporting implementation utilities.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {productScreens.map((screen) => (
              <figure
                key={screen.title}
                className={`overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 ${screen.span}`}
              >
                <div className={`relative w-full ${screen.aspect}`}>
                  <Image
                    src={screen.src}
                    alt={screen.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="space-y-2 border-t border-zinc-800 p-5">
                  <h3 className="text-base font-semibold text-white">{screen.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{screen.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
            <p>
              This project is better described as an AI operations toolkit than a single
              narrow feature. Based on the provided screens, it combines a local LLM chat
              interface, internal automation touchpoints, creative generation support, and
              code-level utilities for preparing cleaner AI inputs.
            </p>
            <p>
              The value comes from packaging these capabilities into a usable day-to-day
              workflow: people can ask questions, test ideas, generate supporting content,
              and improve data quality without jumping between disconnected tools.
            </p>
          </div>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Problem</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              AI work often starts fragmented: one place for prompting, another for model
              experimentation, another for team feedback, and separate scripts for cleaning
              messy data. That fragmentation slows iteration and makes practical adoption
              harder than it should be.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              On top of that, low-quality text inputs and inconsistent operational flows can
              quickly degrade output quality, especially when teams are experimenting fast.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              The solution was a practical AI platform centered on a dedicated chat
              interface, local-model visibility, and adjacent tools that support real work
              instead of isolated demos. Team-facing content flows and code utilities were
              treated as part of the same system.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              By tightening the loop between prompting, generation, and data preparation,
              the platform becomes more usable for ongoing internal operations and future AI
              expansion.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Delivery Scope</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Platform areas inferred directly from the provided `ai-tech` screens
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryScope.map((item) => (
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

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Operational Modules</h2>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <ul className="space-y-4">
              {operationalModules.map((module) => (
                <li key={module} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-zinc-300">{module}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">AI Workflow</h2>
          <p className="mt-2 text-sm text-zinc-500">
            A compact chain from user intent to usable output
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TerminalSquare, title: 'Prompt Intake', desc: 'Receive chat prompts or task requests from users.' },
              { icon: ServerCog, title: 'Model Execution', desc: 'Route the task through available local model options.' },
              { icon: Sparkles, title: 'Generated Output', desc: 'Return answers, creative assets, or structured responses.' },
              { icon: ShieldCheck, title: 'Cleanup & Reuse', desc: 'Sanitize supporting data before reuse in later flows.' },
            ].map((item) => (
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
          <h2 className="text-2xl font-bold text-white">Need practical AI tooling?</h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss how I can turn prototypes, local models, and workflow
            automation into a usable AI product for your team.
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
