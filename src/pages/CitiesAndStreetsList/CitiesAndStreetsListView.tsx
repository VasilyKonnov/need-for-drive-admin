import { Grid } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import CreateIcon from '@material-ui/icons/Create'
import { Modal, Spinner, Table } from '../../components'
import { TCitiesAndStreetsList } from './CitiesAndStreetsListTypes'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'

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
  cities,
  cityPoints,
}) => {
  return (
    <Grid container className="gridContainer">
      <Grid item xs={12} sm={6} className={'gridItem '}>
        <h2 className="admin-page-title">Города</h2>
        <div className="content-wrap withOutHeaderFooter">
          {cities.length > 0 ? (
            <Table
              handlerOpenAdd={handleOpenModalCity}
              tableHeadData={['Город']}
            >
              {cities.map((city, id: number) => {
                return (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        onClick={handleEditCity}
                        className={'buttonInTable'}
                      >
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell>{city.name}</TableCell>
                  </TableRow>
                )
              })}
            </Table>
          ) : (
            <Spinner />
          )}
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={'gridItem'}>
        <h2 className="admin-page-title">Точки выдачи</h2>
        <div className="content-wrap withOutHeaderFooter">
          {cityPoints.length > 0 ? (
            <Table
              handlerOpenAdd={handleOpenModalStreet}
              tableHeadData={['Город', 'Улица', 'Точка выдачи']}
            >
              {cityPoints.map((point, id: number) => {
                return (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        onClick={handleEditStreet}
                        className={'buttonInTable'}
                      >
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell>
                      {point.cityId ? point.cityId.name : '---'}
                    </TableCell>
                    <TableCell>{point.address}</TableCell>
                    <TableCell>{point.name}</TableCell>
                  </TableRow>
                )
              })}
            </Table>
          ) : (
            <Spinner />
          )}
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
