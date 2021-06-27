import { Card } from '@material-ui/core'
import { ButtonPrimary, InputVsLabel } from '../../components'
import { useHistory } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'
import userApi from '../../utils/api/user'
import {
  getAccessToken,
  setAccessRefreshTokens,
} from '../../helpers/cookieHelper'
import { useDispatch } from 'react-redux'
import { userAction } from '../../store/user/userAction'
import logo from '../../assets/image/LogoIcon.svg'
import { makeStyles } from '@material-ui/core/styles'
import styles from './LoginPage.module.scss'

const useStyles = makeStyles({
  root: {
    boxShadow:
      '0px 1px 0px rgba(90, 97, 105, 0.11), 0px 2px 4px rgba(90, 97, 105, 0.12), 0px 5px 5px rgba(90, 97, 105, 0.06), 0px 3.5px 35px rgba(90, 97, 105, 0.1)',
    borderRadius: '9px',
    padding: '19px 17px 20px',
  },
})

export const LoginPage = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const [userName, setUserName] = useState<null | string>(null)
  const [userLogin, setUserLogin] = useState<null | string>(null)
  const [errorLogin, setErrorLogin] = useState<null | string>(null)

  const handlerUserName = useCallback(
    (e) => {
      let name = e.target.value
      setErrorLogin(null)
      setUserName(name)
    },
    [setUserName],
  )
  const handlerUserLogin = useCallback(
    (e) => {
      let name = e.target.value
      setErrorLogin(null)
      setUserLogin(name)
    },
    [setUserLogin],
  )

  useEffect(() => {
    const token = getAccessToken()
    if (token) {
      history.push('./orders')
    }
  }, [history])

  const handlerAuth = () => {
    if (userName && userLogin) {
      userApi
        .auth({ username: userName, password: userLogin })
        .catch(function (error) {
          if (error.response) {
            setErrorLogin('Ошибка! Проверьте логин и пароль.')
          } else if (error.request) {
            setErrorLogin('Ошибка! Соединение с сетью интернет.')
          } else {
            console.log('Error', error.message)
          }
        })
        .then((response: any) => {
          if (response) {
            console.log('response - ', response.data)
            setAccessRefreshTokens(
              response.data.access_token,
              response.data.refresh_token,
              response.data.expires_in,
            )
            dispatch(userAction.getToken(response.data.access_token))
            history.push('/orders')
          }
        })
    }
  }

  return (
    <div className={styles.layout}>
      <div className={styles.wrapForm}>
        <div className={styles.wrapLogo}>
          <img src={logo} alt="Логотип" />
          <span>Need for drive</span>
        </div>
        <Card className={classes.root}>
          <p className={styles.title}>Вход</p>
          <form>
            <InputVsLabel
              id="inputMail"
              label="Почта"
              onChange={handlerUserName}
            />
            <InputVsLabel
              id="inputPass"
              label="Пароль"
              onChange={handlerUserLogin}
            />
            <div className={styles.footerForm}>
              <span className={styles.requestAccess}>Запросить доступ</span>
              <ButtonPrimary
                disabled={userName && userLogin ? false : true}
                className={styles.btnSubmit}
                onClick={handlerAuth}
              >
                Войти
              </ButtonPrimary>
            </div>
          </form>
          {errorLogin ? <p className={styles.authError}>{errorLogin}</p> : null}
        </Card>
      </div>
    </div>
  )
}
