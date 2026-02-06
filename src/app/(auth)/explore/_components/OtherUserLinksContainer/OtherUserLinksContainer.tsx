'use client'

import { OtherLinkCard } from '@/src/components/LinkCard'
import { OtherUserLinkItem } from '@/src/types/recommendations/recommendations'
import { SaveOtherUserLinkModal } from '../SaveOtherUserLinkModal/SaveOtherUserLinkModal'
import { useState } from 'react'

interface OtherUserLinksContainerProps {
  otherUserLinkList: OtherUserLinkItem[]
  isLoading: boolean
}

export function OtherUserLinksContainer({
  otherUserLinkList,
  isLoading,
}: OtherUserLinksContainerProps) {
  const [selectedLink, setSelectedLink] = useState<OtherUserLinkItem | null>(
    null,
  )

  return isLoading ? (
    <div className="text-center">Loading...</div>
  ) : (
    <div className="relative min-h-0">
      <div className="scrollbar-hide h-full overflow-y-auto pb-24">
        <ul className="flex flex-wrap gap-10">
          {otherUserLinkList?.map((item: OtherUserLinkItem) => (
            <li key={item.id} onClick={() => setSelectedLink(item)}>
              <OtherLinkCard data={item} />
            </li>
          ))}
        </ul>
      </div>

      {selectedLink && (
        <div className="absolute top-0 left-0 z-40">
          <SaveOtherUserLinkModal
            data={selectedLink}
            onClose={() => setSelectedLink(null)}
          />
        </div>
      )}
    </div>
  )
}
