import { FC } from 'react'
import { School as ISchool } from '../../types'
import styles from './School.module.css'

export const School: FC<{ school: ISchool }> = ({ school }) => {
  const {
    // body,
    dateEnd,
    dateStart,
    degree,
    id,
    name,
  } = school;

  return (
    <div className={styles.body} key={id}>
      <header className={styles.header}>
        <div className={styles.left}>
          <h3 className={styles.name}>{name}</h3>
          {degree ? <div className={styles.degree}>{degree}</div> : null}
        </div>
        <div className={styles.right}>
          <div className={styles.dates}>{dateStart} - {dateEnd}</div>
        </div>
      </header>
    </div>
  )
}
