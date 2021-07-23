import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CreateIcon from '@material-ui/icons/Create'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import { TCarCategoryView } from './CarCategoryTypes'
import styles from './CarCategory.module.scss'
import { Modal } from '../../components'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'
import { memo } from 'react'
import { Table } from '../../components'

export const CarCategoryView: React.FC<TCarCategoryView> = memo(
  ({ isOpen, handlerOpen, handlerClose, handlerEdit, isEdit, carCategory }) => {
    return (
      <>
        <h1 className="admin-page-title">Категории машин</h1>
        <div className="content-wrap withOutHeaderFooter">
          <Table
            handlerOpenAdd={handlerOpen}
            tableHeadData={['Название', 'Описание']}
          >
            {carCategory.map((category) => {
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
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.description}</TableCell>
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
