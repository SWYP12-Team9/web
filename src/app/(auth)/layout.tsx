import { Sidebar } from '@/src/components/Sidebar'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-blue-light flex min-h-screen">
      <Sidebar isExpanded={true} />

      <main className="relative min-w-0 flex-1 pt-20">
        <div className="rounded-tl-20 min-h-full bg-white">{children}</div>
      </main>
    </div>
  )
}
