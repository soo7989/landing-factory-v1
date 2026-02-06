'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, MessageSquare, Copy, Check } from 'lucide-react'
import content from '@/data/content.json'

export default function CandidatePage() {
  const [copied, setCopied] = useState(false)

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(content.contact.bank)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full px-4 py-12 md:py-20 bg-gradient-to-b from-slate-50 to-background">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
          {/* Profile Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary overflow-hidden flex items-center justify-center border-4 border-secondary">
            {content.profile.image ? (
              // 배경 이미지 대신 이니셜/텍스트를 사용 (Next Image 없이)
              <span className="text-white text-4xl md:text-5xl font-bold">
                {content.profile.name.charAt(0)}
              </span>
            ) : (
              <span className="text-white text-4xl md:text-5xl font-bold">
                {content.profile.name.charAt(0)}
              </span>
            )}
          </div>

          {/* Name and Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 text-balance">
              {content.profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {content.profile.slogan}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="mt-4 bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg rounded-lg font-semibold"
          >
            약속 살펴보기
          </Button>
        </div>
      </section>

      {/* Our Vision - Promises Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              우리의 약속
            </h2>
            <p className="text-lg text-muted-foreground">
              우리 동네를 위해 꼭 지킬 세 가지 약속입니다.
            </p>
          </div>

          {/* Promise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="p-6 border border-border hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                우리 동네 우선
              </h3>
              <p className="text-muted-foreground">
                동네 현안을 가장 먼저 챙기고, 생활이 바로 좋아지는 정책부터 실행하겠습니다.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-6 border border-border hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                언제든 소통
              </h3>
              <p className="text-muted-foreground">
                24시간 열려 있는 연락처로 언제든지 의견을 듣고, 빠르게 답하겠습니다.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-6 border border-border hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                일자리와 상권
              </h3>
              <p className="text-muted-foreground">
                우리 동네 소상공인과 청년을 위한 일자리·상권 활성화 정책을 집중 지원하겠습니다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            후보 소개
          </h2>
          <div className="space-y-4 text-lg text-foreground leading-relaxed">
            <p>{content.profile.description}</p>
            <p>
              후보의 약속과 정책은 모두 우리 동네 주민 한 분 한 분의 목소리에서
              출발합니다. 작은 불편부터 큰 변화까지, 직접 듣고 바로 움직이겠습니다.
            </p>
            <p>
              동네 구석구석을 매일같이 발로 뛰며, 생활 정치가 무엇인지 보여드리겠습니다.
            </p>
          </div>
          <button className="mt-6 text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2">
            자세히 보기 →
          </button>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section className="w-full px-4 py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            후원 & 연락
          </h2>

          {/* Donation Card */}
          <Card className="p-8 mb-8 border border-border bg-slate-50">
            <h3 className="text-2xl font-bold text-primary mb-2">후원 계좌</h3>
            <p className="text-muted-foreground mb-6">
              작은 힘이 모여 큰 변화를 만듭니다. 한 분 한 분의 응원이 더 나은 동네를
              만들 힘이 됩니다.
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
                  className="flex items-center gap-2 bg-transparent"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      복사됨
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      복사하기
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href={`sms:${content.contact.phone}`}>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-base rounded-lg font-semibold">
                <MessageSquare className="w-5 h-5 mr-2" />
                문자로 응원 보내기
              </Button>
            </a>
            <a href={content.contact.link} target="_blank" rel="noreferrer">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base rounded-lg font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                온라인으로 참여하기
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 py-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">
            © 2025 {content.profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
