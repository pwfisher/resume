import { FC } from 'react'
import { Job as IJob } from '../../types'
import { Job } from '../Job'
import styles from './Jobs.module.css'

export const Jobs: FC<{ jobs: IJob[] }> = ({ jobs }) => (
  <div className={styles.body}>
    <h2 className={styles.header}>Experience</h2>
    {[...jobs].reverse().map(job => (
      <Job key={job.id} {...{ job }} />
    ))}
  </div>
)
