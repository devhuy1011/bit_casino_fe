import { useContext } from 'react'
import { RefreshContext } from 'contexts/RefreshContext'

const useRefresh = () => {
  const { fast, slow, fastOne } = useContext(RefreshContext)
  return { fastRefresh: fast, slowRefresh: slow, fastOneRefresh: fastOne }
}

export default useRefresh
