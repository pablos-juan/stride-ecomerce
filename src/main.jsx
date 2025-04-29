import { FiltersProvider } from './context/filters.jsx'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const root = createRoot(document.getElementById('app'))
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
