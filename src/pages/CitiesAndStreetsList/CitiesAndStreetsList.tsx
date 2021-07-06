import { useState } from 'react'
import { Layout } from '../../components'
import { CitiesAndStreetsListView } from './CitiesAndStreetsListView'

export const CitiesAndStreetsList: React.FC = () => {
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
      />
    </Layout>
  )
}
