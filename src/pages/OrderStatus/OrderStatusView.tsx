import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import CreateIcon from '@material-ui/icons/Create'
import { ListEmpty, Modal, Table } from '../../components'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import { TOrderStatusView } from './OrderStatusTypes'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'

export const OrderStatusView: React.FC<TOrderStatusView> = ({
  isOpenAdd,
  isOpenEdit,
  handleOpenAdd,
  handleCloseAdd,
  handleOpenEdit,
  handleCloseEdit,
  orderStatus,
  handleAddStatus,
  handleEditStatus,
  addStatus,
  editStatus,
  addOrderStatus,
  updateOrderStatus,
  removeOrderStatus,
}) => {
  return (
    <>
      <h1 className="admin-page-title">Статус заказа</h1>
      <div className="content-wrap withOutHeaderFooter">
        {orderStatus.length > 0 ? (
          <Table handlerOpenAdd={handleOpenAdd} tableHeadData={['Статус']}>
            {orderStatus.map((status) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <ButtonPrimary
                      onClick={() => handleOpenEdit(status.id)}
                      className={'buttonInTable'}
                    >
                      <CreateIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>{status.name}</TableCell>
                </TableRow>
              )
            })}
          </Table>
        ) : (
          <ListEmpty />
        )}
      </div>
      <Modal
        open={isOpenAdd}
        onClose={handleCloseAdd}
        title={'Добавить статус заказа'}
        buttonClick={addOrderStatus}
        buttonTitle="Сохранить"
        isBtnDisable={addStatus.length < 1}
      >
        <InputVsLabel
          id="status"
          label="Введите статус"
          onChange={handleAddStatus}
          value={addStatus}
        />
      </Modal>
      <Modal
        open={isOpenEdit}
        onClose={handleCloseEdit}
        title={'Редактировать статус заказа'}
        buttonClick={updateOrderStatus}
        buttonClickRemove={removeOrderStatus}
        buttonTitle="Сохранить"
        isBtnDisable={editStatus.length < 1}
      >
        <InputVsLabel
          id="status"
          label="Введите статус"
          onChange={handleEditStatus}
          value={editStatus}
        />
      </Modal>
    </>
  )
}
