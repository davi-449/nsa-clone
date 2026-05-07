import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { EntryCode } from './pages/EntryCode'
import { Maintenance } from './pages/Maintenance'
import { EditPanel } from './pages/EditPanel'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Dashboard /></Layout>} />
      <Route path="/codigo-entrada" element={<Layout><EntryCode /></Layout>} />
      <Route path="/manutencao" element={<Layout><Maintenance /></Layout>} />
      <Route path="/editar" element={<Layout><EditPanel /></Layout>} />
    </Routes>
  )
}

export default App
