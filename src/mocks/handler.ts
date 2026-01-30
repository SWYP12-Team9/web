import { http, HttpResponse } from 'msw'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const handlers = [
  http.get(`${BASE_URL}/api/home`, () => {
    return HttpResponse.json({ ok: true })
  }),
]
