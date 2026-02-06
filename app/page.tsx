'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, MessageSquare, Copy, Check, type LucideIcon } from 'lucide-react'
import content from '@/data/content.json'

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  MessageSquare,
}

export default function CandidatePage() {
  const [copied, setCopied] = useState(false)
  const s = content.sections as Record<string, string>
  const isPremium = (content.settings as { isPremium: boolean }).isPremium

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(content.contact.bank)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className={`w-full min-h-screen bg-gradient-to-b from-slate-50 to-white text-foreground ${!isPremium ? 'pb-16' : ''}`}>
      {/* Hero Section */}
      <section className="w-full px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
          {/* 프로필 이미지 섹션 */}
          <img
            src={content.profile.image}
            alt={`${content.profile.name} 프로필 사진`}
            className="w-32 h-32 rounded-full border-4 border-blue-100 shadow-lg mx-auto object-cover"
            style={{ minWidth: 128, minHeight: 128 }}
          />

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 text-balance">
              {content.profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              {content.profile.slogan}
            </p>
          </div>

          <Button
            size="lg"
            className="mt-4 h-12 min-h-12 bg-blue-700 hover:bg-blue-800 text-white px-8 text-lg rounded-lg font-bold"
          >
            {s.heroCta}
          </Button>
        </div>
      </section>

      {/* Promises Section */}
      <section className="w-full px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {s.promisesTitle}
            </h2>
            <p className="text-lg text-slate-600">
              {s.promisesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(content.promises as { title: string; description: string; icon: string }[]).map((promise) => {
              const IconComponent = ICON_MAP[promise.icon] ?? Heart
              return (
                <Card
                  key={promise.title}
                  className="p-6 bg-white shadow-md border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-slate-600">
                    {promise.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {s.aboutTitle}
          </h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>{content.profile.description}</p>
            <p>{s.aboutParagraph2}</p>
            <p>{s.aboutParagraph3}</p>
          </div>
          <button className="mt-6 h-12 min-h-12 px-4 text-blue-700 hover:text-blue-800 font-bold flex items-center gap-2">
            {s.aboutReadMore}
          </button>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section className="w-full px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            {s.supportTitle}
          </h2>

          <Card className="p-8 mb-8 bg-white shadow-md border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {s.donationTitle}
            </h3>
            <p className="text-slate-600 mb-6">
              {s.donationDescription}
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-mono text-lg font-bold text-slate-900">
                  {content.contact.bank}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyAccount}
                  className="flex items-center gap-2 bg-white h-12 min-h-12 border-slate-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      {s.copiedButton}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {s.copyButton}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href={`sms:${content.contact.phone}`}>
              <Button className="w-full h-12 min-h-12 bg-blue-700 hover:bg-blue-800 text-white text-base rounded-lg font-bold">
                <MessageSquare className="w-5 h-5 mr-2" />
                {s.smsButton}
              </Button>
            </a>
            <a href={content.contact.link} target="_blank" rel="noreferrer">
              <Button className="w-full h-12 min-h-12 bg-blue-700 hover:bg-blue-800 text-white text-base rounded-lg font-bold">
                <Heart className="w-5 h-5 mr-2" />
                {s.onlineButton}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 py-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-slate-300">
            {(s.footerCopyright as string).replace('{name}', content.profile.name)}
          </p>
        </div>
      </footer>

      {/* Sticky Banner (Freemium) - only when isPremium is false */}
      {!isPremium && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-slate-900 text-white text-center font-bold text-base shadow-lg h-12 min-h-12 flex items-center justify-center"
          role="banner"
        >
          <a
            href="#"
            className="block w-full py-3 touch-manipulation"
            aria-label={s.stickyBanner}
          >
            {s.stickyBanner}
          </a>
        </div>
      )}
    </main>
  )
}
