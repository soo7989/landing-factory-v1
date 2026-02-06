'use client'

import { Button } from '@/components/ui/button'
import { Share2 } from 'lucide-react'

type ShareButtonProps = {
  title?: string
  text?: string
}

export function ShareButton({ title, text }: ShareButtonProps) {
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const shareTitle = title ?? (typeof document !== 'undefined' ? document.title : '')
    const shareText = text ?? ''

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url,
        })
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyUrlAndAlert(url)
        }
      }
    } else {
      copyUrlAndAlert(url)
    }
  }

  const copyUrlAndAlert = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      window.alert('주소가 복사되었습니다.')
    })
  }

  return (
    <Button
      type="button"
      onClick={handleShare}
      className="w-full h-14 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg"
    >
      <Share2 className="w-5 h-5 mr-2" />
      친구들에게 알리기
    </Button>
  )
}
