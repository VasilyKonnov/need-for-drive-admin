import { Layout } from '../../components'
import { TariffsView } from './TariffsView'
import { useState } from 'react'

export const Tariffs: React.FC = () => {
  const [isModalRate, setIsModalRate] = useState(false)
  const [isModalRateType, setIsModalRateType] = useState(false)
  const [isEditRate, setIsEditRate] = useState(false)
  const [isEditRateType, setIsEditRateType] = useState(false)

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
      />
    </Layout>
  )
}
