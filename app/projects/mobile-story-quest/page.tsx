import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Gamepad2,
  LayoutDashboard,
  Mail,
  MousePointerClick,
  Route,
  Smartphone,
  Star,
  Users,
} from 'lucide-react'
import { SITE_CONFIG } from '../../data'

export const metadata: Metadata = {
  title: 'Mobile Story Quest – Interactive Game Platform - Case Study',
  description: `Case study of Mobile Story Quest – Interactive Game Platform built by ${SITE_CONFIG.fullName}. A mobile-first interactive storytelling system with stage progression and analytics.`,
}

const techStack = [
  { name: 'Next.js App Router', category: 'Web Framework' },
  { name: 'TypeScript', category: 'App Logic' },
  { name: 'React', category: 'UI Layer' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Game State Logic', category: 'Progression' },
  { name: 'PWA-style Install UI', category: 'Mobile Surface' },
  { name: 'Dashboard Analytics UI', category: 'Admin Tools' },
  { name: 'Custom Progress Bars', category: 'Reporting UI' },
]

const productScreens = [
  {
    title: 'Game Entry & Mobile Landing',
    caption:
      'Mobile-first interface with start, continue, switch-player, and add-to-home-screen entry points.',
    src: '/pic/cerfmay/Screenshot%202026-04-21%20142105.png',
    aspect: 'aspect-[9/16]',
    span: '',
  },
  {
    title: 'Stage Selection System',
    caption:
      'Players choose between stages such as Temple, Historical Park, Market, and Walking Street, with locked and active states visible.',
    src: '/pic/cerfmay/Screenshot%202026-04-21%20142139.png',
    aspect: 'aspect-[9/16]',
    span: '',
  },
  {
    title: 'Interactive Story Flow',
    caption:
      'Narrative scenes combine stage context, character dialogue, image content, progress steps, and XP display.',
    src: '/pic/cerfmay/Screenshot%202026-04-21%20142202.png',
    aspect: 'aspect-[9/16]',
    span: '',
  },
  {
    title: 'Decision & Choice System',
    caption:
      'Multiple choice answers are presented per scenario, giving the player structured decisions inside the story flow.',
    src: '/pic/cerfmay/Screenshot%202026-04-21%20142215.png',
    aspect: 'aspect-[9/16]',
    span: '',
  },
  {
    title: 'Admin Dashboard',
    caption:
      'Research control room for filtering players, stage attempts, score ranges, average XP, and star outcomes.',
    src: '/pic/cerfmay/Screenshot%202026-04-21%20142242.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    title: 'Stage Activity & Outcome Graphs',
    caption:
      'Dashboard views show attempts by stage and score distribution using compact progress-bar visualizations.',
    src: '/pic/cerfmay/Screenshot%202026-04-21%20142255.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    title: 'Progress & XP Analysis',
    caption:
      'Stage score analysis and player XP bands provide a structured view of gameplay performance.',
    src: '/pic/cerfmay/Screenshot%202026-04-21%20142307.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    title: 'Player Directory',
    caption:
      'Admin table tracks player identity, current stage, XP, attempts, and last active time.',
    src: '/pic/cerfmay/Screenshot%202026-04-21%20142323.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
]

const deliveryScope = [
  {
    icon: Smartphone,
    title: 'Mobile-first UI',
    desc: 'Player-facing screens optimized for phone-sized gameplay and quick entry.',
  },
  {
    icon: Route,
    title: 'Stage Progression',
    desc: 'Route selection, active stage state, locked stages, and visible progress steps.',
  },
  {
    icon: MousePointerClick,
    title: 'Choice Logic',
    desc: 'Scenario choices guide the player through narrative decision points.',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Analytics',
    desc: 'Dashboard views for attempts, XP, score distribution, and player records.',
  },
]

const gameplayFlow = [
  {
    step: 'Entry',
    desc: 'Player starts or continues the mobile story quest from the landing screen.',
  },
  {
    step: 'Stage',
    desc: 'Available stages are selected while locked stages remain unavailable until progression requirements are met.',
  },
  {
    step: 'Story',
    desc: 'The game presents a scene, context image, character dialogue, and current progress state.',
  },
  {
    step: 'Choice',
    desc: 'The player selects an answer that affects scoring, XP, or progression through the stage.',
  },
  {
    step: 'Analysis',
    desc: 'Admin views aggregate attempts, score ranges, stage performance, and player progress.',
  },
]

const platformModules = [
  'Mobile-first gameplay UI',
  'Interactive story engine with choice-based flow',
  'Stage progression system with locked and active states',
  'Player tracking and XP system',
  'Admin dashboard with filtering and analytics',
  'Data views for gameplay sessions, attempts, scores, and player activity',
]

const results = [
  'Created an engaging interactive experience for users',
  'Enabled tracking of user decisions and progression',
  'Provided insights through admin dashboard analytics',
  'Demonstrated a full-stack approach combining UX and system design',
]

export default function MobileStoryQuestCaseStudyPage() {
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
            <span className="text-sm text-zinc-500">
              Interactive Story Platform
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Mobile Story Quest – Interactive Game Platform
          </h1>
        </div>

        {/* Hero Card */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {[
              'Next.js',
              'Game Logic',
              'UX',
              'Dashboard',
              'Interactive Story',
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            A mobile-driven interactive storytelling system where users progress
            through stages by making decisions that affect outcomes and scoring.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
            >
              <Mail className="h-4 w-4" />
              Contact / Hire Me
            </Link>
          </div>
        </div>

        {/* Product Screens */}
        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Product Surfaces
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-500">
                Screens from the game covering mobile entry, stage progression,
                story interaction, choices, XP tracking, and administrative
                analytics.
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
                  <h3 className="text-base font-semibold text-white">
                    {screen.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {screen.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
            <p>
              Mobile Story Quest is a full-stack interactive game system, not
              only a UI prototype. It combines narrative storytelling with
              structured gameplay logic for stage selection, choices,
              progression, and scoring.
            </p>
            <p>
              The project includes both a mobile-first player interface and an
              administrative analytics dashboard for reviewing participants,
              attempts, XP, score ranges, and stage performance.
            </p>
          </div>
        </section>

        {/* Problem & Solution Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Problem */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Problem</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                Traditional learning or exploration content can feel static when
                users only read information without making decisions. Static
                content also does not adapt well to user interaction.
              </p>
              <p>
                For narrative-based systems, it is difficult to track behavior,
                measure outcomes, and understand how players move through stages
                without a structured gameplay and analytics layer.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The project introduces a stage-based interactive story system
                where users progress through content by making decisions. Each
                interaction contributes to scoring, XP, and stage completion.
              </p>
              <p>
                The admin dashboard collects gameplay data into reviewable
                analytics, including attempts by stage, average XP, score
                distribution, player records, and current stage progress.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Scope */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Delivery Scope</h2>
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

        {/* Gameplay Flow */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Gameplay Flow</h2>
          <p className="mt-2 text-sm text-zinc-500">
            The player path represented by the available UI screens
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
            {gameplayFlow.map((flow) => (
              <div
                key={flow.step}
                className="grid gap-3 border-b border-zinc-800 p-5 last:border-b-0 md:grid-cols-[140px_1fr]"
              >
                <div className="font-mono text-sm font-semibold text-blue-400">
                  {flow.step}
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Modules */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Platform Modules</h2>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <ul className="space-y-4">
              {platformModules.map((module) => (
                <li key={module} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-zinc-300">{module}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Analytics Coverage */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Analytics Coverage</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: 'Players',
                desc: 'Participant directory with identity, current stage, XP, attempts, and activity.',
              },
              {
                icon: Gamepad2,
                title: 'Attempts',
                desc: 'Stage completion and attempt counts across filtered player sets.',
              },
              {
                icon: Star,
                title: 'Scores',
                desc: 'Score distribution and star outcome summaries for completed attempts.',
              },
              {
                icon: BarChart3,
                title: 'XP Bands',
                desc: 'Player XP ranges and stage-level XP averages for progression analysis.',
              },
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
          <p className="mt-2 text-sm text-zinc-500">
            Based on the portfolio workspace and provided UI screenshots; no
            separate Mobile Story Quest source directory was present in this
            workspace.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-2 transition-all hover:border-blue-500/30"
              >
                <span className="text-sm font-medium text-white">
                  {tech.name}
                </span>
                <span className="text-xs text-zinc-500">{tech.category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Planning an interactive learning flow?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss how narrative UX, progression systems, and
            analytics can be structured into a maintainable product experience.
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
