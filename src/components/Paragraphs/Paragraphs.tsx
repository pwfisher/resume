import { FC } from 'react'
import { Paragraph } from '../../types'
import styles from './Paragraphs.module.css'

export const Paragraphs: FC<{ paragraphs: Paragraph[] }> = ({ paragraphs }) => (
  <div className={styles.body}>
    {paragraphs.map(({ id, text }) => (
      <p className={styles.paragraph} key={id}>{text}</p>
    ))}
  </div>
)
