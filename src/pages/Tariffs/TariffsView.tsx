import { Grid } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import CreateIcon from '@material-ui/icons/Create'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import { TTariffs } from './TariffsTypes'
import { Modal, Table } from '../../components'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'
import { Spinner } from '..'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

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
}) => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Тарифы</h2>
        <div className="content-wrap withOutHeaderFooter">
          {rates ? (
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
            <Spinner />
          )}
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Типы тарифов</h2>
        <div className="content-wrap withOutHeaderFooter">
          {rateTypes ? (
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
            <Spinner />
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
