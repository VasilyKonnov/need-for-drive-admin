export type TSelect = {
  handlerChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  labelId: string
  id: string
  data: string[] | null
  label: string
}
