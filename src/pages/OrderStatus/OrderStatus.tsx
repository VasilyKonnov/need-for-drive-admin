import { Layout } from '../../components'
import { OrderStatusView } from './OrderStatusView'
import styles from './OrderStatus.module.scss'

export const OrderStatus: React.FC = () => {
  return (
    <Layout>
      <OrderStatusView />
    </Layout>
  )
}
