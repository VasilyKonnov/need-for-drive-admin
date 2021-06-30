import { Grid } from '@material-ui/core'
import styles from './Tariffs.module.scss'

export const TariffsView: React.FC = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Тарифы</h2>
        <div className="content-wrap">
          <p>Тарифы</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Типы тарифов</h2>
        <div className="content-wrap">
          <p>Типы тарифов</p>
        </div>
      </Grid>
    </Grid>
  )
}
