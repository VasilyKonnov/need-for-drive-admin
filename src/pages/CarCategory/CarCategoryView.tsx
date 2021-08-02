import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CreateIcon from '@material-ui/icons/Create'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import { TCarCategoryView } from './CarCategoryTypes'
import styles from './CarCategory.module.scss'
import { ListEmpty, Modal } from '../../components'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'
import { Table } from '../../components'

export const CarCategoryView: React.FC<TCarCategoryView> = ({
  isCategoryAdd,
  toggleCategoryAdd,
  nameCategoryAdd,
  descCategoryAdd,
  handleNameCategoryAdd,
  handleDescCategoryAdd,
  isCategoryEdit,
  toggleCategoryEdit,
  nameCategoryEdit,
  descCategoryEdit,
  handleNameCategoryEdit,
  handleDescCategoryEdit,
  carCategory,
}) => {
  return (
    <>
      <h1 className="admin-page-title">Категории машин</h1>
      <div className="content-wrap withOutHeaderFooter">
        {carCategory.length > 0 ? (
          <Table
            handlerOpenAdd={toggleCategoryAdd}
            tableHeadData={['Название', 'Описание']}
          >
            {carCategory.map((category) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <ButtonPrimary
                      onClick={toggleCategoryEdit}
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
        ) : (
          <ListEmpty />
        )}
      </div>
      <Modal
        open={isCategoryAdd}
        onClose={toggleCategoryAdd}
        title={'Добавить категорию'}
        buttonClick={toggleCategoryAdd}
        buttonTitle="Сохранить"
        isBtnDisable={nameCategoryAdd.length < 1 || descCategoryAdd.length < 1}
      >
        <InputVsLabel
          id="name-category"
          label="Название категории"
          onChange={handleNameCategoryAdd}
          value={nameCategoryAdd}
        />
        <div className={styles.textareaWrap}>
          <p>Описание</p>
          <textarea onChange={handleDescCategoryAdd}>
            {descCategoryAdd}
          </textarea>
        </div>
      </Modal>
      <Modal
        open={isCategoryEdit}
        onClose={toggleCategoryEdit}
        title={'Редактировать категорию'}
        buttonClick={toggleCategoryEdit}
        buttonTitle="Сохранить"
        isBtnDisable={
          nameCategoryEdit.length < 1 || descCategoryEdit.length < 1
        }
      >
        <InputVsLabel
          id="name-category"
          label="Название категории"
          onChange={handleNameCategoryEdit}
          value={nameCategoryEdit}
        />
        <div className={styles.textareaWrap}>
          <p>Описание</p>
          <textarea onChange={handleDescCategoryEdit}>
            {descCategoryEdit}
          </textarea>
        </div>
      </Modal>
    </>
  )
}
