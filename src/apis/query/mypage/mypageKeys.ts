export const myPageKeys = {
  all: ['mypage'] as const,
  stats: () => [...myPageKeys.all, 'stats'] as const,
}
