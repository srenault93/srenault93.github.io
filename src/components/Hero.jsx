import { motion } from 'motion/react'
import { profile } from '../data/content'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1]
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: 0.15 + i * 0.09 },
  }),
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden />
      <div className="shell hero-inner">
        <motion.p
          className="kicker hero-kicker"
          variants={rise}
          custom={0}
          initial="hidden"
          animate="show"
        >
          <span className="hero-dot" /> {profile.role}
        </motion.p>

        <h1 className="hero-name">
          <motion.span variants={rise} custom={1} initial="hidden" animate="show">
            Sebastien
          </motion.span>
          <motion.span
            className="hero-name-2"
            variants={rise}
            custom={2}
            initial="hidden"
            animate="show"
          >
            Renault
            <em className="hero-name-mark">.</em>
          </motion.span>
        </h1>

        <motion.p
          className="hero-tagline"
          variants={rise}
          custom={3}
          initial="hidden"
          animate="show"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          className="hero-bio"
          variants={rise}
          custom={4}
          initial="hidden"
          animate="show"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          className="hero-tags"
          variants={rise}
          custom={5}
          initial="hidden"
          animate="show"
        >
          {profile.tags.map((t) => (
            <span className="hero-tag" key={t}>
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="hero-actions"
          variants={rise}
          custom={6}
          initial="hidden"
          animate="show"
        >
          <a
            className="btn btn-primary"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
              <path
                fill="currentColor"
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            className="btn btn-ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.links.email}`}>
            Email
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        className="hero-scroll"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span>Scroll</span>
        <span className="hero-scroll-line" />
      </motion.a>
    </section>
  )
}
