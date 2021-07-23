import { Layout } from '../../components'
import { TariffsView } from './TariffsView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { ratesSelector } from '../../store/rates/ratesSelector'
import { ratesAction } from '../../store/rates/ratesAction'
import { rateTypesSelector } from '../../store/rateTypes/rateTypesSelector'
import { rateTypesAction } from '../../store/rateTypes/rateTypesAction'

export const Tariffs: React.FC = () => {
  const dispatch = useDispatch()
  const { data: rates, fetchingState: fetchingStateRates } = useSelector(
    ratesSelector,
  )
  const {
    data: rateTypes,
    fetchingState: fetchingStateRateTypes,
  } = useSelector(rateTypesSelector)

  const [isModalRate, setIsModalRate] = useState(false)
  const [isModalRateType, setIsModalRateType] = useState(false)
  const [isEditRate, setIsEditRate] = useState(false)
  const [isEditRateType, setIsEditRateType] = useState(false)

  useEffect(() => {
    if (fetchingStateRates === FetchingStateTypes.none) {
      dispatch(ratesAction.list())
    }
  }, [dispatch, fetchingStateRates, rates])

  useEffect(() => {
    if (fetchingStateRateTypes === FetchingStateTypes.none) {
      dispatch(rateTypesAction.list())
    }
    if (rateTypes) {
    }
  }, [dispatch, fetchingStateRateTypes, rateTypes])

  const handleModalRateOpen = () => {
    setIsModalRate(true)
  }
  const handleModalRateClose = () => {
    setIsModalRate(false)
    setIsEditRate(false)
  }
  const handleModalRateTypeOpen = () => {
    setIsModalRateType(true)
  }
  const handleModalRateTypeClose = () => {
    setIsModalRateType(false)
    setIsEditRateType(false)
  }
  const handleEditRate = () => {
    setIsEditRate(true)
    setIsModalRate(true)
  }
  const handleEditRateType = () => {
    setIsEditRateType(true)
    setIsModalRateType(true)
  }

  return (
    <Layout>
      <TariffsView
        isModalRate={isModalRate}
        isModalRateType={isModalRateType}
        isEditRate={isEditRate}
        isEditRateType={isEditRateType}
        handleModalRateOpen={handleModalRateOpen}
        handleModalRateClose={handleModalRateClose}
        handleModalRateTypeOpen={handleModalRateTypeOpen}
        handleModalRateTypeClose={handleModalRateTypeClose}
        handleEditRate={handleEditRate}
        handleEditRateType={handleEditRateType}
        rates={rates}
        rateTypes={rateTypes}
      />
    </Layout>
  )
}
