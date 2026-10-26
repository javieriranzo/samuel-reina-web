// localStorage puede no existir o lanzar (modo privado, cookies bloqueadas).

export function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Sin persistencia: la preferencia dura lo que dure la visita.
  }
}
