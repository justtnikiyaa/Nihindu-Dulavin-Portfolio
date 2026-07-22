import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Lenis from 'lenis'

export const scrollToTarget = (e, targetId) => {
  if (e && e.preventDefault) e.preventDefault()
  if (window.lenis) {
    window.lenis.scrollTo(targetId)
  } else {
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

import {
  FiArrowDown,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMaximize2,
  FiMenu,
  FiMessageSquare,
  FiPhone,
  FiTarget,
  FiUsers,
  FiX,
  FiZap,
} from 'react-icons/fi'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiWebflow,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFigma
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const EMAILJS_PUBLIC_KEY = 'M3iuh6A6Ea0oJZavH'
const EMAILJS_TEMPLATE_ID = 'template_90o6olm'
const EMAILJS_SERVICE_ID = 'service_sa9ob7e'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const strengths = [
  { icon: FiUsers, label: 'Teamwork' },
  { icon: FiZap, label: 'Fast Learner' },
  { icon: FiTarget, label: 'Problem Solver' },
  { icon: FiMessageSquare, label: 'Dedicated' },
]

const skillsData = [
  { name: 'HTML 5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS 3', icon: SiCss, color: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Frontend' },
  { name: 'Webflow', icon: SiWebflow, color: '#4353FF', category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF', category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Backend' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'Tools' },
  { name: 'Java', icon: FaJava, color: '#007396', category: 'Tools' },
]

const certifications = [
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    image: '/certificate/Web Development.png',
    description: 'Gained practical knowledge in HTML essentials, CSS styling, JavaScript interactivity, and responsive web design.',
  },
  {
    title: 'MERN Stack Certificate',
    issuer: 'SLIIT / Self-Directed',
    image: '/certificate/MERN Stack Certificate.jpg',
    description: 'Comprehensive training and project delivery utilizing MongoDB, Express, React, and Node.js for modern web services.',
  },
  {
    title: 'Full-Stack Development',
    issuer: 'Software Engineering Specialization',
    image: '/certificate/Full-Stack Development.jpg',
    description: 'End-to-end software engineering focusing on REST API design, database schemas, secure integrations, and deployment cycles.',
  },
  {
    title: 'MongoDB Data Modeling Path',
    issuer: 'MongoDB Academy',
    image: '/certificate/MongoDB Data Modeling Path.png',
    description: 'Schema modeling, relationship representation, performance optimization, and document lifecycle management in MongoDB.',
  },
  {
    title: 'Web Development Microsoft',
    issuer: 'Microsoft Academic Partner',
    image: '/certificate/web development microsoft.png',
    description: 'Validation of professional capabilities in standard web architecture, responsive interfaces, and host platforms.',
  },
  {
    title: 'GitHub 101 – GitHub for Beginners',
    issuer: 'GitHub Academic Program',
    image: '/certificate/GitHub 101 – GitHub for Beginners.jpg',
    description: 'Fundamentals of git version control, team collaboration models, conflict resolution, branching, and pull requests.',
  },
  {
    title: 'AI Fluency',
    issuer: 'Cognitive Class AI (IBM Partner)',
    image: '/certificate/Ai fluency.jpg',
    description: 'Foundations of artificial intelligence, model capabilities, prompting mechanisms, and responsible AI practices.',
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco',
    image: '/certificate/javascript-essentials-1.png',
    description: 'Foundational JavaScript programming, covering variables, data types, control flow, functions, loops, and array manipulation.',
  },
]

const projects = [
  {
    title: 'KonceptHive',
    category: 'Full Stack',
    description:
      'A comprehensive full-stack web application featuring dynamic frontend components, RESTful backend APIs, and seamless database integration.',
    longDescription:
      'A modern full-stack web platform built for KonceptHive. Features a highly responsive user interface, secure backend endpoint services, interactive data management, and smooth client-side navigation.',
    features: [
      'Interactive and responsive dashboard with modern UI/UX design',
      'Full-stack RESTful API endpoints for dynamic data management',
      'Secure backend integrations with real-time state handling',
      'Optimized performance and cross-platform responsiveness'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/project-koncepthive.png',
    github: 'https://github.com/justtnikiyaa/koncepthive-Project',
    preview: 'https://koncepthive-frontend-779x.onrender.com/',
  },
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
    year: '2023 - Present',
    title: 'BSc (Hons) in Information Technology',
    subtitle: 'Specialising in Information Technology',
    institution: 'SLIIT',
    details: 'Pursuing core computer science theory, web application frameworks, networking, and databases.',
  },
  {
    year: '2023 - Present',
    title: 'Full Stack & UI/UX Specialization',
    subtitle: 'Self-Directed & Academic Projects',
    institution: 'SLIIT Modules',
    details: 'Developing responsive client applications, REST APIs, Socket.io architectures, and prototyping interface blueprints in Figma.',
  },
  {
    year: 'May 2026 - Present',
    title: 'Frontend Developer Intern',
    subtitle: '6-Month Internship',
    institution: 'SLT (Sri Lanka Telecom)',
    details: 'Developing responsive interfaces, optimizing frontend components, and collaborating on web applications to ensure seamless user experiences.',
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
        <a
          href="#home"
          onClick={(e) => scrollToTarget(e, '#home')}
          className="font-heading text-xl font-bold"
        >
          <span className="text-gradient">ND</span>
          <span className="ml-1 text-foreground">Nihindu</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToTarget(e, item.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => scrollToTarget(e, '#contact')}
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
              onClick={(e) => {
                setIsOpen(false)
                scrollToTarget(e, item.href)
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex rounded-lg bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground"
            onClick={(e) => {
              setIsOpen(false)
              scrollToTarget(e, '#contact')
            }}
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
                onClick={(e) => scrollToTarget(e, '#projects')}
                className="group flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-primary/30"
              >
                View Projects
                <FiArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToTarget(e, '#contact')}
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
              Technology (2023-Present).
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
                  <span className="absolute -left-6 top-1.5 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-background border border-primary">
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

function ProjectImageGallery({ images, image, title, preview, onOpenLightbox }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imageList = (Array.isArray(images) && images.length > 0)
    ? images
    : (image ? [image] : [])

  const nextSlide = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % imageList.length)
  }

  const prevSlide = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length)
  }

  let displayDomain = title
  if (preview) {
    try {
      const urlObj = new URL(preview.startsWith('http') ? preview : `https://${preview}`)
      displayDomain = urlObj.hostname + (urlObj.pathname !== '/' ? urlObj.pathname : '')
    } catch {
      displayDomain = preview
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/80 bg-card shadow-md transition-all hover:border-primary/40 hover:shadow-xl">
      {/* Mac Browser Frame Header */}
      <div className="flex items-center justify-between border-b border-border/60 bg-secondary/90 px-3.5 py-2 backdrop-blur-sm select-none">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex flex-1 items-center justify-center px-3">
          <div className="w-full max-w-[170px] sm:max-w-[240px] truncate rounded-md border border-border/50 bg-background/60 px-2.5 py-0.5 text-center font-mono text-[10px] sm:text-[11px] text-muted-foreground">
            {displayDomain}
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            if (onOpenLightbox) onOpenLightbox(imageList, currentIndex, title)
          }}
          className="flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:bg-background hover:text-primary transition-colors"
          title="Full Screen View"
        >
          <FiMaximize2 size={13} />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/20">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={imageList[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            initial={{ opacity: 0.4, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => {
              e.stopPropagation()
              if (onOpenLightbox) onOpenLightbox(imageList, currentIndex, title)
            }}
            className="h-full w-full object-cover object-top cursor-zoom-in transition-transform duration-500 group-hover:scale-105"
          />
        </AnimatePresence>

        {/* Hover overlay hint */}
        <div
          onClick={(e) => {
            e.stopPropagation()
            if (onOpenLightbox) onOpenLightbox(imageList, currentIndex, title)
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-black/80 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/20 shadow-xl">
            <FiMaximize2 size={13} /> Click to Expand Photo
          </span>
        </div>

        {/* Navigation Arrows (if multiple images) */}
        {imageList.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-primary transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous photo"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-primary transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next photo"
            >
              <FiChevronRight size={18} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md z-10">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(idx)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? 'w-4 bg-primary' : 'w-1.5 bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function LightboxModal({ images, initialIndex = 0, title, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const imageList = Array.isArray(images) && images.length > 0 ? images : []

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && imageList.length > 1) {
        setIndex((prev) => (prev + 1) % imageList.length)
      }
      if (e.key === 'ArrowLeft' && imageList.length > 1) {
        setIndex((prev) => (prev - 1 + imageList.length) % imageList.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [imageList.length, onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-rose-600 transition-all z-20"
          aria-label="Close full view"
        >
          <FiX size={22} />
        </button>

        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[92vh] max-w-[95vw] flex flex-col items-center justify-center"
        >
          <motion.img
            key={index}
            src={imageList[index]}
            alt={`${title} full screenshot`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="max-h-[84vh] max-w-[92vw] rounded-xl object-contain shadow-2xl border border-white/10"
          />

          {/* Navigation Controls */}
          {imageList.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev - 1 + imageList.length) % imageList.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-primary transition-all"
              >
                <FiChevronLeft size={26} />
              </button>
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev + 1) % imageList.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-primary transition-all"
              >
                <FiChevronRight size={26} />
              </button>
            </>
          )}

          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-medium text-white/90">{title}</span>
            {imageList.length > 1 && (
              <span className="rounded-full bg-white/15 px-3 py-0.5 text-xs text-white/80 font-mono">
                {index + 1} / {imageList.length}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [lightboxState, setLightboxState] = useState(null)

  const handleOpenLightbox = (images, index, title) => {
    setLightboxState({ images, index, title })
  }

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
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${filter === cat
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
          className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
                className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <ProjectImageGallery
                    images={project.images}
                    image={project.image}
                    title={project.title}
                    preview={project.preview}
                    onOpenLightbox={handleOpenLightbox}
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
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/80 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary z-20"
                  aria-label="Close modal"
                >
                  <FiX size={20} />
                </button>

                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <ProjectImageGallery
                      images={selectedProject.images}
                      image={selectedProject.image}
                      title={selectedProject.title}
                      preview={selectedProject.preview}
                      onOpenLightbox={handleOpenLightbox}
                    />
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

        {/* Full-Screen Lightbox Modal */}
        {lightboxState && (
          <LightboxModal
            images={lightboxState.images}
            initialIndex={lightboxState.index}
            title={lightboxState.title}
            onClose={() => setLightboxState(null)}
          />
        )}
      </div>
    </section>
  )
}
function TerminalConsole() {
  const [history, setHistory] = useState([
    { type: 'input', text: 'help' },
    { type: 'output', text: 'Welcome to Nihindu\'s terminal! Type "help" to see available commands.' }
  ])
  const [input, setInput] = useState('')
  const terminalBodyRef = useRef(null)

  const handleCommand = (e) => {
    e.preventDefault()
    const trimmedInput = input.trim().toLowerCase()
    if (!trimmedInput) return

    const newHistory = [...history, { type: 'input', text: input }]

    let reply = ''
    switch (trimmedInput) {
      case 'help':
        reply = 'Available commands:\n  about          - Brief background introduction\n  skills         - Technical competency matrix\n  certifications - Earned credentials list\n  projects       - Featured engineering works\n  clear          - Flush console lines\n  help           - Show command list'
        break
      case 'about':
        reply = 'Nihindu Dulavin - IT Undergraduate at SLIIT (2024-2028).\nPassionate full-stack programmer focused on crafting reliable services using React, Node.js, and relational databases. Fast learner, dedicated team contributor, and critical problem solver.'
        break
      case 'skills':
        reply = 'Frontend:    HTML, CSS, JavaScript, React\nBackend:     Node.js, Express, Socket.io\nDatabases:   MongoDB, PostgreSQL\nTools:       Git, Figma, VS Code'
        break
      case 'certifications':
        reply = 'Earned Certifications:\n- MERN Stack Certificate (SLIIT / Self-Directed)\n- Full-Stack Development (Specialization)\n- MongoDB Data Modeling Path (MongoDB Academy)\n- Web Development Microsoft (Academic Partner)\n- GitHub 101 – GitHub for Beginners (GitHub)\n- AI Fluency (Cognitive Class AI)\n- JavaScript Essentials 1 (Cisco)\n- Web Design for Beginners (University of Moratuwa)'
        break
      case 'projects':
        reply = 'Featured Projects:\n- Daily Task App: Productive UI/UX Figma Design\n- Shopping Cart: Full Stack MERN system with Google OAuth\n- Smart Campus: Role-based campus operations hub with PostgreSQL\n- AutoRentHub: Vehicle bookings with payment features'
        break
      case 'clear':
        setHistory([])
        setInput('')
        return
      default:
        reply = `Command not found: "${trimmedInput}". Type "help" for a list of valid commands.`
    }

    setHistory([...newHistory, { type: 'output', text: reply }])
    setInput('')
  }

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [history])

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl font-sans">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="mb-3 font-heading text-2xl font-bold md:text-3xl">
            Interactive <span className="text-gradient">Console</span>
          </h2>
          <p className="text-sm text-muted-foreground font-medium">Type commands directly to interact with my portfolio database.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-secondary/80 px-4 py-3 border-b border-border">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">guest@nihindu.dev:~</span>
            <div className="w-12" /> {/* spacer */}
          </div>

          {/* Console Area */}
          <div ref={terminalBodyRef} className="h-64 overflow-y-auto bg-black/40 p-4 font-mono text-sm leading-relaxed text-emerald-400">
            <div className="space-y-2">
              {history.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap">
                  {line.type === 'input' ? (
                    <span>
                      <span className="text-primary font-bold">guest@nihindu:~$</span> {line.text}
                    </span>
                  ) : (
                    <span className="text-slate-300">{line.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleCommand} className="flex border-t border-border bg-secondary/50">
            <span className="flex items-center pl-4 pr-2 font-mono text-sm font-bold text-primary">
              guest@nihindu:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent py-3 font-mono text-sm text-emerald-400 focus:outline-none"
              placeholder='Try typing "help" or "about"...'
            />
          </form>
        </motion.div>
      </div>
    </section>
  )
}

function GithubDashboard() {
  const [githubData, setGithubData] = useState(null)
  const currentYear = new Date().getFullYear().toString()
  const [selectedYear, setSelectedYear] = useState(currentYear)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [userRes, contributionsRes] = await Promise.all([
          fetch('https://api.github.com/users/justtnikiyaa'),
          fetch('https://github-contributions-api.jogruber.de/v4/justtnikiyaa')
        ])

        const userData = await userRes.json()
        const contribData = await contributionsRes.json()

        // Calculate Longest Streak
        let currentStreak = 0
        let maxStreak = 0
        const sorted = [...contribData.contributions].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        )

        for (const day of sorted) {
          if (day.count > 0) {
            currentStreak++
            if (currentStreak > maxStreak) {
              maxStreak = currentStreak
            }
          } else {
            currentStreak = 0
          }
        }

        // Calculate active weeks (out of the last 52 weeks)
        const lastYearContribs = sorted.slice(-364)
        let activeWeeksCount = 0
        for (let i = 0; i < lastYearContribs.length; i += 7) {
          const week = lastYearContribs.slice(i, i + 7)
          if (week.some(day => day.count > 0)) {
            activeWeeksCount++
          }
        }

        setGithubData({
          publicRepos: userData.public_repos || 0,
          longestStreak: maxStreak,
          activeWeeks: `${activeWeeksCount}/52`,
          allTotals: contribData.total, // e.g. {"2024":1, "2025":0, "2026":258}
          allContributions: sorted
        })
      } catch (err) {
        console.error('Failed to fetch github stats', err)
      }
    }

    fetchStats()
  }, [])

  // Filter and group calendar days
  let displayDays = []
  if (githubData) {
    if (selectedYear === currentYear) {
      displayDays = githubData.allContributions.slice(-364) // Last 364 days
    } else {
      displayDays = githubData.allContributions.filter(c => c.date.startsWith(selectedYear))
    }
  }

  // Align starting weekday
  let alignedDays = []
  if (displayDays.length > 0) {
    const firstDayOfWeek = new Date(displayDays[0].date).getDay()
    const placeholders = Array.from({ length: firstDayOfWeek }, () => ({
      date: '',
      count: -1,
      level: -1
    }))
    alignedDays = [...placeholders, ...displayDays]
  } else {
    // Simulated loading/fallback days
    alignedDays = Array.from({ length: 53 * 7 }, (_, idx) => ({
      date: '',
      count: (idx % 11 === 0 || idx % 19 === 0) ? (idx % 4) : 0,
      level: (idx % 11 === 0 || idx % 19 === 0) ? (idx % 4) : 0
    }))
  }

  // Group into weeks
  const weeksList = []
  for (let i = 0; i < alignedDays.length; i += 7) {
    weeksList.push(alignedDays.slice(i, i + 7))
  }

  // Compute month headers
  const monthsHeader = []
  let prevMonth = ''
  weeksList.forEach((week, colIdx) => {
    const firstValidDay = week.find(d => d.date !== '')
    if (firstValidDay) {
      const dateObj = new Date(firstValidDay.date)
      const monthName = dateObj.toLocaleString('default', { month: 'short' })
      if (monthName !== prevMonth) {
        monthsHeader.push({ label: monthName, colIndex: colIdx })
        prevMonth = monthName
      }
    }
  })

  const years = githubData
    ? Object.keys(githubData.allTotals).sort((a, b) => b - a)
    : [currentYear, '2025', '2024']

  const yearTotal = githubData
    ? (githubData.allTotals[selectedYear] || 0)
    : 272

  const stats = [
    { label: 'Total Repositories', value: githubData ? `${githubData.publicRepos}` : '18+' },
    { label: 'Annual Contributions', value: githubData ? `${githubData.allTotals[currentYear] || 0}` : '258' },
    { label: 'Active Weeks', value: githubData ? githubData.activeWeeks : '48/52' },
    { label: 'Longest Streak', value: githubData ? `${githubData.longestStreak} Days` : '18 Days' }
  ]

  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground font-medium">Recent contributions and development statistics on GitHub.</p>
        </motion.div>

        <div className="mx-auto max-w-5xl space-y-8">
          {/* Main Calendar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-6 shadow-md"
          >
            {/* Header info */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {yearTotal} contributions in {selectedYear === currentYear ? 'the last year' : selectedYear}
                </h3>
                <p className="text-xs text-muted-foreground">Account: @justtnikiyaa</p>
              </div>
              <a
                href="https://github.com/justtnikiyaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold text-muted-foreground hover:border-primary/45 hover:text-primary transition-all"
              >
                <FiGithub size={14} /> View GitHub Profile
              </a>
            </div>

            {/* Layout Flexbox */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start justify-between">
              {/* Year Selectors on mobile (top of calendar) */}
              <div className="flex flex-wrap gap-2 md:hidden">
                {years.map(y => (
                  <button
                    key={y}
                    onClick={() => setSelectedYear(y)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${selectedYear === y
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                      }`}
                  >
                    {y}
                  </button>
                ))}
              </div>

              {/* Grid Wrapper */}
              <div className="flex-1 overflow-x-auto pb-4">
                <div className="min-w-[760px] flex flex-col">
                  {/* Months Header row */}
                  <div className="relative h-6 w-full text-xs text-muted-foreground mb-1 select-none">
                    {monthsHeader.map((m, idx) => (
                      <span
                        key={idx}
                        className="absolute font-semibold text-[11px]"
                        style={{ left: `${m.colIndex * 14.2 + 28}px` }} // Aligned offset with labels
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>

                  {/* Day labels + Heatmap */}
                  <div className="flex gap-2.5">
                    {/* Y-axis days */}
                    <div className="grid grid-rows-7 gap-1 text-[10px] text-muted-foreground select-none h-[77px] w-6 pr-1.5 font-medium leading-none justify-between items-center py-[1px]">
                      <span></span>
                      <span>Mon</span>
                      <span></span>
                      <span>Wed</span>
                      <span></span>
                      <span>Fri</span>
                      <span></span>
                    </div>

                    {/* Columns grid */}
                    <div className="grid grid-flow-col gap-1 select-none">
                      {weeksList.map((week, colIdx) => (
                        <div key={colIdx} className="grid grid-rows-7 gap-1">
                          {week.map((day, rowIdx) => {
                            let bgClass = 'bg-secondary/40' // placeholder background
                            if (day.level === 0) bgClass = 'bg-secondary/80'
                            if (day.level === 1) bgClass = 'bg-emerald-900/40'
                            if (day.level === 2) bgClass = 'bg-emerald-700/60'
                            if (day.level === 3) bgClass = 'bg-emerald-500/80'
                            if (day.level === 4) bgClass = 'bg-emerald-500'

                            return (
                              <div
                                key={rowIdx}
                                className={`h-2.5 w-2.5 rounded-sm transition-all duration-300 hover:scale-125 ${day.count === -1 ? 'opacity-0 pointer-events-none' : bgClass
                                  }`}
                                title={day.count > -1 ? `${day.count} contributions on ${day.date || 'unknown'}` : ''}
                              />
                            )
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend footer */}
                  <div className="mt-4 flex justify-between items-center text-[10px] text-muted-foreground pl-7">
                    <span>Learn how we count contributions</span>
                    <div className="flex items-center gap-1.5 select-none">
                      <span>Less</span>
                      <span className="h-2.5 w-2.5 rounded-sm bg-secondary/80" />
                      <span className="h-2.5 w-2.5 rounded-sm bg-emerald-900/40" />
                      <span className="h-2.5 w-2.5 rounded-sm bg-emerald-700/60" />
                      <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500/80" />
                      <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year Selectors on Desktop (Right side list) */}
              <div className="hidden md:flex flex-col gap-1.5 border-l border-border pl-6 pr-2 min-w-[90px]">
                {years.map(y => (
                  <button
                    key={y}
                    onClick={() => setSelectedYear(y)}
                    className={`rounded-lg px-4 py-2 text-xs font-bold transition-all text-left border ${selectedYear === y
                        ? 'bg-primary border-primary text-primary-foreground shadow-md shadow-primary/10'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/40'
                      }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(({ label, value }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/30 shadow-sm"
              >
                <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
                <p className="text-xs text-muted-foreground font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Frontend', 'Backend', 'Tools']

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="section-padding bg-card/20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${activeCategory === cat
                  ? 'bg-gradient-primary text-primary-foreground shadow-md shadow-primary/10 scale-105'
                  : 'border border-border bg-card/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 max-w-6xl"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{
                    '--skill-color': skill.color,
                    '--skill-glow-color': `${skill.color}22`
                  }}
                  className="skill-card flex flex-col items-center justify-center p-5 rounded-2xl bg-card/40 backdrop-blur-sm aspect-square text-center cursor-default"
                >
                  <div className="skill-icon-container flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/30 border border-border/40 mb-4">
                    <Icon size={28} style={{ color: skill.color }} />
                  </div>
                  <span className="skill-text text-[11px] font-bold tracking-wider text-muted-foreground font-heading uppercase">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certifications" className="section-padding bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground font-medium">
            Professional credentials and specialized paths I have completed.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="group flex flex-col p-5 rounded-2xl border border-border bg-card/30 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div className="h-44 w-full overflow-hidden rounded-xl bg-muted mb-4 border border-border/50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <span className="text-[10px] text-primary font-bold font-mono tracking-wider mb-2 uppercase">
                {cert.issuer}
              </span>
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2 font-heading">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certificate Image Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[95vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl flex flex-col"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/80 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary z-10"
                  aria-label="Close lightbox"
                >
                  <FiX size={20} />
                </button>

                <div className="overflow-auto p-4 flex-1 flex items-center justify-center bg-black/20">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
                  />
                </div>

                <div className="p-4 border-t border-border bg-secondary/35 text-center">
                  <h3 className="font-heading text-lg font-bold text-foreground">{selectedCert.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium mt-1">{selectedCert.issuer}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function Services({ setInquiryMessage }) {
  const handleInquiry = (serviceTitle) => {
    setInquiryMessage(`Hi Nihindu, I am interested in details regarding your "${serviceTitle}" services...`)
    scrollToTarget(null, '#contact')
  }

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
          <p className="mx-auto max-w-2xl text-muted-foreground font-medium">What I can help you build.</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">{title}</h3>
                <p className="leading-relaxed text-muted-foreground mb-6">{description}</p>
              </div>
              <button
                type="button"
                onClick={() => handleInquiry(title)}
                className="mt-2 text-left text-sm font-semibold text-primary hover:text-primary/85 transition-colors inline-flex items-center gap-1.5"
              >
                Inquire about this <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ inquiryMessage, setInquiryMessage }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    if (inquiryMessage) {
      setForm((prev) => ({ ...prev, message: inquiryMessage }))
    }
  }, [inquiryMessage])

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
      setInquiryMessage('')
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
          <p className="mx-auto max-w-2xl text-muted-foreground font-medium font-medium">
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
              onClick={(e) => scrollToTarget(e, `#${item.toLowerCase()}`)}
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
  const [inquiryMessage, setInquiryMessage] = useState('')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    window.lenis = lenis

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Spotlight cursor glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, hsl(18 90% 55% / 0.045), transparent 80%)`
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <TerminalConsole />
      <Skills />
      <Projects />
      <Certifications />
      <GithubDashboard />
      <Services setInquiryMessage={setInquiryMessage} />
      <Contact inquiryMessage={inquiryMessage} setInquiryMessage={setInquiryMessage} />
      <Footer />
    </div>
  )
}

export default App
