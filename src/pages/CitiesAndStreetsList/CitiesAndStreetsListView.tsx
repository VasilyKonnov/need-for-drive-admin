import { Grid } from '@material-ui/core'
import styles from './CitiesAndStreetsList.module.scss'

export const CitiesAndStreetsListView: React.FC = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Города</h2>
        <div className="content-wrap">
          <p>Список городов</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Точки выдачи</h2>
        <div className="content-wrap">
          <p>Список точек выдачи</p>
        </div>
      </Grid>
    </Grid>
  )
}
