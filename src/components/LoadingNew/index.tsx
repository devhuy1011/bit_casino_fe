import React, { useEffect } from 'react'
import Overlay from 'components/Overlay/Overlay'

/** Store */
import { fetchInDicator } from 'state/actions'
import { useAppDispatch } from 'state'
import { useGetIndicatorData } from 'state/hooks'

import { Indicator } from './style'

interface Props {
  isShow?: boolean
  colorIndi?: string
  colorBG?: string
}

const LoadingNew: React.FC<Props> = ({ colorBG, colorIndi }) => {
  const dispatch = useAppDispatch()
  const { isShow } = useGetIndicatorData()
  // console.log('dataIndicator ==>', isShow)

  const hideiIdicator = () => {
    dispatch(
      fetchInDicator({
        isShow: false,
      }),
    )
  }

  return (
    <Overlay show={isShow} colorBG={colorBG}>
      <Indicator colorBD={colorIndi} />
    </Overlay>
  )
}

export default LoadingNew
