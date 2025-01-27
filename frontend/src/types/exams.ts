export interface Exam {
  title: string
  description: string
  type: ExamType
  date: Date
  group: number
}

export type ExamType =
  | 'prueba'
  | 'taller'
  | 'exposición'
  | 'mapa mental'
  | 'prueba práctica'
