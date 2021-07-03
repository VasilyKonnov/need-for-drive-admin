import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import styles from './CitiesAndStreetsList.module.scss'

const useStyles = makeStyles({
  table: {
    maxHeight: '100%',
  },
})

function createData(name: string) {
  return { name }
}

const rows = [
  createData('Ульяновск'),
  createData('Москва'),
  createData('Самара'),
  createData('Питер'),
  createData('Владик'),
]

function createDataStreets(dote: string, city: string, street: string) {
  return { dote, city, street }
}

const rowsStreets = [
  createDataStreets('dote-Ульяновск', 'city-Ульяновск', 'Ульяновск'),
  createDataStreets('dote-Москва', 'city-Москва', 'Москва'),
  createDataStreets('dote-Самара', 'city-Самара', 'Самара'),
  createDataStreets('dote-Питер', 'city-Питер', 'Питер'),
  createDataStreets('dote-Владик', 'city-Владик', 'Владик'),
]

export const CitiesAndStreetsListView: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={3} className="gridContainer">
      <Grid item xs={12} sm={6} className={'gridItem'}>
        <h2 className="admin-page-title">Города</h2>
        <div className="content-wrap withOutHeaderFooter">
          <TableContainer className={classes.table}>
            <Table stickyHeader size="small" aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <ButtonPrimary className={'buttonInTable'}>
                      <AddIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>Город</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary className="buttonInTable">
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={'gridItem'}>
        <h2 className="admin-page-title">Точки выдачи</h2>
        <div className="content-wrap withOutHeaderFooter">
          <TableContainer className={classes.table}>
            <Table stickyHeader size="small" aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <ButtonPrimary className={'buttonInTable'}>
                      <AddIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>Точка выдачи</TableCell>
                  <TableCell>Город</TableCell>
                  <TableCell>Адрес</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsStreets.map((row) => (
                  <TableRow key={row.dote}>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary className="buttonInTable">
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.dote}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.city}
                    </TableCell>
                    <TableCell>{row.street}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
    </Grid>
  )
}
