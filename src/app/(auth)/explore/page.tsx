'use client'

import { useGetCategories } from '@/src/apis/query/recommendation/useGetCategories'
import { ProfileSetup } from './_components/ProfileSetup'
import { Tab, Tabs } from '@/src/components/Tabs'
import { ALL_TAB } from '@/src/constants/defaultTap'
import { useState } from 'react'

export default function ExplorePage() {
  const [selectedTab, setSelectedTab] = useState<Tab>(ALL_TAB)

  const { data: categories } = useGetCategories()

  const tabs = categories?.data.map((category, index) => ({
    id: index,
    title: category,
  }))

  const handleTabChange = (tab: Tab) => {
    setSelectedTab(tab)
  }

  return (
    <main>
      <Tabs
        defaultTap={ALL_TAB}
        tabs={tabs}
        selectedTab={selectedTab}
        onChange={handleTabChange}
      />
      <ProfileSetup />
    </main>
  )
}
