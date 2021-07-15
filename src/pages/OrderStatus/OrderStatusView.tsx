import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import { Modal } from '../../components'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import styles from './OrderStatus.module.scss'
import { TOrderStatus } from './OrderStatusTypes'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'

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

export const OrderStatusView: React.FC<TOrderStatus> = ({
  isOpen,
  isEdit,
  handleOpen,
  handleClose,
  handleEdit,
}) => {
  const classes = useStyles()

  return (
    <>
      <h1 className="admin-page-title">Статус заказа</h1>
      <div className="content-wrap withOutHeaderFooter">
        <TableContainer className={classes.table}>
          <Table stickyHeader size="small" aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <ButtonPrimary
                    className={'buttonInTable'}
                    onClick={handleOpen}
                  >
                    <AddIcon />
                  </ButtonPrimary>
                </TableCell>
                <TableCell>Название</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <ButtonPrimary
                      className={'buttonInTable'}
                      onClick={handleEdit}
                    >
                      <CreateIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        title={isEdit ? 'Редактировать' : 'Добавить' + ' статус заказа'}
        buttonClick={() => console.log('r')}
        buttonTitle="Сохранить"
      >
        <InputVsLabel
          id="status"
          label="Введите статус"
          onChange={() => console.log('k')}
        />
      </Modal>
    </>
  )
}
