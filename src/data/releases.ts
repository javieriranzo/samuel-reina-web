import type { Collaboration, Release, Track } from '@/types/music'
import cover2016 from '@/assets/images/covers/2016-alarms.jpg'
import cover2019 from '@/assets/images/covers/2019-simulacros-de-naufragio.jpg'
import cover2021 from '@/assets/images/covers/2021-prohibido-hacer-fuego.jpg'
import coverGloria from '@/assets/images/covers/2021-gloria.jpg'
import coverYAhiEstas from '@/assets/images/covers/2021-y-ahi-estas.jpg'
import cover2022 from '@/assets/images/covers/2022-ronda-sud.jpg'
import coverNoTeLoFumes from '@/assets/images/covers/2022-no-te-lo-fumes-todo.jpg'
import coverRondaSudSingle from '@/assets/images/covers/2022-ronda-sud-sencillo.jpg'
import cover2023 from '@/assets/images/covers/2023-tango-suite-pandiman.jpg'
import coverLoQueSoy from '@/assets/images/covers/2025-lo-que-soy-sere.jpg'
import coverPastoral from '@/assets/images/covers/2025-pastoral.jpg'
import cover2026 from '@/assets/images/covers/2026-manual-de-amor-en-modo-oscuro.jpg'
import coverOuigo from '@/assets/images/covers/2026-ouigo-a-la-meca.jpg'
import coverArial from '@/assets/images/covers/2026-tu-nombre-en-arial-14.jpg'

// Datos del perfil de Spotify (28/10/2026). Portadas provisionales a 640 px: ver docs/contenido.md.

const spotifyAlbum = (id: string) => `https://open.spotify.com/intl-es/album/${id}`

/** Discos y sencillos, del más reciente al más antiguo. */
export const RELEASES: Release[] = [
  {
    id: 'ouigo-a-la-meca',
    title: 'Ouigo a La Meca',
    titleConfirmed: true,
    year: 2026,
    format: 'single',
    releaseDate: '2026-05-28',
    cover: coverOuigo,
    highlightedTracks: [{ title: 'Ouigo a La Meca', duration: '3:30' }],
    spotifyUrl: spotifyAlbum('41tsrxa0fsftFCiZ1oDnep'),
  },
  {
    id: 'tu-nombre-en-arial-14',
    title: 'Tu nombre en Arial 14',
    titleConfirmed: true,
    year: 2026,
    format: 'single',
    releaseDate: '2026-04-06',
    cover: coverArial,
    highlightedTracks: [{ title: 'Tu nombre en Arial 14', duration: '3:13' }],
    spotifyUrl: spotifyAlbum('1YYFrW3GiV9O2jchcAsCNY'),
  },
  {
    id: 'manual-de-amor-en-modo-oscuro',
    title: 'Manual de amor en modo oscuro',
    titleConfirmed: true,
    year: 2026,
    format: 'album',
    releaseDate: '2026-02-19',
    cover: cover2026,
    highlightedTracks: [
      { title: 'Bodypump Cofrade', duration: '2:57' },
      { title: 'Autopsia de un like', duration: '2:24' },
    ],
    tracklist: [
      { title: 'Fiesta sorpresa', duration: '3:26' },
      { title: 'Bodypump Cofrade', duration: '2:57' },
      { title: 'El fin del mundo tiene sponsor', duration: '3:06' },
      { title: 'Revelaciones que tuve viendo Rambo', duration: '2:48' },
      { title: 'Sufro, luego scrolleo', duration: '1:32' },
      { title: 'Biometría del desencanto', duration: '4:48' },
      { title: 'Autopsia de un like', duration: '2:24' },
      { title: 'Tus espuelas de oro', duration: '3:15' },
      { title: 'Dámelo crudo', duration: '2:59' },
      { title: 'Pastoral', duration: '2:54' },
      { title: 'Amor en AirDrop', duration: '4:28' },
      { title: 'La deriva de Occidente', duration: '2:50' },
      { title: 'Lo que soy, seré', duration: '2:51' },
      { title: 'Un romance para Dios', duration: '5:04' },
      { title: 'Spotify lloró por mi', duration: '3:03' },
    ],
    spotifyUrl: spotifyAlbum('3RLe9gaygox0rC7ECQGGtN'),
  },
  {
    id: 'lo-que-soy-sere',
    title: 'Lo que soy, seré',
    titleConfirmed: true,
    year: 2025,
    format: 'single',
    releaseDate: '2025-04-30',
    cover: coverLoQueSoy,
    highlightedTracks: [{ title: 'Lo que soy, seré', duration: '2:51' }],
    spotifyUrl: spotifyAlbum('4RI99la7cg2FgfQFloYAxO'),
  },
  {
    id: 'pastoral',
    title: 'Pastoral',
    titleConfirmed: true,
    year: 2025,
    format: 'single',
    releaseDate: '2025-02-12',
    cover: coverPastoral,
    highlightedTracks: [{ title: 'Pastoral', duration: '2:54' }],
    spotifyUrl: spotifyAlbum('2P6VuYTkrJCFEHA2KAMc5r'),
  },
  {
    id: 'tango-suite-pandiman',
    title: 'Tango Suite Pandiman',
    titleConfirmed: true,
    year: 2023,
    format: 'single',
    releaseDate: '2023-09-01',
    cover: cover2023,
    highlightedTracks: [{ title: 'Tango Suite Pandiman', duration: '4:00' }],
    spotifyUrl: spotifyAlbum('3LGigQOlyEMGudD5xzRE7k'),
  },
  {
    id: 'ronda-sud',
    title: 'Ronda Sud',
    titleConfirmed: true,
    year: 2022,
    format: 'album',
    releaseDate: '2022-09-16',
    cover: cover2022,
    highlightedTracks: [{ title: 'No Te Lo Fumes Todo', duration: '3:30' }],
    tracklist: [
      { title: 'Desfase y Burrada Bonita', duration: '2:43' },
      { title: 'No Te Lo Fumes Todo', duration: '3:30' },
      { title: 'Un Ojalá', duration: '2:25' },
      { title: 'Ronda Sud', duration: '3:21' },
      { title: 'Reflexiones de un Economista Audaz', duration: '3:51' },
      { title: 'Error 404', duration: '1:58' },
      { title: 'Dopamine Baby', duration: '4:35' },
      { title: 'Un Poco de Espuma en la Marea', duration: '3:35' },
      { title: 'Historia de un Escándalo', duration: '2:59' },
      { title: 'Telefunken Pal Color', duration: '2:50' },
      { title: 'Dios y Su Saco de Comadrejas', duration: '3:47' },
      { title: 'Junta las Piezas', duration: '3:52' },
      { title: 'San Juan', duration: '3:03' },
    ],
    spotifyUrl: spotifyAlbum('34M3gTYJu3snOF2kDUsmuW'),
  },
  {
    id: 'no-te-lo-fumes-todo',
    title: 'No Te Lo Fumes Todo',
    titleConfirmed: true,
    year: 2022,
    format: 'single',
    releaseDate: '2022-06-24',
    cover: coverNoTeLoFumes,
    highlightedTracks: [{ title: 'No Te Lo Fumes Todo', duration: '3:30' }],
    spotifyUrl: spotifyAlbum('0nWHpwnjyBx9oDekK69DLx'),
  },
  {
    id: 'ronda-sud-sencillo',
    title: 'Ronda Sud',
    titleConfirmed: true,
    year: 2022,
    format: 'single',
    releaseDate: '2022-06-17',
    cover: coverRondaSudSingle,
    highlightedTracks: [{ title: 'Ronda Sud', duration: '3:21' }],
    spotifyUrl: spotifyAlbum('5kDpyiN2nTgNVQxHcHgqly'),
  },
  {
    id: 'prohibido-hacer-fuego',
    title: 'Prohibido hacer fuego',
    titleConfirmed: true,
    year: 2021,
    format: 'album',
    releaseDate: '2021-02-19',
    cover: cover2021,
    highlightedTracks: [{ title: 'Y Ahí Estás', duration: '3:36' }],
    tracklist: [
      { title: 'Klaus Kinski', duration: '2:00' },
      { title: 'El Techno de los Frágiles', duration: '3:28' },
      { title: 'Gloria', duration: '3:32' },
      { title: 'Pa Siempre Es Mi Corona', duration: '2:28' },
      { title: 'Réquiem para Algún Colega', duration: '2:54' },
      { title: 'Pasarse el Sekiro', duration: '2:26' },
      { title: 'Mientras España Me Olvida', duration: '2:14' },
      { title: 'Y Ahí Estás', duration: '3:36' },
      { title: 'Niño de Cristal', duration: '2:54' },
      { title: 'Querido Google', duration: '1:56' },
      { title: 'Todas Tus Sombras', duration: '3:20' },
      { title: 'Agradecimientos', duration: '3:28' },
    ],
    spotifyUrl: spotifyAlbum('4xt6TTcKsYwZKDRJWOnYIQ'),
  },
  {
    id: 'gloria',
    title: 'Gloria',
    titleConfirmed: true,
    year: 2021,
    format: 'single',
    releaseDate: '2021-01-15',
    cover: coverGloria,
    highlightedTracks: [{ title: 'Gloria', duration: '3:32' }],
    spotifyUrl: spotifyAlbum('4xSLusbqMlYTW9Oq5qy59Q'),
  },
  {
    id: 'y-ahi-estas',
    title: 'Y Ahí Estás',
    titleConfirmed: true,
    year: 2021,
    format: 'single',
    releaseDate: '2021-01-08',
    cover: coverYAhiEstas,
    highlightedTracks: [{ title: 'Y Ahí Estás', duration: '3:36' }],
    spotifyUrl: spotifyAlbum('1yDq8lDdeVnleCnu0ip5ak'),
  },
  {
    id: 'simulacros-de-naufragio',
    title: 'Simulacros de naufragio',
    titleConfirmed: true,
    year: 2019,
    format: 'album',
    releaseDate: '2019-03-21',
    cover: cover2019,
    highlightedTracks: [
      { title: 'Simulacros de Naufragio', duration: '4:33' },
      { title: 'De la Misa la Mitad', duration: '3:44' },
    ],
    tracklist: [
      { title: 'Tiembla', duration: '3:55' },
      { title: 'Simulacros de Naufragio', duration: '4:33' },
      { title: 'Túmbate', duration: '3:33' },
      { title: 'Diazepam', duration: '4:03' },
      { title: 'Extenuación', duration: '3:56' },
      { title: 'De la Misa la Mitad', duration: '3:44' },
      { title: 'Herida de Espejos', duration: '3:12' },
      { title: 'Odio y Amor', duration: '3:12' },
      { title: 'Qué Quedará', duration: '3:31' },
      { title: 'Verbo Errante', duration: '4:16' },
      { title: 'Nuestra Hambre', duration: '7:30' },
    ],
    spotifyUrl: spotifyAlbum('5W1Jl0wEzE6FD31PoNyK38'),
  },
  {
    id: 'alarms',
    title: 'Alarms',
    titleConfirmed: true,
    year: 2016,
    format: 'album',
    releaseDate: '2016-02-01',
    cover: cover2016,
    highlightedTracks: [
      { title: 'Lay Down', duration: '3:27' },
      { title: 'What a Night', duration: '4:19' },
    ],
    tracklist: [
      { title: 'Alarms', duration: '4:06' },
      { title: 'What a Night', duration: '4:19' },
      { title: 'Lay Down', duration: '3:27' },
      { title: "She's Fantasy", duration: '4:09' },
      { title: 'Under Your Pillow', duration: '4:48' },
      { title: 'Piece of Wonder', duration: '4:50' },
      { title: 'Woman Behind Your Eyes', duration: '3:15' },
      { title: 'Old Friend', duration: '3:22' },
      { title: 'Whispering', duration: '3:31' },
      { title: 'Al Volar', duration: '2:46' },
      { title: 'Ghosts', duration: '4:13' },
    ],
    spotifyUrl: spotifyAlbum('6mUxRB62TgqLKNdEbGispa'),
  },
]

export const ALBUMS = RELEASES.filter((r) => r.format === 'album')
export const SINGLES = RELEASES.filter((r) => r.format === 'single')

/** Lo último publicado, sea disco o sencillo */
export const LATEST_RELEASE = RELEASES[0]

/** Lanzamientos de otros artistas en los que participa Samuel, del más reciente al más antiguo. */
export const COLLABORATIONS: Collaboration[] = [
  {
    id: 'tarongers',
    title: 'Tarongers (deu anys en un dia)',
    artist: 'Novembre Elèctric',
    kind: 'Álbum',
    releaseDate: '2025-02-07',
    tracks: ['Reina la sed', 'La Sed (Queda Prohibido)'],
    spotifyUrl: spotifyAlbum('4sO06CLRgpUWXFZswQuQlL'),
  },
  {
    id: 'homenaje-doctor-divago',
    title: 'Una Vida Es Demasiado Poco... Homenaje a Doctor Divago',
    artist: 'Varios artistas',
    kind: 'Recopilatorio',
    releaseDate: '2024-11-30',
    tracks: ['Sonaba Julio Galcerá'],
    spotifyUrl: spotifyAlbum('634QZRLzaKnOf1q1WdLN84'),
  },
  {
    id: 'reina-la-sed',
    title: 'Reina la sed',
    artist: 'Novembre Elèctric',
    kind: 'Sencillo',
    releaseDate: '2024-05-23',
    tracks: ['Reina la sed'],
    spotifyUrl: spotifyAlbum('7K6guboywjWHQca5oKByBn'),
  },
  {
    id: 'la-sed-queda-prohibido',
    title: 'La Sed (Queda Prohibido)',
    artist: 'Novembre Elèctric',
    kind: 'Sencillo',
    releaseDate: '2024-02-02',
    tracks: ['La Sed (Queda Prohibido)'],
    spotifyUrl: spotifyAlbum('78bjlX8dquxli44phqTdY2'),
  },
]

const spotifyTrack = (id: string) => `https://open.spotify.com/intl-es/track/${id}`

/** Lo más escuchado en Spotify (28/10/2026), en orden. */
export const TOP_TRACKS: Track[] = [
  {
    title: 'Bodypump Cofrade',
    duration: '2:57',
    spotifyUrl: spotifyTrack('3hVJ5ozRXLAe61XDTwrMnI'),
  },
  {
    title: 'Simulacros de Naufragio',
    duration: '4:33',
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
  { title: 'Lay Down', duration: '3:27', spotifyUrl: spotifyTrack('632O68bISaBUbsiMlJ8FBk') },
  {
    title: 'Tango Suite Pandiman',
    duration: '4:00',
    spotifyUrl: spotifyTrack('4pmSGDpwFombMwEPT41Sgm'),
  },
  {
    title: 'De la Misa la Mitad',
    duration: '3:44',
    spotifyUrl: spotifyTrack('0DnASLlCzdwMSN5AypTpSg'),
  },
  { title: 'What a Night', duration: '4:19', spotifyUrl: spotifyTrack('20RKxEd91nMVAFG8cyi35t') },
  {
    title: 'Autopsia de un like',
    duration: '2:24',
    spotifyUrl: spotifyTrack('0ps7F8KhSnALH3ahZpX7HO'),
  },
]
