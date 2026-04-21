export type Project = {
  id: string
  name: string
  description: string
  longDescription?: string
  tags: string[]
  link?: string
  github?: string
  image?: string
  featured?: boolean
}

export type Service = {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export type Experience = {
  id: string
  role: string
  company: string
  period: string
  description: string
}

export type Skill = {
  category: string
  items: string[]
}

export const SITE_CONFIG = {
  name: 'TUL',
  company: 'ALP Soft',
  fullName: 'TUL PHOMPRASERT (ALP Soft)',
  title: 'Full-Stack Developer & AI Solutions Architect',
  version: '1.0.1',
  email: 'angelpluz04@gmail.com',
  url: 'https://alprasoft-corp.com/',
  ogImage: '/og-image.jpg',
  description:
    'Enterprise-grade web systems, automation tools, and AI integration solutions. Architecting scalable digital infrastructure for forward-thinking organizations.',
}

export const PROJECTS: Project[] = [
  {
    id: 'toyota-thonburi',
    name: 'Toyota Thonburi Digital Platform',
    description:
      'Designed and developed a full-stack digital platform to support customer engagement, internal workflows, and data integration for an automotive dealership environment. The system improved operational efficiency by modernizing legacy processes, optimizing database interactions, and introducing scalable architecture for future expansion.',
    longDescription:
      'A full-stack web system designed to enhance customer interaction, streamline internal operations, and integrate multiple business processes into a unified modern platform. The project focused on improving performance, scalability, and maintainability compared to legacy workflows.',
    tags: ['Next.js', 'Node.js', 'SQL', 'API Integration'],
    link: '/projects/toyota',
    image: '/pic/Screenshot%202026-03-02%20171228.png',
    featured: true,
  },
  {
    id: 'ai-document-processor',
    name: 'AI Assistant & Workflow Platform',
    description:
      'A practical AI platform combining a local LLM chat interface, automation workflows, image-generation tooling, and data cleanup utilities for day-to-day internal operations.',
    longDescription:
      'An AI-focused toolkit that brings together a terminal-style assistant UI, local model orchestration, content automation, and structured data cleanup into one maintainable internal platform.',
    tags: ['Python', 'FastAPI', 'Local LLM', 'Automation', 'AI UI'],
    link: '/projects/ai-document-processor',
    image: '/pic/ai-tech/552745530_31691723997108147_473766638402760873_n.jpg',
    featured: true,
  },
  {
    id: 'microservices-migration',
    name: 'Legacy System Modernization & Modular Architecture',
    description:
      'Modernization of a legacy monolithic business system into a modular, API-driven architecture. Improved maintainability, deployment flexibility, and development velocity while preserving critical business logic.',
    longDescription:
      'A controlled architectural modernization focused on incrementally refactoring a tightly coupled legacy system into a cleaner modular structure with API boundaries and clearer deployment practices.',
    tags: ['Node.js', 'API', 'SQL', 'Docker'],
    link: '/projects/microservices-migration',
    featured: true,
  },
  {
    id: 'alp-api-platform',
    name: 'ALP API Platform',
    description:
      'A centralized API platform that provides authentication, routing, and monitoring as a single backend entry point.',
    longDescription:
      'A deployable API infrastructure designed to handle authentication, routing, and system monitoring in a unified backend layer.',
    tags: ['Node.js', 'API', 'JWT', 'SQL', 'Monitoring'],
    link: '/projects/alp-api-platform',
    image: '/pic/apikey/Screenshot%202026-04-21%20103134.png',
  },
  {
    id: 'automotive-parts-commerce',
    name: 'Automotive Parts Commerce Platform',
    description:
      'OCR-documented automotive commerce MVP covering campaign storefront, fitment-aware catalog browsing, order-number tracking, and admin order operations.',
    longDescription:
      'A full-stack parts-commerce platform that demonstrates real operational flow from promotional landing and product discovery to request tracking, admin data setup, and order detail management.',
    tags: ['Vue.js', 'Node.js', 'Express', 'SQL'],
    link: '/projects/automotive-parts-commerce',
    image: '/pic/ecom/Screenshot%202026-03-05%20133045.png',
  },
]

export const SERVICES: Service[] = [
  {
    id: 'web-systems',
    title: 'Enterprise Web Systems',
    description:
      'Architecting robust, scalable web applications designed for high performance and long-term maintainability.',
    features: [
      'Scalable microservices architecture',
      'Cloud-native infrastructure design',
      'Performance optimization & caching strategies',
      'Database design & optimization',
      'CI/CD pipeline implementation',
    ],
    icon: 'Layers',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Automation',
    description:
      'Seamlessly integrating AI capabilities and intelligent automation into existing business workflows.',
    features: [
      'LLM API integration (OpenAI, Anthropic, Gemini)',
      'Intelligent document processing',
      'Workflow automation & orchestration',
      'Custom ML model deployment',
      'AI-powered decision support systems',
    ],
    icon: 'Brain',
  },
  {
    id: 'modernization',
    title: 'Legacy Modernization',
    description:
      'Transforming legacy systems into modern, maintainable architectures without disrupting operations.',
    features: [
      'Monolith to microservices migration',
      'Database migration & synchronization',
      'API strategy & gateway implementation',
      'Zero-downtime deployment strategies',
      'Technical debt assessment & remediation',
    ],
    icon: 'RefreshCw',
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description:
      'Streamlining operations through intelligent automation and custom tool development.',
    features: [
      'Business process automation',
      'Data pipeline engineering',
      'Custom internal tool development',
      'Integration with third-party services',
      'Automated testing & quality assurance',
    ],
    icon: 'Workflow',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    role: 'Founder & Solutions Architect',
    company: 'ALP Soft',
    period: '2020 โ€” Present',
    description:
      'Leading enterprise digital transformation initiatives. Architecting scalable systems and AI integration solutions for mid to large-scale organizations.',
  },
  {
    id: 'exp2',
    role: 'Senior Full-Stack Engineer',
    company: 'Tech Enterprise Solutions',
    period: '2017 โ€” 2020',
    description:
      'Spearheaded development of mission-critical applications serving 500K+ users. Led migration from legacy systems to modern cloud infrastructure.',
  },
  {
    id: 'exp3',
    role: 'Software Engineer',
    company: 'Digital Innovation Labs',
    period: '2014 โ€” 2017',
    description:
      'Developed and maintained enterprise-grade web applications. Specialized in performance optimization and database architecture.',
  },
]

export const SKILLS: Skill[] = [
  {
    category: 'Architecture',
    items: [
      'Microservices',
      'Event-Driven',
      'Domain-Driven Design',
      'CQRS',
      'Event Sourcing',
    ],
  },
  {
    category: 'Frontend',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Web Performance',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Python',
      'Go',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'GraphQL',
    ],
  },
  {
    category: 'AI & ML',
    items: [
      'OpenAI API',
      'LangChain',
      'Vector Databases',
      'Embeddings',
      'RAG Systems',
    ],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'CI/CD'],
  },
  {
    category: 'Integration',
    items: [
      'REST APIs',
      'gRPC',
      'Message Queues',
      'WebSocket',
      'ETL Pipelines',
    ],
  },
]

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
