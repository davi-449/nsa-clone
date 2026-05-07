import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface StudentData {
  habilitacao: string
  rm: string
  semestre_oc: string
  ano_oc: string
  modulo_atual: string
  turma: string
  grupo_componente: string
  situacao_matricula: string
  data_situacao: string
  photoBase64: string | null
}

interface StudentState {
  data: StudentData
  updateData: (data: Partial<StudentData>) => void
  setPhoto: (photo: string | null) => void
}

export const useStore = create<StudentState>()(
  persist(
    (set) => ({
      data: {
        habilitacao: 'TÉCNICO EM PROGRAMAÇÃO DE JOGOS DIGITAIS',
        rm: '260948',
        semestre_oc: '1º SEMESTRE',
        ano_oc: '2026',
        modulo_atual: '1 MODULO',
        turma: 'TURMA A',
        grupo_componente: '',
        situacao_matricula: 'CURSANDO',
        data_situacao: '26/01/2026',
        photoBase64: null,
      },
      updateData: (newData) =>
        set((state) => ({ data: { ...state.data, ...newData } })),
      setPhoto: (photo) =>
        set((state) => ({ data: { ...state.data, photoBase64: photo } })),
    }),
    {
      name: 'nsa-student-storage',
    }
  )
)
