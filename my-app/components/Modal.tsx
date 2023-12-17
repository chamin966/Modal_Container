import { createContext, ReactNode, useContext, useState } from 'react';

interface IModalContext {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

interface IModalProps {
  children: ReactNode;
}

export function Modal(props: IModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
    console.log('모달 열림');
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log('토글 닫힘');
  };

  const modalProps = {
    isOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalProps}>
      {props.children}
    </ModalContext.Provider>
  );
}

export const OpenButton = () => {
  const { openModal } = useContext(ModalContext) as IModalContext;

  return <button onClick={openModal}>열기</button>;
};

export const ModalOverlay = () => {
  const { isOpen, closeModal } = useContext(ModalContext) as IModalContext;

  return (
    <>
      {isOpen && (
        <div
          className='fixed bg-black opacity-30 inset-0'
          onClick={closeModal}
        />
      )}
    </>
  );
};

export const ModalContents = (props: IModalProps) => {
  const { isOpen, closeModal } = useContext(ModalContext) as IModalContext;

  return (
    <>
      {isOpen && (
        <div className='fixed h-40 w-40 bg-red-700'>{props.children}</div>
      )}
    </>
  );
};

export const ModalTitle = (props: IModalProps) => {
  return <span className='text-neutral-50'>{props.children}</span>;
};

export const ModalBody = () => {
  return <div className='text-neutral-50'>모달 내용</div>;
};

export const CloseButton = () => {
  const { closeModal } = useContext(ModalContext) as IModalContext;

  return (
    <button className='text-neutral-50' onClick={closeModal}>
      닫기
    </button>
  );
};

Modal.OpenButton = OpenButton;
Modal.CloseButton = CloseButton;
Modal.ModalOverlay = ModalOverlay;
Modal.ModalContents = ModalContents;
Modal.ModalTitle = ModalTitle;
Modal.ModalBody = ModalBody;
