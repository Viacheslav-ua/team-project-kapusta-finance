import { Oval } from 'react-loader-spinner'
import style from './GoogleRedirect.module.css'
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { useRefreshTokenMutation } from '../../redux/services/authAPI'
import * as actions from '../../redux/auth/auth-actions'

export default function GoogleRedirect() {
    const dispatch = useDispatch()
    const [getCurrentUser] = useRefreshTokenMutation()

    const sendDataInStore = useCallback(
    (response) => {
      dispatch(actions.user({...response.data.user,name: response.data.user.email.match(/.+?(?=@)/)[0],}));
      dispatch(actions.accessToken(response.data.accessToken));
      dispatch(actions.isLoggedIn(true));
    },
    [dispatch]
  );

    const loginByGoogle = useCallback(async () => {
        try {
            const response = await getCurrentUser()
            if (response.data) {
              sendDataInStore(response)
            }
        } catch (error) {
            console.log(error);
        }
    }, [getCurrentUser, sendDataInStore]) 

    useEffect(() => {
      loginByGoogle()
    }, [loginByGoogle])

    return (
        <div className={style.spiner}>
            <Oval
              ariaLabel="loading-indicator"
              height={50}
              width={50}
              strokeWidth={3}
              color="rgba(255, 117, 29, 1)"
              secondaryColor="rgba(170, 178, 197, 0.7)"
            />
        </div>
    )
}