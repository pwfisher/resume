import { FC } from 'react'
import { Bullet } from '../../types'
import styles from './bullets.module.css'
import { SeeMore } from '../SeeMore'

export const Bullets: FC<{ bullets: Bullet[], uniqueId: string }> = ({ bullets, uniqueId }) => (
  <div className={styles.body}>
    <SeeMore truncateAt={270} {...{ uniqueId }}>
      <ul className={styles.bullets}>
        {bullets.map(({ id, text }) => (
          <li className={styles.bullet} key={id}>{text}</li>
        ))}
      </ul>
    </SeeMore>
  </div>
)
