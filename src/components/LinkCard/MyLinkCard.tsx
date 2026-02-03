import { LinkItem } from '@/src/types/link/link'
import { MyLinkCardFooter } from './LinkCardFooter'
import { MyLinkCardHeader } from './LinkCardHeader'
import { LinkCardLayout } from './LinkCardLayout'

interface MyLinkCardProps {
  data: LinkItem
}

export function MyLinkCard({ data }: MyLinkCardProps) {
  return (
    <LinkCardLayout
      title={data.title}
      aiSummary={data.aiSummary}
      header={
        <MyLinkCardHeader
          title={data.references.title}
          colorCode={data.references.colorCode}
        />
      }
      footer={
        <MyLinkCardFooter
          viewCount={data.viewCount}
          isRead={data.status === 'READ'}
        />
      }
    />
  )
}
