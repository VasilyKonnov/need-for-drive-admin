export type TInputVsLabel = {
  classLabel?: string
  classInput?: string
  label?: any
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  value?: string | number | null | undefined
  isValid?: boolean
  validMesage?: string
}
