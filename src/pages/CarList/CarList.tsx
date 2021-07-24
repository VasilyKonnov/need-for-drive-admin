import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Layout, Spinner } from '../../components'
import { CarListView } from './CarListView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { carsSelector } from '../../store/cars/carsSelector'
import { carsAction } from '../../store/cars/carsAction'
import { TCar } from '../../store/cars'
import { perPage, routes } from '../../constans/constans'
import { carCategorySelector } from '../../store/carCategory/carCategorySelector'
import { carCategoryAction } from '../../store/carCategory/carCategoryAction'

export const CarList: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { data: cars, fetchingState: fetchingStateCars } = useSelector(
    carsSelector,
  )
  const {
    data: carsCategoty,
    fetchingState: fetchingStateCarsCategory,
  } = useSelector(carCategorySelector)

  const [_category, setCategory] = useState<string | null>(null)
  const [_cars, set_Cars] = useState<TCar[]>([])
  const [carsState, setCarsState] = useState<TCar[]>([])
  const [filteredCars, setFilteredCars] = useState<TCar[] | null>([])
  const [amountPages, setAmountPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const handlePaginationClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1)
  }
  const handlerCategory = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string)
  }
  const addCar = () => {
    history.push('/add-car')
  }
  const handleFilterCategory = () => {
    if (_category && _category.length > 0 && carsState.length > 0) {
      const data = carsState.filter((car) => {
        return car.categoryId && car.categoryId.id === _category
      })
      if (data.length > 0) {
        setFilteredCars(data)
      } else {
        setFilteredCars(null)
      }
    } else {
      setFilteredCars(carsState)
    }
  }

  useEffect(() => {
    if (fetchingStateCars === FetchingStateTypes.none) {
      dispatch(carsAction.list())
    }
  }, [dispatch, fetchingStateCars, cars])

  useEffect(() => {
    if (fetchingStateCarsCategory === FetchingStateTypes.none) {
      dispatch(carCategoryAction.list())
    }
  }, [dispatch, fetchingStateCarsCategory, carsCategoty])

  useEffect(() => {
    if (cars) {
      setCarsState(cars)
    }
  }, [cars])

  useEffect(() => {
    const lastCarIndex = currentPage * perPage
    const firstCarIndex = lastCarIndex - perPage
    if (filteredCars && filteredCars.length > 0) {
      setAmountPages(filteredCars.length / perPage)
      set_Cars(filteredCars.slice(firstCarIndex, lastCarIndex))
    } else if (!filteredCars) {
      set_Cars([])
    } else {
      setAmountPages(carsState.length / perPage)
      set_Cars(carsState.slice(firstCarIndex, lastCarIndex))
    }
  }, [filteredCars, currentPage, carsState])

  return (
    <Layout>
      {fetchingStateCars === FetchingStateTypes.loading ? <Spinner /> : null}
      {fetchingStateCars === FetchingStateTypes.success ? (
        <CarListView
          amountPages={amountPages}
          cars={_cars}
          handlerCategory={handlerCategory}
          addCar={addCar}
          handlePaginationClick={handlePaginationClick}
          carsCategoty={carsCategoty}
          handleFilterCategory={handleFilterCategory}
        />
      ) : null}
      {fetchingStateCars === FetchingStateTypes.failed ? (
        <Redirect to={routes.ERROR_500} />
      ) : null}
    </Layout>
  )
}
