'use client'

import { useGetLinkList } from '@/src/apis/query/link/useGetLinkList'
import { useGetReferenceList } from '@/src/apis/query/reference/useGetReferenceList'
import { Input } from '@/src/components/Input'
import { MyLinkCard } from '@/src/components/LinkCard'
import { Tab, Tabs } from '@/src/components/Tabs'
import { ALL_TAB } from '@/src/constants/defaultTap'
import { useSaveLinkModalStore } from '@/src/store/saveLinkModalStore'
import { LinkItem } from '@/src/types/link/link'
import { ReferenceItem } from '@/src/types/reference/reference'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(ALL_TAB)
  const [url, setUrl] = useState('')

  const openSaveLinkModal = useSaveLinkModalStore((state) => state.open)

  const { data: linkListData, isLoading: isLinkListLoading } = useGetLinkList(
    selectedTab?.id === 'all' ? {} : { referenceId: selectedTab?.id },
  )

  const linkList = linkListData?.data?.contents ?? []

  const { data: referenceList } = useGetReferenceList({ type: 'all' })

  const tabs = referenceList?.data?.contents.map((item: ReferenceItem) => ({
    id: item.id,
    title: item.title,
  }))

  const handleTabChange = (tab: Tab) => {
    setSelectedTab(tab)
  }

  return (
    <div>
      <h1 className="text-display-2 text-gray-default pb-38">
        Save Links.
        <br />
        Use them again.
      </h1>

      <div className="flex flex-col gap-25 pb-35">
        <div className="relative">
          <Input
            className="rounded-20 text-body-1 px-40"
            height="h-100"
            placeholder="다시 쓰고 싶은 링크를 넣어 보세요"
            onChange={(e) => setUrl(e.target.value)}
          />
          <Image
            src="/icons/share.svg"
            alt="share"
            width={40}
            height={40}
            className="absolute top-1/2 right-40 -translate-y-1/2 cursor-pointer"
            onClick={() => openSaveLinkModal(url)}
          />
        </div>

        <div className="relative">
          <Input
            className="rounded-100 text-body-1 px-40"
            height="h-60"
            placeholder="왜 저장했는지로 검색해 보세요"
          />
          <Image
            src="/icons/search.svg"
            alt="search"
            width={30}
            height={30}
            className="pointer-events-none absolute top-1/2 right-30 -translate-y-1/2"
          />
        </div>
      </div>

      <Tabs
        defaultTap={ALL_TAB}
        tabs={tabs || []}
        selectedTab={selectedTab}
        onChange={handleTabChange}
      />

      {isLinkListLoading ? (
        <div className="pt-35 text-center">Loading...</div>
      ) : !linkList.length ? (
        <div className="flex flex-col items-center justify-center gap-20 pt-80">
          <Image src="/images/paper.png" alt="paper" width={57} height={71} />
          <span className="text-body-1 text-gray-default">
            저장한 링크가 없어요.
          </span>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-30 pt-35">
          <span className="text-24 text-gray-default leading-28 font-semibold">
            내 링크
          </span>
          <div className="flex flex-wrap gap-10">
            {linkList.map((item: LinkItem) => (
              <MyLinkCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
