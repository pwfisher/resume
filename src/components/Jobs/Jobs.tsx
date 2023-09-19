import { FC } from 'react'
import { Job as IJob } from '../../types'
import { Job } from '../Job'
import styles from './Jobs.module.css'
import { SectionHeader } from '../SectionHeader'

export const Jobs: FC<{ jobs: IJob[] }> = ({ jobs }) => (
  <div className={styles.body}>
    <SectionHeader>Experience</SectionHeader>
    {[...jobs].reverse().map(job => (
      <Job key={job.id} {...{ job }} />
    ))}
  </div>
)
