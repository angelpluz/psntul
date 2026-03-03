import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  LayoutDashboard,
  Mail,
  Monitor,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'
import { SITE_CONFIG } from '../../data'

export const metadata: Metadata = {
  title: 'Toyota Thonburi Digital Platform - Case Study',
  description: `Case study of the Toyota Thonburi Digital Platform built by ${SITE_CONFIG.fullName}. A full-stack web system for automotive dealership operations.`,
}

const techStack = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'UI Layer' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TypeScript', category: 'App Logic' },
  { name: 'SQL', category: 'Database' },
  { name: 'REST APIs', category: 'Integration' },
  { name: 'reCAPTCHA', category: 'Validation' },
  { name: 'Responsive UI', category: 'Experience' },
]

const deliveryScope = [
  {
    icon: Monitor,
    title: 'Public Website',
    desc: 'Homepage, promotions, navigation shortcuts, and dealership information for customers.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Lead Flow',
    desc: 'Multi-step purchase-interest journey optimized for small screens and fast form completion.',
  },
  {
    icon: LayoutDashboard,
    title: 'Back-office Tools',
    desc: 'Central menu for content, campaigns, career forms, visitor logs, and cache actions.',
  },
  {
    icon: ShieldCheck,
    title: 'Form Reliability',
    desc: 'Typed form state and reCAPTCHA checks to improve submission quality and reduce spam.',
  },
]

const productScreens = [
  {
    title: 'Customer-facing homepage',
    caption:
      'The public site presents current campaigns, call center access, dealership shortcuts, and fast paths into the buying journey.',
    src: '/pic/Screenshot%202026-03-02%20171228.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    title: 'Mobile purchase-interest flow',
    caption:
      'A compact step-based flow guides visitors from model selection to contact details, with fixed quick actions for key dealership tasks.',
    src: '/pic/Screenshot%202026-03-02%20171309.png',
    aspect: 'aspect-[9/16]',
    span: '',
  },
  {
    title: 'Operations dashboard',
    caption:
      'The internal menu centralizes vehicle series, posts, Line messaging, promotions, slides, news, articles, career forms, and visitor monitoring.',
    src: '/pic/Screenshot%202026-03-02%20171357.png',
    aspect: 'aspect-[16/9]',
    span: '',
  },
  {
    title: 'Typed form implementation',
    caption:
      'The application logic uses typed React form state and reCAPTCHA validation before submit to keep lead data consistent.',
    src: '/pic/Screenshot%202026-03-02%20171434.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
]

const operationalModules = [
  'Vehicle series browsing and model discovery',
  'Promotions, posts, slides, news, and article publishing',
  'Purchase-interest lead capture and follow-up routing',
  'Career content and career form management',
  'Visitor logs and cache refresh utilities for operations',
]

const results = [
  'Unified customer-facing experiences and internal operations under one web platform',
  'Reduced friction in the purchase-interest journey, especially on mobile screens',
  'Gave staff a faster way to manage content, campaigns, and inbound lead workflows',
  'Improved maintainability with reusable UI, typed logic, and clearer system boundaries',
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
            {['Next.js', 'TypeScript', 'SQL', 'Lead Workflow', 'Back Office'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
            A full-stack digital platform that combines the public dealership website,
            mobile lead capture, and back-office operations into a single maintainable
            system for Toyota Thonburi.
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

        {/* Product Screens */}
        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Product Surfaces</h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-500">
                Screens from the live Toyota Thonburi workflow, covering public browsing,
                mobile lead capture, internal operations, and implementation details.
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

        {/* Overview */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Overview</h2>
          <div className="mt-4 space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Toyota Thonburi Digital Platform is a dealership-focused web system built to
              handle both customer journeys and day-to-day operational work in one place. The
              project covers the public marketing surface, lead intake, content management,
              and internal utility tools instead of treating each function as a separate app.
            </p>
            <p>
              From the surfaced screens, the platform was shaped around practical dealership
              use cases: browsing vehicle lines, managing promotions and posts, collecting
              purchase-interest submissions, and giving staff a central admin menu to control
              ongoing updates without relying on fragmented tools.
            </p>
          </div>
        </section>

        {/* Problem & Solution Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Problem */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Problem</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              The dealership experience had to support multiple audiences at once: retail
              visitors, mobile users filling out interest forms, and internal staff managing
              content and leads. When those flows live in disconnected tools, the result is
              duplicated work, inconsistent data, and slow iteration across campaigns.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              The challenge was not only visual modernization. It also required a more reliable
              structure for content publishing, lead capture, and operational oversight without
              adding more system sprawl.
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              The solution was a consolidated web platform built with a modern frontend,
              API-connected services, and a structured back-office layer. Public pages, mobile
              lead forms, and admin workflows were designed as parts of one consistent system.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Typed form handling, reCAPTCHA checks, reusable interface components, and clearer
              module boundaries improved both code maintainability and the day-to-day reliability
              of dealership operations.
            </p>
          </div>
        </div>

        {/* Delivery Scope */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Delivery Scope</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Concrete platform areas visible from the provided Toyota Thonburi screens
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

        {/* Operational Modules */}
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
            Let&apos;s discuss how I can help architect a practical platform for customer
            journeys, internal tools, and long-term maintainability.
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
