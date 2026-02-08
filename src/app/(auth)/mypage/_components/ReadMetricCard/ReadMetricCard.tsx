interface ReadMetricCardProps {
  label: string
  percent: number
  count: number
  variant: 'read' | 'unread'
}

export function ReadMetricCard({
  label,
  percent,
  count,
  variant,
}: ReadMetricCardProps) {
  const isRead = variant === 'read'

  return (
    <div
      className={`rounded-16 p-12 ${
        isRead ? 'bg-blue-normal' : 'bg-blue-light'
      }`}
    >
      <div
        className={`${isRead ? 'text-body-4 text-white' : 'text-caption-2 text-gray-default'}`}
      >
        {label}
      </div>
      <div
        className={`mt-4 h-1 w-full ${isRead ? 'bg-blue-light-active' : 'bg-blue-normal'}`}
      />
      <div className="mt-6 flex items-baseline gap-6">
        <span
          className={`text-heading-3 ${isRead ? 'text-gray-field' : 'text-blue-dark'}`}
        >
          {percent}%
        </span>
        <span
          className={`text-body-4 ${isRead ? 'text-blue-light-active' : 'text-blue-dark'}`}
        >
          {count}개
        </span>
      </div>
    </div>
  )
}
