import { useCallback } from 'react'
import { useState } from 'react'
import { Layout } from '../../components'
import { CarCategoryView } from './CarCategoryView'

export const CarCategory: React.FC = () => {
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

  return (
    <Layout>
      <CarCategoryView
        isOpen={isOpen}
        handlerOpen={handlerOpen}
        handlerClose={handlerClose}
        handlerEdit={handlerEdit}
        isEdit={isEdit}
      />
    </Layout>
  )
}
