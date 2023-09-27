import { FC } from 'react'
import { Job as IJob } from '../../types'
import styles from './Job.module.css'
import { Paragraphs } from '../Paragraphs'

export const Job: FC<{ job: IJob }> = ({ job }) => {
  const {
    company,
    dateEnd,
    dateStart,
    duration,
    id,
    location,
    paragraphs,
    title,
    // tools
  } = job;

  return (
    <div className={styles.body} key={id}>
      <header className={styles.header}>
        <div className={styles.left}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.company}>{company}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.dates}>{dateStart} - {dateEnd} · {duration}</div>
          <div className={styles.location}>{location}</div>
        </div>
      </header>
      <Paragraphs {...{ paragraphs }} />
    </div>
  )
}
