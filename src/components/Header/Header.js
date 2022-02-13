import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import sprite from "../../Images/sprite.svg";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import s from "./Header.module.css";

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div>
          <svg className={s.header_logo}>
            <use href={sprite + "#logo"} alt="My logo" />
          </svg>
        </div>
        <div className={s.header_user}>{isLoggedIn && <UserMenu />}</div>
      </div>
    </header>
  );
}
