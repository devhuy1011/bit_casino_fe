import React from "react";
import { useModal } from "../Modal";
import LoadingIndicator from "../LoadingIndicator";

interface ReturnType {
  onPresentLoadingModal: () => void;
}

const useLoadingModal = (): ReturnType => {
  const [onPresentLoadingModal] = useModal(<LoadingIndicator />);
  return { onPresentLoadingModal };
};

export default useLoadingModal;
