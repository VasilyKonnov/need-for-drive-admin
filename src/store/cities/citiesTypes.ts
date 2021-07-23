export type TCitiesAction = {
  list: () => (dispatch: any) => void
}

export type TCity = {
  createdAt: number
  id: string
  name: string
  updatedAt: number
}

export type TCities = {
  fetchingState: string
  data: TCity[]
  errorText: string
}
