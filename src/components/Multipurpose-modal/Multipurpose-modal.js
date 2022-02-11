import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import styles from './Multipurpose-modal.module.css';
// import sprite from '../../Images/sprite.svg';
// const modalRoot = document.querySelector('#modal-root');

function Modal() {

    const questionText = 'Вы уверены?';
    
    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <button
                    className={styles.buttonClose}
                    type='button'
                    // onClick={}
                >X
                    {/* <svg className={styles.buttonIcon}>
                        <use href={`${sprite}#close`}></use>
                    </svg> */}
                </button>  
                <p className={styles.modalText}>
                    {questionText}
                </p>
                <div className={styles.btnContainer}>
                    <button
                        className={styles.button}   
                        type='button'
                    // onClick={}
                    >
                        <span>ДА</span>   
                    </button>
                    <button
                        className={styles.button}
                        type='button'
                    // onClick={}   
                    >
                        <span>НЕТ</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;