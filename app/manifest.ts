import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Empower Networks Private Limited',
    short_name: 'Empower Networks',
    description:
      'ISO certified global import & export partner specializing in agricultural products, industrial chemicals, and scrap materials.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070710',
    theme_color: '#E31E24',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
