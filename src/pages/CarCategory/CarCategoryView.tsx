import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import { TCarCategory } from './CarCategoryTypes'
import styles from './CarCategory.module.scss'
import { Modal } from '../../components'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'
import { memo } from 'react'

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

export const CarCategoryView: React.FC<TCarCategory> = memo(
  ({ isOpen, handlerOpen, handlerClose, handlerEdit, isEdit }) => {
    const classes = useStyles()

    return (
      <>
        <h1 className="admin-page-title">Категории машин</h1>
        <div className="content-wrap withOutHeaderFooter">
          <TableContainer className={classes.table}>
            <Table stickyHeader size="small" aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <ButtonPrimary
                      className={'buttonInTable'}
                      onClick={handlerOpen}
                    >
                      <AddIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>Название</TableCell>
                  <TableCell>Описание</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <ButtonPrimary
                        className={'buttonInTable'}
                        onClick={handlerEdit}
                      >
                        <CreateIcon />
                      </ButtonPrimary>
                    </TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <Modal
          open={isOpen}
          onClose={handlerClose}
          title={isEdit ? 'Редактировать' : 'Добавить' + ' категорию'}
          buttonClick={() => console.log('r')}
          buttonTitle="Сохранить"
        >
          <InputVsLabel
            id="name-category"
            label="Название категории"
            onChange={() => console.log('k')}
          />
          <div className={styles.textareaWrap}>
            <p>Описание</p>
            <textarea></textarea>
          </div>
        </Modal>
      </>
    )
  },
)
