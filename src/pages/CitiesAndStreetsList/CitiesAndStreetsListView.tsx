import { Grid } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import { FetchingStateTypes } from '../../store'
import TableRow from '@material-ui/core/TableRow'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import CreateIcon from '@material-ui/icons/Create'
import { Modal, Table, SpinnerOrListEmpty } from '../../components'
import { TCitiesAndStreetsList } from './CitiesAndStreetsListTypes'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'
import { routes } from '../../constans/constans'
import { Redirect } from 'react-router-dom'

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
  fetchingStateCityPoints,
  fetchingStateCities,
}) => {
  return (
    <Grid container className="gridContainer">
      <Grid item xs={12} sm={6} className={'gridItem '}>
        <h2 className="admin-page-title">Города</h2>
        <div className="content-wrap withOutHeaderFooter">
          {fetchingStateCities === FetchingStateTypes.failed ? (
            <Redirect to={routes.ERROR_500} />
          ) : null}
          {fetchingStateCities === FetchingStateTypes.success &&
          cities.length > 0 ? (
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
            <SpinnerOrListEmpty
              isSpin={fetchingStateCities === FetchingStateTypes.loading}
            />
          )}
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={'gridItem'}>
        <h2 className="admin-page-title">Точки выдачи</h2>
        <div className="content-wrap withOutHeaderFooter">
          {fetchingStateCityPoints === FetchingStateTypes.failed ? (
            <Redirect to={routes.ERROR_500} />
          ) : null}
          {fetchingStateCityPoints === FetchingStateTypes.success &&
          cityPoints.length > 0 ? (
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
            <SpinnerOrListEmpty
              isSpin={fetchingStateCityPoints === FetchingStateTypes.loading}
            />
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
