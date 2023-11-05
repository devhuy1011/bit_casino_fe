import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import useRefresh from 'hooks/useRefresh'
import { fetchBalance, fetchPriceKlay } from './actions'
import { State } from './types'

// const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    dispatch(fetchBalance())
    // dispatch(fetchPakageIdInfo())
    dispatch(fetchPriceKlay())
  }, [dispatch, slowRefresh])
}
export const useStandStakeData = () => {
  return useSelector((state: State) => {
    return state.dataStakeStand.data
  })
}

export const usePreStakeData = () => {
  return useSelector((state: State) => {
    return state.dataStakePre.data
  })
}
export const useStandListData = () => {
  return useSelector((state: State) => {
    return state.dataListStand.data
  })
}

export const usePreListData = () => {
  return useSelector((state: State) => {
    return state.dataListPre.data
  })
}

export const usePoolsData = () => {
  return useSelector((state: State) => {
    return state.poolsData
  })
}

export const usePoolFromName = (name) => {
  const pool = useSelector((state: State) =>
    state?.listPools?.data.filter((f) => f?.name?.toUpperCase() === name?.toUpperCase()),
  )
  return pool
}

export const useUserData = () => {
  return useSelector((state: State) => {
    return state.dataUser.data
  })
}

export const useTicketData = () => {
  return useSelector((state: State) => {
    return state.ticketInfo
  })
}

export const usePriceBioData = () => {
  return useSelector((state: State) => {
    return state.priceBio
  })
}

export const useGetListPoolsData = () => {
  return useSelector((state: State) => {
    return state.listPools
  })
}

export const useGetPopupData = () => {
  return useSelector((state: State) => {
    return state.popup
  })
}

export const useGetIndicatorData = () => {
  return useSelector((state: State) => {
    return state.indicator
  })
}

export const useCheckAproveData = () => {
  return useSelector((state: State) => {
    return state.aprove
  })
}

export const useGetBalanceData = () => {
  return useSelector((state: State) => {
    return state.balance
  })
}

/** Get Staking Info state */
export const useGetStakingInfo = () => {
  return useSelector((state: State) => {
    return state.stakingInfo
  })
}

export const usePriceKlay = () => {
  return useSelector((state: State) => {
    return state.priceKlay.data
  })
}
