export type TRateTypesAction = {
  list: () => (dispatch: any) => void
  remove: () => (dispatch: any) => void
}

export type TRateType = {
  id: string
  name: string
  unit: string
}

export type TRateTypes = {
  fetchingState: string
  data: TRateType[]
  errorText: string
}
