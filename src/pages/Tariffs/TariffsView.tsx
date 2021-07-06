import { Grid } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import { makeStyles } from '@material-ui/core/styles'
import { TTariffs } from './TariffsTypes'
import { Modal } from '../../components'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'
import styles from './Tariffs.module.scss'

const useStyles = makeStyles({
  table: {
    maxHeight: '100%',
  },
})

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
}) => {
  const classes = useStyles()

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Тарифы</h2>
        <div className="content-wrap withOutHeaderFooter">
          <TableContainer className={classes.table}>
            <Table stickyHeader size="small" aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <ButtonPrimary
                      className={'buttonInTable'}
                      onClick={handleModalRateOpen}
                    >
                      <AddIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>Название</TableCell>
                  <TableCell>Цена</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        className={'buttonInTable'}
                        onClick={handleEditRate}
                      >
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h2 className="admin-page-title">Типы тарифов</h2>
        <div className="content-wrap withOutHeaderFooter">
          <TableContainer className={classes.table}>
            <Table stickyHeader size="small" aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <ButtonPrimary
                      className={'buttonInTable'}
                      onClick={handleModalRateTypeOpen}
                    >
                      <AddIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>Название</TableCell>
                  <TableCell>Единицы измерения</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        className={'buttonInTable'}
                        onClick={handleEditRateType}
                      >
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      <Modal open={isModalRate} onClose={handleModalRateClose}>
        <h3 className="modalTitle">
          {isEditRate ? 'Редактировать' : 'Добавить'} тариф
        </h3>
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
        <ButtonPrimary className="modalBtn">Сохранить</ButtonPrimary>
      </Modal>
      <Modal open={isModalRateType} onClose={handleModalRateTypeClose}>
        <h3 className="modalTitle">
          {isEditRateType ? 'Редактировать' : 'Добавить'} тип тарифа
        </h3>
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
        <ButtonPrimary className="modalBtn">Сохранить</ButtonPrimary>
      </Modal>
    </Grid>
  )
}
