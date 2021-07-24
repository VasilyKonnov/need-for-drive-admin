import { FetchingStateTypes } from '../../store'
import { Grid } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import CreateIcon from '@material-ui/icons/Create'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import { TTariffs } from './TariffsTypes'
import { Modal, SpinnerOrListEmpty, Table } from '../../components'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'
import { Redirect } from 'react-router-dom'
import { routes } from '../../constans/constans'

export const TariffsView: React.FC<TTariffs> = ({
  isModalRate,
  isModalRateType,
  isEditRate,
  isEditRateType,
  handleModalRateOpen,
  handleModalRateClose,
  handleModalRateTypeOpen,
  handleModalRateTypeClose,
  handleEditRate,
  handleEditRateType,
  rates,
  rateTypes,
  fetchingStateRates,
  fetchingStateRateTypes,
}) => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Тарифы</h2>
        <div className="content-wrap withOutHeaderFooter">
          {fetchingStateRates === FetchingStateTypes.failed ? (
            <Redirect to={routes.ERROR_500} />
          ) : null}
          {fetchingStateRates === FetchingStateTypes.success &&
          rates.length > 0 ? (
            <Table
              handlerOpenAdd={handleModalRateOpen}
              tableHeadData={['Название', 'Цена']}
            >
              {rates.map((rate) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        onClick={handleEditRate}
                        className={'buttonInTable'}
                      >
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell>{rate.rateTypeId.name}</TableCell>
                    <TableCell>{rate.price}</TableCell>
                  </TableRow>
                )
              })}
            </Table>
          ) : (
            <SpinnerOrListEmpty
              isSpin={fetchingStateRates === FetchingStateTypes.loading}
            />
          )}
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Типы тарифов</h2>
        <div className="content-wrap withOutHeaderFooter">
          {fetchingStateRateTypes === FetchingStateTypes.failed ? (
            <Redirect to={routes.ERROR_500} />
          ) : null}
          {fetchingStateRateTypes === FetchingStateTypes.success &&
          rateTypes.length > 0 ? (
            <Table
              handlerOpenAdd={handleModalRateTypeOpen}
              tableHeadData={['Название', 'Единици измерения']}
            >
              {rateTypes.map((type) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        onClick={handleEditRateType}
                        className={'buttonInTable'}
                      >
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell>{type.name}</TableCell>
                    <TableCell>{type.unit}</TableCell>
                  </TableRow>
                )
              })}
            </Table>
          ) : (
            <SpinnerOrListEmpty
              isSpin={fetchingStateRateTypes === FetchingStateTypes.loading}
            />
          )}
        </div>
      </Grid>
      <Modal
        open={isModalRate}
        onClose={handleModalRateClose}
        title={isEditRate ? 'Редактировать' : 'Добавить' + ' тариф'}
        buttonClick={() => console.log('r')}
        buttonTitle="Сохранить"
      >
        <InputVsLabel
          id="rate-name"
          label="Введите название"
          onChange={() => console.log('k')}
        />
        <InputVsLabel
          id="rate-price"
          label="Введите цену"
          onChange={() => console.log('k')}
        />
      </Modal>
      <Modal
        open={isModalRateType}
        onClose={handleModalRateTypeClose}
        title={isEditRateType ? 'Редактировать' : 'Добавить' + ' тариф'}
        buttonClick={() => console.log('r')}
        buttonTitle="Сохранить"
      >
        <InputVsLabel
          id="rate-name"
          label="Введите название"
          onChange={() => console.log('k')}
        />
        <InputVsLabel
          id="rate-price"
          label="Введите единицу измерения"
          onChange={() => console.log('k')}
        />
      </Modal>
    </Grid>
  )
}
