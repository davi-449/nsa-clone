import { useStore } from '../store/useStore'
import { useNavigate } from 'react-router-dom'
import { Camera, Calendar, Mail, FileText, Image, LayoutDashboard, LogIn } from 'lucide-react'
import { useRef } from 'react'

export function Dashboard() {
  const { data, setPhoto } = useStore()
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const navItems = [
    { label: 'Aulas e Faltas', icon: LayoutDashboard, path: '/manutencao' },
    { label: 'Mensagens', icon: Mail, path: '/manutencao' },
    { label: 'Horários das aulas', icon: Calendar, path: '/manutencao' },
    { label: 'Declarações', icon: FileText, path: '/manutencao' },
    { label: 'Boletim', icon: LayoutDashboard, path: '/manutencao' },
    { label: 'Foto', icon: Camera, path: '/manutencao' },
    { label: 'Código de Entrada', icon: LogIn, path: '/codigo-entrada' },
  ]

  return (
    <div className="flex flex-col gap-3 px-2 pt-2 pb-10">
      {/* Box 1 */}
      <div className="text-center font-bold text-[13px] tracking-wide mt-1 mb-1">
        SELECIONE A HABILITAÇÃO
      </div>
      <div className="bg-white border border-black rounded-md p-4 min-h-[70px] flex items-center shadow-sm">
        <h2 className="font-bold text-[15px] leading-tight">
          {data.habilitacao}
        </h2>
      </div>

      {/* Box 2 */}
      <div className="text-center font-bold text-[13px] tracking-wide mt-2 mb-1">
        DADOS DA CLASSE SELECIONADA
      </div>
      <div className="bg-white border border-black rounded-md p-3 pb-4 shadow-sm flex gap-3">
        <div className="flex-1 flex flex-col gap-1 text-[14.5px]">
          <div><span className="font-semibold">RM: </span><span className="font-bold">{data.rm}</span></div>
          <div><span className="font-semibold">Semestre OC: </span><span className="font-bold">{data.semestre_oc}</span>  <span className="font-semibold ml-2">Ano OC: </span><span className="font-bold">{data.ano_oc}</span></div>
          <div><span className="font-semibold">Módulo/Série Atual: </span><span className="font-bold">{data.modulo_atual}</span></div>
          <div><span className="font-semibold">Turma: </span><span className="font-bold">{data.turma}</span></div>
          <div><span className="font-semibold">Grupo do Componente: </span><span className="font-bold">{data.grupo_componente}</span></div>
          <div><span className="font-semibold">Situação da Matrícula: </span><span className="font-bold">{data.situacao_matricula}</span></div>
          <div><span className="font-semibold">Data da situação: </span><span className="font-bold">{data.data_situacao}</span></div>
        </div>
        
        {/* Photo Upload Area */}
        <div 
          className="w-24 h-24 border-2 border-dashed border-gray-400 rounded-xl flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden shrink-0 mt-1 mr-1"
          onClick={() => fileInputRef.current?.click()}
        >
          {data.photoBase64 ? (
            <img src={data.photoBase64} alt="Foto do aluno" className="w-full h-full object-cover" />
          ) : (
            <>
              <Image className="w-8 h-8 text-gray-400 mb-1" />
              <span className="text-[10px] text-gray-500 font-medium">Add Foto</span>
            </>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handlePhotoUpload} 
            accept="image/*" 
            className="hidden" 
          />
        </div>
      </div>

      {/* Grid Navigation */}
      <div className="text-center font-bold text-[13px] tracking-wide mt-2 mb-1">
        MENU DE NAVEGAÇÃO
      </div>
      <div className="grid grid-cols-2 gap-2.5 px-6">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="bg-[#292929] hover:bg-[#333333] active:bg-[#1a1a1a] text-white rounded-xl py-5 px-3 flex flex-row items-center gap-3 shadow-md border border-black/20"
          >
            <item.icon className="w-6 h-6 shrink-0 opacity-90" />
            <span className="text-[13px] font-medium leading-tight text-left">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
