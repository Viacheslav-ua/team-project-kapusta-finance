import { useDispatch, useSelector } from "react-redux";
import sprite from "../../Images/sprite.svg";
import { getUserName } from "../../redux/auth/auth-selectors";
import s from "./UserMenu.module.css";
import { useLogoutUserMutation } from "../../redux/services/authAPI.js";

export default function UserMenu() {
  const { logoutUser } = useLogoutUserMutation();
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser);
  };

  return (
    <div className={s.container}>
      <div className={s.name}>
        {<p className={s.user_name_icon}>{name.charAt(0).toUpperCase()}</p>}
        {<p className={s.user_name_text}>{name}</p>}
      </div>
      <button className={s.btn} onClick={handleLogout}>
        <svg className={s.user_icon}>
          <use href={sprite + "#logout"} alt="My logo" />
        </svg>
        <p className={s.user_icon_text}>Выйти</p>
      </button>
    </div>
  );
}
