import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'

import TodosList from './features/TodosList'
import { store } from './store'

const App: React.FC = () => (
  <ReduxStoreProvider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodosList />} />
      </Routes>
    </BrowserRouter>
  </ReduxStoreProvider>
)

export default App
