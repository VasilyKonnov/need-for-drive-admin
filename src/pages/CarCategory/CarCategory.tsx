import { useCallback } from 'react'
import { Layout } from '../../components'
import { CarCategoryView } from './CarCategoryView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { carCategorySelector } from '../../store/carCategory/carCategorySelector'
import { carCategoryAction } from '../../store/carCategory/carCategoryAction'

export const CarCategory: React.FC = () => {
  const dispatch = useDispatch()
  const { data: carCategory, fetchingState: fetchingCarCategory } = useSelector(
    carCategorySelector,
  )

  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const handlerEdit = useCallback(() => {
    setIsEdit(true)
    setIsOpen(true)
  }, [setIsEdit])

  const handlerOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const handlerClose = useCallback(() => {
    setIsOpen(false)
    setIsEdit(false)
  }, [setIsOpen])

  useEffect(() => {
    if (fetchingCarCategory === FetchingStateTypes.none) {
      dispatch(carCategoryAction.list())
    }
  }, [dispatch, fetchingCarCategory, carCategory])

  return (
    <Layout>
      <CarCategoryView
        isOpen={isOpen}
        handlerOpen={handlerOpen}
        handlerClose={handlerClose}
        handlerEdit={handlerEdit}
        isEdit={isEdit}
        carCategory={carCategory}
      />
    </Layout>
  )
}
