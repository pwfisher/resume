export interface Paragraph {
  id: number
  text: string
}

export interface Body {
  paragraphs: Paragraph[]
}

export interface Job {
  body: Body
  company: string
  dateEnd: string
  dateStart: string
  duration: string
  id: number
  location?: string
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
  title: string
}

export interface School {
  body?: Body
  dateEnd: string
  dateStart: string
  degree?: string
  id: number
  name: string
}

export interface Resume {
  jobs: Job[]
  person: Person
  schools: School[]
}
