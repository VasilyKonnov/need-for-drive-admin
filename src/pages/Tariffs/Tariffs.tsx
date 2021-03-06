import { Layout } from '../../components'
import { TariffsView } from './TariffsView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { ratesSelector } from '../../store/rates/ratesSelector'
import { ratesAction } from '../../store/rates/ratesAction'
import { rateTypesSelector } from '../../store/rateTypes/rateTypesSelector'
import { rateTypesAction } from '../../store/rateTypes/rateTypesAction'
import crud from '../../utils/api/crud'

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
  const [editRatePrice, setEditRatePrice] = useState<string | number>('')
  const [editRateId, setEditRateId] = useState('')
  const [editRate_TypeId, setEditRate_TypeId] = useState({
    id: '',
    name: '',
    unit: '',
  })

  const [addRateType, setAddRateType] = useState('')
  const [addRateUnits, setAddRateUnits] = useState('')
  const [editRateType, setEditRateType] = useState('')
  const [editRateUnits, setEditRateUnits] = useState('')
  const [editRateTypeId, setEditRateTypeId] = useState('')

  const [isModalRateTypeAdd, setIsModalRateTypeAdd] = useState(false)
  const [isModalRateTypeEdit, setIsModalRateTypeEdit] = useState(false)

  const handleEditRateName = (event: React.ChangeEvent<{ value: unknown }>) =>
    setEditRateName(event.target.value as string)
  const handleEditRatePrice = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value.replace(/[^\d]/g, '')
    setEditRatePrice(val)
  }
  const handleAddRateName = (event: React.ChangeEvent<{ value: unknown }>) =>
    setAddRateName(event.target.value as string)
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
  const handleModalRateEditOpen = (
    id: number | string,
    rateTypeId?: { id: string; name: string; unit: string },
  ) => {
    if (rateTypeId) {
      setEditRateName(rateTypeId.id)
      setEditRate_TypeId(rateTypeId)
    }

    setEditRateId(id as string)
    setIsModalRateEdit(true)
    const rate = rates.find((rate) => rate.id === id)
    if (rate) {
      setEditRateName(rate.rateTypeId ? rate.rateTypeId.id : '---')
      setEditRatePrice(rate.price)
    }
  }
  const handleModalRateEditToggle = () => {
    setIsModalRateEdit(!isModalRateEdit)
    setEditRateName('')
    setEditRatePrice('')
    setEditRateId('')
    setEditRate_TypeId({
      id: '',
      name: '',
      unit: '',
    })
  }

  const handleModalRateTypeAddToggle = () => {
    setIsModalRateTypeAdd(!isModalRateTypeAdd)
    setAddRateType('')
    setAddRateUnits('')
    setEditRateTypeId('')
  }

  const handleModalRateTypeEditOpen = (id: number | string) => {
    setEditRateTypeId(id as string)
    setIsModalRateTypeEdit(true)
    const ratetype = rateTypes.find((type) => type.id === id)
    if (ratetype) {
      setEditRateType(ratetype.name)
      setEditRateUnits(ratetype.unit)
    }
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

  const addRate = () => {
    if (addRateName && rates) {
      let _rate = rates.find((rate) => rate.rateTypeId.id === addRateName)

      if (addRateName.length > 0 && addRatePrice.length > 0 && _rate) {
        crud
          .postRates({
            rateTypeId: {
              id: addRateName,
              name: _rate.rateTypeId.name,
              unit: _rate.rateTypeId.unit,
            },
            price: addRatePrice,
          })
          .then((response) => {
            if (response.status < 400) {
              dispatch(ratesAction.remove())
              handleModalRateAddToggle()
            }
          })
      }
    }
  }
  const editRate = () => {
    if (editRateId.length > 0 && editRateName.length > 0 && editRatePrice > 0) {
      crud
        .putRates(editRateId, {
          rateTypeId: {
            id: editRateName,
            name: editRate_TypeId.name,
            unit: editRate_TypeId.unit,
          },
          price: editRatePrice,
        })
        .then((response) => {
          if (response.status < 400) {
            dispatch(ratesAction.remove())
            handleModalRateEditToggle()
          }
        })
    }
  }

  const removeRate = () => {
    if (editRateId) {
      crud.deleteRates(editRateId).then((response) => {
        if (response.status < 400) {
          dispatch(ratesAction.remove())
          handleModalRateEditToggle()
        }
      })
    }
  }
  const addRateTypeFunc = () => {
    if (addRateUnits.length > 0 && addRateType.length > 0) {
      crud
        .postRateTypes({
          unit: addRateUnits,
          name: addRateType,
        })
        .then((response) => {
          if (response.status < 400) {
            dispatch(rateTypesAction.remove())
            handleModalRateTypeAddToggle()
          }
        })
    }
  }
  const editRateTypeFunc = () => {
    if (editRateUnits.length > 0 && editRateType.length > 0) {
      crud
        .putRateTypes(editRateTypeId, {
          unit: editRateUnits,
          name: editRateType,
        })
        .then((response) => {
          if (response.status < 400) {
            dispatch(rateTypesAction.remove())
            handleModalRateTypeEditToggle()
          }
        })
    }
  }
  const removeRateType = () => {
    crud.deleteRateTypes(editRateTypeId).then((response) => {
      if (response.status < 400) {
        dispatch(rateTypesAction.remove())
        handleModalRateTypeEditToggle()
      }
    })
  }

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
        handleModalRateEditOpen={handleModalRateEditOpen}
        addRate={addRate}
        editRate={editRate}
        removeRate={removeRate}
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
        handleModalRateTypeEditOpen={handleModalRateTypeEditOpen}
        addRateTypeFunc={addRateTypeFunc}
        editRateTypeFunc={editRateTypeFunc}
        removeRateType={removeRateType}
        // ---
        rates={rates}
        rateTypes={rateTypes}
        fetchingStateRates={fetchingStateRates}
        fetchingStateRateTypes={fetchingStateRateTypes}
      />
    </Layout>
  )
}
