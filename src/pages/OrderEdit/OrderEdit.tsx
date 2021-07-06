import { useState } from 'react'
import { ButtonPrimary, ButtonSecondary, Select } from '../../components'
import { Layout } from './../../components/Layout/Layout'
import { Grid } from '@material-ui/core'
import './OrderEdit.scss'

const data = ['раз', 'два', 'три', 'четыре', 'пять']

export const OrderEdit = () => {
  const [model, setModel] = useState<string | null>(null)

  const handlerModel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setModel(event.target.value as string)
  }
  return (
    <Layout>
      <h1 className="admin-page-title">Список машин</h1>
      <div className="content-wrap">
        <div className="content-wrap--header">
          <p>Заказ: 123</p>
        </div>
        <div className="content-wrap--body">
          <Grid container className="gridContainer">
            <Grid item xs={12} sm={6} className={'gridItem '}>
              <Select
                label="Город"
                labelId="labelId-1"
                id="select-1"
                data={data}
                handlerChange={handlerModel}
              />
              <Select
                label="Пункт выдачи"
                labelId="labelId-1"
                id="select-1"
                data={data}
                handlerChange={handlerModel}
              />
              <Select
                label="Статус"
                labelId="labelId-1"
                id="select-1"
                data={data}
                handlerChange={handlerModel}
              />
              <Select
                label="Тариф"
                labelId="labelId-1"
                id="select-1"
                data={data}
                handlerChange={handlerModel}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={'gridItem '}>
              <Select
                label="Начало аренды"
                labelId="labelId-1"
                id="select-1"
                data={data}
                handlerChange={handlerModel}
              />
              <Select
                label="Конец аренды"
                labelId="labelId-1"
                id="select-1"
                data={data}
                handlerChange={handlerModel}
              />
              <div>Цвет машины</div>
              <div>Дополнительно</div>
              <div>Цена</div>
            </Grid>
          </Grid>
        </div>
        <div className="content-wrap--footer edit-order-footer">
          <ButtonPrimary className="edit-order-footer--btn-primary">
            Применить
          </ButtonPrimary>
          <ButtonSecondary className="edit-order-footer--btn-secondary ">
            Отменить
          </ButtonSecondary>
        </div>
      </div>
    </Layout>
  )
}
