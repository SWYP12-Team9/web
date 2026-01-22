import './globals.css'
import MSWProvider from './MSWProvider'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <MSWProvider />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
