import React from 'react'

import { useGetTodosListQuery } from '@/services/todos'

import Spinner from '../../components/Spinner'

const TodosList: React.FC = () => {
  const { data, error, isLoading } = useGetTodosListQuery()

  if (error)
    return (
      <main className="">
        <p className="">{JSON.stringify(error)}</p>
      </main>
    )

  return (
    <main className="flex h-screen flex-col items-center gap-52 bg-sky-900">
      <header className="text-gray-50">
        <h1 className="font-sans text-5xl">Todos List (React + Vite + RTK)</h1>
      </header>
      {isLoading && <Spinner size="xl" />}
      <section className="flow-root max-w-screen-md">
        <dl className="-my-3 divide-y divide-gray-200 text-sm *:even:bg-gray-50 dark:divide-gray-700 dark:*:even:bg-gray-800">
          {data &&
            data.map((todo) => (
              <div
                key={todo.name}
                className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="font-medium text-gray-900 dark:text-white">
                  {todo.name}
                </dt>

                <dd className="flex justify-end text-gray-700 sm:col-span-2 dark:text-gray-200">
                  <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => console.log('mudar')}
                  />
                </dd>
              </div>
            ))}
        </dl>
      </section>
    </main>
  )
}

export default TodosList
