import { useEffect, useRef, useState } from 'react'

/* Same mechanism as the floating nav logo's show/hide (IntersectionObserver
   toggling a class): CSS animation-timeline:view() looked right on paper, but
   its scroll-linked progress never actually updates in practice — sections
   using it just render frozen at whatever opacity they first computed on
   load. IntersectionObserver + a class toggle is the version that reliably
   fires as each section scrolls into view — and, since isVisible tracks
   entry.isIntersecting directly rather than latching true forever, it fires
   again on the way out, so the section fades back out once it leaves the
   viewport in either direction. */
export function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold })

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
