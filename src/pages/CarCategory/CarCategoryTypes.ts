import { TCarCategory } from '../../store/carCategory'

export type TCarCategoryView = {
  isOpen: boolean
  handlerOpen: () => void
  handlerClose: () => void
  handlerEdit: () => void
  isEdit: boolean
  carCategory: TCarCategory[]
}
