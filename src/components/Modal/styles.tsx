import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Box/Flex'
import { Box } from 'components/Box'
import { CloseGobit, ArrowLeftGobit } from 'components/Svg'
import { IconButton } from 'components/Button'
import { ModalProps } from './types'

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: ${({ background }) => background || 'transparent'};
  border-bottom: 1px solid #4b4b4b;
  display: flex;
  padding: 20px 20px;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    padding: 10px 0px;
  }
`

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`

export const ModalBody = styled(Flex)`
  flex-direction: column;
  padding: 30px 20px;
  max-width: 100%;

  @media screen and (min-width: 320px) and (max-width: 720px) {
    padding: 30px 0px;
  }
`

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps['onDismiss'] }> = ({ onDismiss }) => {
  return (
    <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
      <CloseGobit width="16px" color="#ffffff" />
    </IconButton>
  )
}

export const ModalBackButton: React.FC<{ onBack: ModalProps['onBack'] }> = ({ onBack }) => {
  return (
    <IconButton
      variant="text"
      onClick={onBack}
      // area-label="go back" mr="8px"
    >
      <ArrowLeftGobit width="16px" />
    </IconButton>
  )
}

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  width: 100%;
  padding: 20px 25px;
  z-index: 99;
  max-width: 300px;
  background-color: #1b1b1b;
  /* max-width: 100%; */
  @media screen and (min-width: 320px) and (max-width: 720px) {
    padding: 20px 30px;
    min-width: auto;
  }
`
