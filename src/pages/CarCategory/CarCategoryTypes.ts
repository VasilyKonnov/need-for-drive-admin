import { TCarCategory } from '../../store/carCategory'

export type TCarCategoryView = {
  isCategoryAdd: boolean
  toggleCategoryAdd: () => void
  nameCategoryAdd: string
  descCategoryAdd: string
  handleNameCategoryAdd: (e: React.FormEvent<HTMLInputElement>) => void
  handleDescCategoryAdd: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  isCategoryEdit: boolean
  toggleCategoryEdit: () => void
  nameCategoryEdit: string
  descCategoryEdit: string
  handleNameCategoryEdit: (e: React.FormEvent<HTMLInputElement>) => void
  handleDescCategoryEdit: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  carCategory: TCarCategory[]
  openCategoryEdit: (id: string) => void
  addCarCategoryFunc: () => void
  editCarCategoryFunc: () => void
  removeCarCategoryFunc: () => void
}
