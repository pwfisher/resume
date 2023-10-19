import { FC } from 'react'
import { Person } from '../../types'
import styles from './Skills.module.css'

export const Skills: FC<{ person: Person }> = ({ person }) => {
  const { skills } = person

  return (
    <div className={styles.body}>
      <h4 className='force rerender 02'>Skills</h4>
      <ul className={styles.skills}>
        {skills.map(x => <li className={styles.skill} key={x}>{x}</li>)}
      </ul>
    </div>
  )
}
