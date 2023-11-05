import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { fetchStake,fetchPopup } from 'state/actions'
import { stake } from 'utils/callHelpers'
// import VaultContract from 'utils/getContractVault'
// import { getDeposit } from 'utils/gasLimit'
import useRefresh from './useRefresh'

const useStake = (contractStakeToken: any, packageId?:number) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  // const vaultContract = VaultContract(vaultid)
  const { fastRefresh } = useRefresh()
  // const gasLimit = getDeposit(vaultid) 
  const handleStake = useCallback(
    async (amount?: string) => {
      try {
        dispatch(fetchPopup(
          {
            isPopup: true
          }
        ))
        console.log(`amount`, amount)
        const txHash = await stake(contractStakeToken, amount, account,packageId)
        dispatch(fetchPopup(
          {
            isPopup: false
          }
        ))
        return txHash
      } catch (e) {
        dispatch(fetchPopup(
          {
            isPopup: false
          }
        ))
        return false
      }

    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [account, dispatch,fastRefresh],
  )

  return { onStake: handleStake }
}

export default useStake
