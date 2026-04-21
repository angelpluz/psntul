import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Database,
  FileText,
  ImageIcon,
  LayoutDashboard,
  Mail,
} from 'lucide-react'
import { SITE_CONFIG } from '../../data'

export const metadata: Metadata = {
  title: 'IAET AI – OCR Expense Assistant - Case Study',
  description: `Case study of IAET AI – OCR Expense Assistant built by ${SITE_CONFIG.fullName}. OCR, AI parsing, and structured expense tracking workflow.`,
}

const techStack = [
  { name: 'Next.js App Router', category: 'Web Framework' },
  { name: 'TypeScript', category: 'App Logic' },
  { name: 'OpenAI SDK', category: 'AI Parsing' },
  { name: 'OCR Route', category: 'API Processing' },
  { name: 'JSON Schema', category: 'Structured Output' },
  { name: 'Transactions API', category: 'Expense Workflow' },
  { name: 'Summary API', category: 'Dashboard Data' },
  { name: 'PWA Manifest', category: 'App Surface' },
]

const productScreens = [
  {
    title: 'Financial Dashboard',
    caption:
      'Summary view with expense, income, and balance cards, plus filters by date, transaction type, and category.',
    src: '/pic/iaetai/Screenshot%202026-04-21%20134805.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    title: 'Chat-based OCR Interaction',
    caption:
      'Users submit a payment slip and the assistant responds with parsed transaction data that can be confirmed into the expense workflow.',
    src: '/pic/iaetai/Screenshot%202026-04-21%20135152.png',
    aspect: 'aspect-[16/9]',
    span: '',
  },
  {
    title: 'Expense Timeline Panel',
    caption:
      'The application stores categorized transaction records such as food, transport, shopping, bill, transfer, and other for dashboard review.',
    src: '/pic/iaetai/Screenshot%202026-04-21%20135254.png',
    aspect: 'aspect-[16/9]',
    span: '',
  },
  {
    title: 'Slip Parsing Result',
    caption:
      'OCR text is passed through an AI parsing route that returns only normalized JSON for the transaction fields.',
    src: '/pic/iaetai/Screenshot%202026-04-21%20135318.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
]

const deliveryScope = [
  {
    icon: ImageIcon,
    title: 'OCR Endpoint',
    desc: 'API route for receiving OCR text from payment slip processing.',
  },
  {
    icon: Bot,
    title: 'AI Parsing',
    desc: 'OpenAI-backed parsing layer that normalizes OCR text into transaction JSON.',
  },
  {
    icon: Database,
    title: 'Transaction Schema',
    desc: 'Structured fields for item, amount, type, category, merchant, bank, datetime, and reference.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard UI',
    desc: 'Financial summary and transaction review surfaces for processed records.',
  },
]

const transactionSchema = [
  { field: 'item', type: 'string', note: 'Description of payment' },
  { field: 'amount', type: 'number', note: 'Normalized financial amount' },
  { field: 'type', type: 'income | expense', note: 'Transaction direction' },
  {
    field: 'category',
    type: 'food | transport | shopping | bill | transfer | other',
    note: 'Expense classification',
  },
  { field: 'merchant', type: 'string', note: 'Merchant or counterparty name' },
  { field: 'bank', type: 'string | null', note: 'Bank name when available' },
  {
    field: 'datetime',
    type: 'string',
    note: 'Datetime returned by the parser',
  },
  {
    field: 'reference',
    type: 'string | null',
    note: 'Reference number when available',
  },
]

const apiEndpoints = [
  {
    path: 'app/api/ocr/route.ts',
    desc: 'OCR parsing endpoint using OpenAI and strict JSON output.',
  },
  {
    path: 'app/api/ai/route.ts',
    desc: 'General AI route visible in the source tree screenshots.',
  },
  {
    path: 'app/api/transactions',
    desc: 'Transaction API area for stored expense records.',
  },
  {
    path: 'app/api/summary',
    desc: 'Summary API area for dashboard totals and financial overview.',
  },
]

const operationalModules = [
  'OCR endpoint integration',
  'AI parsing logic using the OpenAI SDK',
  'Transaction schema validation through a strict JSON contract',
  'Chat interface for user interaction and confirmation',
  'Dashboard and financial summary UI',
  'API routes for transactions and summaries',
]

const results = [
  'Converted unstructured OCR data into usable financial records',
  'Reduced manual effort in expense tracking',
  'Created a consistent pipeline from image to structured data to dashboard',
  'Improved reliability of financial categorization',
]

export default function IaetAiOcrCaseStudyPage() {
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
            <span className="text-sm text-zinc-500">OCR Expense Workflow</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            IAET AI – OCR Expense Assistant
          </h1>
        </div>

        {/* Hero Card */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'AI', 'OCR', 'API', 'OpenAI'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            A workflow-driven AI system that converts payment slip images into
            structured financial records.
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
                Screens from the IAET AI workflow covering dashboard review,
                chat-based slip parsing, API structure, and the OCR parsing
                contract.
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
              IAET AI – OCR Expense Assistant combines OCR, AI parsing, and a
              structured expense tracking workflow. Instead of leaving users
              with raw OCR text, the system converts payment-slip content into
              normalized financial records.
            </p>
            <p>
              The available source screenshots show a full-stack Next.js
              application with API-driven processing, OpenAI-backed parsing,
              dashboard summaries, transaction routes, and an OCR route that
              returns structured JSON.
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
                OCR alone produces noisy and inconsistent text. Payment slips
                may contain mixed language, bank metadata, reference numbers,
                timestamps, and merchant names that are not directly usable for
                expense tracking.
              </p>
              <p>
                Manual expense entry is repetitive and error-prone because
                financial data from slips does not naturally flow from image to
                validated record to dashboard.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                OCR text is passed into an AI parsing layer using the OpenAI
                SDK. The OCR route prompt instructs the model to extract
                financial transaction data, correct common OCR errors, and
                return only valid JSON.
              </p>
              <p>
                The parser normalizes output into a strict transaction schema
                and integrates the parsed data into the dashboard and
                transaction workflow.
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

        {/* Transaction Schema */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Transaction Schema</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Fields visible in the OCR route schema from the provided source
            screenshots
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
            {transactionSchema.map((field) => (
              <div
                key={field.field}
                className="grid gap-3 border-b border-zinc-800 p-5 last:border-b-0 md:grid-cols-[160px_1fr]"
              >
                <div className="font-mono text-sm font-semibold text-blue-400">
                  {field.field}
                </div>
                <div>
                  <div className="font-mono text-sm text-white">
                    {field.type}
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{field.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Structure */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">API Structure</h2>
          <p className="mt-2 text-sm text-zinc-500">
            API areas visible from the source tree and route screenshots
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {apiEndpoints.map((endpoint) => (
              <div
                key={endpoint.path}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-400" />
                  <span className="font-mono text-sm text-white">
                    {endpoint.path}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {endpoint.desc}
                </p>
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
          <p className="mt-2 text-sm text-zinc-500">
            Based on the portfolio repo and the provided source screenshots; no
            separate IAET source directory was present in this workspace.
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
            Need an OCR expense workflow?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss how I can help turn OCR output into structured,
            reviewable records for finance and operational workflows.
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
