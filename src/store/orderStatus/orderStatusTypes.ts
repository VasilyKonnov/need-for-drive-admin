export type TOrderStatusAction = {
  list: () => (dispatch: any) => void
  remove: () => (dispatch: any) => void
}

export type TOrderStatus = {
  id: string
  name: string
}

export type TOrderStatuses = {
  fetchingState: string
  data: TOrderStatus[]
  errorText: string
}
