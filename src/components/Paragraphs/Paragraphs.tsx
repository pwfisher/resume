import { FC } from 'react'
import { Paragraph } from '../../types'
import styles from './Paragraphs.module.css'
import { SeeMore } from '../SeeMore'

export const Paragraphs: FC<{ paragraphs: Paragraph[], uniqueId: string }> = ({ paragraphs, uniqueId }) => (
  <div className={styles.body}>
    <SeeMore truncateAt={200} {...{ uniqueId }}>
      {paragraphs.map(({ id, text }) => (
        <p className={styles.paragraph} key={id}>{text}</p>
      ))}
    </SeeMore>
  </div>
)
