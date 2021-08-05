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

export const AddCarView: React.FC<TAddCarView> = ({ goBack }) => {
  return (
    <Layout>
      <h1 className="admin-page-title">Карточка автомобиля</h1>
      <div className={styles.container}>
        <div className={styles.carRow}>
          <img src={stabImg} alt="Картинка автомобиля" />
          <p className={styles.carName}>Hyndai, i30 N</p>
          <p className={styles.carCategoty}>Компакт-кар</p>
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
            <p className={styles.description}>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <div className={styles.carSettingRow}>
          <h2>Настройки автомобиля</h2>
          <div className={styles.settingWrap}>
            <div className={styles.settingItemsWrap}>
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-1"
                label="Категория"
                onChange={() => console.log('onChange')}
              />
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-2"
                label="Модель автомобиля"
                onChange={() => console.log('onChange')}
              />
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-3"
                label="Номер автомобиля"
                onChange={() => console.log('onChange')}
              />
              <div className={styles.descriptCar}>
                <p>Описание</p>
                <textarea name="descriptCar" id="descriptCar"></textarea>
              </div>
            </div>

            <div className={styles.settingItemsWrap}>
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-4"
                label="Количество топлива"
                onChange={() => console.log('onChange')}
              />
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-5"
                label="Минимальная цена"
                onChange={() => console.log('onChange')}
              />
              <InputVsLabel
                classLabel={styles.settingLabel}
                classInput={styles.settingInput}
                id="row-6"
                label="Максимальная цена"
                onChange={() => console.log('onChange')}
              />
              <div className={styles.addColor}>
                <InputVsLabel
                  classLabel={styles.settingLabel}
                  classInput={styles.settingInput}
                  id="row-7"
                  label="Доступные цвета"
                  onChange={() => console.log('onChange')}
                />
                <button>+</button>
              </div>
              <div className={styles.colorList}>
                <p className={styles.colorItem}>Красный</p>
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
