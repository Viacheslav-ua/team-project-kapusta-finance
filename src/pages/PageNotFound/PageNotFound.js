import { Link } from "react-router-dom";
import style from './PageNotFound.module.css'
import { routes } from "../../routes";

export default function PageNotFound() {
    return (
        <div className={style.container}>
            <button className={style.button}>
                <Link to={routes.auth} className={style.link}>
                        {'← Back to Home'}
                </Link>
            </button>
            <p className={style.description}>Page not found! Please back to Home</p>
        </div>
    )
}