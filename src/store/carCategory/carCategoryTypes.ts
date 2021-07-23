export type TCarCategoryAction = {
  list: () => (dispatch: any) => void
}

export type TCarCategory = {
  createdAt: number
  description: string
  id: string
  name: string
  updatedAt: number
}

export type TCarcategories = {
  fetchingState: string
  data: TCarCategory[]
  errorText: string
}
