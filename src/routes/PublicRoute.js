import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/auth-selectors'
import routes from './routes'

export default function PublicRoute({ component: Component, restricted = false, navigateTo = routes.expenses }) {
    const isLoggedIn = useSelector(getIsLoggedIn)
    const shouldNavigate = isLoggedIn && restricted
    return ( <>
        {shouldNavigate ? <Navigate to={navigateTo} /> : <Component />}
        </>
    )
}