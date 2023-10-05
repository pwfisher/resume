'use client';

import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { useBrowserStoredState } from '../../hooks/useBrowserStoredState'
import styles from './SeeMore.module.css'

const footerHeight = 32

type SeeMoreProps = { truncateAt: number, uniqueId: string }

export const SeeMore: FC<PropsWithChildren & SeeMoreProps> = ({ children, truncateAt, uniqueId }) => {
  /**
   * First render per session, `isExpanded = false`. Then we use local storage.
   * Use session instead of local storage to reset state between visits and tabs.
   * Qualify storageKey by uniqueId to avoid shared state for duplicate ids.
   */
  const { state, setState } = useBrowserStoredState<{ isExpanded: boolean }>({
    initialState: { isExpanded: false },
    storage: globalThis.sessionStorage,
    storageKey: `SeeMore:${uniqueId}`,
  })
  const { isExpanded } = state
  const setIsExpanded = (x: boolean) => setState({ isExpanded: x })

  const [enableControl, setEnableControl] = useState<boolean>(false)
  const [wrapHeightPx, setWrapHeightPx] = useState<number>(200 + footerHeight)

  const wrapRef = useRef<HTMLDivElement>(null)

  const onClick = () => setIsExpanded(!isExpanded)

  useEffect(() => {
    if (!wrapRef.current) return
    const nextEnableControl = wrapRef.current.scrollHeight > truncateAt
    if (nextEnableControl !== enableControl) setEnableControl(nextEnableControl)
  }, [enableControl, truncateAt, wrapRef])

  useEffect(() => {
    if (!wrapRef.current) return
    isExpanded ? setWrapHeightPx(wrapRef.current.scrollHeight) : setWrapHeightPx(truncateAt)
  }, [isExpanded, truncateAt, wrapRef])

  return (
    <div className={styles.body}>
      <div
        className={styles.wrap}
        id={uniqueId}
        ref={wrapRef}
        style={{ maxHeight: wrapHeightPx }}
      >
        {children}
      </div>
      {enableControl ? (
        <footer className={styles.footer} {...{ onClick }}>
          <button
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-controls={uniqueId}
            className={styles.button}
            {...{ onClick }}
          >
            {isExpanded ? 'See less' : 'See more'}
          </button>
        </footer>
      ) : null}
    </div>
  )
}