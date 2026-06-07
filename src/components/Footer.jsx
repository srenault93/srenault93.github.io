import { motion } from 'motion/react'
import { profile } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker">Let’s build something</p>
          <a className="footer-mail" href={`mailto:${profile.links.email}`}>
            {profile.links.email}
          </a>
          <div className="footer-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.links.email}`}>Email</a>
          </div>
        </motion.div>

        <div className="footer-base">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Christopher Newport University · Computer Science</span>
          <a href="#top" className="footer-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
