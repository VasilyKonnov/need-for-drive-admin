import {
  ButtonDefault,
  ButtonPrimary,
  InputVsLabel,
  Layout,
  ProgressLine,
} from '../../components'
import stabImg from '../../assets/image/placeholder.png'
import styles from './AddCar.module.scss'
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary'
import { TAddCarView } from './AddCarTypes'
import { SelectVsLabel } from './../../components/SelectVsLabel/SelectVsLabel'
import { TCarCategory } from '../../store/carCategory'
import { MenuItem } from '@material-ui/core'
import './style.scss'
import classNames from 'classnames'
import { useEffect } from 'react'

export const AddCarView: React.FC<TAddCarView> = ({
  goBack,
  carCategories,
  handleCarCategory,
  selectCarCategory,
  carName,
  carNumber,
  description,
  priceMax,
  priceMin,
  tank,
  color,
  colors,
  handlerCarName,
  handlerCarNumber,
  handlerDescription,
  handlerMaxPrice,
  handlerMinPrice,
  handlerTank,
  handleColor,
  addColor,
  removeColor,
}) => {
  const classSelect = classNames(styles.select, 'add-car-select')

  const _carCategory =
    selectCarCategory && carCategories ? selectCarCategory : undefined

  const selectCategory = carCategories.find(
    (category: TCarCategory) => category.id === selectCarCategory,
  )
  const _selectCarCategory = selectCategory ? selectCategory.name : ''

  useEffect(() => {
    console.log('_carCategory - ', _carCategory)
  }, [_carCategory])

  return (
    <Layout>
      <h1 className="admin-page-title">Карточка автомобиля</h1>
      <div className={styles.container}>
        <div className={styles.carRow}>
          <img src={stabImg} alt="Картинка автомобиля" />
          <p className={styles.carName}>{carName ? carName : ''}</p>
          <p className={styles.carCategoty}>{_selectCarCategory}</p>
          <form>
            <input type="text" placeholder="Выберите файл" />
            <label htmlFor="car-img">
              Обзор
              <input id="car-img" type="file" hidden />
            </label>
          </form>

          <div className={styles.progress}>
            <p className={styles.labelProgres}>
              <span>Заполненно</span>
              <span className={styles.interest}>75%</span>
            </p>
            <ProgressLine value={75} />
          </div>
          <div className={styles.descriptionWrap}>
            <p className={styles.descriptionLabel}>Описание</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className={styles.carSettingRow}>
          <h2>Настройки автомобиля</h2>
          <div className={styles.settingWrap}>
            <div className={styles.settingItemsWrap}>
              <SelectVsLabel
                className={classSelect}
                label="Котегория"
                labelId="labelId-1"
                id="select-1"
                defaultValue={_carCategory}
                handlerChange={handleCarCategory}
              >
                {carCategories.map((category: TCarCategory, id: number) => {
                  return (
                    <MenuItem key={id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  )
                })}
              </SelectVsLabel>

              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-2"
                label="Модель автомобиля"
                onChange={handlerCarName}
                value={carName}
              />
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-3"
                label="Номер автомобиля"
                onChange={handlerCarNumber}
                value={carNumber}
              />
              <div className={styles.descriptCar}>
                <p>Описание</p>
                <textarea
                  name="descriptCar"
                  id="descriptCar"
                  value={description}
                  onChange={handlerDescription}
                />
              </div>
            </div>

            <div className={styles.settingItemsWrap}>
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-4"
                label="Количество топлива %"
                onChange={handlerTank}
                value={tank}
              />
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-5"
                label="Минимальная цена"
                onChange={handlerMinPrice}
                value={priceMin}
              />
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-6"
                label="Максимальная цена"
                onChange={handlerMaxPrice}
                value={priceMax}
              />
              <div className={styles.addColor}>
                <InputVsLabel
                  classLabel={styles.settingLabel}
                  classInput={styles.settingInput}
                  id="row-7"
                  label="Доступные цвета"
                  onChange={handleColor}
                  value={color}
                />
                <button onClick={addColor}>+</button>
              </div>
              <div className={styles.colorList}>
                {colors
                  ? colors.map((color, id) => {
                      return (
                        <p
                          key={id}
                          className={styles.colorItem}
                          onClick={() => removeColor(id)}
                        >
                          {color}
                        </p>
                      )
                    })
                  : ''}
              </div>
            </div>
          </div>
          <div className={styles.buttonWrap}>
            <div className={styles.leftCol}>
              <ButtonPrimary className={styles.btnPrimary}>
                Сохранить
              </ButtonPrimary>
              <ButtonDefault onClick={goBack} className={styles.btnDefault}>
                Отменить
              </ButtonDefault>
            </div>
            <ButtonSecondary className={styles.btnSecondary}>
              Удалить
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </Layout>
  )
}
