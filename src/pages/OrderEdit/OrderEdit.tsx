import { useState } from 'react'
import { ButtonPrimary, ButtonSecondary, Select } from '../../components'
import { Layout } from './../../components/Layout/Layout'
import { Grid } from '@material-ui/core'
import DatePicker from 'react-datepicker'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import './OrderEdit.scss'
import 'react-datepicker/dist/react-datepicker.css'
import './datePickerStyled.scss'
import Radio from '@material-ui/core/Radio'

const data = ['раз', 'два', 'три', 'четыре', 'пять']

export const OrderEdit = () => {
  const [model, setModel] = useState<string | null>(null)
  const [isFullTank, setIsFullTank] = useState(true)
  const [isBabyChair, setIsBabyChair] = useState(true)
  const [isRightHandDrive, setIsRightHandDrive] = useState(true)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [selectedValue, setSelectedValue] = useState('a')

  const handleTank = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFullTank(event.target.checked)
  }
  const handleBabyChair = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBabyChair(event.target.checked)
  }
  const handleRightHandDrive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRightHandDrive(event.target.checked)
  }

  const handlerModel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setModel(event.target.value as string)
  }

  const handleRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  const filterPassedTime = (time: any) => {
    const currentDate = new Date()
    const selectedDate = new Date(time)
    return currentDate.getTime() < selectedDate.getTime()
  }

  const filterPassedEndTime = (time: any) => {
    const currentDate = new Date()
    const selectedDate = new Date(time)
    if (startDate) {
      // @ts-ignore
      return startDate < selectedDate.getTime()
    } else {
      return currentDate.getTime() < selectedDate.getTime()
    }
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
              <div className="wrapperDate">
                <span>Аренда от:</span>
                <DatePicker
                  minDate={startDate ? startDate : new Date()}
                  placeholderText="Введите дату и время"
                  showTimeSelect
                  dateFormat={'dd-MM-yyyy, hh:mm'}
                  filterTime={filterPassedTime}
                  selected={startDate}
                  onChange={(date: any) => {
                    date ? setStartDate(date.getTime()) : setStartDate(null)
                    setEndDate(null)
                  }}
                  isClearable
                />
              </div>
              <div className="wrapperDate">
                <span>Аренда до:</span>
                <DatePicker
                  minDate={startDate ? startDate : new Date()}
                  placeholderText="Введите дату и время"
                  showTimeSelect
                  dateFormat={'dd-MM-yyyy, hh:mm'}
                  filterTime={filterPassedEndTime}
                  selected={endDate}
                  onChange={(date: any) =>
                    date ? setEndDate(date.getTime()) : setEndDate(null)
                  }
                  isClearable
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} className={'gridItem '}>
              <div className="additionalServices">
                <p className="additionalServices--title">Цвет</p>
                <FormControlLabel
                  className="LabelRadioBtn"
                  value="female"
                  control={
                    <Radio
                      checked={selectedValue === 'a'}
                      onChange={handleRadioButton}
                      value="a"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'A' }}
                      className="radioButton"
                    />
                  }
                  label="Синий"
                />
                <FormControlLabel
                  className="LabelRadioBtn"
                  value="female"
                  control={
                    <Radio
                      checked={selectedValue === 'b'}
                      onChange={handleRadioButton}
                      value="b"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'B' }}
                      className="radioButton"
                    />
                  }
                  label="Красный"
                />
                <FormControlLabel
                  className="LabelRadioBtn"
                  value="female"
                  control={
                    <Radio
                      checked={selectedValue === 'd'}
                      onChange={handleRadioButton}
                      value="d"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'D' }}
                      className="radioButton"
                    />
                  }
                  label="Зелёный"
                />
                <FormControlLabel
                  className="LabelRadioBtn"
                  value="female"
                  control={
                    <Radio
                      checked={selectedValue === 'e'}
                      onChange={handleRadioButton}
                      value="e"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'E' }}
                      className="radioButton"
                    />
                  }
                  label="Белый"
                />
              </div>
              <div className="additionalServices">
                <p className="additionalServices--title">Дополнительно</p>
                <FormControlLabel
                  className="LabelCheckboxPrimary"
                  control={
                    <Checkbox
                      className="checkboxPrimary"
                      checked={isFullTank}
                      color="primary"
                      onChange={handleTank}
                    />
                  }
                  label="Полный бак"
                />
                <FormControlLabel
                  className="LabelCheckboxPrimary"
                  control={
                    <Checkbox
                      className="checkboxPrimary"
                      checked={isBabyChair}
                      color="primary"
                      onChange={handleBabyChair}
                    />
                  }
                  label="Детское кресло"
                />
                <FormControlLabel
                  className="LabelCheckboxPrimary"
                  control={
                    <Checkbox
                      className="checkboxPrimary"
                      checked={isRightHandDrive}
                      color="primary"
                      onChange={handleRightHandDrive}
                    />
                  }
                  label="Правый руль"
                />
              </div>
              <div className="additionalServices">
                <p className="additionalServices--title">
                  Цена: <b> 7000 р.</b>
                </p>
              </div>
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
