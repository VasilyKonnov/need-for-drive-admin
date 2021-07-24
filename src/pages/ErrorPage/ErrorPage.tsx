import { useHistory } from 'react-router-dom'
import { Layout } from '../../components'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import styles from './ErrorPage.module.scss'

export const ErrorPage: React.FC = () => {
  const history = useHistory()
  return (
    <Layout>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <h1>500</h1>
          <h2>Что то пошло не так</h2>
          <p>Попробуйте перезагрузить страницу</p>
          <ButtonPrimary onClick={history.goBack} className={styles.btn}>
            Назад
          </ButtonPrimary>
        </div>
      </div>
    </Layout>
  )
}
