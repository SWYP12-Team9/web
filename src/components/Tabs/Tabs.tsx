'use client'

import { cn } from '@/src/utils/cn'
import { TabItem } from './TabItem'
import { Tab, TabVariant } from './types'

export interface TabsProps {
  tabs?: Tab[]
  selectedTab: Tab | null
  onChange: (tab: Tab) => void
  className?: string
  variant?: TabVariant
}

export function Tabs({
  tabs = [],
  selectedTab,
  onChange,
  className = '',
}: TabsProps) {
  const allTab: Tab = { id: 'all', title: '전체' }

  const tabList = [allTab, ...tabs]

  return (
    <div
      className={cn('scrollbar-hide flex gap-10 overflow-x-auto', className)}
      role="tablist"
    >
      {tabList.map((tab) => {
        const isSelected = tab.id === selectedTab?.id

        return (
          <TabItem
            key={tab.id}
            tab={tab}
            isSelected={isSelected}
            onChange={onChange}
          />
        )
      })}
    </div>
  )
}
