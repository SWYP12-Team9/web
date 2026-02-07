import { useCallback, useEffect, useRef } from 'react'

interface UseIntersectionObserverProps {
  onIntersect: () => void
  hasNextPage?: boolean
  isFetching?: boolean
  rootMargin?: string
  threshold?: number
}

export function useIntersectionObserver({
  onIntersect,
  hasNextPage,
  isFetching,
  rootMargin = '80px',
  threshold = 0,
}: UseIntersectionObserverProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null)

  const observerCallback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && hasNextPage && !isFetching) {
        onIntersect()
      }
    },
    [onIntersect, hasNextPage, isFetching],
  )

  useEffect(() => {
    if (!bottomRef.current) return

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin,
      threshold,
    })

    observer.observe(bottomRef.current)
    return () => observer.disconnect()
  }, [observerCallback, rootMargin, threshold])

  return { bottomRef }
}
