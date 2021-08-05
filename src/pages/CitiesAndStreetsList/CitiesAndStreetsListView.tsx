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
  isCityAdd,
  toggleModalCityAdd,
  cityAdd,
  handleCityAdd,
  // ---
  isCityEdit,
  toggleModalCityEdit,
  cityEdit,
  handleCityEdit,
  openModalCityEdit,
  // ---
  isStreetAdd,
  toggleModalStreetAdd,
  handlePointCityAdd,
  pointCityAdd,
  handlePointStreetAdd,
  pointStreetAdd,
  handlePointAdd,
  pointAdd,
  // ---
  isStreetEdit,
  toggleModalStreetEdit,
  handlePointCityEdit,
  pointCityEdit,
  handlePointStreetEdit,
  pointStreetEdit,
  handlePointEdit,
  pointEdit,
  openModalStreetEdit,
  // ---
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
              handlerOpenAdd={toggleModalCityAdd}
              tableHeadData={['Город']}
            >
              {cities.map((city, id: number) => {
                return (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        onClick={() => openModalCityEdit(city.id)}
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
              handlerOpenAdd={toggleModalStreetAdd}
              tableHeadData={['Город', 'Улица', 'Точка выдачи']}
            >
              {cityPoints.map((point, id: number) => {
                return (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        onClick={() => openModalStreetEdit(point.id)}
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
        open={isCityAdd}
        onClose={toggleModalCityAdd}
        title={'Добавить город'}
        buttonClick={toggleModalCityAdd}
        buttonTitle="Сохранить"
        isBtnDisable={cityAdd.length < 1}
      >
        <InputVsLabel
          id="city-add"
          label="Введите город"
          onChange={handleCityAdd}
          value={cityAdd}
        />
      </Modal>
      <Modal
        open={isCityEdit}
        onClose={toggleModalCityEdit}
        title={'Редактировать город'}
        buttonClick={toggleModalCityEdit}
        buttonTitle="Сохранить"
        isBtnDisable={cityEdit.length < 1}
      >
        <InputVsLabel
          id="city-edit"
          label="Введите город"
          onChange={handleCityEdit}
          value={cityEdit}
        />
      </Modal>

      <Modal
        open={isStreetAdd}
        onClose={toggleModalStreetAdd}
        title={'Добавить точку выдачи'}
        buttonClick={toggleModalStreetAdd}
        buttonTitle="Сохранить"
        isBtnDisable={
          pointCityAdd.length < 1 ||
          pointStreetAdd.length < 1 ||
          pointAdd.length < 1
        }
      >
        <InputVsLabel
          id="city-add"
          label="Введите город"
          onChange={handlePointCityAdd}
          value={pointCityAdd}
        />
        <InputVsLabel
          id="street-add"
          label="Введите адрес"
          onChange={handlePointStreetAdd}
          value={pointStreetAdd}
        />
        <InputVsLabel
          id="street"
          label="Введите точку выдачи"
          onChange={handlePointAdd}
          value={pointAdd}
        />
      </Modal>
      <Modal
        open={isStreetEdit}
        onClose={toggleModalStreetEdit}
        title={'Редактировать точку выдачи'}
        buttonClick={toggleModalStreetEdit}
        buttonTitle="Сохранить"
        isBtnDisable={
          pointCityEdit.length < 1 ||
          pointStreetEdit.length < 1 ||
          pointEdit.length < 1
        }
      >
        <InputVsLabel
          id="street-2"
          label="Введите город"
          onChange={handlePointCityEdit}
          value={pointCityEdit}
        />
        <InputVsLabel
          id="street-3"
          label="Введите адрес"
          onChange={handlePointStreetEdit}
          value={pointStreetEdit}
        />
        <InputVsLabel
          id="street-1"
          label="Введите точку выдачи"
          onChange={handlePointEdit}
          value={pointEdit}
        />
      </Modal>
    </Grid>
  )
}
