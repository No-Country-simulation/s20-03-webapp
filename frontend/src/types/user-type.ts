export interface User {
  id: string
  name: Name
  email: string
  role: UserRole
  status: UserStatus
  phone: string
  address: Address
  avatar: string
  birthdate: string
}
export type UserRole = 'schoolAdmin' | 'teacher' | 'student' | 'parent'
export type UserStatus = 'active' | 'inactive'

export interface Address {
  street: string
  city: string
  state: string
  country: string
  zip: string
}

export interface Name {
  first: string
  last: string
}
