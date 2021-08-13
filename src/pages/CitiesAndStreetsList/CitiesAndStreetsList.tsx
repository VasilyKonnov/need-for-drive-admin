import { Layout } from '../../components'
import { CitiesAndStreetsListView } from './CitiesAndStreetsListView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { citiesSelector } from '../../store/cities/citiesSelector'
import { citiesAction } from '../../store/cities/citiesAction'
import { cityPointsAction } from './../../store/cityPoints/cityPointsAction'
import { cityPointsSelector } from '../../store/cityPoints/cityPointsSelector'
import crud from '../../utils/api/crud'

export const CitiesAndStreetsList: React.FC = () => {
  const dispatch = useDispatch()
  const { data: cities, fetchingState: fetchingStateCities } = useSelector(
    citiesSelector,
  )
  const {
    data: cityPoints,
    fetchingState: fetchingStateCityPoints,
  } = useSelector(cityPointsSelector)
  const [isCityAdd, setIsCityAdd] = useState(false)
  const [isCityEdit, setIsCityEdit] = useState(false)
  const [isStreetAdd, setIsStreetEdd] = useState(false)
  const [isStreetEdit, setIsStreetEdit] = useState(false)
  const [cityAdd, setCityAdd] = useState('')
  const [cityEdit, setCityEdit] = useState('')
  const [cityEditId, setCityEditId] = useState('')

  const [pointCityAdd, setPointCityAdd] = useState('')
  const [pointStreetAdd, setPointStreetAdd] = useState('')
  const [pointAdd, setPointAdd] = useState('')

  const [pointCityEdit, setPointCityEdit] = useState('')
  const [pointStreetEdit, setPointStreetEdit] = useState('')
  const [pointEdit, setPointEdit] = useState('')
  const [pointEditId, setPointEditId] = useState('')

  const toggleModalCityAdd = () => {
    setIsCityAdd(!isCityAdd)
    setCityAdd('')
  }
  const openModalCityEdit = (id: string) => {
    setCityEditId(id)
    setIsCityEdit(true)
    const city = cities.find((city) => city.id === id)
    if (city) setCityEdit(city.name)
  }
  const toggleModalCityEdit = () => {
    setIsCityEdit(!isCityEdit)
    setCityEdit('')
    setCityEditId('')
  }

  const toggleModalStreetAdd = () => {
    setIsStreetEdd(!isStreetAdd)
    setPointCityAdd('')
    setPointStreetAdd('')
    setPointAdd('')
  }
  const openModalStreetEdit = (id: string) => {
    setPointEditId(id)
    setIsStreetEdit(true)
    const street = cityPoints.find((street) => street.id === id)
    if (street) {
      setPointCityEdit(street.cityId ? street.cityId.id : '---')
      setPointStreetEdit(street ? street.address : '---')
      setPointEdit(street ? street.name : '---')
    }
  }
  const toggleModalStreetEdit = () => {
    setIsStreetEdit(!isStreetEdit)
    setPointCityEdit('')
    setPointStreetEdit('')
    setPointEdit('')
    setPointEditId('')
  }

  const handleCityAdd = (e: React.FormEvent<HTMLInputElement>) => {
    setCityAdd(e.currentTarget.value)
  }
  const handleCityEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setCityEdit(e.currentTarget.value)
  }

  const handlePointCityAdd = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPointCityAdd(event.target.value as string)
  }
  const handlePointStreetAdd = (e: React.FormEvent<HTMLInputElement>) => {
    setPointStreetAdd(e.currentTarget.value)
  }
  const handlePointAdd = (e: React.FormEvent<HTMLInputElement>) => {
    setPointAdd(e.currentTarget.value)
  }

  const handlePointCityEdit = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setPointCityEdit(event.target.value as string)
  }

  const handlePointStreetEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setPointStreetEdit(e.currentTarget.value)
  }
  const handlePointEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setPointEdit(e.currentTarget.value)
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
  }, [dispatch, fetchingStateCityPoints, cityPoints])

  const addCityFunc = () => {
    if (cityAdd) {
      crud
        .postCities({
          name: cityAdd,
        })
        .then((response) => {
          if (response.status < 400) {
            dispatch(citiesAction.remove())
            toggleModalCityAdd()
          }
        })
    }
  }
  const editCityFunc = () => {
    crud
      .putCities(cityEditId, {
        name: cityEdit,
      })
      .then((response) => {
        if (response.status < 400) {
          dispatch(citiesAction.remove())
          toggleModalCityEdit()
        }
      })
  }
  const removeCityFunc = () => {
    crud.deleteCities(cityEditId).then((response) => {
      if (response.status < 400) {
        dispatch(citiesAction.remove())
        toggleModalCityEdit()
      }
    })
  }

  const addCityPointFunc = () => {
    let _city = cities.find((city) => city.id === pointCityAdd)
    if (_city) {
      crud
        .postCityPoints({
          name: pointAdd,
          cityId: {
            id: _city.id,
            name: _city.name,
          },
          address: pointStreetAdd,
        })
        .then((response) => {
          if (response.status < 400) {
            toggleModalStreetAdd()
            dispatch(cityPointsAction.remove())
          }
        })
    }
  }

  const editCityPointFunc = () => {
    let _city = cities.find((city) => city.id === pointCityEdit)
    if (_city) {
      crud
        .putCityPoints(pointEditId, {
          name: pointEdit,
          cityId: {
            id: _city.id,
            name: _city.name,
          },
          address: pointStreetEdit,
        })
        .then((response) => {
          if (response.status < 400) {
            toggleModalStreetEdit()
            dispatch(cityPointsAction.remove())
          }
        })
    }
  }
  const removeCityPointFunc = () => {
    crud.deleteCityPoints(pointEditId).then((response) => {
      if (response.status < 400) {
        toggleModalStreetEdit()
        dispatch(cityPointsAction.remove())
      }
    })
  }

  return (
    <Layout>
      <CitiesAndStreetsListView
        isCityAdd={isCityAdd}
        toggleModalCityAdd={toggleModalCityAdd}
        cityAdd={cityAdd}
        handleCityAdd={handleCityAdd}
        addCityFunc={addCityFunc}
        editCityFunc={editCityFunc}
        removeCityFunc={removeCityFunc}
        // ---
        isCityEdit={isCityEdit}
        toggleModalCityEdit={toggleModalCityEdit}
        cityEdit={cityEdit}
        handleCityEdit={handleCityEdit}
        openModalCityEdit={openModalCityEdit}
        // ---
        isStreetAdd={isStreetAdd}
        toggleModalStreetAdd={toggleModalStreetAdd}
        handlePointCityAdd={handlePointCityAdd}
        pointCityAdd={pointCityAdd}
        handlePointStreetAdd={handlePointStreetAdd}
        pointStreetAdd={pointStreetAdd}
        handlePointAdd={handlePointAdd}
        pointAdd={pointAdd}
        addCityPointFunc={addCityPointFunc}
        editCityPointFunc={editCityPointFunc}
        removeCityPointFunc={removeCityPointFunc}
        // ---
        isStreetEdit={isStreetEdit}
        toggleModalStreetEdit={toggleModalStreetEdit}
        handlePointCityEdit={handlePointCityEdit}
        pointCityEdit={pointCityEdit}
        handlePointStreetEdit={handlePointStreetEdit}
        pointStreetEdit={pointStreetEdit}
        handlePointEdit={handlePointEdit}
        pointEdit={pointEdit}
        openModalStreetEdit={openModalStreetEdit}
        // ---
        cities={cities}
        cityPoints={cityPoints}
        fetchingStateCities={fetchingStateCities}
        fetchingStateCityPoints={fetchingStateCityPoints}
      />
    </Layout>
  )
}
