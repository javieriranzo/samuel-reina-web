import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { SoundContext } from '@/lib/contexts'
import { readStorage, writeStorage } from '@/lib/storage'

const STORAGE_KEY = 'sr:sound'

type Props = { children: ReactNode }

/** Preferencia global de sonido: desactivado por defecto, recordado entre visitas. */
export function SoundProvider({ children }: Props) {
  const [enabled, setEnabled] = useState(() => readStorage(STORAGE_KEY) === 'on')

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      writeStorage(STORAGE_KEY, prev ? 'off' : 'on')
      return !prev
    })
  }, [])

  const value = useMemo(() => ({ enabled, toggle }), [enabled, toggle])

  return <SoundContext value={value}>{children}</SoundContext>
}
