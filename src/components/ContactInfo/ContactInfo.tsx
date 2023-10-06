import { FC } from 'react'
import { Person } from '../../types'
import styles from './ContactInfo.module.css'

export const ContactInfo: FC<{ person: Person }> = ({ person }) => {
  const {
    contact: {
      email,
      phone
    },
    location,
  } = person

  return (
    <ul className={styles.body}>
      <li>
        <h4>Location</h4>
        <span>{location}</span>
      </li>
      <li>
        <h4>Email</h4>
        <span>{email.replace('@', '·at·')}</span>
      </li>
      <li>
        <h4>Phone</h4>
        <span>{phone.replace(/(.)/g, '$1·').slice(0, -1)}</span>
      </li>
    </ul>
  )
}
