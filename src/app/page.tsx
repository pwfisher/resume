"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { assetPrefix } from '../constants'
import { resume } from '../__fixtures__'
import { Header } from '../components/Header'
import { ContactInfo } from '../components/ContactInfo'
import { Jobs } from '../components/Jobs'
import { Schools } from '../components/Schools'
import { Skills } from '../components/Skills'

const {
  jobs,
  person,
  schools
} = resume

export default function AppPage() {

  return (
    <div className={styles.body}>
      <Header {...{ person }} />

      <div className={styles.belowHeader}>
        <aside className={styles.aside}>
          <ContactInfo {...{ person }} />
          <Skills {...{ person }} />
        </aside>

        <main className={styles.main}>
          <Jobs {...{ jobs }} />
          <Schools {...{ schools }} />
        </main>
      </div>

      <footer className={styles.footer}>
        <span>Powered by</span>
        <Image
          className={styles.logo}
          src={`${assetPrefix}/next.svg`}
          alt="Next.js Logo"
          width={90}
          height={19}
          priority
        />
      </footer>
    </div>
  )
}
