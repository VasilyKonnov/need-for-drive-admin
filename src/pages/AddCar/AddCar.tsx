import { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { AddCarView } from './AddCarView'
import crud from '../../utils/api/crud'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { carCategorySelector } from '../../store/carCategory/carCategorySelector'
import { carCategoryAction } from '../../store/carCategory/carCategoryAction'
import { TCarCategory } from '../../store/carCategory'
import { TCar } from '../../store/cars'
import { TEditCar } from './AddCarTypes'
import { AlertError, Layout, Spinner } from '../../components'
import stabImg from '../../assets/image/placeholder.png'
import { carsAction } from '../../store/cars'

export const AddCar: React.FC = () => {
  const paramId: { id: string } = useParams()
  const history = useHistory()
  let location = useLocation()
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
  const [_originalname, set_Originalname] = useState<string>('')
  const [imgUrl, setImgUrl] = useState<string>('')
  const [progressLineResult, setProgressLineResult] = useState(0)
  const [stateImgFile, setStateImgFile] = useState<any>({})
  const [carCategory, setCarCategory] = useState<TCarCategory | null>(null)
  const [editCar, setEditCar] = useState<TEditCar | null>(null)
  const [disablePostBtn, setDisablePostBtn] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [MessageError, setMessageError] = useState(false)
  const [alertSuccess, setAlertSuccess] = useState('')
  const [alertError, setAlertError] = useState('')

  const goBack = () => history.goBack()

  const showAlertSuccess = (message: string) => {
    if (message) {
      setAlertSuccess(message)
      setTimeout(() => setAlertSuccess(''), 3000)
    }
  }

  const showAlertError = (message: string) => {
    setAlertError(message)
    setTimeout(() => setAlertError(''), 3000)
  }

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
  const handleOriginalname = (e: React.ChangeEvent<HTMLInputElement>) =>
    set_Originalname(e.target.value)
  const handleImgUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgUrl(e.target.value)
    e.preventDefault()
    if (e.target.files !== null) {
      let reader = new FileReader()
      let file = e.target.files[0]

      reader.onloadend = () => {
        setStateImgFile({
          file: file,
          imagePreviewUrl: reader.result,
        })
      }

      reader.readAsDataURL(file)
    }
  }

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
    if (location.pathname === '/create-car') {
      setCar(null)
    }
  }, [location])

  useEffect(() => {
    if (paramId.id) {
      crud
        .getCar(paramId.id)
        .then((response) => {
          setIsLoading(true)
          if (response.status < 400) {
            setCar(response.data.data)
            setIsLoading(false)
          } else {
            setIsLoading(false)
            setMessageError(true)
          }
        })
        .catch((e) => {
          setIsLoading(false)
          setMessageError(true)
        })
    } else {
      setIsLoading(false)
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
      set_Originalname(car.thumbnail.originalname)
      setImgUrl(car.thumbnail.path)
    } else {
      setSelectCarCategory(undefined)
      setCarName('')
      setCarNumber('')
      set_Description('')
      set_PriceMax(0)
      set_PriceMin(0)
      set_Tank(0)
      set_Colors([])
      set_Originalname('')
      setImgUrl(stabImg)
    }
  }, [car])

  useEffect(() => {
    if (stateImgFile) {
      set_Originalname(stateImgFile.file ? stateImgFile.file.name : '')
      setImgUrl(stateImgFile.imagePreviewUrl)
    }
  }, [stateImgFile])

  useEffect(() => {
    if (selectCarCategory && _carCategories) {
      let category = _carCategories.find(
        (category) => category.id === selectCarCategory,
      )
      setCarCategory(category ? category : null)
    }
  }, [selectCarCategory, _carCategories])

  useEffect(() => {
    if (
      selectCarCategory &&
      carName &&
      carNumber &&
      _description &&
      _priceMax &&
      _priceMin &&
      _tank &&
      _colors.length > 0 &&
      _originalname &&
      imgUrl &&
      carCategory &&
      stateImgFile
    ) {
      const _editCar = {
        priceMax: _priceMax,
        priceMin: _priceMin,
        name: carName,
        thumbnail: {
          mimetype: stateImgFile.file ? stateImgFile.file.type : '',
          originalname: _originalname ? _originalname : '',
          path: imgUrl,
          size: stateImgFile.file ? stateImgFile.file.size : '',
        },
        description: _description,
        categoryId: {
          id: carCategory.id,
          name: carCategory.name,
          description: carCategory.description,
        },
        colors: _colors,
      }
      setDisablePostBtn(false)
      setEditCar(_editCar)
    } else {
      setDisablePostBtn(true)
    }
  }, [
    selectCarCategory,
    _color,
    _colors,
    _description,
    _originalname,
    _priceMax,
    _priceMin,
    _tank,
    carName,
    carNumber,
    imgUrl,
    carCategory,
    stateImgFile,
  ])

  const addCarData = () => {
    if (editCar) {
      crud
        .postCars(editCar)
        .then((response) => {
          setIsLoading(true)
          if (response.status < 400) {
            setIsLoading(false)
            history.push('/list-cars')
          } else {
            setMessageError(true)
            setIsLoading(false)
          }
        })
        .catch((e) => {
          setIsLoading(false)
          return (
            <AlertError message={'Что-то прошло не так, попробуйте ещё раз!'} />
          )
        })
    }
  }
  const editCarData = () => {
    if (editCar) {
      crud
        .putCars(paramId.id, editCar)
        .then((response) => {
          if (response.status < 400) {
            showAlertSuccess('Данные успешно измененны!')
            dispatch(carsAction.remove())
          }
        })
        .catch((e) => {
          setIsLoading(false)
          return showAlertError('Что-то прошло не так, попробуйте ещё раз!')
        })
    }
  }
  const removeCarData = () => {
    crud
      .deleteCars(paramId.id)
      .then((response) => {
        setIsLoading(true)
        if (response.status < 400) {
          setIsLoading(false)
          dispatch(carsAction.remove())
          history.push('/list-cars')
        } else {
          setMessageError(true)
          setIsLoading(false)
        }
      })
      .catch((e) => {
        setIsLoading(false)
        return (
          <AlertError message={'Что-то прошло не так, попробуйте ещё раз!'} />
        )
      })
  }

  if (isLoading && !MessageError) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    )
  }

  if (!isLoading && MessageError) {
    return (
      <Layout>
        <h3 style={{ textAlign: 'center' }}>
          Машины с id - {paramId.id} нет в списке!
        </h3>
      </Layout>
    )
  }

  return (
    <Layout messageSuccess={alertSuccess} messageError={alertError}>
      <AddCarView
        handleCarCategory={handleCarCategory}
        selectCarCategory={selectCarCategory ? selectCarCategory : ''}
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
        originalname={_originalname}
        handleOriginalname={handleOriginalname}
        imgCarUrl={imgUrl}
        handleImgUrl={handleImgUrl}
        setProgressLineResult={setProgressLineResult}
        progressLineResult={progressLineResult}
        disablePostBtn={disablePostBtn}
        addCarData={addCarData}
        editCarData={editCarData}
        removeCarData={removeCarData}
        isCreate={location && location.pathname === '/create-car'}
      />
    </Layout>
  )
}
