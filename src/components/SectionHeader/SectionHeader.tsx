import { FC, PropsWithChildren } from 'react'
import styles from './SectionHeader.module.css'

export const SectionHeader: FC<PropsWithChildren> = ({ children }) => (
  <h2 className={styles.body}>{children}</h2>
)
