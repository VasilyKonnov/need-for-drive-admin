export type TCityPointsAction = {
  list: () => (dispatch: any) => void
  remove: () => (dispatch: any) => void
}

export type TCityPoint = {
  address: string
  cityId: { name: string; id: string }
  id: string
  name: string
}

export type TCityPoints = {
  fetchingState: string
  data: TCityPoint[]
  errorText: string
}
