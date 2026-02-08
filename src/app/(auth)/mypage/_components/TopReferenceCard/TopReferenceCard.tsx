// TopReferencesCard.tsx
import { TopReferencesData } from '@/src/apis/request/requestGetMypageStats'
import { StatCard } from '../StatCard/StatCard'

interface TopReferencesCardProps {
  data: TopReferencesData
}

export function TopReferencesCard({ data }: TopReferencesCardProps) {
  return (
    <StatCard
      title="인기 레퍼런스 순위"
      date={data.date}
      badge="award"
      description={data.text}
    >
      <div className="flex w-full flex-col space-y-8 px-14 py-16">
        {data.references.map((reference) => (
          <div key={reference.id}>
            <div className="flex items-center justify-between">
              <div className="flex min-w-0 flex-1 items-center gap-20">
                {reference.rank <= 3 ? (
                  <span
                    className="rounded-4 text-body-3 flex h-20 w-20 flex-shrink-0 items-center justify-center text-white"
                    style={{
                      background:
                        'linear-gradient(180deg, #9295F3 0%, #6064DE 100%)',
                    }}
                  >
                    {reference.rank}
                  </span>
                ) : (
                  <span className="text-body-3 text-blud-normal-default flex h-20 w-20 flex-shrink-0 items-center justify-center font-semibold">
                    {reference.rank}
                  </span>
                )}
                <div
                  className="rounded-2 h-12 w-12 flex-shrink-0"
                  style={{ backgroundColor: reference.colorCode }}
                />
                <span
                  className={`${reference.rank <= 3 ? 'text-body-2' : 'text-body-4'} text-gray-default truncate`}
                >
                  {reference.title}
                </span>
              </div>
              <span
                className={`${reference.rank <= 3 ? 'text-body-3' : 'text-body-4'} text-blue-dark ml-8 flex-shrink-0 font-semibold`}
              >
                {reference.linkCount}
              </span>
            </div>
            {reference.rank === 3 && <div className="mt-12 h-1 bg-black/10" />}
          </div>
        ))}
      </div>
    </StatCard>
  )
}
