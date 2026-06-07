import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { nav, profile } from '../data/content'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy — re-bind when the route changes (sections only exist on home).
  useEffect(() => {
    if (!onHome) { setActive(''); return }
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [onHome])

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const scrollToId = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  // Navigate to a home section from any route.
  const goSection = useCallback(
    (e, id) => {
      e.preventDefault()
      setOpen(false)
      if (onHome) {
        scrollToId(id)
      } else {
        navigate('/')
        // Wait for Home to mount before scrolling.
        setTimeout(() => scrollToId(id), 80)
      }
    },
    [onHome, navigate, scrollToId],
  )

  const goHome = (e) => {
    e.preventDefault()
    setOpen(false)
    if (onHome) window.scrollTo({ top: 0, behavior: 'smooth' })
    else navigate('/')
  }

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="shell nav-inner">
        <a href="/" className="nav-logo" onClick={goHome}>
          <span className="nav-logo-mark">{profile.initials}</span>
          <span className="nav-logo-text">Renault</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => goSection(e, item.id)}
              className={active === item.id ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={`mailto:${profile.links.email}`}>
            Contact
          </a>
        </nav>

        <button
          className={`nav-burger${open ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {nav.map((item) => (
              <a key={item.id} href={`/#${item.id}`} onClick={(e) => goSection(e, item.id)}>
                <span className="nav-mobile-i">/{item.id}</span>
                {item.label}
              </a>
            ))}
            <a href={`mailto:${profile.links.email}`} onClick={() => setOpen(false)}>
              <span className="nav-mobile-i">/say-hi</span>
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
