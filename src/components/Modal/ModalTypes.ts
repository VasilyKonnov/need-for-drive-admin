export type TModalTypes = {
  open: boolean
  title: string
  buttonTitle: string
  onClose: () => void
  children: JSX.Element[] | JSX.Element
  buttonClick: any
  // buttonClick: (() => void) | ((val: any) => void)
}
