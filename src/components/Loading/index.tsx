import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Overlay from 'components/Overlay/Overlay'
import { useGetPopupData } from 'state/hooks'
import { fetchPopup } from 'state/actions'
import { useAppDispatch } from 'state'
import LoadingIndicator from '../LoadingIndicator'
import { Modal, useModal } from '../Modal'
import // StyleDialog,
'./style'

const AccModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  max-width: 100%;
  background-color: transparent;
  @media screen and (min-width: 320px) and (max-width: 375px) {
    margin: 0px 10px;
  }
`

function Loading(props) {
  const { isOpenLoading, closeLoading } = props
  const dispatch = useAppDispatch()

  const hideDialog = () => {
    dispatch(
      fetchPopup({
        isPopup: false,
      }),
    )
  }
  const dataPopup = useGetPopupData()
  const isPopup = dataPopup.data.isPopup
  const type = dataPopup.data.type

  useEffect(() => {
    if (type !== '' && type !== undefined && isPopup) {
      setTimeout(function () {
        hideDialog()
      }, 2000)
    }
  }, [type, isPopup])

  return (
    // <StyleDialog open={isOpenLoading}>
    <>
      {isPopup && (
        <AccModal>
          <Overlay show />
          <LoadingIndicator />
        </AccModal>
      )}
    </>

    // </StyleDialog>
  )
}

// Loading.propTypes = {
//   isOpenLoading: PropTypes.bool,
//   openLoading: PropTypes.func,
//   closeLoading: PropTypes.func,
// };

export default Loading
