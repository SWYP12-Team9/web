import { cn } from '@/src/utils/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  width?: string
  height?: string
}

export function Input({
  className,
  width = 'w-full',
  height,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        'rounded-8 placeholder:text-gray-muted bg-gray-field text-gray-default text-caption-1 px-20 py-14',
        width,
        height,
        className,
      )}
      {...props}
    />
  )
}
