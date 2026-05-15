import { useEffect, useRef } from 'react'

/**
 * 스크롤 시 요소가 뷰포트에 들어오면 'in' 클래스를 추가하는 훅
 * @param {number} threshold - 0~1, 기본 0.08
 */
export default function useScrollReveal(threshold = 0.08) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
