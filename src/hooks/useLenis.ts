import { useContext } from 'react'
import { LenisContext } from '@/lib/contexts'

/** Instancia de Lenis, o null con movimiento reducido (scroll nativo). */
export function useLenis() {
  return useContext(LenisContext)
}
