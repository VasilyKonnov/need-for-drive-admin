import { Layout } from '../../components'
import { CarListView } from './CarListView'
import styles from './CarList.module.scss'

export const CarList: React.FC = () => {
  return (
    <Layout>
      <CarListView />
    </Layout>
  )
}
