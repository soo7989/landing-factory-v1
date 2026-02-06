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
    <main className={`w-full min-h-screen bg-background text-foreground ${!isPremium ? 'pb-16' : ''}`}>
      {/* Hero Section */}
      <section className="w-full px-4 py-12 md:py-20 bg-gradient-to-b from-slate-50 to-background">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary overflow-hidden flex items-center justify-center border-4 border-secondary">
            <span className="text-white text-4xl md:text-5xl font-bold">
              {content.profile.name.charAt(0)}
            </span>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 text-balance">
              {content.profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {content.profile.slogan}
            </p>
          </div>

          <Button
            size="lg"
            className="mt-4 bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg rounded-lg font-semibold min-h-[48px]"
          >
            {s.heroCta}
          </Button>
        </div>
      </section>

      {/* Promises Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {s.promisesTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {s.promisesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(content.promises as { title: string; description: string; icon: string }[]).map((promise) => {
              const IconComponent = ICON_MAP[promise.icon] ?? Heart
              return (
                <Card
                  key={promise.title}
                  className="p-6 border border-border hover:border-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {promise.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {s.aboutTitle}
          </h2>
          <div className="space-y-4 text-lg text-foreground leading-relaxed">
            <p>{content.profile.description}</p>
            <p>{s.aboutParagraph2}</p>
            <p>{s.aboutParagraph3}</p>
          </div>
          <button className="mt-6 text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2 min-h-[48px]">
            {s.aboutReadMore}
          </button>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            {s.supportTitle}
          </h2>

          <Card className="p-8 mb-8 border border-border bg-slate-50">
            <h3 className="text-2xl font-bold text-primary mb-2">
              {s.donationTitle}
            </h3>
            <p className="text-muted-foreground mb-6">
              {s.donationDescription}
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-border">
                <span className="font-mono text-lg font-semibold text-primary">
                  {content.contact.bank}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyAccount}
                  className="flex items-center gap-2 bg-transparent min-h-[48px]"
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
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-base rounded-lg font-semibold min-h-[48px]">
                <MessageSquare className="w-5 h-5 mr-2" />
                {s.smsButton}
              </Button>
            </a>
            <a href={content.contact.link} target="_blank" rel="noreferrer">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base rounded-lg font-semibold min-h-[48px]">
                <Heart className="w-5 h-5 mr-2" />
                {s.onlineButton}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 py-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">
            {(s.footerCopyright as string).replace('{name}', content.profile.name)}
          </p>
        </div>
      </footer>

      {/* Sticky Banner (Freemium) - only when isPremium is false */}
      {!isPremium && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-primary text-primary-foreground text-center font-semibold text-base shadow-lg min-h-[48px] flex items-center justify-center"
          role="banner"
        >
          <a
            href="#"
            className="block w-full py-2 touch-manipulation"
            aria-label={s.stickyBanner}
          >
            {s.stickyBanner}
          </a>
        </div>
      )}
    </main>
  )
}
