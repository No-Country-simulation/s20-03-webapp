export interface User {
  id?: string
  firstName: string
  lastName: string
  dni: string
  birthdate: string
  email: string
  address?: string
  // address: 'Address'
  avatar?: string
  role: UserRole
  status: boolean
  phone: string
}

export type UserRole = 'schoolAdmin' | 'teacher' | 'student' | 'parent'

// export interface Address {
//   street: string
//   city: string
//   state: string
//   country: string
//   zip: string
// }

// export interface Name {
//   first: string
//   last: string
// }
