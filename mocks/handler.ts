import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/home', () => {
    return HttpResponse.json({ ok: true })
  }),
]
