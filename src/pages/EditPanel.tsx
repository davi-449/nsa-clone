import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save } from 'lucide-react'
import { useStore, type StudentData } from '../store/useStore'

export function EditPanel() {
  const navigate = useNavigate()
  const { data, updateData } = useStore()
  const [formData, setFormData] = useState<StudentData>(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    updateData(formData)
    navigate('/')
  }

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] bg-[#e5e5e5]">
      <div className="bg-white p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-bold">Editar Dados</h2>
        </div>
        <button 
          onClick={handleSave}
          className="bg-blue-600 text-white p-2 px-4 flex items-center gap-2 rounded-md font-medium text-sm hover:bg-blue-700"
        >
          <Save className="w-4 h-4" />
          Salvar
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 space-y-4">
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Habilitação</label>
            <input 
              name="habilitacao"
              value={formData.habilitacao}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">RM</label>
              <input 
                name="rm"
                value={formData.rm}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 text-sm focus:border-blue-500 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Ano OC</label>
              <input 
                name="ano_oc"
                value={formData.ano_oc}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 text-sm focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Semestre OC</label>
            <input 
              name="semestre_oc"
              value={formData.semestre_oc}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Módulo/Série Atual</label>
            <input 
              name="modulo_atual"
              value={formData.modulo_atual}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Turma</label>
            <input 
              name="turma"
              value={formData.turma}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Grupo do Componente</label>
            <input 
              name="grupo_componente"
              value={formData.grupo_componente}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Situação da Matrícula</label>
            <input 
              name="situacao_matricula"
              value={formData.situacao_matricula}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Data da Situação</label>
            <input 
              name="data_situacao"
              value={formData.data_situacao}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-sm focus:border-blue-500 outline-none"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
