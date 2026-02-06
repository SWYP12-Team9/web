import Image from 'next/image'

export function EmptyLinks({ isSearchMode }: { isSearchMode: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-20">
      <Image
        src={isSearchMode ? '/images/empty-link.png' : '/images/paper.png'}
        alt="paper"
        width={isSearchMode ? 92 : 57}
        height={71}
      />
      <span className="text-body-1 text-gray-default">
        {isSearchMode ? '찾는 링크가 없어요.' : '저장한 링크가 없어요.'}
      </span>
    </div>
  )
}
