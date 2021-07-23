import { ButtonPrimary, Select } from '../../components'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import FastForwardIcon from '@material-ui/icons/FastForward'
import { OrderCard } from '../../components/OrderCard'
import './Orders.scss'
import { MenuItem } from '@material-ui/core'

const data = ['раз', 'два', 'три', 'четыре', 'пять']

export const OrdersView: React.FC = () => {
  const [model, setModel] = useState<string | null>(null)

  const handlerModel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setModel(event.target.value as string)
  }

  return (
    <>
      <h1 className="admin-page-title">Заказы</h1>
      <div className="content-wrap">
        <div className="content-wrap--header">
          <div className={'selectWrap'}>
            <Select
              label="Модель"
              labelId="labelId-1"
              id="select-1"
              handlerChange={handlerModel}
            >
              {<MenuItem value={''}>{'category.name'}</MenuItem>}
            </Select>
            <Select
              label="Город"
              labelId="labelId-2"
              id="select-2"
              handlerChange={handlerModel}
            >
              {<MenuItem value={''}>{'category.name'}</MenuItem>}
            </Select>
            <Select
              label="Статус"
              labelId="labelId-3"
              id="select-3"
              handlerChange={handlerModel}
            >
              {<MenuItem value={''}>{'category.name'}</MenuItem>}
            </Select>
          </div>
          <ButtonPrimary className={'prymaryBtn'}>Применить</ButtonPrimary>
        </div>
        <div className="content-wrap--body">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
        <div className="content-wrap--footer">
          <ReactPaginate
            previousLabel={<FastRewindIcon />}
            nextLabel={<FastForwardIcon />}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={50}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={(e: any) => console.log(e)}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </>
  )
}
