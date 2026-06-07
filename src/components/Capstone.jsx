import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import Reveal from './Reveal'
import { capstone } from '../data/content'
import './Capstone.css'

function PhoneStack() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 18 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      ref={ref}
      className="phones"
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX: rx, rotateY: ry }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {capstone.screens.map((s, i) => (
        <div className={`phone phone--${i === 0 ? 'front' : 'back'}`} key={s.src}>
          <span className="phone-notch" />
          <img src={s.src} alt={s.alt} loading="lazy" />
        </div>
      ))}
      <span className="phones-glow" aria-hidden />
    </motion.div>
  )
}

export default function Capstone() {
  return (
    <section className="section capstone" id="work">
      <div className="shell">
        <div className="section-head">
          <span className="section-index">01 / Featured</span>
          <h2 className="section-title">Selected Work</h2>
          <span className="section-rule" />
        </div>

        <div className="cap-card">
          <Reveal className="cap-head">
            <span className="cap-award">★ {capstone.award}</span>
            <p className="kicker">{capstone.eyebrow}</p>
            <h3 className="cap-name">
              {capstone.name}
              <span className="cap-name-sub">{capstone.subtitle}</span>
            </h3>
            <p className="cap-summary">{capstone.summary}</p>
            <div className="cap-meta">
              <span className="status-pill">{capstone.status}</span>
              <Link className="cap-repo" to="/project/quickfeed">
                Open project page →
              </Link>
              <a className="cap-repo" href={capstone.repo} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </Reveal>

          <div className="cap-body">
            <div className="cap-content">
              <Reveal className="cap-block" delay={0.05}>
                <h4 className="cap-label">Problem</h4>
                <p className="cap-text">{capstone.problem}</p>
              </Reveal>

              <Reveal className="cap-block" delay={0.1}>
                <h4 className="cap-label">Architecture</h4>
                <div className="arch-flow">
                  {capstone.architecture.map((node, i) => (
                    <span className="arch-step" key={node}>
                      <span className="arch-node" style={{ '--i': i }}>{node}</span>
                      {i < capstone.architecture.length - 1 && (
                        <span className="arch-arrow" aria-hidden>→</span>
                      )}
                    </span>
                  ))}
                </div>
                <p className="cap-text">{capstone.architectureNote}</p>
              </Reveal>

              <Reveal className="cap-block" delay={0.05}>
                <h4 className="cap-label">Key Decisions</h4>
                <div className="decisions">
                  {capstone.decisions.map((d) => (
                    <div className="decision" key={d.label}>
                      <strong>{d.label}</strong>
                      <span>{d.text}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="cap-block" delay={0.05}>
                <h4 className="cap-label">Engineering Details</h4>
                {capstone.engineering.map((e) => (
                  <div className="eng-detail" key={e.title}>
                    <strong>{e.title}</strong>
                    <span>{e.text}</span>
                  </div>
                ))}
              </Reveal>

              <Reveal className="cap-block" delay={0.05}>
                <h4 className="cap-label">Outcomes</h4>
                <ul className="outcomes">
                  {capstone.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="cap-stack" delay={0.05}>
                {capstone.stack.map((s) => (
                  <span className="stack-chip" key={s}>{s}</span>
                ))}
              </Reveal>
            </div>

            <div className="cap-visual">
              <PhoneStack />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
