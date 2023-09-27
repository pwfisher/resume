import { FC } from 'react'
import { School as ISchool } from '../../types'
import styles from './School.module.css'
import { Paragraphs } from '../Paragraphs'

export const School: FC<{ school: ISchool }> = ({ school }) => {
  const {
    dateEnd,
    dateStart,
    degree,
    id,
    name,
    paragraphs,
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
      {paragraphs ? <Paragraphs {...{ paragraphs }} /> : null}
    </div>
  )
}
