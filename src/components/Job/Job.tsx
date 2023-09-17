import { FC } from 'react'
import { Job as IJob } from '../../types'
import styles from './Job.module.css'

export const Job: FC<{ job: IJob }> = ({ job }) => {
  const {
    // body,
    company,
    dateEnd,
    dateStart,
    duration,
    id,
    location,
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
    </div>
  )
}
