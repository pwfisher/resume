import { useEffect, useMemo, useState } from 'react'

interface Args<State extends {}> {
  initialState: State
  storage?: Storage
  storageKey: string
}

/**
 * @author Kyle Corbelli <https://github.com/kylecorbelli>
 */
export function useBrowserStoredState<State extends {}>({
  initialState,
  storage = globalThis.localStorage ?? globalThis.sessionStorage,
  storageKey,
}: Args<State>) {
  // Pull browser stored data into in-memory state on initial mount
  const initial = useMemo(() => {
    const storedState = storage?.getItem(storageKey)
    return storedState ? JSON.parse(storedState) : initialState
  }, [initialState, storage, storageKey])

  const [state, setState] = useState<State>(initial)

  // Write to browser stored data when in-memory state is changed
  useEffect(() => {
    storage?.setItem(storageKey, JSON.stringify(state))
  }, [state])

  return {
    state,
    setState,
  }
}
