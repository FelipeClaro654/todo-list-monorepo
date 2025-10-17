import { http, HttpResponse } from 'msw'

import { sleep } from '../src/utils/sleep'

export const handlers = [
  http.get('http://localhost:8080/todos', async () => {
    const data = [
      { name: 'Assistir série', complete: true },
      { name: 'Ler livro', complete: false },
    ]
    await sleep(3000)

    return HttpResponse.json(data)
  }),
]
