import { cn } from '@/src/utils/cn'

export function Field({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-12', className)}>
      <label className="text-body-1 text-gray-default ml-2 shrink-0">
        {label}
      </label>
      {children}
    </div>
  )
}
