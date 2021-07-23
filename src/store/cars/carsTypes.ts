export type TCarsAction = {
  list: () => (dispatch: any) => void
}

export type TCar = {
  categoryId: {
    name: string
    description: string
    id: string
  }
  colors: string[]
  createdAt: number
  description: string
  id: string
  name: string
  number: string
  priceMax: number
  priceMin: number
  tank: number
  thumbnail: {
    mimetype: string
    originalname: string
    path: string
    size: number
  }
  updatedAt: number
}

export type TCars = {
  fetchingState: string
  data: TCar[]
  errorText: string
} | null
