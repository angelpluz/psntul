import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Layers,
  Mail,
  Search,
  ShoppingCart,
  Wrench,
} from 'lucide-react'
import { SITE_CONFIG } from '../../data'

export const metadata: Metadata = {
  title: 'Automotive Parts Commerce Platform - Case Study',
  description: `Case study of the Automotive Parts Commerce Platform built by ${SITE_CONFIG.fullName}. A full-stack automotive commerce MVP with fitment-aware catalog modeling and admin operations.`,
}

const keyFeatures = [
  'Automotive product catalog with structured browsing',
  'Vehicle compatibility hierarchy: Make → Model → Year → Trim',
  'Product search and filtering for fitment-oriented discovery',
  'Order request workflow instead of direct payment checkout',
  'Customer order tracking page for request follow-up',
  'Admin dashboard for vehicles, products, and order requests',
  'Image upload pipeline using Multer',
  'REST API route organization for maintainable backend growth',
]

const technologyStack = [
  { name: 'Vue.js', category: 'Frontend UI' },
  { name: 'Vite', category: 'Build Tool' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Express', category: 'Backend Framework' },
  { name: 'REST API', category: 'Architecture' },
  { name: 'SQL', category: 'Relational Data' },
  { name: 'Multer', category: 'File Uploads' },
]

const futureEnhancements = [
  'Payment gateway integration for full checkout support',
  'Inventory synchronization with external stock sources',
  'Notification flows for order status and operational follow-up',
]

const apiRoutes = [
  'auth.js',
  'categories.js',
  'products.js',
  'vehicles.js',
  'orders.js',
  'admin.js',
  'search.js',
]

export default function AutomotivePartsCommercePage() {
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
            <span className="text-sm text-zinc-500">Commerce Platform MVP</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Automotive Parts Commerce Platform
          </h1>
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['Vue.js', 'Node.js', 'Express', 'SQL'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            A full-stack automotive parts e-commerce MVP built around a structured
            order-request workflow. The platform demonstrates fitment-aware catalog modeling,
            practical commerce operations, and a maintainable API-driven backend suitable for
            future commercial expansion.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
            >
              <Mail className="h-4 w-4" />
              Contact / Hire Me
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800"
            >
              View Other Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Project Overview</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
            <p>
              Automotive Parts Commerce Platform is a full-stack web application built as a
              working MVP and demo system for automotive parts ordering. The project focuses
              on a realistic commerce workflow where customers browse fitment-aware products,
              submit order requests, and track request status without requiring direct online
              payment in the current phase.
            </p>
            <p>
              The platform is structured to reflect the domain complexity of automotive
              commerce, where product discovery depends on vehicle compatibility, not only
              generic catalog browsing. By modeling relationships across make, model, year,
              and trim, the system demonstrates how domain-aware data design supports cleaner
              search, better admin workflows, and a more reliable customer ordering process.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Problem</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
            <p>
              Automotive parts platforms are more complex than standard product catalogs
              because product relevance depends on fitment accuracy. A basic e-commerce
              structure is not sufficient when users need to understand whether a part
              applies to a specific vehicle configuration.
            </p>
            <p>
              The challenge for this project was to create an MVP that demonstrates a real
              commerce flow while keeping the system practical and extensible. It needed to
              support structured catalog management, compatibility filtering, admin-side data
              maintenance, and customer request handling without overcommitting to payment
              infrastructure too early.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Solution</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
            <p>
              The solution was implemented as an API-driven full-stack application with a
              Vue.js frontend and an Express-based backend. Instead of forcing an incomplete
              checkout flow, the platform uses an order-request pattern that is better suited
              to an MVP: users can browse products, submit requests, and follow order status
              while the backend keeps the workflow structured for future payment integration.
            </p>
            <p>
              On the administrative side, the system provides domain-specific management for
              vehicles, products, and inbound orders. This makes the demo valuable as more
              than a storefront UI. It demonstrates practical internal operations, controlled
              content management, and a backend shape that can evolve into a fuller commerce
              platform without reworking the core model.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">System Architecture</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Layered commerce architecture with fitment-aware domain modeling
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShoppingCart,
                title: 'Frontend',
                desc: 'Vue.js and Vite deliver the catalog, search flow, order request UI, and customer tracking screens.',
              },
              {
                icon: Layers,
                title: 'API Layer',
                desc: 'Express routes organize business capabilities into clear REST endpoints.',
              },
              {
                icon: Database,
                title: 'Data Model',
                desc: 'SQL tables represent products, vehicles, fitment hierarchy, and order requests.',
              },
              {
                icon: Wrench,
                title: 'Admin Ops',
                desc: 'Operational screens support vehicle setup, product management, and order review.',
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
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 className="text-lg font-semibold text-white">REST Route Structure</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              The backend is organized by capability, which keeps authentication, search,
              catalog, vehicle, and order concerns separated as the codebase grows.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {apiRoutes.map((route) => (
                <div
                  key={route}
                  className="rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-2 font-mono text-sm text-zinc-300"
                >
                  {route}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Key Features</h2>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <ul className="space-y-4">
              {keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Technology Stack</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {technologyStack.map((tech) => (
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

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Future Enhancements</h2>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <ul className="space-y-4">
              {futureEnhancements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Search className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
