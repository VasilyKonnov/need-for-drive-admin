import { ButtonPrimary, Select } from '../../components'
import { useState } from 'react'
import styles from './Orders.module.scss'

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
          <div>
            <Select
              label="Модель"
              labelId="labelId-1"
              id="select-1"
              data={data}
              handlerChange={handlerModel}
            />
            <Select
              label="Город"
              labelId="labelId-2"
              id="select-2"
              data={data}
              handlerChange={handlerModel}
            />
            <Select
              label="Статус"
              labelId="labelId-3"
              id="select-3"
              data={data}
              handlerChange={handlerModel}
            />
          </div>
          <ButtonPrimary>Применить</ButtonPrimary>
        </div>
        <div className="content-wrap--body">
          <p>content</p>
        </div>
        <div className="content-wrap--footer"></div>
      </div>
    </>
  )
}
