export type TInputVsLabel = {
  classLabel?: string
  classInput?: string
  label?: any
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  value?: string | number
  isValid?: boolean
  validMesage?: string
}
