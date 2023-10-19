export interface Bullet {
  id: number
  text: string
}

export interface Job {
  company: string
  dateEnd: string
  dateStart: string
  duration: string
  id: number
  location?: string
  bullets: Bullet[]
  title: string
  tools?: string[]
}

export interface Link {
  id: number
  text?: string
  url: string
}

export interface Person {
  contact: {
    email: string
    phone: string
  }
  links: Link[]
  location?: string
  name: string
  skills: string[]
  title: string
}

export interface School {
  dateEnd: string
  dateStart: string
  degree?: string
  id: number
  name: string
  bullets?: Bullet[]
}

export interface Resume {
  jobs: Job[]
  person: Person
  schools: School[]
}
