import { TCarCategory } from '../../store/carCategory'
import { TCar } from '../../store/cars'

export type TCarListView = {
  cars: TCar[]
  handlerCategory: (event: React.ChangeEvent<{ value: unknown }>) => void
  addCar: () => void
  handlePaginationClick: (data: any) => void
  amountPages: number
  carsCategoty: TCarCategory[]
  handleFilterCategory: () => void
}
