export type TSelect = {
  handlerChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  labelId: string
  id: string
  children: any
  label: string
  value?: string
}
