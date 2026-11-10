import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi'

export const experienceData = [
  {
    id: 'tfs',
    role: 'Junior IT Executive',
    company: 'The Fashion Store (TFS)',
    companyShort: 'TFS',
    period: 'September 2026 – Present',
    badge: 'Current Role',
    type: 'Full-Time (On-site)',
    location: 'Colombo, Sri Lanka',
    tag: 'Retail & Multi-Branch POS',
    logo: '/images/experience/tfs-logo.png',
    logoAlt: 'The Fashion Store Logo',
    // Custom branded canvas tailored specifically to red & black TFS logo
    cardBg: 'linear-gradient(135deg, #FFFFFF 0%, #FFF7F7 50%, #FFEFEF 100%)',
    borderColor: 'border-red-500/30 hover:border-red-500/60',
    accentColor: '#EC1C24',
    glowColor: 'rgba(236, 28, 36, 0.16)',
    tagBg: 'bg-red-500/10 text-red-600 border-red-500/20',
    description:
      'Spearheading comprehensive IT operations, hardware lifecycle maintenance, and POS administration across multi-branch retail stores. Managing workstation deployments, user permissions, and high-stakes stock-take synchronizations.',
    highlights: [
      'Configured, deployed, and maintained workstations, barcode scanners, and thermal receipt printers for multi-branch retail operations.',
      'Managed large-scale stock take workflows using Sphere POS, ensuring zero-downtime database synchronization.',
      'Troubleshooted network connectivity issues, including Azure DB latency/disconnects, TCP/IP configurations, and peripheral setup.',
      'Managed user access permissions, software updates, and secure email configurations for staff.',
      'Coordinated hardware servicing, formatting, and proactive preventive maintenance across retail branches.',
    ],
    skills: ['Sphere POS', 'IT Support', 'Hardware Peripherals', 'Azure DB Sync', 'Network Troubleshooting', 'User Access Control'],
  },
  {
    id: 'rda',
    role: 'IT Intern',
    company: 'Road Development Authority (RDA)',
    department: 'Information Systems & Network Management Division',
    period: 'July 2026 – September 2026',
    badge: 'Government Enterprise',
    type: 'Internship',
    location: 'Battaramulla, Sri Lanka',
    tag: 'Systems Dev & Digitization',
    logo: '/images/experience/rda-logo.png',
    logoAlt: 'Road Development Authority Logo',
    // Custom branded canvas tailored specifically to black emblem & orange RDA lettering
    cardBg: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF8 50%, #FFF3E0 100%)',
    borderColor: 'border-amber-500/30 hover:border-amber-500/60',
    accentColor: '#F7720A',
    glowColor: 'rgba(247, 114, 10, 0.16)',
    tagBg: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    description:
      'Engineered internal government management solutions including a centralized Letter Management System and a Web-Based Tax Invoice System. Assisted with official web infrastructure maintenance and national digitalization workshops.',
    highlights: [
      'Engineered a complete Letter Management System featuring search UI, dynamic multi-field filtering, backend query processing, and an integrated file viewer.',
      'Developed a responsive Web-Based Tax Invoice System streamlining divisional invoicing workflows.',
      'Assisted in updating, auditing, and maintaining the official Road Development Authority web portal.',
      'Coordinated technical setup and execution for national RDA Digitalization Workshops.',
      'Supported divisional software testing, technical documentation, and enterprise network management.',
    ],
    skills: ['Letter Management System', 'Tax Invoice System', 'React & Web UI', 'Database Systems', 'Technical Docs', 'Govt. Digitalization'],
  },
  {
    id: 'slt',
    role: 'Frontend Developer Intern',
    company: 'Sri Lanka Telecom (SLT Mobitel)',
    department: 'Enterprise Application Development',
    period: 'May 2026 – November 2026',
    badge: 'National Telco (6 Months)',
    type: 'Internship',
    location: 'Colombo, Sri Lanka',
    tag: 'Enterprise Web Applications',
    logo: '/images/experience/slt-mobitel-logo.png',
    logoAlt: 'SLT Mobitel Logo',
    // Custom branded canvas tailored specifically to SLT Blue, Mobitel Green & Cyan
    cardBg: 'linear-gradient(135deg, #FFFFFF 0%, #F5FBFF 50%, #EDFDF5 100%)',
    borderColor: 'border-emerald-500/30 hover:border-emerald-500/60',
    accentColor: '#4DB848',
    glowColor: 'rgba(77, 184, 72, 0.16)',
    tagBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    description:
      'Engineered dynamic, accessible user interfaces using React.js for enterprise telecommunication systems. Integrated complex REST APIs, executed code quality improvements, and ran automated vulnerability scans.',
    highlights: [
      'Engineered and enhanced responsive enterprise web interfaces using React.js and modern component patterns.',
      'Integrated RESTful APIs and collaborated with backend engineers for end-to-end service delivery.',
      'Conducted UI/UX refinements, bug fixes, and responsive performance optimizations across multiple modules.',
      'Performed code quality assessments using SonarQube and automated vulnerability testing via OWASP ZAP in an Agile workflow.',
    ],
    skills: ['React.js', 'REST API Integration', 'SonarQube', 'OWASP ZAP', 'Responsive UI/UX', 'Agile/Scrum'],
  },
]

function ExperienceScrollZoom({ children, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    restDelta: 0.001,
  })

  const scale = useTransform(smoothProgress, [0, 0.28, 0.72, 1], [0.93, 1, 1, 1.04])
  const opacity = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [0.55, 1, 1, 0.55])
  const y = useTransform(smoothProgress, [0, 0.28, 0.72, 1], [35, 0, 0, -25])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ scale, opacity, y }} className="origin-center will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Ambient Glow Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-[#9D86FF]/10 blur-[140px]" />
      </div>

      <ExperienceScrollZoom>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md shadow-[0_0_20px_rgba(125,82,253,0.2)]"
            >
              <FiBriefcase className="text-primary animate-pulse" />
              Career Journey
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9D86FF] via-[#7D52FD] to-[#C084FC]">Experience</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground"
            >
              Hands-on industry track record spanning multi-branch retail POS operations, government systems development, and national telecommunications software engineering.
            </motion.p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Desktop Center Timeline Spine Line */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            {/* Mobile Left Timeline Spine Line */}
            <div className="lg:hidden absolute left-5 sm:left-7 top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            {/* Timeline Rows */}
            <div className="space-y-16 lg:space-y-24">
              {experienceData.map((job, idx) => {
                const isEven = idx % 2 === 0 // Even index: Logo Left, Text Right; Odd index: Text Left, Logo Right

                return (
                  <div key={job.id} className="relative">
                    {/* Desktop Center Timeline Node Dot */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-10 items-center justify-center z-20">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="h-7 w-7 rounded-full border-2 bg-background flex items-center justify-center shadow-[0_0_18px_rgba(125,82,253,0.6)] transition-transform duration-300 hover:scale-125"
                          style={{ borderColor: job.accentColor }}
                        >
                          <div
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: job.accentColor }}
                          />
                        </div>
                        {/* Subtle ping aura */}
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-25"
                          style={{ backgroundColor: job.accentColor }}
                        />
                      </div>
                    </div>

                    {/* Mobile Left Timeline Node Dot */}
                    <div className="lg:hidden absolute left-5 sm:left-7 -translate-x-1/2 top-8 flex items-center justify-center z-20">
                      <div
                        className="h-5 w-5 rounded-full border-2 bg-background flex items-center justify-center shadow-[0_0_12px_rgba(125,82,253,0.5)]"
                        style={{ borderColor: job.accentColor }}
                      >
                        <div
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: job.accentColor }}
                        />
                      </div>
                    </div>

                    {/* Content Grid: 12 Columns on Desktop */}
                    <div className="pl-12 sm:pl-16 lg:pl-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                      {/* === COLUMN A (Left Column on Desktop) === */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                      >
                        {isEven ? (
                          // Render Logo Card on Left
                          <LogoShowcaseCard job={job} />
                        ) : (
                          // Render Text Details on Left
                          <ExperienceDetailsCard job={job} align="right" />
                        )}
                      </motion.div>

                      {/* === COLUMN B (Right Column on Desktop) === */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                        className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                      >
                        {isEven ? (
                          // Render Text Details on Right
                          <ExperienceDetailsCard job={job} align="left" />
                        ) : (
                          // Render Logo Card on Right
                          <LogoShowcaseCard job={job} />
                        )}
                      </motion.div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </ExperienceScrollZoom>
    </section>
  )
}

/**
 * Branded Floating Showcase Card
 * Built exactly as in the reference: rounded-3xl, tailored high-contrast canvas, centered logo, subtle ambient glow
 */
function LogoShowcaseCard({ job }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border ${job.borderColor} transition-all duration-500 hover:scale-[1.02]`}
      style={{
        background: job.cardBg,
        boxShadow: `0 20px 50px ${job.glowColor}`,
      }}
    >
      {/* Top Floating Category Tag */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase backdrop-blur-md border ${job.tagBg}`}>
          {job.tag}
        </span>
      </div>

      {/* Top Left Company Type Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-semibold text-black/60 backdrop-blur-md border border-black/10">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: job.accentColor }} />
          {job.type}
        </span>
      </div>

      {/* Centered Logo Container with Generous Padding */}
      <div className="flex items-center justify-center min-h-[220px] sm:min-h-[260px] md:min-h-[290px] p-8 sm:p-12">
        <img
          src={job.logo}
          alt={job.logoAlt}
          className="max-h-20 sm:max-h-24 md:max-h-28 max-w-[85%] sm:max-w-[80%] w-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-sm select-none"
          loading="lazy"
        />
      </div>

      {/* Bottom Subtitle Pill Bar */}
      <div className="border-t border-black/5 bg-black/[0.02] px-6 py-3 flex items-center justify-between text-xs text-black/60 font-medium">
        <span className="flex items-center gap-1.5 truncate">
          <FiMapPin className="shrink-0 text-black/40" size={13} />
          {job.location}
        </span>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-black/50">
          {job.badge}
        </span>
      </div>
    </div>
  )
}

/**
 * Text & Narrative Details Column
 * Displays Date, Company, Role, Narrative, Bullet Highlights, and Skill Pills
 */
function ExperienceDetailsCard({ job, align = 'left' }) {
  return (
    <div className="space-y-4">
      {/* Date & Badge Header */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-1.5">
          <FiCalendar className="text-primary" size={13} />
          {job.period}
        </span>
        <span
          className="rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider border"
          style={{
            color: job.accentColor,
            borderColor: `${job.accentColor}40`,
            backgroundColor: `${job.accentColor}12`,
          }}
        >
          {job.badge}
        </span>
      </div>

      {/* Company Name & Role Heading */}
      <div>
        <h3 className="font-heading text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-foreground">
          {job.company}
        </h3>
        {job.department && (
          <p className="text-xs sm:text-sm font-semibold text-primary/90 mt-0.5">
            {job.department}
          </p>
        )}
        <p className="text-base sm:text-lg font-semibold text-foreground/80 mt-1 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: job.accentColor }} />
          {job.role}
        </p>
      </div>

      {/* Main Narrative Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {job.description}
      </p>

      {/* Bulleted Highlights */}
      <ul className="space-y-2 pt-1">
        {job.highlights.map((point, pIdx) => (
          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
            <FiCheckCircle
              className="mt-0.5 shrink-0 transition-colors"
              style={{ color: job.accentColor }}
              size={15}
            />
            <span className="leading-snug">{point}</span>
          </li>
        ))}
      </ul>

      {/* Technology & Competency Pills */}
      <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-card/60 backdrop-blur-md px-3 py-1 text-xs font-mono font-medium text-foreground/80 border border-border/80 transition-all hover:border-primary/50 hover:text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Experience
