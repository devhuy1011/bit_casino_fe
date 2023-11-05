import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useAppDispatch } from 'state'
import {
  getClaim
} from 'utils/callHelpers'
import { fetchEarn,fetchPopup } from 'state/actions'
import useRefresh from './useRefresh'


const useClaim = (contractStakeToken?: any) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  // const vaultContract = VaultContract(vaultid)
  const { fastRefresh } = useRefresh()

  const handleEarned = useCallback(
    async (amount?: any) => {

      try {
      dispatch(fetchPopup({ isPopup: true }))
      const txHash = await getClaim(contractStakeToken, account)
    
      } catch (err) {
        dispatch(fetchPopup({ isPopup: false }))
      }

  

      // return earnedAmount
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contractStakeToken, account, dispatch,fastRefresh],
  )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return { onClaim: handleEarned }
  // return earnedAmount
}

export default useClaim
