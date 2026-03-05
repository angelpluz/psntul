import type { Metadata } from 'next'
import Image from 'next/image'
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
  description: `Case study of the Automotive Parts Commerce Platform built by ${SITE_CONFIG.fullName}. Screenshot-backed analysis covering storefront promotions, fitment catalog browsing, order tracking, and admin operations.`,
}

const heroTags = ['Vue.js', 'Node.js', 'Express', 'SQL', 'Order Workflow']

const productScreens = [
  {
    title: 'Storefront promotions',
    src: '/pic/ecom/Screenshot%202026-03-05%20133045.png',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
    context:
      'Landing page with category navigation, campaign hero, and recommendation strip for the commerce surface.',
    points: [
      'Free shipping campaign appears with minimum order THB 800',
      'Discount cards for THB 500 and THB 100 are visible',
      'Coupon codes shown: TYTBAT500ECM and TYTPAR100ECM',
    ],
  },
  {
    title: 'Parts category with filters',
    src: '/pic/ecom/Screenshot%202026-03-05%20133113.png',
    aspect: 'aspect-[16/9]',
    span: '',
    context:
      'Product grid for the parts category with filter controls, brand checkboxes, and sort dropdown.',
    points: [
      'List count shown as 20 products in this category',
      'Brands include Toyota Genuine Parts, Denso, Osram, Deestone, TRD, and Aisin',
      'Sample items include fuel cap, H4 lamp, spark plug, and V-ribbed belt',
    ],
  },
  {
    title: 'Tires category',
    src: '/pic/ecom/Screenshot%202026-03-05%20133126.png',
    aspect: 'aspect-[16/9]',
    span: '',
    context:
      'Separate tire catalog page with dedicated filter set and higher-price product cards.',
    points: [
      'List count shown as 12 tire products',
      'Brands include Deestone, Michelin, Westlake, Bridgestone, and Yokohama',
      'Sample prices shown from THB 1,790.00 to THB 2,990.00',
    ],
  },
  {
    title: 'Public order status tracking',
    src: '/pic/ecom/Screenshot%202026-03-05%20133138.png',
    aspect: 'aspect-[16/7]',
    span: 'lg:col-span-2',
    context:
      'Customer-facing status page for checking order progress using an order number.',
    points: [
      'Format guidance shown: ORD-YYYYMMDD-XXXXX',
      'Single input field and one check-status action',
      'Keeps tracking lightweight without account prerequisites',
    ],
  },
  {
    title: 'Admin insert-data panel',
    src: '/pic/ecom/Screenshot%202026-03-05%20133158.png',
    aspect: 'aspect-[16/10]',
    span: '',
    context:
      'Back-office setup for fitment and product master data before linking inventory to compatible vehicles.',
    points: [
      'Separate forms for Make, Model, Year, and Trim',
      'Dependent selectors enforce hierarchy order before save',
      'Navigation shortcut to the orders management screen',
    ],
  },
  {
    title: 'Admin orders management',
    src: '/pic/ecom/Screenshot%202026-03-05%20133209.png',
    aspect: 'aspect-[16/9]',
    span: '',
    context:
      'Operations table for search, pagination, and order-level drilldown from a single admin view.',
    points: [
      'Columns include order number, status, payment state, total, and timestamp',
      'Sample records include ORD-20250915-XTVYZ and ORD-20250912-PVVX7',
      'Status examples include pending and cancelled records',
    ],
  },
  {
    title: 'Order detail and bank slip',
    src: '/pic/ecom/Screenshot%202026-03-05%20133224.png',
    aspect: 'aspect-[16/9]',
    span: '',
    context:
      'Detailed order page with totals, shipping address, payment state, and bank-slip attachment area.',
    points: [
      'Order id shown: ORD-20250915-XTVYZ',
      'Totals show subtotal THB 4,110.00 and shipping THB 0.00',
      'Unpaid state and bank-slip block are visible in the same view',
    ],
  },
]

const keyFeatures = [
  'Campaign-ready storefront with promo banners, coupons, and recommendation modules',
  'Fitment-aware catalog navigation across parts and tires categories',
  'Brand filtering and sorting controls for practical product discovery',
  'Order-request flow with public order-number tracking',
  'Admin setup forms for make, model, year, and trim data',
  'Admin order monitoring with search, pagination, and detail entry points',
  'Image upload pipeline using Multer',
  'REST API route organization for long-term backend maintainability',
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

const deliveryScope = [
  {
    icon: ShoppingCart,
    title: 'Storefront Commerce',
    desc: 'Campaign banner, coupon widgets, category navigation, and recommendation cards.',
  },
  {
    icon: Search,
    title: 'Catalog Discovery',
    desc: 'Category-level browsing with filters, sort controls, and branded product cards.',
  },
  {
    icon: Layers,
    title: 'Order Lifecycle',
    desc: 'Public tracking page plus admin list view for active request monitoring.',
  },
  {
    icon: Wrench,
    title: 'Admin Data Ops',
    desc: 'Master-data forms for fitment hierarchy and operational order handling.',
  },
]

const extractedPromotions = [
  'FREE_SHIPPING_MIN: THB 800',
  'COUPON_500: TYTBAT500ECM (min THB 3,000)',
  'COUPON_100: TYTPAR100ECM (min THB 1,000)',
  'PROMO_LAYOUT: Hero banner + coupon cards + recommended products',
]

const extractedProducts = [
  'Fuel cap -> THB 230.00',
  'H4 60/55W front lamp -> THB 220.00',
  'Spark plug SC20HR11 -> THB 380.00',
  'Westlake RP18 185/65R15 -> THB 1,790.00',
]

const extractedOrders = [
  'ORD-20250915-XTVYZ | pending | unpaid | THB 4,110.00',
  'ORD-20250912-9K3I1 | cancelled | unpaid | THB 11,470.00',
  'ORD-20250912-PVVX7 | pending | unpaid | THB 460.00',
  'ORDER_DETAIL_SAMPLE | subtotal THB 4,110.00 | shipping THB 0.00',
]

const futureEnhancements = [
  'Payment gateway integration to move from request flow to full checkout flow',
  'Inventory synchronization with external stock and dealership systems',
  'Stronger image validation and fallback handling for uploaded bank-slip assets',
  'Automated notifications for status transitions and customer follow-up',
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
      <div className="mx-auto max-w-5xl">
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

        <div className="mt-8 grid gap-6 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              A full-stack automotive parts commerce MVP built around a practical
              order-request workflow. The page below documents storefront behavior,
              catalog structure, order tracking flow, and admin operations based on real
              interface screenshots.
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
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/70">
            <div className="relative aspect-[16/11]">
              <Image
                src="/pic/ecom/Screenshot%202026-03-05%20133045.png"
                alt="Automotive commerce storefront screenshot"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Product Surfaces (UI Reference)</h2>
              <p className="mt-2 max-w-3xl text-sm text-zinc-500">
                Screens from the e-commerce interface illustrating the storefront, catalog
                browsing, order tracking, and admin operations.
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
                <figcaption className="space-y-3 border-t border-zinc-800 p-5">
                  <h3 className="text-base font-semibold text-white">{screen.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{screen.context}</p>
                  <ul className="space-y-2">
                    {screen.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-zinc-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Sample Interface Data</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Example values captured from the interface to illustrate real commerce data.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
                Promotions
              </h3>
              <div className="mt-4 space-y-2 font-mono text-xs text-zinc-400">
                {extractedPromotions.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
                Product Samples
              </h3>
              <div className="mt-4 space-y-2 font-mono text-xs text-zinc-400">
                {extractedProducts.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
                Order Records
              </h3>
              <div className="mt-4 space-y-2 font-mono text-xs text-zinc-400">
                {extractedOrders.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Project Overview</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
            <p>
              Automotive Parts Commerce Platform is a full-stack web application built as a
              practical MVP for parts discovery and order processing. This page
              reflects what is visible on real screens, not only abstract architecture notes.
            </p>
            <p>
              The domain is fitment-sensitive and operations-heavy. Product relevance depends
              on make/model/year/trim relationships, while teams still need campaign content,
              order monitoring, and admin data management to stay aligned.
            </p>
          </div>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Problem</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                Automotive commerce is harder than generic e-commerce because a part can be
                correct by SKU but wrong by vehicle fitment. Users need confidence, and ops
                teams need reliable structures for catalog and request handling.
              </p>
              <p>
                Without clear admin workflows, campaign pages and order handling drift apart.
                The product needs both customer UX and internal control surfaces to be useful.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Solution</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The implemented solution combines a Vue.js storefront, Express REST APIs, and
                SQL fitment structures. Instead of forcing incomplete checkout, it uses a
                controlled order-request flow with tracking support.
              </p>
              <p>
                Admin panels cover fitment setup and order operations so the MVP can run with
                real data discipline today while remaining extensible for future checkout and
                notification layers.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Platform Capabilities</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Platform areas illustrated by captured interface screens
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
          <h2 className="text-2xl font-bold text-white">System Architecture</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Layered commerce architecture with fitment-aware domain modeling
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShoppingCart,
                title: 'Frontend',
                desc: 'Vue.js and Vite provide campaign, catalog, filtering, and tracking interfaces.',
              },
              {
                icon: Layers,
                title: 'API Layer',
                desc: 'Express routes separate auth, products, vehicles, search, and orders.',
              },
              {
                icon: Database,
                title: 'Data Model',
                desc: 'SQL schema handles fitment hierarchy, products, and request-oriented order records.',
              },
              {
                icon: Wrench,
                title: 'Admin Ops',
                desc: 'Operational screens support fitment setup and daily order management.',
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
              Route files are grouped by capability so authentication, catalog search,
              vehicle-fitment logic, and order processing can evolve independently.
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

