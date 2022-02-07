import { useDispatch, useSelector } from "react-redux";
import sprite from "../../Images/sprite.svg";
import { getUserName } from "../../redux/auth/auth-selectors";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const name = useSelector(getUserName);
  const userName = "Kapusta";

  return (
    <div className={s.container}>
      <div className={s.name}>
        {<p className={s.user_name_icon}>{userName.charAt(0)}</p>}
        {<p className={s.user_name_text}>{userName}</p>}
      </div>
      <button className={s.btn}>
        <svg className={s.user_icon}>
          <use href={sprite + "#logout"} alt="My logo" />
        </svg>
        <p className={s.user_icon_text}>Выйти</p>
      </button>
    </div>
  );
}
