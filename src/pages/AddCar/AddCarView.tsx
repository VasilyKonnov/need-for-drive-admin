import {
  ButtonDefault,
  ButtonPrimary,
  InputVsLabel,
  ProgressLine,
} from '../../components'
import stabImg from '../../assets/image/placeholder.png'
import styles from './AddCar.module.scss'
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary'
import { TAddCarView } from './AddCarTypes'
import { SelectVsLabelAddCar } from './../../components/SelectVsLabelAddCar/SelectVsLabelAddCar'
import { TCarCategory } from '../../store/carCategory'
import { MenuItem } from '@material-ui/core'
import './style.scss'
import classNames from 'classnames'
import { imgUrl } from '../../constans/constans'

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
  originalname,
  handleOriginalname,
  imgCarUrl,
  handleImgUrl,
  setProgressLineResult,
  progressLineResult,
  disablePostBtn,
  addCarData,
  editCarData,
  removeCarData,
  isCreate,
}) => {
  const classSelect = classNames(styles.select, 'add-car-select')

  const _carCategory =
    selectCarCategory && carCategories ? selectCarCategory : undefined

  const selectCategory = carCategories.find(
    (category: TCarCategory) => category.id === selectCarCategory,
  )

  const _selectCarCategory = selectCategory ? selectCategory.name : ''
  const _imgCarUrl =
    imgCarUrl && imgCarUrl.toString().slice(0, 4) === 'data'
      ? imgCarUrl
      : imgUrl + imgCarUrl

  return (
    <>
      <h1 className="admin-page-title">Карточка автомобиля</h1>
      <div className={styles.container}>
        <div className={styles.carRow}>
          <img
            src={_imgCarUrl && imgCarUrl !== undefined ? _imgCarUrl : stabImg}
            alt="Картинка автомобиля"
          />
          <p className={styles.carName}>{carName ? carName : ''}</p>
          <p className={styles.carCategoty}>{_selectCarCategory}</p>
          <form>
            <input
              accept="image/*"
              onChange={handleOriginalname}
              value={originalname}
              type="text"
              placeholder="Выберите файл"
            />
            <label htmlFor="car-img">
              Обзор
              <input onChange={handleImgUrl} id="car-img" type="file" hidden />
            </label>
          </form>

          <div className={styles.progress}>
            <p className={styles.labelProgres}>
              <span>Заполненно</span>
              <span className={styles.interest}>{progressLineResult}%</span>
            </p>
            <ProgressLine
              setProgressLineResult={setProgressLineResult}
              carName={carName.length > 0}
              carNumber={carNumber.length > 0}
              description={description.length > 0}
              priceMax={priceMax > 0}
              priceMin={priceMin > 0}
              tank={tank > 0}
              colors={colors.length > 0}
              imgCarUrl={
                typeof imgCarUrl === 'string' &&
                imgCarUrl.length > 0 &&
                imgCarUrl !== stabImg
              }
              originalname={originalname.length > 0}
            />
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
              <SelectVsLabelAddCar
                className={classSelect}
                label="Котегория"
                labelId="labelId-1"
                id="select-1"
                value={_carCategory}
                handlerChange={handleCarCategory}
              >
                {carCategories.map((category: TCarCategory, id: number) => {
                  return (
                    <MenuItem key={id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  )
                })}
              </SelectVsLabelAddCar>

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
              <ButtonPrimary
                disabled={disablePostBtn}
                className={styles.btnPrimary}
                onClick={isCreate ? addCarData : editCarData}
              >
                Сохранить
              </ButtonPrimary>
              <ButtonDefault onClick={goBack} className={styles.btnDefault}>
                Отменить
              </ButtonDefault>
            </div>
            {!isCreate ? (
              <ButtonSecondary
                onClick={removeCarData}
                className={styles.btnSecondary}
              >
                Удалить
              </ButtonSecondary>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
