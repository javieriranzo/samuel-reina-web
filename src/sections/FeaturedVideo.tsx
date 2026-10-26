import { useState } from 'react'
import { FEATURED_VIDEO } from '@/data/media'
import './FeaturedVideo.css'

/**
 * Vídeo destacado en 2.39:1. El reproductor de YouTube (dominio sin cookies)
 * solo se carga al pulsar, por rendimiento y privacidad.
 */
export function FeaturedVideo() {
  const [playing, setPlaying] = useState(false)
  if (!FEATURED_VIDEO) return null
  const { title, youtubeId } = FEATURED_VIDEO

  return (
    <section className="video" aria-label={`Vídeo: ${title}`}>
      <div className="video__frame">
        {playing ? (
          <iframe
            className="video__player"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className="video__facade" onClick={() => setPlaying(true)}>
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              className="video__poster"
            />
            <span className="video__play" aria-hidden="true">
              ▶
            </span>
            <span className="label video__title">Reproducir: {title}</span>
          </button>
        )}
      </div>
    </section>
  )
}
