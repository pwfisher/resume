import { FC } from 'react'
import { Job as IJob } from '../../types'
import styles from './Job.module.css'
import { Bullets } from '../Bullets'

export const Job: FC<{ job: IJob }> = ({ job }) => {
  const {
    company,
    dateEnd,
    dateStart,
    duration,
    id,
    location,
    bullets,
    title,
    tools
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
      <Bullets {...{ bullets }} uniqueId={`Job:${id}`} />
      {tools ? (
        <ul className={styles.tools}>
          <li className={styles.tool} key='Tools'><b>Tools</b></li>
          {tools.map(x => <li className={styles.tool} key={x}>{x}</li>)}
        </ul>
      ) : null}
    </div>
  )
}
