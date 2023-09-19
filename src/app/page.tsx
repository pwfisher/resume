import Image from 'next/image'
import styles from './page.module.css'
import { assetPrefix } from '../constants'
import { resume } from '../__fixtures__'
import { Header } from '../components/Header'
import { Jobs } from '../components/Jobs'

const {
  jobs,
  person
} = resume

export default function AppPage() {
  return (
    <main className={styles.main}>
      <Header {...{ person }} />
      <Jobs {...{ jobs }} />

      <div className={styles.logoWrap}>
        <span>Powered by</span>
        <Image
          className={styles.logo}
          src={`${assetPrefix}/next.svg`}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
