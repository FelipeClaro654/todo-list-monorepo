import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ky from 'ky'

import type { TodosList } from './types'

export const todosApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
    fetchFn: async (...args) => ky(...args),
  }),
  endpoints: (builder) => ({
    getTodosList: builder.query<TodosList, void>({
      query: () => `todos`,
    }),
    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  reducerPath: 'todosApi',
})

export const { useGetTodosListQuery } = todosApi
