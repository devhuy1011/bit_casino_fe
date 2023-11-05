import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { useAppDispatch } from 'state'
import { approve } from 'utils/callHelpers'
import { fetchPopup} from 'state/actions'

/* eslint-disable import/prefer-default-export */
 const useApprove = (tokenContract?: Contract,spenderAddress?: string) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const handleApprove = useCallback(async () => {
    try {
      dispatch(fetchPopup(
        {
          isPopup: true
        }
      ))
      const tx = await approve(tokenContract, spenderAddress, account)
      dispatch(fetchPopup(
        {
          isPopup: false
        }
      ))
      return tx
    } catch (e) {
      dispatch(fetchPopup(
        {
          isPopup: false
        }
      ))
      return false
    }
  }, [account, dispatch, tokenContract])

  return { onApprove: handleApprove }
}

export default useApprove