export type TLayout = {
  children?: any
  messageSuccess?: string
  messageError?: string
}

export type TLayoutView = {
  id: string
  handleMenuClose: () => void
  handlerMenuOpen: (event: React.MouseEvent<HTMLButtonElement>) => void
  classes: any
  open: boolean
  anchorMenu?: Element | ((element: Element) => Element) | null | undefined
  logOut: () => void
  children?: any
  messageSuccess: string
  messageError: string
}
