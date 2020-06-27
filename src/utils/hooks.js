import { useCallback } from 'react';

export const useModalFunction = (modalState, setModalState) => {
  const closeModal = useCallback(() => setModalState(false), [setModalState]);
  const openModal = useCallback(() => setModalState(true), [setModalState]);
  const toggleModal = useCallback(() => setModalState(!modalState), [modalState, setModalState]);
  return [openModal, closeModal, toggleModal];
};
