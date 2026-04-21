import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  FileImage,
  Map,
  MapPin,
  Mail,
  MousePointerClick,
  Route,
  Table2,
} from 'lucide-react'
import { SITE_CONFIG } from '../../data'

export const metadata: Metadata = {
  title: 'Geo-Tagged Complaint Reporting System - Case Study',
  description: `Case study of the Geo-Tagged Complaint Reporting System built by ${SITE_CONFIG.fullName}. GPS extraction, map visualization, and administrative complaint tracking.`,
}

const techStack = [
  { name: 'Next.js App Router', category: 'Web Framework' },
  { name: 'TypeScript', category: 'App Logic' },
  { name: 'Leaflet 1.9.4', category: 'Map Rendering' },
  { name: 'EXIF GPS Metadata', category: 'Image Location' },
  { name: 'Browser Geolocation', category: 'Location Fallback' },
  { name: 'Coordinate Regex', category: 'Text Parsing' },
  { name: 'Lat/Lng Validation', category: 'Data Quality' },
  { name: 'Admin Workflow UI', category: 'Operations' },
]

const productScreens = [
  {
    title: 'Public Complaint Form',
    caption:
      'Users submit reports with name, phone, location description, issue details, and mobile image upload.',
    src: '/pic/reportgps/Screenshot%202026-04-21%20143257.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    title: 'Admin Dashboard & Map Visualization',
    caption:
      'Administrative overview shows total reports, in-progress cases, closed cases, and Leaflet map pins for submitted issues.',
    src: '/pic/reportgps/Screenshot%202026-04-21%20143433.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    title: 'Report Table & Workflow Management',
    caption:
      'Submitted reports appear in a table with reporter info, GPS coordinates, metadata, image preview, date, and status controls.',
    src: '/pic/reportgps/Screenshot%202026-04-21%20143520.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    title: 'GPS Extraction Logic',
    caption:
      'Map pin data includes id, reporter name, status, created date, image URL, latitude, longitude, and location source.',
    src: '/pic/reportgps/Screenshot%202026-04-21%20144145.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
]

const deliveryScope = [
  {
    icon: ClipboardList,
    title: 'Public Form',
    desc: 'Complaint submission flow with contact fields, issue details, and image upload.',
  },
  {
    icon: FileImage,
    title: 'GPS Extraction',
    desc: 'Location handling from image metadata, browser location, and text-based fallback parsing.',
  },
  {
    icon: Map,
    title: 'Leaflet Map',
    desc: 'Map-based visualization of report pins using validated latitude and longitude.',
  },
  {
    icon: Table2,
    title: 'Admin Tracking',
    desc: 'Report table and status controls for monitoring case lifecycle.',
  },
]

const gpsLogic = [
  {
    name: 'Pin model',
    detail:
      'id, name, status, createdAt, imageUrl, lat, lng, and source are used for map pin rendering.',
  },
  {
    name: 'Location source',
    detail:
      'The source field differentiates GPS from image metadata and browser location using "meta" or "location".',
  },
  {
    name: 'Coordinate parser',
    detail:
      'Text coordinates are parsed with a regex that reads latitude and longitude pairs from report content.',
  },
  {
    name: 'Validation',
    detail:
      'Parsed values are converted to numbers and checked against latitude and longitude bounds before use.',
  },
]

const reportModel = [
  {
    field: 'id',
    note: 'Numeric report identifier used for map and table rows.',
  },
  {
    field: 'name',
    note: 'Reporter name displayed in the admin table and pin data.',
  },
  {
    field: 'status',
    note: 'Workflow status such as in-progress or completed.',
  },
  {
    field: 'createdAt',
    note: 'Submission timestamp for administrative review.',
  },
  {
    field: 'imageUrl',
    note: 'Optional uploaded image preview for the report.',
  },
  { field: 'lat / lng', note: 'Validated coordinates used by the map layer.' },
  {
    field: 'source',
    note: 'Coordinate source, either image metadata or browser location.',
  },
]

const operationalModules = [
  'Public reporting form built with Next.js',
  'Image upload and GPS metadata handling',
  'Browser geolocation fallback for missing EXIF coordinates',
  'Coordinate parsing and latitude/longitude validation',
  'Leaflet map integration for report pins',
  'Admin dashboard with report table and status management',
]

const results = [
  'Improved accuracy of location-based reporting',
  'Reduced ambiguity in identifying issue areas',
  'Enabled map-based tracking of real-world problems',
  'Provided structured workflow for managing reports',
]

export default function GpsReportingSystemCaseStudyPage() {
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
              Location-aware Reporting
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Geo-Tagged Complaint Reporting System
          </h1>
        </div>

        {/* Hero Card */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8">
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'GPS', 'Map', 'EXIF', 'Workflow', 'Admin'].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            A location-aware reporting system that extracts GPS data from images
            and maps real-world issues for tracking and resolution.
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
                Screens from the reporting workflow covering public submission,
                GPS capture, map visualization, admin review, and coordinate
                parsing logic.
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
              Geo-Tagged Complaint Reporting System is designed for
              location-based issue tracking. It combines frontend report
              submission, image and location metadata handling, and
              administrative processing into one workflow.
            </p>
            <p>
              The system uses map visualization to give administrators
              operational awareness of where reports are located, while table
              and status controls support follow-up from submission through
              completion.
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
                Reporting real-world issues without accurate location data can
                delay response because teams must manually clarify where the
                problem happened.
              </p>
              <p>
                Images provide useful visual context, but they are not enough
                without coordinates, reporter details, and a centralized place
                to track case status.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The workflow extracts GPS from image metadata when available,
                uses browser geolocation as a fallback, and parses coordinate
                pairs from report text when needed.
              </p>
              <p>
                Structured report data is visualized on a Leaflet map and
                exposed in an admin dashboard where staff can review metadata,
                preview images, and update workflow status.
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

        {/* GPS Logic */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">GPS Handling Logic</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Behavior visible in the UI and coordinate parsing source screenshot
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
            {gpsLogic.map((item) => (
              <div
                key={item.name}
                className="grid gap-3 border-b border-zinc-800 p-5 last:border-b-0 md:grid-cols-[170px_1fr]"
              >
                <div className="font-mono text-sm font-semibold text-blue-400">
                  {item.name}
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Report Model */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Pin Data Model</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Map pin fields visible in the provided source screenshot
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reportModel.map((field) => (
              <div
                key={field.field}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="font-mono text-sm text-white">
                    {field.field}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {field.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow Modules */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Workflow Modules</h2>
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

        {/* Admin Coverage */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Admin Coverage</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ClipboardList,
                title: 'Report Counts',
                desc: 'Overview cards for total reports, active work, and closed cases.',
              },
              {
                icon: Map,
                title: 'Map Pins',
                desc: 'Multiple report locations displayed on a Leaflet map.',
              },
              {
                icon: MousePointerClick,
                title: 'Status Updates',
                desc: 'Dropdown controls update each report lifecycle state.',
              },
              {
                icon: Route,
                title: 'Metadata Review',
                desc: 'Admin table exposes IP, user agent, source, image, and GPS details.',
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
            Based on the portfolio workspace and provided UI/source screenshots;
            no separate GPS reporting source directory or package manifest was
            present in this workspace.
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
            Need location-aware reporting?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Let&apos;s discuss how GPS metadata, browser location, map
            visualization, and admin workflows can support real-world issue
            tracking.
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
