import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import useRefresh from './useRefresh'

// eslint-disable-next-line import/prefer-default-export
export const useAllowance = (tokenContract?: Contract, vaultAddr?: string) => {
  const { account } = useWeb3React()
  const [allowances, setAllowance] = useState(0)
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await tokenContract.methods.allowance(account, vaultAddr).call()

        if (res !== allowances) {
          setAllowance(res)
        }
      } catch (e) {
        console.error(e)
      }
    }
    fetch()
  }, [account, tokenContract, vaultAddr, fastRefresh])

  return new BigNumber(allowances)
}
