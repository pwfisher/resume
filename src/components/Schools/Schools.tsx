import { FC } from 'react'
import { School as ISchool } from '../../types'
import { School } from '../School'
import styles from './Schools.module.css'
import { SectionHeader } from '../SectionHeader'

export const Schools: FC<{ schools: ISchool[] }> = ({ schools }) => (
  <div className={styles.body}>
    <SectionHeader>Education</SectionHeader>
    {[...schools].reverse().map(school => (
      <School key={school.id} {...{ school }} />
    ))}
  </div>
)
