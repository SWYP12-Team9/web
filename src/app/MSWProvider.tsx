'use client'

import { useState, useEffect, ReactNode } from 'react'

export default function MSWProvider({ children }: { children: ReactNode }) {
  const [isMockingReady, setMockingReady] = useState(false)

  useEffect(() => {
    const init = async () => {
      if (
        process.env.NODE_ENV === 'development' &&
        typeof window !== 'undefined'
      ) {
        const { worker } = await import('../mocks/browser')
        await worker.start({
          onUnhandledRequest: 'bypass',
        })
      }
      setMockingReady(true)
    }

    init()
  }, [])

  return isMockingReady ? children : null
}
