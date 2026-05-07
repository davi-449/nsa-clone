import { useState } from 'react'
import { Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Layout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate()

  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex flex-col font-sans">
      {/* Header */}
      <header className="bg-[#414141] text-white flex items-center h-14 px-4 sticky top-0 z-50 shadow-sm">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="p-1 -ml-1 mr-3 rounded-md hover:bg-white/10 transition-colors"
        >
          <Menu className="w-7 h-7" />
        </button>
        <h1 className="text-[19px] font-semibold tracking-wide">NSA - ALUNO</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto relative pb-8">
        {children}
      </main>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl flex flex-col ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-[#414141] text-white h-32 p-4 flex flex-col justify-end">
          <h2 className="text-xl font-bold">Menu Principal</h2>
          <p className="text-sm text-gray-300 mt-1">Opções do sistema</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          <button
            onClick={() => {
              closeDrawer()
              navigate('/')
            }}
            className="w-full text-left px-6 py-3 hover:bg-gray-100 text-gray-800 font-medium transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => {
              closeDrawer()
              navigate('/manutencao')
            }}
            className="w-full text-left px-6 py-3 hover:bg-gray-100 text-gray-800 font-medium transition-colors"
          >
            Aulas e Faltas
          </button>
          <button
            onClick={() => {
              closeDrawer()
              navigate('/manutencao')
            }}
            className="w-full text-left px-6 py-3 hover:bg-gray-100 text-gray-800 font-medium transition-colors"
          >
            Mensagens
          </button>
          
          <div className="h-px bg-gray-200 my-2" />
          
          <button
            onClick={() => {
              closeDrawer()
              navigate('/editar')
            }}
            className="w-full text-left px-6 py-3 hover:bg-gray-100 text-blue-600 font-bold transition-colors flex items-center justify-between"
          >
            <span>Editar Painel</span>
          </button>
        </nav>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#4a4a4a] text-white text-center py-1.5 text-sm fixed bottom-0 w-full z-30">
        Sistema NSA
      </footer>
    </div>
  )
}
