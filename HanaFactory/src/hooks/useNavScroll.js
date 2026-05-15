import { useEffect, useState } from 'react'

const SECTIONS = ['home','process','types','pricing','calc','portfolio','trust','faq','contact']
const NAV_H = 56

/**
 * 스크롤 위치에 따라 현재 섹션 & topbar 배경을 감지하는 훅
 */
export default function useNavScroll() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)

      let current = 'home'
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 120) current = id
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrolled, activeSection }
}

/**
 * 특정 섹션으로 부드럽게 스크롤
 * @param {string} id - 섹션 id
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_H
  window.scrollTo({ top, behavior: 'smooth' })
}
