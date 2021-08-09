export type TSelect = {
  handlerChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  labelId: string
  id: string
  children: JSX.Element[] | JSX.Element
  label: string
  defaultValue?: string
}
