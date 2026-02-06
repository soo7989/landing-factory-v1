import type { Metadata } from 'next'
import content from '@/data/content.json'
import CandidatePageContent from './candidate-page-content'

function getDescription(desc: string) {
  if (desc.length <= 100) return desc
  return desc.slice(0, 100) + '...'
}

export async function generateMetadata(): Promise<Metadata> {
  const profile = content.profile as { name: string; slogan: string; description: string; image: string }
  const settings = content.settings as { siteUrl?: string }
  const siteUrl = settings.siteUrl ?? ''
  const title = `${profile.name} - ${profile.slogan}`
  const description = getDescription(profile.description)
  const imageUrl = profile.image ? `${siteUrl}${profile.image}` : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'ko_KR',
      ...(imageUrl && { images: [{ url: imageUrl }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  }
}

export default function Page() {
  return <CandidatePageContent />
}
