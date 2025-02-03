import { Config, names, uniqueNamesGenerator } from 'unique-names-generator'
import { v4 as uuidV4 } from 'uuid'

const config: Config = {
  dictionaries: [names, names],
  separator: ' ',
  length: 2,
}

export type Payment = {
  id: string
  status: 'success' | 'failed'
  alumnName: string
}

const randomStatus = () => {
  const statuses = ['success'] as const
  return statuses[Math.floor(Math.random() * statuses.length)]
}

export const payments: Payment[] = Array.from({ length: 30 }, _ => {
  const randomName = uniqueNamesGenerator(config)

  return {
    id: uuidV4(),
    status: randomStatus(),
    alumnName: randomName,
  }
})
