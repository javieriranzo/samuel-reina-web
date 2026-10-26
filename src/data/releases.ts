import type { Release, Track } from '@/types/music'
import cover2016 from '@/assets/images/covers/2016-alarms.jpg'
import cover2019 from '@/assets/images/covers/2019-simulacros-de-naufragio.jpg'
import cover2021 from '@/assets/images/covers/2021-prohibido-hacer-fuego.jpg'
import cover2022 from '@/assets/images/covers/2022-ronda-sud.jpg'
import cover2023 from '@/assets/images/covers/2023-tango-suite-pandiman.jpg'
import cover2026 from '@/assets/images/covers/2026-manual-de-amor-en-modo-oscuro.jpg'

// Datos de Spotify (26/10/2026). Portadas provisionales a 640 px.
// Títulos sin confirmar: ver docs/contenido.md.

export const RELEASES: Release[] = [
  {
    id: 'manual-de-amor-en-modo-oscuro',
    title: 'Manual de amor en modo oscuro',
    titleConfirmed: false,
    year: 2026,
    releaseDate: '2026-02-19',
    cover: cover2026,
    highlightedTracks: [
      { title: 'Bodypump Cofrade', duration: '2:58' },
      { title: 'Autopsia de un like', duration: '2:25' },
    ],
  },
  {
    id: 'tango-suite-pandiman',
    title: 'Tango Suite Pandiman',
    titleConfirmed: false,
    year: 2023,
    releaseDate: '2023-09-01',
    cover: cover2023,
    highlightedTracks: [{ title: 'Tango Suite Pandiman', duration: '4:01' }],
  },
  {
    id: 'ronda-sud',
    title: 'Ronda Sud',
    titleConfirmed: true,
    year: 2022,
    releaseDate: '2022-09-16',
    cover: cover2022,
    highlightedTracks: [{ title: 'No Te Lo Fumes Todo', duration: '3:30' }],
  },
  {
    id: 'prohibido-hacer-fuego',
    title: 'Prohibido hacer fuego',
    titleConfirmed: true,
    year: 2021,
    releaseDate: '2021-02-19',
    cover: cover2021,
    highlightedTracks: [{ title: 'Y Ahí Estás', duration: '3:36' }],
  },
  {
    id: 'simulacros-de-naufragio',
    title: 'Simulacros de naufragio',
    titleConfirmed: false,
    year: 2019,
    releaseDate: '2019-03-21',
    cover: cover2019,
    highlightedTracks: [
      { title: 'Simulacros de Naufragio', duration: '4:34' },
      { title: 'De la Misa la Mitad', duration: '3:45' },
    ],
  },
  {
    id: 'alarms',
    title: 'Alarms',
    titleConfirmed: true,
    year: 2016,
    releaseDate: '2016-02-01',
    cover: cover2016,
    highlightedTracks: [
      { title: 'Lay Down', duration: '3:28' },
      { title: 'What a Night', duration: '4:19' },
    ],
  },
]

export const LATEST_RELEASE = RELEASES[0]

const spotifyTrack = (id: string) => `https://open.spotify.com/intl-es/track/${id}`

/** Lo más escuchado en Spotify (26/10/2026), en orden. */
export const TOP_TRACKS: Track[] = [
  {
    title: 'Bodypump Cofrade',
    duration: '2:58',
    spotifyUrl: spotifyTrack('3hVJ5ozRXLAe61XDTwrMnI'),
  },
  {
    title: 'Simulacros de Naufragio',
    duration: '4:34',
    spotifyUrl: spotifyTrack('5Kaina4I8iu0UOQTOAd8Tu'),
  },
  {
    title: 'No Te Lo Fumes Todo',
    duration: '3:30',
    spotifyUrl: spotifyTrack('1fmIgguxyhMMBsgPKxhpb5'),
  },
  { title: 'Y Ahí Estás', duration: '3:36', spotifyUrl: spotifyTrack('7lPVOV8ixLlInX10d3DeFu') },
  {
    title: 'Reina la Sed',
    duration: '4:03',
    featuring: 'Novembre Elèctric',
    spotifyUrl: spotifyTrack('6oyV22ailEXT3oBSWn1QAx'),
  },
  { title: 'Lay Down', duration: '3:28', spotifyUrl: spotifyTrack('632O68bISaBUbsiMlJ8FBk') },
  {
    title: 'Tango Suite Pandiman',
    duration: '4:01',
    spotifyUrl: spotifyTrack('4pmSGDpwFombMwEPT41Sgm'),
  },
  {
    title: 'De la Misa la Mitad',
    duration: '3:45',
    spotifyUrl: spotifyTrack('0DnASLlCzdwMSN5AypTpSg'),
  },
  { title: 'What a Night', duration: '4:19', spotifyUrl: spotifyTrack('20RKxEd91nMVAFG8cyi35t') },
  {
    title: 'Autopsia de un like',
    duration: '2:25',
    spotifyUrl: spotifyTrack('0ps7F8KhSnALH3ahZpX7HO'),
  },
]
