import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  KeyRound,
  Mail,
  Monitor,
  Route,
} from 'lucide-react'
import { SITE_CONFIG } from '../../data'

export const metadata: Metadata = {
  title: 'ALP API Platform - Case Study',
  description: `Case study of the ALP API Platform built by ${SITE_CONFIG.fullName}. A centralized API platform for authentication, routing, and monitoring.`,
}

const techStack = [
  { name: 'Node.js', category: 'Runtime' },
  { name: 'REST API', category: 'Architecture' },
  { name: 'JWT', category: 'Authentication' },
  { name: 'SQL', category: 'Data Layer' },
  { name: 'Helmet', category: 'Security Headers' },
  { name: 'Health Checks', category: 'Monitoring' },
]

const productScreens = [
  {
    title: 'API Landing Interface',
    caption:
      'Public-facing API page with health check, endpoint preview, and system status.',
    src: '/pic/apikey/Screenshot%202026-04-21%20103134.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    title: 'Authentication Flow',
    caption:
      'Login form that returns a JWT token used for accessing protected endpoints.',
    src: '/pic/apikey/Screenshot%202026-04-21%20103219.png',
    aspect: 'aspect-[16/9]',
    span: '',
  },
  {
    title: 'Notes API Interaction',
    caption:
      'Simple CRUD interface demonstrating authenticated API usage through a protected notes endpoint.',
    src: '/pic/apikey/Screenshot%202026-04-21%20103252.png',
    aspect: 'aspect-[16/9]',
    span: '',
  },
  {
    title: 'Monitoring & Health',
    caption:
      'Endpoint-based health checks and system metadata display for operational visibility.',
    src: '/pic/apikey/Screenshot%202026-04-21%20103341.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
]

const deliveryScope = [
  {
    icon: Route,
    title: 'API Architecture',
    desc: 'Structured endpoint design for routing requests through a single backend entry point.',
  },
  {
    icon: KeyRound,
    title: 'JWT Authentication',
    desc: 'Login flow and token-based access for protected API resources.',
  },
  {
    icon: Activity,
    title: 'Notes API',
    desc: 'Example protected resource demonstrating authenticated API interaction.',
  },
  {
    icon: Monitor,
    title: 'Health & Monitoring',
    desc: 'Health endpoints and log-ready structure for deployment checks.',
  },
]

const endpointPreview = [
  {
    method: 'GET',
    path: '/health',
    desc: 'Returns platform health and runtime status.',
  },
  {
    method: 'POST',
    path: '/api/v1/auth/login',
    desc: 'Authenticates a user and returns a JWT token.',
  },
  {
    method: 'GET',
    path: '/api/v1/notes',
    desc: 'Reads notes from a protected resource.',
  },
  {
    method: 'POST',
    path: '/api/v1/notes',
    desc: 'Creates a note with authenticated access.',
  },
]

const platformModules = [
  'API endpoint architecture',
  'Authentication system with JWT-based access',
  'Notes API as an example protected resource',
  'Health check endpoints',
  'Monitoring hooks with metrics and log-ready structure',
]

const results = [
  'Centralized backend access into a single platform',
  'Simplified API integration for frontend applications',
  'Improved consistency in authentication and responses',
  'Provided a foundation for scaling backend services',
]

export default function AlpApiPlatformCaseStudyPage() {
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
            <span className="text-sm text-zinc-500">API Infrastructure</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ALP API Platform
          </h1>
        </div>

        {/* Hero Card */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['Node.js', 'API', 'JWT', 'SQL', 'Monitoring'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            A deployable API infrastructure designed to handle authentication,
            routing, and system monitoring in a unified backend layer.
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
              href="https://example.com/api/v1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
            >
              Open API v1
              <ExternalLink className="h-4 w-4" />
            </a>
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
                Screens from the API platform covering the landing interface,
                authentication, protected resource interaction, and monitoring
                surfaces.
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
              ALP API Platform focuses on building a centralized API platform
              that can act as a single entry point between frontend applications
              and backend services.
            </p>
            <p>
              The platform is designed around maintainability, security, and
              extensibility. It brings authentication, routing, protected
              resource access, and health visibility into one backend layer
              instead of spreading those concerns across disconnected services.
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
                Backend systems often grow into multiple disconnected APIs with
                inconsistent authentication and response patterns. Each
                integration then requires separate handling on the frontend
                side.
              </p>
              <p>
                Without centralized monitoring and health checks, scaling or
                maintaining the platform becomes harder because teams lack a
                clear view of endpoint status and operational readiness.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The solution introduces a unified API gateway layer with
                JWT-based authentication, structured routing, endpoint design,
                and standardized response handling.
              </p>
              <p>
                Health check endpoints and monitoring-ready structures provide a
                consistent foundation for deployment checks, observability, and
                future backend service expansion.
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

        {/* Endpoint Preview */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">
            API Endpoints Preview
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Example endpoints shown as the public contract for the platform
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
            {endpointPreview.map((endpoint) => (
              <div
                key={`${endpoint.method}-${endpoint.path}`}
                className="grid gap-3 border-b border-zinc-800 p-5 last:border-b-0 md:grid-cols-[120px_1fr]"
              >
                <div className="font-mono text-sm font-semibold text-blue-400">
                  {endpoint.method}
                </div>
                <div>
                  <div className="font-mono text-sm text-white">
                    {endpoint.path}
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{endpoint.desc}</p>
                </div>
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
            Based on the available project screenshots and the technologies
            present in this portfolio repository.
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
            Need a centralized API layer?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss how I can help structure authentication, routing,
            and monitoring into a backend platform that is easier to maintain
            and extend.
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
