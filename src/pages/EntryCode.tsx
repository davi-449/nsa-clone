import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'

export function EntryCode() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [timeLeft, setTimeLeft] = useState(20)

  const generateCode = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString()
    setCode(`${newCode.slice(0, 3)} ${newCode.slice(3)}`)
  }

  useEffect(() => {
    generateCode()
    setTimeLeft(20)
  }, [])

  useEffect(() => {
    if (timeLeft <= 0) {
      generateCode()
      setTimeLeft(20)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const progressPercentage = (timeLeft / 20) * 100

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] bg-[#e5e5e5]">
      <div className="bg-white p-4 shadow-sm flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold">Código de Entrada</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-8">
        <div className="text-center space-y-2">
          <p className="text-gray-600 font-medium">Use este código para acesso</p>
          <div className="bg-white px-8 py-6 rounded-2xl shadow-md border border-gray-200">
            <span className="text-5xl font-mono font-bold tracking-widest text-gray-800">
              {code}
            </span>
          </div>
        </div>

        <div className="w-full max-w-[280px] space-y-3 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center text-sm font-medium text-gray-500">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Expira em</span>
            </div>
            <span className={`font-bold ${timeLeft <= 5 ? 'text-red-500' : 'text-gray-700'}`}>
              00:{timeLeft.toString().padStart(2, '0')}
            </span>
          </div>
          
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ease-linear rounded-full ${
                timeLeft <= 5 ? 'bg-red-500' : 'bg-[#414141]'
              }`}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
