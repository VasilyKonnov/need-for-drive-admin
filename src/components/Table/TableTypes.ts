export type TTable = {
  handlerOpenAdd: () => void
  handlerOpenEdit: () => void
  // children: JSX.Element[] | JSX.Element
  tableHeadData: string[]
  tableData: string[]
}
