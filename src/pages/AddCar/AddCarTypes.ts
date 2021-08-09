import { TCarCategory } from '../../store/carCategory'

export type TAddCarView = {
  goBack: () => void
  carCategories: TCarCategory[]
  selectCarCategory: string
  handleCarCategory: (event: React.ChangeEvent<{ value: unknown }>) => void
  carName: string
  carNumber: string
  description: string
  priceMax: number
  priceMin: number
  tank: number
  color: string
  colors: string[]
  handlerCarName: (event: React.ChangeEvent<HTMLInputElement>) => void
  handlerCarNumber: (event: React.ChangeEvent<HTMLInputElement>) => void
  handlerDescription: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  handlerMaxPrice: (event: React.ChangeEvent<HTMLInputElement>) => void
  handlerMinPrice: (event: React.ChangeEvent<HTMLInputElement>) => void
  handlerTank: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleColor: (event: React.ChangeEvent<HTMLInputElement>) => void
  addColor: () => void
  removeColor: (id: number) => void
  originalname: string
  handleOriginalname: (event: React.ChangeEvent<HTMLInputElement>) => void
  imgCarUrl: string
  handleImgUrl: (event: React.ChangeEvent<HTMLInputElement>) => void
}
