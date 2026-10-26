const FPS = 25

const pad = (n: number) => String(n).padStart(2, '0')

/** Segundos → timecode de vídeo HH:MM:SS:FF a 25 fps. */
export function formatTimecode(seconds: number): string {
  const totalFrames = Math.max(0, Math.floor(seconds * FPS))
  const frames = totalFrames % FPS
  const s = Math.floor(totalFrames / FPS)
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(frames)}`
}
