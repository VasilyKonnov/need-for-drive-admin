import { Card } from '@material-ui/core'
import logo from '../../assets/image/LogoIcon.svg'
import { makeStyles } from '@material-ui/core/styles'
import styles from './LoginPage.module.scss'
import { ButtonPrimary, InputVsLabel } from '../../components'

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
            <InputVsLabel id="inputMail" label="Почта" />
            <InputVsLabel id="inputPass" label="Пароль" />
            <div className={styles.footerForm}>
              <span className={styles.requestAccess}>Запросить доступ</span>
              <ButtonPrimary className={styles.btnSubmit}>Войти</ButtonPrimary>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
