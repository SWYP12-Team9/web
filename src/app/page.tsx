'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/src/utils/cn'
import { Button } from '@/src/components/ui/button'

export default function LandingPage() {
  const handleLogin = (provider: string) => {
    // Check if window is defined (client-side) to avoid SSR errors, though 'use client' handles this.
    if (typeof window !== 'undefined') {
      const targetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/${provider}`
      window.location.assign(targetUrl)
    }
  }

  const loginProviders = [
    {
      name: 'kakao',
      bgColor: 'bg-[#FEE500]',
      icon: '/icons/kakao.svg',
      size: 'h-40 w-40', // Slightly tweaked for header size if needed
      imageSize: 'h-40 w-40',
      padding: '',
    },
    {
      name: 'naver',
      bgColor: 'bg-[#03C75A]',
      icon: '/icons/naver.svg',
      size: 'h-40 w-40',
      imageSize: 'h-20 w-20',
      padding: 'p-[1px]',
    },
    {
      name: 'google',
      bgColor: 'bg-[#EEEEEE]',
      icon: '/icons/google.svg',
      size: 'h-40 w-40',
      imageSize: 'h-22 w-22',
      padding: 'p-[1px]',
    },
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-[#050505]">
      {/* Background Glow/Grid Effects could be added here if needed */}

      {/* Floating Header */}
      <nav className="fixed top-24 left-1/2 z-50 flex h-72 w-[calc(100%-48px)] max-w-[1240px] -translate-x-1/2 items-center justify-between rounded-full bg-white px-12 shadow-lg sm:px-24">
        {/* Left Section */}
        <div className="flex items-center gap-16 sm:gap-32">
          {/* Logo */}
          <Link href="/" className="relative h-70 w-130 min-w-[120px]">
            <Image
              src="/images/logo-keepit.png"
              alt="Keepit"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Nav Items - Hidden on mobile, visible on desktop could be better, but image shows them */}
          <div className="hidden items-center gap-48 md:flex">
            <Link href="/explore?login=true">
              <Button className="h-36 rounded-full bg-[#6B4BFB] px-20 text-[18px] font-bold text-white hover:bg-[#5a3de0]">
                탐색
              </Button>
            </Link>
            <Link
              href="#"
              className="text-[18px] font-medium text-[#4D4D4D] hover:text-black"
            >
              공지사항
            </Link>
            <Link
              href="#"
              className="text-[18px] font-medium text-[#4D4D4D] hover:text-black"
            >
              문의하기
            </Link>
            <Link
              href="#"
              className="text-[18px] font-medium text-[#4D4D4D] hover:text-black"
            >
              약관
            </Link>
          </div>
        </div>

        {/* Right Section - Social Login */}
        <div className="flex items-center gap-12 sm:gap-16">
          <span className="hidden text-[18px] font-medium text-[#4D4D4D] sm:block">
            간편 로그인
          </span>
          <div className="hidden h-16 w-[1px] bg-[#E5E5E5] sm:block" />

          <div className="flex gap-8">
            {loginProviders.map((social) => (
              <button
                key={social.name}
                onClick={() => handleLogin(social.name)}
                className={cn(
                  'flex items-center justify-center overflow-hidden rounded-full transition-transform active:scale-[0.92]',
                  social.size,
                  social.bgColor,
                )}
                aria-label={`${social.name} login`}
              >
                <div className={cn('relative', social.imageSize)}>
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className={cn('object-contain', social.padding)}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-4 pt-[120px] text-center">
        {/* Hero Logo & Slogan */}
        <div className="animate-fade-in-up z-10 mb-8 flex flex-col items-center">
          {/* Large Logo */}
          <div className="relative mb-6 h-[80px] w-[220px] sm:h-[100px] sm:w-[280px]">
            <Image
              src="/images/logo-keepit.png"
              alt="Keepit Logo"
              fill
              className="object-contain brightness-0 invert" // Make logo white for dark mode if needed, assuming the original is colored/dark
              priority
            />
          </div>

          {/* Slogan */}
          <h1 className="text-[18px] font-medium text-white/80 sm:text-[24px]">
            흩어진 링크를 모아, 한눈에 펼쳐보는 나만의 시각적 캔버스
          </h1>
        </div>

        {/* Main Visual - landing.svg */}
        <div className="relative -mt-10 w-full max-w-[1200px]">
          <Image
            src="/icons/landing.svg"
            alt="Keepit Dashboard Visual"
            width={1200}
            height={800}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 animate-bounce">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-50"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </main>
    </div>
  )
}
