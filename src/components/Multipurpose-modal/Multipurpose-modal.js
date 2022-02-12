import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Multipurpose-modal.module.css';
import sprite from '../../Images/sprite.svg';
const modalRoot = document.querySelector('#modal-root');

function Modal({questionText, onClickApproved, onClose}) {
     useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
    return createPortal(
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modalContainer}>
                <button
                    className={styles.buttonClose}
                    type='button'
                    onClick={onClose}
                >
                     <svg className={styles.buttonIcon}>
                        <use
                          href={sprite + "#close"}
                          alt="close"
                        />
                      </svg>
                </button>  
                <p className={styles.modalText}>
                    {questionText}
                </p>
                <div className={styles.btnContainer}>
                    
                    <button
                        className={styles.button}   
                        type='button'
                        onClick={onClickApproved}
                    >
                        <span>ДА</span>   
                    </button>

                    <button
                        className={styles.button}
                        type='button'
                        onClick={onClose}    
                    >
                        <span>НЕТ</span>
                    </button>

                </div>
            </div>
        </div>,
        modalRoot,
    );
};

export default Modal;