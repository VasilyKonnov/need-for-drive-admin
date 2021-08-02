import { ButtonPrimary, ButtonSecondary, Spinner } from '../../components'
import { Layout } from './../../components/Layout/Layout'
import { Grid, MenuItem } from '@material-ui/core'
import DatePicker from 'react-datepicker'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { SelectVsLabel } from './../../components/SelectVsLabel/SelectVsLabel'
import { TOrderEditView } from './OrderEditTypes'
import 'react-datepicker/dist/react-datepicker.css'
import './datePickerStyled.scss'
import './OrderEdit.scss'
import { useEffect } from 'react'

export const OrderEditView: React.FC<TOrderEditView> = ({
  order,
  handleCity,
  handlePoint,
  handleOrderStatus,
  handleRate,
  setStartDate,
  setEndDate,
  filterPassedEndTime,
  filterPassedTime,
  selectedColor,
  handleRadioButton,
  isFullTank,
  handleTank,
  isBabyChair,
  handleBabyChair,
  isRightHandDrive,
  handleRightHandDrive,
}) => {
  const orderId = order ? order.id : ''
  const orderPrice = order ? order.price : ''
  const orderCity = order ? order.cityId : { name: '', id: '' }
  const orderPoint = order ? order.pointId : { address: '', name: '', id: '' }
  const orderStatus = order ? order.orderStatusId : { name: '', id: '' }
  const orderRate = order ? order.rateId : null
  const startDate = order ? new Date(order.dateFrom) : undefined
  const endDate = order ? new Date(order.dateTo) : undefined
  const orderColor = selectedColor ? selectedColor.toLowerCase() : 'любой'

  return (
    <Layout>
      <h1 className="admin-page-title">Редактировать заказ</h1>
      {order ? (
        <div className="content-wrap">
          <div className="content-wrap--header">
            <p>Заказ: {orderId}</p>
          </div>
          <div className="content-wrap--body">
            <Grid container className="gridContainer">
              <Grid item xs={12} sm={6} className={'gridItem '}>
                <SelectVsLabel
                  label="Город"
                  labelId="labelId-1"
                  id="select-1"
                  handlerChange={handleCity}
                  value={orderCity ? orderCity.id : undefined}
                >
                  <MenuItem value={orderCity ? orderCity.id : undefined}>
                    {orderCity ? orderCity.name : undefined}
                  </MenuItem>

                  <MenuItem value="2">{'category.name - 2'}</MenuItem>
                </SelectVsLabel>
                <SelectVsLabel
                  label="Пункт выдачи"
                  labelId="labelId-1"
                  id="select-1"
                  handlerChange={handlePoint}
                  value={orderPoint ? orderPoint.id : undefined}
                >
                  <MenuItem value={orderPoint ? orderPoint.id : ''}>
                    {orderPoint
                      ? orderPoint.address + ' ' + orderPoint.name
                      : ''}
                  </MenuItem>
                </SelectVsLabel>
                <SelectVsLabel
                  label="Статус"
                  labelId="labelId-1"
                  id="select-1"
                  handlerChange={handleOrderStatus}
                  value={orderStatus ? orderStatus.id : undefined}
                >
                  {
                    <MenuItem value={orderStatus ? orderStatus.id : ''}>
                      {orderStatus ? orderStatus.name : ''}
                    </MenuItem>
                  }
                </SelectVsLabel>
                <SelectVsLabel
                  label="Тариф"
                  labelId="labelId-1"
                  id="select-1"
                  handlerChange={handleRate}
                  value={orderRate ? orderRate.id : undefined}
                >
                  {
                    <MenuItem value={orderRate ? orderRate.id : ''}>
                      {orderRate ? orderRate.price : ''}
                    </MenuItem>
                  }
                </SelectVsLabel>
                <div className="wrapperDate">
                  <span>Аренда от</span>
                  <DatePicker
                    minDate={startDate ? startDate : new Date()}
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
                  <span>Аренда до</span>
                  <DatePicker
                    minDate={startDate ? startDate : new Date()}
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

                  {order.carId && order.carId.colors.length > 0 ? (
                    order.carId.colors.map((color: string, id: number) => {
                      const _color = color.toLowerCase()
                      return (
                        <FormControlLabel
                          className="LabelRadioBtn"
                          value={_color}
                          control={
                            <Radio
                              checked={orderColor === _color}
                              onChange={handleRadioButton}
                              value={_color}
                              name="radio-button"
                              inputProps={{ 'aria-label': 'A' }}
                              className="radioButton"
                            />
                          }
                          label={_color}
                        />
                      )
                    })
                  ) : (
                    <FormControlLabel
                      className="LabelRadioBtn"
                      value={orderColor}
                      control={
                        <Radio
                          checked={true}
                          onChange={handleRadioButton}
                          value={orderColor}
                          name="radio-button"
                          inputProps={{ 'aria-label': 'A' }}
                          className="radioButton"
                        />
                      }
                      label={orderColor}
                    />
                  )}
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
                    Цена: <b> {orderPrice} р.</b>
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
      ) : (
        <Spinner />
      )}
    </Layout>
  )
}
