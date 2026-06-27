'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

/**
 * ParallaxLayer translates its content vertically as it scrolls through the
 * viewport. `speed` is the fraction of scroll distance to offset by:
 * negative values move the layer up (slower than scroll), creating depth.
 */
export function ParallaxLayer({
  children,
  speed = -0.2,
  className,
  style,
}: {
  children: ReactNode
  speed?: number
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight
      // progress: -1 (just below viewport) -> 1 (just above viewport)
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH
      const offset = progress * speed * 100
      el.style.transform = `translate3d(0, ${offset}px, 0)`
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [speed, reduced])

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={style}
    >
      {children}
    </div>
  )
}

/**
 * Reveal fades and slides its children into view when scrolled into the
 * viewport. Falls back to fully visible when reduced motion is preferred.
 */
export function Reveal({
  children,
  className,
  as,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
}) {
  const Tag = as ?? 'div'
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
