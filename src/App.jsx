import { useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiArrowDown,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMessageSquare,
  FiPhone,
  FiTarget,
  FiUsers,
  FiX,
  FiZap,
} from 'react-icons/fi'
import { SiFigma } from 'react-icons/si'

const EMAILJS_PUBLIC_KEY = 'M3iuh6A6Ea0oJZavH'
const EMAILJS_TEMPLATE_ID = 'template_90o6olm'
const EMAILJS_SERVICE_ID = 'service_sa9ob7e'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const strengths = [
  { icon: FiUsers, label: 'Teamwork' },
  { icon: FiZap, label: 'Fast Learner' },
  { icon: FiTarget, label: 'Problem Solver' },
  { icon: FiMessageSquare, label: 'Dedicated' },
]

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FiCode,
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Web Development', level: 88 },
    ]
  },
  {
    title: 'Backend & Databases',
    icon: FiLayers,
    skills: [
      { name: 'MERN Stack', level: 80 },
      { name: 'Full Stack Development', level: 78 },
      { name: 'Git', level: 80 },
    ]
  },
  {
    title: 'Languages & Tools',
    icon: FiZap,
    skills: [
      { name: 'Java', level: 75 },
      { name: 'Figma', level: 80 },
    ]
  }
]

const projects = [
  {
    title: 'Daily Task App',
    category: 'UI/UX',
    description:
      'A sleek and modern UI/UX design for a daily task tracking mobile application, designed to streamline productivity, enhance task organization, and provide a seamless user experience.',
    longDescription:
      'This Figma design project focuses on solving daily productivity issues by offering a highly visual, clean, and intuitive task tracking mobile interface. The design emphasizes seamless user onboarding, customizable task categorization, dark mode styling, and micro-interactions that make task management satisfying.',
    features: [
      'Visual timeline and board layouts for daily productivity tracking',
      'Minimalist color scheme with high contrast indicators',
      'Intuitive quick-add task drawer and swipe gesture triggers',
      'Premium dark mode aesthetics with glowing color accents'
    ],
    tech: ['Figma', 'UI/UX Design', 'Mobile App'],
    image: '/images/dailytask.png',
    preview: 'https://www.figma.com/design/w3fSTue9lJuhDKdE8jAcaH/Daily-task-app?node-id=0-1&t=XtXbWgYSRGAqLAOZ-1',
  },
  {
    title: 'Shopping Cart System',
    category: 'Full Stack',
    description:
      'A full-stack e-commerce shopping cart platform featuring Google OAuth, dynamic cart operations, and an administrative dashboard for managing products, categories, and orders.',
    longDescription:
      'A robust e-commerce application built on the MERN stack. It includes security measures like Google OAuth, a dynamic and responsive shopping cart context, inventory checking, and a dedicated admin interface for managing the system.',
    features: [
      'Google OAuth 2.0 integration for secure and quick login',
      'Real-time dynamic cart adjustments and instant price calculations',
      'Admin dashboard with product creation, update, and deletion',
      'Fully responsive product catalog and search filtering'
    ],
    tech: ['MERN Stack', 'Google OAuth', 'TailwindCSS'],
    image: '/images/project-shoppingcart.png',
    github: 'https://github.com/justtnikiyaa/Shopping-Cart-System.git',
    preview: 'https://shopping-cart-fdy3.onrender.com',
  },
  {
    title: 'Smart Campus',
    category: 'Full Stack',
    description:
      'A full-stack Smart Campus Operations Hub application featuring stable PostgreSQL database connectivity, cross-origin authentication, role-based access control, and optimized frontend service requests.',
    longDescription:
      'Developed to coordinate daily activities, scheduling, and resources on a university campus. This application leverages PostgreSQL for structured transactional reliability and integrates custom role-based routing (Student, Faculty, Admin).',
    features: [
      'Role-based access controls protecting administrative routes',
      'Relational database design with clean entity models in PostgreSQL',
      'Cross-origin credentials authentication and JWT storage',
      'High-performance API queries and caching structures'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: '/images/project-smartcampus.jpg',
    github: 'https://github.com/justtnikiyaa/it3030-paf-2026-smart-campus-group02.git',
    preview: 'https://it3030-paf-2026-smart-campus-group0.vercel.app/',
  },
  {
    title: 'Sehera Promotional Apparels',
    category: 'Frontend',
    description:
      'A company website developed for a promotional apparel company, featuring product showcases and a modern UI.',
    longDescription:
      'A high-performance business portal for promotional clothing orders. Features responsive catalogs, clean portfolio showcases, query forms, and custom CSS layouts emphasizing company colors and high-definition material displays.',
    features: [
      'Interactive clothing catalog with custom hover filters',
      'Direct order inquiry system sending responses via email',
      'Optimized lightweight asset delivery for rapid loading speeds',
      'Fluid transitions and responsive flexbox grid layout'
    ],
    tech: ['React', 'CSS', 'JavaScript'],
    image: '/images/project-sehera.jpg',
    github: 'https://github.com/justtnikiyaa/Sehera-Promotional-Apparels.git',
    preview: 'https://sehera-promotional-apparels.netlify.app/',
  },
  {
    title: 'Unigig a freelance marketplace',
    category: 'Full Stack',
    description:
      'A freelance marketplace platform designed to connect clients and freelancers through a clean, modern web experience.',
    longDescription:
      'A comprehensive freelance workspace matching service, enabling clients to post jobs and freelancers to offer gig packages. Supported by MongoDB for flexible schema updates and search operations.',
    features: [
      'Gig-creation flow mimicking standard marketplace workflows',
      'Bidding system allowing freelancers to respond to active job listings',
      'Search indexing matching keywords against active gig details',
      'Sleek message framework for client-freelancer communications'
    ],
    tech: ['MERN Stack', 'Node.js', 'MongoDB'],
    image: '/images/project-itpm.jpg',
    github: 'https://github.com/justtnikiyaa/ITPM-Project-3rd-Year-1st-sem.git',
    preview: 'https://itpm-project-3rd-year-1st-sem.onrender.com',
  },
  {
    title: 'Chat App',
    category: 'Full Stack',
    description:
      'A real-time chat application with modern UI patterns and interactive messaging experience.',
    longDescription:
      'A Socket.io powered instant messenger supporting private and group chat rooms. Features automatic message sync, live user status updates, and interactive notifications.',
    features: [
      'Low-latency socket connections for real-time messaging',
      'Room-joining architecture with private and public parameters',
      'User active status displays and typing indicator events',
      'Secure password hashing and JSON Web Token validations'
    ],
    tech: ['React', 'Express', 'Socket.io'],
    image: '/images/project-chat.jpg',
    github: 'https://github.com/justtnikiyaa/chat-app.git',
    preview: 'https://chat-app-m7ne.onrender.com',
  },
  {
    title: 'AutoRentHub',
    category: 'Full Stack',
    description:
      'A full-stack vehicle rental platform for cars and bikes with secure authentication, booking management, online payments, and admin tools.',
    longDescription:
      'A premium logistics and rental system with interactive vehicle search, booking date calculations, secure payment gateways, and backend database integrations.',
    features: [
      'Datepicker validations avoiding overlapping double-bookings',
      'Secure payment processing with instant success screen feedbacks',
      'Admin portal to view stats, bookings, and register new vehicles',
      'Filterable dashboard by vehicle type, availability, and pricing'
    ],
    tech: ['MERN Stack', 'Authentication', 'Payments'],
    image: '/images/project-autorenthub.jpg',
    github: 'https://github.com/justtnikiyaa/AutoRentHub.git',
    preview: '#',
  },
]

const educationTimeline = [
  {
    year: '2024 - 2028',
    title: 'BSc (Hons) in Information Technology',
    subtitle: 'Specialising in Information Technology',
    institution: 'SLIIT',
    details: 'Pursuing core computer science theory, web application frameworks, networking, and databases.',
  },
  {
    year: '2025 - Present',
    title: 'Full Stack & UI/UX Specialization',
    subtitle: 'Self-Directed & Academic Projects',
    institution: 'SLIIT Modules',
    details: 'Developing responsive client applications, REST APIs, Socket.io architectures, and prototyping interface blueprints in Figma.',
  },
  {
    year: 'Future Target',
    title: 'Industry Placement & Advanced Specialization',
    subtitle: 'Professional Development',
    institution: 'Software Ecosystem',
    details: 'Aspiring to merge scalable system design, robust backend testing, and user-centric frontend experiences in real-world scenarios.',
  },
]


const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description:
      'Building responsive, fast, and modern websites using the latest web technologies with clean, maintainable code.',
  },
  {
    icon: FiLayers,
    title: 'Full Stack Development',
    description:
      'End-to-end web application development including frontend interfaces, backend APIs, and deployment workflows.',
  },
]

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'nihindudulavin02@gmail.com',
    href: 'mailto:nihindudulavin02@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone / WhatsApp',
    value: '+94 71 241 7229',
    href: 'https://wa.me/94712417229',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Colombo, Sri Lanka',
    href: '#',
  },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/justtnikiyaa', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/nihindu-dulavin-18bb76279', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:nihindudulavin02@gmail.com', label: 'Email' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#home" className="font-heading text-xl font-bold">
          <span className="text-gradient">ND</span>
          <span className="ml-1 text-foreground">Nihindu</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-lg bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-b border-border bg-card px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex rounded-lg bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground"
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-primary origin-[0%]"
        style={{ scaleX }}
      />
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="section-padding relative flex min-h-screen items-center overflow-hidden pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <h1 className="mb-3 font-heading text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
              Nihindu <span className="text-gradient">Dulavin</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-5 flex flex-wrap gap-2"
            >
              {['IT Undergraduate', 'Full Stack Developer', 'Web Developer'].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              A motivated IT undergraduate at SLIIT, passionate about web development, building modern applications,
              and continuously learning new technologies to solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-primary/30"
              >
                View Projects
                <FiArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-primary/30 px-6 py-3 font-medium text-primary transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10"
              >
                Contact Me
              </a>

              <a
                href="/Nihindu_Dulavin_CV.pdf"
                download="Nihindu_Dulavin_CV.pdf"
                className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <FiDownload size={16} /> CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground">Find me</span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-[-12px] rounded-full border border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              <div className="glow-shadow relative my-[15px] h-72 w-72 overflow-hidden rounded-full border-4 border-primary/30 md:h-96 md:w-96">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
                <img
                  src="/images/profile-photo.png"
                  alt="Nihindu Dulavin"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.div
                className="absolute -bottom-3 -right-3 h-16 w-16 rounded-2xl bg-gradient-primary opacity-80 blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -left-4 -top-4 h-10 w-10 rounded-full border-2 border-primary/30"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -right-6 top-1/2 h-3 w-3 rounded-full bg-primary"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Get to know me, my background, and what drives me.</p>
        </motion.div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">Who I Am</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              I&apos;m Nihindu Dulavin, a passionate IT undergraduate specializing in Information Technology at the Sri
              Lanka Institute of Information Technology (SLIIT). I&apos;m currently pursuing my BSc (Hons) in Information
              Technology (2024-2028).
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              My goal is to gain meaningful industry experience and grow into a skilled full stack developer. I&apos;m
              passionate about learning new technologies, building real-world projects, and working collaboratively in
              teams to improve both my technical and communication skills.
            </p>

            <h3 className="mb-6 mt-8 font-heading text-xl font-semibold text-foreground">My Education & Journey</h3>
            <div className="relative border-l border-border pl-6 ml-2 space-y-8">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-background border border-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>

                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.year}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-muted-foreground">
                    {item.subtitle} • <span className="text-foreground/80">{item.institution}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">My Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {strengths.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 shadow-md hover:border-primary/30 transition-colors"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                        <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          className="h-full rounded-full bg-gradient-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + index * 0.05 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', 'Full Stack', 'Frontend', 'UI/UX']

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">A showcase of projects I&apos;ve built and contributed to.</p>
        </motion.div>

        {/* Categories Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-primary text-primary-foreground shadow-md shadow-primary/10 scale-105'
                  : 'border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 md:col-span-1"
              >
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="mb-2 inline-block rounded-md bg-secondary px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {project.category}
                  </span>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">{project.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((item) => (
                      <span key={item} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        {item}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="rounded-full bg-secondary px-2 py-1 text-xs text-muted-foreground">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <FiGithub size={16} /> GitHub
                      </a>
                    )}

                    {project.preview && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {project.preview.includes('figma.com') ? (
                          <>
                            <SiFigma size={16} /> Figma
                          </>
                        ) : (
                          <>
                            <FiExternalLink size={16} /> Preview
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl md:p-8"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/80 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="Close modal"
                >
                  <FiX size={20} />
                </button>

                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <div className="overflow-hidden rounded-xl border border-border bg-muted aspect-video md:aspect-square">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between md:col-span-7">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {selectedProject.category}
                        </span>
                      </div>
                      <h3 className="mb-3 font-heading text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{selectedProject.longDescription || selectedProject.description}</p>

                      {selectedProject.features && (
                        <div className="mb-6">
                          <h4 className="mb-2 font-heading text-sm font-semibold text-foreground">Key Features:</h4>
                          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                            {selectedProject.features.map((feat, i) => (
                              <li key={i}>{feat}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {selectedProject.tech.map((item) => (
                          <span key={item} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground font-medium border border-border">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-secondary border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                          >
                            <FiGithub size={18} /> GitHub
                          </a>
                        )}

                        {selectedProject.preview && (
                          <a
                            href={selectedProject.preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 shadow-md shadow-primary/10"
                          >
                            {selectedProject.preview.includes('figma.com') ? (
                              <>
                                <SiFigma size={18} /> Figma Design
                              </>
                            ) : (
                              <>
                                <FiExternalLink size={18} /> Launch Preview
                              </>
                            )}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">What I can help you build.</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon size={28} className="text-primary" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSending(true)
    setSubmitMessage('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Nihindu Dulavin',
        },
        EMAILJS_PUBLIC_KEY
      )

      setSubmitMessage('Message sent successfully.')
      setSending(false)
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setSending(false)
      setSubmitMessage('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a project in mind or just want to say hello? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">Contact Info</h3>

            <div className="mb-8 space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm text-foreground transition-colors group-hover:text-primary">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Follow Me</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <label className="mb-1.5 block text-sm text-muted-foreground" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-muted-foreground" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-muted-foreground" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <p className="text-sm text-muted-foreground">{submitMessage}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nihindu Dulavin. All rights reserved.</p>
        <div className="flex gap-6">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App



