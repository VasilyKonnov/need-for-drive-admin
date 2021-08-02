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

  const [isModalRateAdd, setIsModalRateAdd] = useState(false)
  const [isModalRateEdit, setIsModalRateEdit] = useState(false)
  const [addRateName, setAddRateName] = useState('')
  const [addRatePrice, setAddRatePrice] = useState('')
  const [editRateName, setEditRateName] = useState('')
  const [editRatePrice, setEditRatePrice] = useState('')

  const [addRateType, setAddRateType] = useState('')
  const [addRateUnits, setAddRateUnits] = useState('')
  const [editRateType, setEditRateType] = useState('')
  const [editRateUnits, setEditRateUnits] = useState('')

  const [isModalRateTypeAdd, setIsModalRateTypeAdd] = useState(false)
  const [isModalRateTypeEdit, setIsModalRateTypeEdit] = useState(false)

  const handleEditRateName = (e: React.FormEvent<HTMLInputElement>) =>
    setEditRateName(e.currentTarget.value)
  const handleEditRatePrice = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value.replace(/[^\d]/g, '')
    setEditRatePrice(val)
  }
  const handleAddRateName = (e: React.FormEvent<HTMLInputElement>) =>
    setAddRateName(e.currentTarget.value)
  const handleAddRatePrice = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value.replace(/[^\d]/g, '')
    setAddRatePrice(val)
  }

  const handleAddRateType = (e: React.FormEvent<HTMLInputElement>) =>
    setAddRateType(e.currentTarget.value)
  const handleEditRateType = (e: React.FormEvent<HTMLInputElement>) =>
    setEditRateType(e.currentTarget.value)
  const handleAddRateUnits = (e: React.FormEvent<HTMLInputElement>) =>
    setAddRateUnits(e.currentTarget.value)
  const handleEditRateUnits = (e: React.FormEvent<HTMLInputElement>) =>
    setEditRateUnits(e.currentTarget.value)

  const handleModalRateAddToggle = () => {
    setIsModalRateAdd(!isModalRateAdd)
    setAddRateName('')
    setAddRatePrice('')
  }
  const handleModalRateEditToggle = () => {
    setIsModalRateEdit(!isModalRateEdit)
    setEditRateName('')
    setEditRatePrice('')
  }

  const handleModalRateTypeAddToggle = () => {
    setIsModalRateTypeAdd(!isModalRateTypeAdd)
    setAddRateType('')
    setAddRateUnits('')
  }
  const handleModalRateTypeEditToggle = () => {
    setIsModalRateTypeEdit(!isModalRateTypeEdit)
    setEditRateType('')
    setEditRateUnits('')
  }

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

  return (
    <Layout>
      <TariffsView
        addRateName={addRateName}
        addRatePrice={addRatePrice}
        handleAddRateName={handleAddRateName}
        handleAddRatePrice={handleAddRatePrice}
        editRateName={editRateName}
        editRatePrice={editRatePrice}
        handleEditRateName={handleEditRateName}
        handleEditRatePrice={handleEditRatePrice}
        isModalRateAdd={isModalRateAdd}
        isModalRateEdit={isModalRateEdit}
        handleModalRateAddToggle={handleModalRateAddToggle}
        handleModalRateEditToggle={handleModalRateEditToggle}
        // ---
        isModalRateTypeAdd={isModalRateTypeAdd}
        handleModalRateTypeAddToggle={handleModalRateTypeAddToggle}
        isModalRateTypeEdit={isModalRateTypeEdit}
        handleModalRateTypeEditToggle={handleModalRateTypeEditToggle}
        addRateType={addRateType}
        editRateType={editRateType}
        addRateUnits={addRateUnits}
        editRateUnits={editRateUnits}
        handleAddRateType={handleAddRateType}
        handleEditRateType={handleEditRateType}
        handleAddRateUnits={handleAddRateUnits}
        handleEditRateUnits={handleEditRateUnits}
        // ---
        rates={rates}
        rateTypes={rateTypes}
        fetchingStateRates={fetchingStateRates}
        fetchingStateRateTypes={fetchingStateRateTypes}
      />
    </Layout>
  )
}
