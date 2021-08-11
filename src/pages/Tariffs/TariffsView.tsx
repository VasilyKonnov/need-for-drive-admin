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
  isModalRateAdd,
  handleModalRateAddToggle,
  isModalRateEdit,
  handleModalRateEditToggle,
  addRateName,
  addRatePrice,
  handleAddRateName,
  handleAddRatePrice,
  editRateName,
  editRatePrice,
  handleEditRateName,
  handleEditRatePrice,
  handleModalRateEditOpen,
  addRate,
  editRate,
  removeRate,
  // ---
  isModalRateTypeAdd,
  handleModalRateTypeAddToggle,
  isModalRateTypeEdit,
  handleModalRateTypeEditToggle,
  addRateType,
  editRateType,
  addRateUnits,
  editRateUnits,
  handleAddRateType,
  handleEditRateType,
  handleAddRateUnits,
  handleEditRateUnits,
  handleModalRateTypeEditOpen,
  // ---
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
              handlerOpenAdd={handleModalRateAddToggle}
              tableHeadData={['Название', 'Цена']}
            >
              {rates.map((rate) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        onClick={() =>
                          handleModalRateEditOpen(
                            rate.id,
                            rate.rateTypeId ? rate.rateTypeId : undefined,
                          )
                        }
                        className={'buttonInTable'}
                      >
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell>
                      {rate.rateTypeId ? rate.rateTypeId.name : '---'}
                    </TableCell>
                    <TableCell>{rate.price ? rate.price : '---'}</TableCell>
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
              handlerOpenAdd={handleModalRateTypeAddToggle}
              tableHeadData={['Название', 'Единици измерения']}
            >
              {rateTypes.map((type) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        onClick={() => handleModalRateTypeEditOpen(type.id)}
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
        open={isModalRateAdd}
        onClose={handleModalRateAddToggle}
        title={'Добавить тариф'}
        buttonClick={addRate}
        buttonTitle="Сохранить"
        isBtnDisable={
          addRateName.length < 1 || addRatePrice.toString().length < 1
        }
      >
        <InputVsLabel
          id="rate-name"
          label="Введите название"
          onChange={handleAddRateName}
          value={addRateName}
        />
        <InputVsLabel
          id="rate-price"
          label="Введите цену"
          onChange={handleAddRatePrice}
          value={addRatePrice}
        />
      </Modal>
      <Modal
        open={isModalRateEdit}
        onClose={handleModalRateEditToggle}
        title={'Редактировать тариф'}
        buttonClick={editRate}
        buttonClickRemove={removeRate}
        buttonTitle="Сохранить"
        isBtnDisable={
          editRateName.length < 1 || editRatePrice.toString().length < 1
        }
      >
        <InputVsLabel
          id="rate-name"
          label="Введите название"
          onChange={handleEditRateName}
          value={editRateName}
        />
        <InputVsLabel
          id="rate-price"
          label="Введите цену"
          onChange={handleEditRatePrice}
          value={editRatePrice}
        />
      </Modal>

      <Modal
        open={isModalRateTypeAdd}
        onClose={handleModalRateTypeAddToggle}
        title={'Добавить тип тарифа'}
        buttonClick={handleModalRateTypeAddToggle}
        buttonTitle="Сохранить"
        isBtnDisable={addRateType.length < 1 || addRateUnits.length < 1}
      >
        <InputVsLabel
          id="rate-name"
          label="Введите название"
          onChange={handleAddRateType}
          value={addRateType}
        />
        <InputVsLabel
          id="rate-units"
          label="Введите единицу измерения"
          onChange={handleAddRateUnits}
          value={addRateUnits}
        />
      </Modal>
      <Modal
        open={isModalRateTypeEdit}
        onClose={handleModalRateTypeEditToggle}
        title={'Редактировать тип тарифа'}
        buttonClick={handleModalRateTypeEditToggle}
        buttonTitle="Сохранить"
        isBtnDisable={editRateType.length < 1 || editRateUnits.length < 1}
      >
        <InputVsLabel
          id="rate-type"
          label="Введите название"
          onChange={handleEditRateType}
          value={editRateType}
        />
        <InputVsLabel
          id="rate-units"
          label="Введите единицу измерения"
          onChange={handleEditRateUnits}
          value={editRateUnits}
        />
      </Modal>
    </Grid>
  )
}
