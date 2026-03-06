import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aro-foundation.vercel.app',
      lastModified: new Date(),
    },
  ]
}