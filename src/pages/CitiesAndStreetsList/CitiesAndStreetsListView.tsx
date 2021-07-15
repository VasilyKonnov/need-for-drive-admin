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
import { Modal } from '../../components'
import { TCitiesAndStreetsList } from './CitiesAndStreetsListTypes'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'

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

export const CitiesAndStreetsListView: React.FC<TCitiesAndStreetsList> = ({
  isOpenCity,
  isOpenStreet,
  isEditStreet,
  isEditCity,
  handleOpenModalCity,
  handleCloseModalCity,
  handleOpenModalStreet,
  handleCloseModalStreet,
  handleEditStreet,
  handleEditCity,
}) => {
  const classes = useStyles()
  return (
    <Grid container className="gridContainer">
      <Grid item xs={12} sm={6} className={'gridItem '}>
        <h2 className="admin-page-title">Города</h2>
        <div className="content-wrap withOutHeaderFooter">
          <TableContainer className={classes.table}>
            <Table stickyHeader size="small" aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <ButtonPrimary
                      className={'buttonInTable'}
                      onClick={handleOpenModalCity}
                    >
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
                      <ButtonPrimary
                        className="buttonInTable"
                        onClick={handleEditCity}
                      >
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
                    <ButtonPrimary
                      className={'buttonInTable'}
                      onClick={handleOpenModalStreet}
                    >
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
                      <ButtonPrimary
                        className="buttonInTable"
                        onClick={handleEditStreet}
                      >
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

      <Modal
        open={isOpenCity}
        onClose={handleCloseModalCity}
        title={isEditCity ? 'Редактировать' : 'Добавить' + ' город'}
        buttonClick={() => console.log('r')}
        buttonTitle="Сохранить"
      >
        <InputVsLabel
          id="city"
          label="Введите город"
          onChange={() => console.log('k')}
        />
      </Modal>
      <Modal
        open={isOpenStreet}
        onClose={handleCloseModalStreet}
        title={isEditStreet ? 'Редактировать' : 'Добавить' + ' точку выдачи'}
        buttonClick={() => console.log('r')}
        buttonTitle="Сохранить"
      >
        <InputVsLabel
          id="street"
          label="Введите точку выдачи"
          onChange={() => console.log('k')}
        />
        <InputVsLabel
          id="street"
          label="Введите город"
          onChange={() => console.log('k')}
        />
        <InputVsLabel
          id="street"
          label="Введите адрес"
          onChange={() => console.log('k')}
        />
      </Modal>
    </Grid>
  )
}
