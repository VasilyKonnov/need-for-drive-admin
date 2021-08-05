import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { AddCarView } from './AddCarView'
import crud from '../../utils/api/crud'

export const AddCar: React.FC = () => {
  const paramId: { id: string } = useParams()
  const history = useHistory()

  const [car, setCar] = useState()

  const goBack = () => history.goBack()

  useEffect(() => {
    if (paramId.id) {
      crud.getCar(paramId.id).then((data) => {
        setCar(data)
      })
    }
  }, [paramId.id])

  useEffect(() => {
    if (car) {
      console.log('car - ', car)
    }
  }, [car, paramId.id])

  return <AddCarView goBack={goBack} />
}
