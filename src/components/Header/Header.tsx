import { FC } from 'react'
import { Person } from '../../types'
import styles from './Header.module.css'

export const Header: FC<{ person: Person }> = ({ person }) => {
  const {
    name,
    title
  } = person

  return <header className={styles.body}>
    <h1 className={styles.name}>{name}</h1>
    <p className={styles.title}>{title}</p>
  </header>
}
