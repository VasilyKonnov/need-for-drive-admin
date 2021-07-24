import { Layout } from '../../components'
import { CitiesAndStreetsListView } from './CitiesAndStreetsListView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { citiesSelector } from '../../store/cities/citiesSelector'
import { citiesAction } from '../../store/cities/citiesAction'
import { cityPointsAction } from './../../store/cityPoints/cityPointsAction'
import { cityPointsSelector } from '../../store/cityPoints/cityPointsSelector'

export const CitiesAndStreetsList: React.FC = () => {
  const dispatch = useDispatch()
  const { data: cities, fetchingState: fetchingStateCities } = useSelector(
    citiesSelector,
  )
  const {
    data: cityPoints,
    fetchingState: fetchingStateCityPoints,
  } = useSelector(cityPointsSelector)
  const [isOpenCity, setIsOpenCity] = useState(false)
  const [isOpenStreet, setIsOpenStreet] = useState(false)
  const [isEditStreet, setIsEditStreet] = useState(false)
  const [isEditCity, setIsEditCity] = useState(false)

  const handleOpenModalCity = () => {
    setIsOpenCity(true)
  }
  const handleCloseModalCity = () => {
    setIsOpenCity(false)
    setIsEditCity(false)
  }
  const handleOpenModalStreet = () => {
    setIsOpenStreet(true)
  }
  const handleCloseModalStreet = () => {
    setIsOpenStreet(false)
    setIsEditStreet(false)
  }
  const handleEditStreet = () => {
    setIsOpenStreet(true)
    setIsEditStreet(true)
  }
  const handleEditCity = () => {
    setIsOpenCity(true)
    setIsEditCity(true)
  }
  useEffect(() => {
    if (fetchingStateCities === FetchingStateTypes.none) {
      dispatch(citiesAction.list())
    }
  }, [dispatch, fetchingStateCities, cities])

  useEffect(() => {
    if (fetchingStateCityPoints === FetchingStateTypes.none) {
      dispatch(cityPointsAction.list())
    }
    if (cityPoints) {
      cityPoints.map((point) => {
        return console.log(
          'point.cityId.name ',
          point.cityId ? point.cityId.name : '---',
        )
      })
    }
  }, [dispatch, fetchingStateCityPoints, cityPoints])

  return (
    <Layout>
      <CitiesAndStreetsListView
        isOpenCity={isOpenCity}
        isOpenStreet={isOpenStreet}
        isEditStreet={isEditStreet}
        isEditCity={isEditCity}
        handleOpenModalCity={handleOpenModalCity}
        handleCloseModalCity={handleCloseModalCity}
        handleOpenModalStreet={handleOpenModalStreet}
        handleCloseModalStreet={handleCloseModalStreet}
        handleEditStreet={handleEditStreet}
        handleEditCity={handleEditCity}
        cities={cities}
        cityPoints={cityPoints}
        fetchingStateCities={fetchingStateCities}
        fetchingStateCityPoints={fetchingStateCityPoints}
      />
    </Layout>
  )
}
