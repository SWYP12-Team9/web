import { RequestGetOtherUserLinkListParams } from '../../request/requestGetOtherUserLinkList'

export const recommendationKeys = {
  all: ['recommendation'] as const,
  categories: () => [...recommendationKeys.all, 'categories'] as const,

  otherUserLinkLists: () =>
    [...recommendationKeys.all, 'otherUserLinkLists'] as const,
  otherUserLinkList: (params: RequestGetOtherUserLinkListParams) =>
    [
      ...recommendationKeys.otherUserLinkLists(),
      params.category,
      params.size,
    ] as const,
}
