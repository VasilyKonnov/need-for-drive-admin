import { Layout, Spinner } from '../../components'
import { CarCategoryView } from './CarCategoryView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { carCategorySelector } from '../../store/carCategory/carCategorySelector'
import { carCategoryAction } from '../../store/carCategory/carCategoryAction'
import { routes } from '../../constans/constans'
import { Redirect } from 'react-router-dom'
import crud from '../../utils/api/crud'

export const CarCategory: React.FC = () => {
  const dispatch = useDispatch()
  const { data: carCategory, fetchingState: fetchingCarCategory } = useSelector(
    carCategorySelector,
  )
  const [isCategoryAdd, setIsCategoryAdd] = useState(false)
  const [isCategoryEdit, setIsCategoryEdit] = useState(false)
  const [nameCategoryAdd, setIsNameCategoryAdd] = useState('')
  const [descCategoryAdd, setDescCategoryAdd] = useState('')
  const [nameCategoryEdit, setIsNameCategoryEdit] = useState('')
  const [descCategoryEdit, setDescCategoryEdit] = useState('')
  const [categoryIdEdit, setCategoryIdEdit] = useState('')

  const toggleCategoryAdd = () => {
    setIsCategoryAdd(!isCategoryAdd)
    setIsNameCategoryAdd('')
    setDescCategoryAdd('')
  }

  const openCategoryEdit = (id: string) => {
    setIsCategoryEdit(true)
    setCategoryIdEdit(id)
    const category = carCategory.find((category) => category.id === id)
    if (category) {
      setIsNameCategoryEdit(category.name)
      setDescCategoryEdit(category.description)
    }
  }
  const toggleCategoryEdit = () => {
    setIsCategoryEdit(!isCategoryEdit)
    setIsNameCategoryEdit('')
    setDescCategoryEdit('')
    setCategoryIdEdit('')
  }

  const handleNameCategoryAdd = (e: React.FormEvent<HTMLInputElement>) => {
    setIsNameCategoryAdd(e.currentTarget.value)
  }
  const handleDescCategoryAdd = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescCategoryAdd(e.target.value)
  }

  const handleNameCategoryEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setIsNameCategoryEdit(e.currentTarget.value)
  }
  const handleDescCategoryEdit = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescCategoryEdit(e.target.value)
  }

  useEffect(() => {
    if (fetchingCarCategory === FetchingStateTypes.none) {
      dispatch(carCategoryAction.list())
    }
  }, [dispatch, fetchingCarCategory, carCategory])

  const addCarCategoryFunc = () => {
    crud
      .postCarCategories({
        name: nameCategoryAdd,
        description: descCategoryAdd,
      })
      .then((response) => {
        if (response.status < 400) {
          dispatch(carCategoryAction.remove())
          toggleCategoryAdd()
        }
      })
  }

  const editCarCategoryFunc = () => {
    crud
      .putCarCategories(categoryIdEdit, {
        name: nameCategoryEdit,
        description: descCategoryEdit,
      })
      .then((response) => {
        if (response.status < 400) {
          dispatch(carCategoryAction.remove())
          toggleCategoryEdit()
        }
      })
  }

  const removeCarCategoryFunc = () => {
    crud.deleteCarCategories(categoryIdEdit).then((response) => {
      if (response.status < 400) {
        dispatch(carCategoryAction.remove())
        toggleCategoryEdit()
      }
    })
  }

  return (
    <Layout>
      {fetchingCarCategory === FetchingStateTypes.loading ? <Spinner /> : null}
      {fetchingCarCategory === FetchingStateTypes.failed ? (
        <Redirect to={routes.ERROR_500} />
      ) : null}
      {fetchingCarCategory === FetchingStateTypes.success ? (
        <CarCategoryView
          isCategoryAdd={isCategoryAdd}
          toggleCategoryAdd={toggleCategoryAdd}
          nameCategoryAdd={nameCategoryAdd}
          descCategoryAdd={descCategoryAdd}
          handleNameCategoryAdd={handleNameCategoryAdd}
          handleDescCategoryAdd={handleDescCategoryAdd}
          // ---
          isCategoryEdit={isCategoryEdit}
          toggleCategoryEdit={toggleCategoryEdit}
          nameCategoryEdit={nameCategoryEdit}
          descCategoryEdit={descCategoryEdit}
          handleNameCategoryEdit={handleNameCategoryEdit}
          handleDescCategoryEdit={handleDescCategoryEdit}
          openCategoryEdit={openCategoryEdit}
          // ---
          carCategory={carCategory}
          addCarCategoryFunc={addCarCategoryFunc}
          editCarCategoryFunc={editCarCategoryFunc}
          removeCarCategoryFunc={removeCarCategoryFunc}
        />
      ) : null}
    </Layout>
  )
}
