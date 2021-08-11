export type TModalTypes = {
  open: boolean
  title: string
  buttonTitle: string
  onClose: () => void
  children: JSX.Element[] | JSX.Element
  buttonClick: (() => void) | undefined
  buttonClickRemove?: (() => void) | undefined
  isBtnDisable?: boolean
}
