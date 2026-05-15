import { useEffect, useRef, useState } from 'react'

/**
 * 숫자 카운트업 훅
 * @param {number} target - 목표 숫자
 * @param {number} duration - ms
 */
export default function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let startTime = null

          const step = (ts) => {
            if (!startTime) startTime = ts
            const progress = Math.min((ts - startTime) / duration, 1)
            setCount(Math.round(progress * target))
            if (progress < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
