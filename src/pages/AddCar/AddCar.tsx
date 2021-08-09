import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { AddCarView } from './AddCarView'
import crud from '../../utils/api/crud'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { carCategorySelector } from '../../store/carCategory/carCategorySelector'
import { carCategoryAction } from '../../store/carCategory/carCategoryAction'
import { TCarCategory } from '../../store/carCategory'
import { TCar } from '../../store/cars'

export const AddCar: React.FC = () => {
  const paramId: { id: string } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const {
    data: carCategories,
    fetchingState: fetchingCarCategory,
  } = useSelector(carCategorySelector)

  const [car, setCar] = useState<TCar | null>(null)
  const [_carCategories, set_CarCategoriies] = useState<TCarCategory[]>([])
  const [selectCarCategory, setSelectCarCategory] = useState<
    string | undefined
  >('')
  const [carName, setCarName] = useState('')
  const [carNumber, setCarNumber] = useState('')
  const [_description, set_Description] = useState('')
  const [_priceMax, set_PriceMax] = useState(0)
  const [_priceMin, set_PriceMin] = useState(0)
  const [_tank, set_Tank] = useState(0)
  const [_colors, set_Colors] = useState<string[]>([])
  const [_color, set_Color] = useState<string>('')

  const goBack = () => history.goBack()

  const handleCarCategory = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectCarCategory(event.target.value as string)
  }
  const handlerCarName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCarName(e.target.value)
  const handlerCarNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCarNumber(e.target.value)
  const handlerDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    set_Description(e.target.value)
  const handlerMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) =>
    set_PriceMax(+e.target.value.replace(/\D/g, '').substr(0, 9))
  const handlerMinPrice = (e: React.ChangeEvent<HTMLInputElement>) =>
    set_PriceMin(+e.target.value.replace(/\D/g, '').substr(0, 9))
  const handlerTank = (e: React.ChangeEvent<HTMLInputElement>) =>
    set_Tank(+e.target.value.replace(/\D/g, '').substr(0, 3))
  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) =>
    set_Color(e.target.value)

  const addColor = () => {
    if (_color.length > 1) {
      set_Colors([..._colors, _color])
      set_Color('')
    }
  }

  const removeColor = (id: number) => {
    let colors = _colors
    if (id > -1) {
      colors.splice(id, 1)
    }
    set_Colors([...colors])
  }

  useEffect(() => {
    if (paramId.id) {
      crud.getCar(paramId.id).then((data) => {
        setCar(data)
      })
    }
  }, [paramId.id])

  useEffect(() => {
    if (fetchingCarCategory === FetchingStateTypes.none) {
      dispatch(carCategoryAction.list())
    }
  }, [dispatch, fetchingCarCategory])

  useEffect(() => {
    if (carCategories) {
      set_CarCategoriies(carCategories)
    }
  }, [carCategories])
  useEffect(() => {
    if (car) {
      setSelectCarCategory(car.categoryId ? car.categoryId.id : undefined)
      setCarName(car.name)
      setCarNumber(car.number)
      set_Description(car.description)
      set_PriceMax(car.priceMax)
      set_PriceMin(car.priceMin)
      set_Tank(car.tank)
      set_Colors(car.colors)

      console.log('car -', car)
    }
  }, [car])

  return (
    <AddCarView
      handleCarCategory={handleCarCategory}
      selectCarCategory={selectCarCategory && car ? selectCarCategory : ''}
      carCategories={_carCategories}
      goBack={goBack}
      carName={carName}
      carNumber={carNumber}
      description={_description}
      priceMax={_priceMax}
      priceMin={_priceMin}
      tank={_tank}
      colors={_colors}
      color={_color}
      handlerCarName={handlerCarName}
      handlerCarNumber={handlerCarNumber}
      handlerDescription={handlerDescription}
      handlerMaxPrice={handlerMaxPrice}
      handlerMinPrice={handlerMinPrice}
      handlerTank={handlerTank}
      handleColor={handleColor}
      addColor={addColor}
      removeColor={removeColor}
    />
  )
}
