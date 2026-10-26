import { AudioButton } from '@/components/ui/AudioButton'
import { Timecode } from '@/components/ui/Timecode'
import { usePlayer, usePlayerTime } from '@/hooks/usePlayer'
import type { DubbingCredit } from '@/types/career'

type Props = { credit: DubbingCredit; clip: string }

/** Fragmento del demo reel de un crédito: botón REC y timecode en marcha mientras suena. */
export function CreditClip({ credit, clip }: Props) {
  const { current } = usePlayer()
  const { currentTime } = usePlayerTime()
  const item = {
    id: `credit:${credit.production}:${credit.character}`,
    title: `${credit.character} — ${credit.production}`,
    src: clip,
  }
  const isCurrent = current?.id === item.id

  return (
    <span className="credits__clip">
      <AudioButton item={item} variant="rec" size="sm" />
      <Timecode seconds={isCurrent ? currentTime : (credit.clipSeconds ?? 0)} prefix="TC" />
    </span>
  )
}
