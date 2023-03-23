import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ModalDiv, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ src, onClose }) => {
  useEffect(() => {
    function handleKeyD(event) {
      if (event.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyD);

    return () => {
      window.removeEventListener('keydown', handleKeyD);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalDiv className="modal">
        <Img src={src} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis
          ea sequi pariatur labore obcaecati minima repellendus delectus esse
          unde.
        </p>
      </ModalDiv>
    </Backdrop>,
    modalRoot
  );
};
