import { Grid } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import CreateIcon from '@material-ui/icons/Create'
import { Modal, Table } from '../../components'
import { TCitiesAndStreetsList } from './CitiesAndStreetsListTypes'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'

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
  return (
    <Grid container className="gridContainer">
      <Grid item xs={12} sm={6} className={'gridItem '}>
        <h2 className="admin-page-title">Города</h2>
        <div className="content-wrap withOutHeaderFooter">
          <Table handlerOpenAdd={handleOpenModalCity} tableHeadData={['Город']}>
            {rows.map((row) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <ButtonPrimary
                      onClick={handleEditCity}
                      className={'buttonInTable'}
                    >
                      <CreateIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              )
            })}
          </Table>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={'gridItem'}>
        <h2 className="admin-page-title">Точки выдачи</h2>
        <div className="content-wrap withOutHeaderFooter">
          <Table
            handlerOpenAdd={handleOpenModalStreet}
            tableHeadData={['Город', 'Улица', 'Точка выдачи']}
          >
            {rowsStreets.map((row) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <ButtonPrimary
                      onClick={handleEditStreet}
                      className={'buttonInTable'}
                    >
                      <CreateIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.street}</TableCell>
                  <TableCell>{row.dote}</TableCell>
                </TableRow>
              )
            })}
          </Table>
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
