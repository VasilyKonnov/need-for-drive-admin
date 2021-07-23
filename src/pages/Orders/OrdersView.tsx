import { ButtonPrimary, Select } from '../../components'
import ReactPaginate from 'react-paginate'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import FastForwardIcon from '@material-ui/icons/FastForward'
import { OrderCard } from '../../components/OrderCard'
import './Orders.scss'
import { MenuItem } from '@material-ui/core'
import { TOrdersView } from './OrdersTypes'
import { TOrder } from '../../store/orders'
import { ListEmpty } from './../../components/ListEmpty/ListEmpty'

export const OrdersView: React.FC<TOrdersView> = ({
  cities,
  orderStatus,
  orders,
  amountPages,
  handleCity,
  handleStatus,
  handlePaginationClick,
  handleFilterOrders,
}) => {
  return (
    <>
      <h1 className="admin-page-title">Заказы</h1>
      <div className="content-wrap">
        <div className="content-wrap--header">
          <div className={'selectWrap'}>
            <Select
              label="Город"
              labelId="labelId-2"
              id="select-2"
              handlerChange={handleCity}
            >
              {cities.map((city, id: number) => {
                return (
                  <MenuItem key={id} value={city.id}>
                    {city.name}
                  </MenuItem>
                )
              })}
            </Select>
            <Select
              label="Статус"
              labelId="labelId-3"
              id="select-3"
              handlerChange={handleStatus}
            >
              {orderStatus.map((status, id: number) => {
                return (
                  <MenuItem key={id} value={status.id}>
                    {status.name}
                  </MenuItem>
                )
              })}
            </Select>
          </div>
          <ButtonPrimary onClick={handleFilterOrders} className={'prymaryBtn'}>
            Применить
          </ButtonPrimary>
        </div>
        <div className="content-wrap--body">
          {orders.length > 0 ? (
            orders.map((order: TOrder, id: number) => (
              <OrderCard
                key={id}
                imgSrc={order.carId ? order.carId.thumbnail.path : null}
                carName={order.carId ? order.carId.name : '---'}
                colors={order.carId ? order.carId.colors : []}
                city={order.cityId ? order.cityId.name : '---'}
                pointAddress={order.pointId ? order.pointId.address : '---'}
                dateFrom={order.dateFrom}
                dateTo={order.dateTo}
                isFullTank={order.isFullTank}
                isNeedChildChair={order.isNeedChildChair}
                isRightWheel={order.isRightWheel}
                price={order.price}
              />
            ))
          ) : (
            <ListEmpty />
          )}
        </div>
        <div className="content-wrap--footer">
          {orders.length > 0 ? (
            <ReactPaginate
              previousLabel={<FastRewindIcon />}
              nextLabel={<FastForwardIcon />}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={amountPages}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handlePaginationClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}
