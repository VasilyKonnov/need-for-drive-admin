import { useCallback } from 'react'
import { Layout, Spinner } from '../../components'
import { CarCategoryView } from './CarCategoryView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { carCategorySelector } from '../../store/carCategory/carCategorySelector'
import { carCategoryAction } from '../../store/carCategory/carCategoryAction'
import { routes } from '../../constans/constans'
import { Redirect } from 'react-router-dom'

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
      {fetchingCarCategory === FetchingStateTypes.loading ? <Spinner /> : null}
      {fetchingCarCategory === FetchingStateTypes.failed ? (
        <Redirect to={routes.ERROR_500} />
      ) : null}
      {fetchingCarCategory === FetchingStateTypes.success ? (
        <CarCategoryView
          isOpen={isOpen}
          handlerOpen={handlerOpen}
          handlerClose={handlerClose}
          handlerEdit={handlerEdit}
          isEdit={isEdit}
          carCategory={carCategory}
        />
      ) : null}
    </Layout>
  )
}
