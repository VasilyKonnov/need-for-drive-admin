import {
  ButtonPrimary,
  ButtonSecondary,
  Spinner,
  TotalSum,
  Layout,
} from '../../components'
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
import { TCity } from '../../store/cities'
import { TCityPoint } from '../../store/cityPoints'
import { TRate } from '../../store/rates'
import { TOrderStatus } from '../../store/orderStatus'

export const OrderEditView: React.FC<TOrderEditView> = ({
  order,
  handleCity,
  handlePoint,
  handleOrderStatus,
  handleRate,
  startDate,
  endDate,
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
  goBack,
  set_Price,
  cities,
  cityPoints,
  rates,
  orderStatuses,
  rate,
}) => {
  const orderId = order ? order.id : ''
  const orderCity = order ? order.cityId : { name: '', id: '' }
  const orderPoint = order ? order.pointId : { address: '', name: '', id: '' }
  const orderStatus = order ? order.orderStatusId : { name: '', id: '' }
  const orderRate = order ? order.rateId : null
  const orderColor = selectedColor ? selectedColor.toLowerCase() : 'любой'
  let _startDate = startDate ? new Date(startDate) : undefined
  let _endDate = endDate ? new Date(endDate) : undefined

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
                  defaultValue={orderCity ? orderCity.id : undefined}
                >
                  {cities.map((city: TCity) => {
                    return (
                      <MenuItem key={city.id} value={city.id}>
                        {city.name}
                      </MenuItem>
                    )
                  })}
                </SelectVsLabel>
                <SelectVsLabel
                  label="Пункт выдачи"
                  labelId="labelId-1"
                  id="select-2"
                  handlerChange={handlePoint}
                  defaultValue={orderPoint ? orderPoint.id : undefined}
                >
                  {cityPoints.map((cityPoint: TCityPoint) => {
                    return (
                      <MenuItem key={cityPoint.id} value={cityPoint.id}>
                        {cityPoint.name}
                      </MenuItem>
                    )
                  })}
                </SelectVsLabel>
                <SelectVsLabel
                  label="Статус"
                  labelId="labelId-1"
                  id="select-3"
                  handlerChange={handleOrderStatus}
                  defaultValue={orderStatus ? orderStatus.id : undefined}
                >
                  {orderStatuses.map((status: TOrderStatus) => {
                    return (
                      <MenuItem key={status.id} value={status.id}>
                        {status.name}
                      </MenuItem>
                    )
                  })}
                </SelectVsLabel>
                <SelectVsLabel
                  label="Тариф"
                  labelId="labelId-1"
                  id="select-4"
                  handlerChange={handleRate}
                  defaultValue={orderRate ? orderRate.id : undefined}
                >
                  {rates.map((rate: TRate) => {
                    return (
                      <MenuItem key={rate.id} value={rate.id}>
                        {rate.price}
                      </MenuItem>
                    )
                  })}
                </SelectVsLabel>
                <div className="wrapperDate">
                  <span>Аренда от</span>
                  <DatePicker
                    minDate={_startDate ? _startDate : new Date()}
                    showTimeSelect
                    dateFormat={'dd-MM-yyyy, hh:mm'}
                    filterTime={filterPassedTime}
                    selected={_startDate}
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
                    minDate={_startDate ? _startDate : new Date()}
                    showTimeSelect
                    dateFormat={'dd-MM-yyyy, hh:mm'}
                    filterTime={filterPassedEndTime}
                    selected={_endDate}
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
                  <TotalSum
                    selectedRate={rate ? rate : orderRate}
                    startDate={startDate ? startDate : undefined}
                    endDate={endDate ? endDate : undefined}
                    setTotalSumOrder={set_Price}
                    isFullTank={isFullTank}
                    isNeedChildChair={isBabyChair}
                    isRightWheel={isRightHandDrive}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="content-wrap--footer edit-order-footer">
            <ButtonPrimary className="edit-order-footer--btn-primary">
              Применить
            </ButtonPrimary>
            <ButtonSecondary
              onClick={goBack}
              className="edit-order-footer--btn-secondary "
            >
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
