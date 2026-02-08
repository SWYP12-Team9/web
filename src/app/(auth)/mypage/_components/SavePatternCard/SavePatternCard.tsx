'use client'

import { SavePatternData } from '@/src/apis/request/requestGetMypageStats'
import { StatCard } from '../StatCard/StatCard'

interface SavePatternCardProps {
  data: SavePatternData
}

export function SavePatternCard({ data }: SavePatternCardProps) {
  const maxCount = Math.max(...data.counts.map((c) => c.linkCount))

  return (
    <StatCard title="링크 저장 패턴" date={data.period} description={data.text}>
      <div className="flex h-full items-end justify-between gap-10 pt-20">
        {data.counts.map((item) => {
          const heightPercent =
            maxCount > 0 ? (item.linkCount / maxCount) * 100 : 0
          const isPeak = item.day === data.peakDay

          return (
            <div key={item.day} className="flex flex-col items-center gap-12">
              <div className="relative h-120 w-32">
                <div className="rounded-12 bg-blue-light absolute inset-0" />
                <div
                  className={`rounded-12 absolute right-0 bottom-0 left-0 transition-all duration-300 ${
                    isPeak ? 'bg-blue-normal' : 'bg-[#A7AAFB]'
                  }`}
                  style={{
                    height: `${heightPercent}%`,
                    border: isPeak ? '1px solid #565AC8' : 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div
                className={`rounded-12 bg-gray-box flex w-32 flex-col items-center justify-center px-8 py-4 ${isPeak ? 'border border-[#565AC8]' : 'border-none'}`}
              >
                <div className="text-body-3 text-gray-default text-center font-medium">
                  {item.day}
                </div>
                <div className="text-body-4 text-gray-disabled text-center whitespace-nowrap">
                  {item.linkCount}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </StatCard>
  )
}
