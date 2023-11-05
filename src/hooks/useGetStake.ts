import { useEffect, useState } from 'react'
// import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'

interface StakingInfo {
  amountDeposit?: any
  expireTime?: any
  lastTimeClaim?: any
  nextTimeClaim?: any
  packageId?: any
  registerTime?: any
  amountReward?: any
}

const useGetStake = (contractToken: any) => {
  const { account } = useWeb3React()
  const [dataStaking, setDataStaking] = useState<StakingInfo>({
    amountDeposit: '0',
    expireTime: '0',
    lastTimeClaim: '0',
    nextTimeClaim: '86400',
    packageId: '0',
    registerTime: '0',
  })

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await contractToken.methods?.stakingInfoOf(account).call() // Get StakingInfoOf
        const claim = await contractToken.methods.calculatorClaim().call() // Get calculatorClaim (token can claim)
        // console.log(`res`, res)
        // console.log(`claim`, claim)
        if (res && claim) setDataStaking({ ...res, amountReward: claim.amountReward })
      } catch (e) {
        console.error(e)
      }
    }
    fetch()
  }, [account])

  return dataStaking
}

export default useGetStake
