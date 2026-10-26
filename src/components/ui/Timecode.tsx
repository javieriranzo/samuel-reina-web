import { formatTimecode } from '@/lib/timecode'

type Props = {
  seconds: number
  prefix?: string
  className?: string
}

export function Timecode({ seconds, prefix = 'TC', className = '' }: Props) {
  return (
    <span className={`label ${className}`}>
      {prefix} {formatTimecode(seconds)}
    </span>
  )
}
