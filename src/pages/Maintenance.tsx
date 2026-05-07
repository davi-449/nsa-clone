import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Settings } from 'lucide-react'

export function Maintenance() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] bg-[#e5e5e5]">
      <div className="bg-white p-4 shadow-sm flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold">Aviso</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          <Settings className="w-12 h-12 text-gray-500 animate-spin-slow" style={{ animationDuration: '3s' }} />
        </div>
        
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">Em Manutenção</h2>
          <p className="text-gray-600 leading-relaxed">
            Esta funcionalidade está temporariamente indisponível para atualizações de sistema.
          </p>
        </div>

        <div className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm w-full">
          <p className="font-semibold text-gray-800">Previsão de Retorno:</p>
          <p className="text-lg font-bold text-blue-600 mt-1">Em 5 horas</p>
        </div>
        
        <button 
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-3 bg-[#414141] text-white font-medium rounded-lg shadow hover:bg-[#333333] transition-colors"
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  )
}
