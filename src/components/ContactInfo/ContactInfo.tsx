import { FC, useEffect } from 'react'
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

  //
  // De-obfuscate email and phone for printing.
  //
  useEffect(() => {
    const { body: bodyClass } = styles

    const onBeforeprint = () => {
      const body = document.querySelector(`.${bodyClass}`)
      if (!body) return
      const nodeIterator = document.createNodeIterator(body, NodeFilter.SHOW_TEXT)
      var textNode
      var newText

      while (textNode = nodeIterator.nextNode()) {
        const { textContent } = textNode
        if (!textContent) return

        if (/·at·/.test(textContent)) {
          newText = textContent.replace(/·at·/g, '@')
        }
        if (/([\d-]·){11}/.test(textContent)) {
          newText = textContent.replace(/([\d-])·/g, '$1')
        }
        if (newText) {
          textNode.nodeValue = newText
          newText = null
        }
      }
    }
    window.addEventListener('beforeprint', onBeforeprint)
    return () => window.removeEventListener('beforeprint', onBeforeprint)
  })

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
