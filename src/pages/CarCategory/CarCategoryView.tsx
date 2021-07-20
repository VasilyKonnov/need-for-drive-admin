import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CreateIcon from '@material-ui/icons/Create'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import { TCarCategory } from './CarCategoryTypes'
import styles from './CarCategory.module.scss'
import { Modal } from '../../components'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'
import { memo } from 'react'
import { Table } from '../../components'

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
    return (
      <>
        <h1 className="admin-page-title">Категории машин</h1>
        <div className="content-wrap withOutHeaderFooter">
          <Table
            handlerOpenAdd={handlerOpen}
            tableHeadData={['Название', 'Описание']}
          >
            {rows.map((row) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <ButtonPrimary
                      onClick={handlerOpen}
                      className={'buttonInTable'}
                    >
                      <CreateIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              )
            })}
          </Table>
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
