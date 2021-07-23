import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import CreateIcon from '@material-ui/icons/Create'
import { Modal, Spinner, Table } from '../../components'
import { ButtonPrimary } from './../../components/ButtonPrimary/ButtonPrimary'
import { TOrderStatusView } from './OrderStatusTypes'
import { InputVsLabel } from './../../components/InputVsLabel/InputVsLabel'

export const OrderStatusView: React.FC<TOrderStatusView> = ({
  isOpen,
  isEdit,
  handleOpen,
  handleClose,
  handleEdit,
  orderStatus,
}) => {
  return (
    <>
      <h1 className="admin-page-title">Статус заказа</h1>
      <div className="content-wrap withOutHeaderFooter">
        {orderStatus.length > 0 ? (
          <Table handlerOpenAdd={handleOpen} tableHeadData={['Статус']}>
            {orderStatus.map((statys) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <ButtonPrimary
                      onClick={handleEdit}
                      className={'buttonInTable'}
                    >
                      <CreateIcon />
                    </ButtonPrimary>
                  </TableCell>
                  <TableCell>{statys.name}</TableCell>
                </TableRow>
              )
            })}
          </Table>
        ) : (
          <Spinner />
        )}
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
