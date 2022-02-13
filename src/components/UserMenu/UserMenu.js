import { useState, useCallback } from 'react';
import { useLogoutUserMutation } from '../../redux/services/authAPI';
import * as action from '../../redux/auth/auth-actions';
import Modal from '../Multipurpose-modal/Multipurpose-modal';
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../Images/sprite.svg";
import { getUserName, getAccessToken } from "../../redux/auth/auth-selectors";
import s from "./UserMenu.module.css";

 function UserMenu() {
   const name = useSelector(getUserName);
   const [logOut] = useLogoutUserMutation();
   const token = useSelector(getAccessToken);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  
   
  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

   const removeUserData = useCallback(() => {
     dispatch(action.accessToken(null));
     dispatch(action.refreshToken(null));
     dispatch(action.isLoggedIn(false));
     dispatch(action.user({ id: null, email: null, name: null }))
   }, [dispatch]);

   const handleLogout = useCallback(async () => {
     try {
       await logOut(token)
       onCloseModal();
       removeUserData();
       
     } catch (error) {
       console.log(error);
     }
   }, [logOut, removeUserData, token])

  return (
    <div className={s.container}>
      <div className={s.name}>
        {<p className={s.user_name_icon}>{name.charAt(0).toUpperCase()}</p>}
        {<p className={s.user_name_text}>{name}</p>}
      </div>
      <button className={s.btn}
        type='button'
        onClick={onOpenModal}
      >
        <svg className={s.user_icon}>
          <use href={sprite + "#logout"} alt="My logo" />
        </svg>
        <p className={s.user_icon_text}>Выйти</p>
      </button>
      {showModal === true && (
            <Modal
              questionText = 'Вы действительно хотите выйти?'
            onClickApproved={handleLogout}
              onClose={onCloseModal}
            />
          )}
    </div>
  );
}

export default UserMenu;