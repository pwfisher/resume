import { FC } from 'react'
import { Person } from '../../types'
import styles from './Header.module.css'

export const Header: FC<{ person: Person }> = ({ person }) => {
  const {
    links,
    name,
    title
  } = person

  return <header className={styles.body}>
    <h1 className={styles.name}>{name.split(' ').map(x => (<span>{x}</span>))}</h1>
    <p className={styles.title}>{title}</p>
    <ul className={styles.links}>
      {links.map(({ id, text, url }) => (
        <a className={styles.link} key={id} href={url}>{typeof text === 'string' ? text : url}</a>
      ))}
    </ul>
  </header>
}
