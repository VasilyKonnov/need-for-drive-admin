import { TCarCategory } from '../../store/carCategory'
import { TCar } from '../../store/cars'

export type TCarListView = {
  cars: TCar[]
  handlerCategory: (event: React.ChangeEvent<{ value: unknown }>) => void
  addCar: () => void
  handlePaginationClick: (data: { selected: number }) => void
  amountPages: number
  carsCategoty: TCarCategory[]
  handleFilterCategory: () => void
}
