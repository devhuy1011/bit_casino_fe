import React from "react";
import styled from "styled-components";
import Heading from "components/Heading/Heading";
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles";
import { ModalProps } from "./types";

const ModalHeading = styled(Heading)`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  headerBackground = "transparent",
  minWidth = "494px",
 
  ...props
}) => (
  <ModalContainer minWidth={minWidth} {...props}>
    {
      title &&
    <ModalHeader background={headerBackground}>
      <ModalTitle>
        {onBack && <ModalBackButton onBack={onBack} />}
        <ModalHeading>{title}</ModalHeading>
      </ModalTitle>
      {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
    </ModalHeader>
    }
    
    <ModalBody 
    // p={bodyPadding}
    >{children}</ModalBody>
  </ModalContainer>
);

export default Modal;
