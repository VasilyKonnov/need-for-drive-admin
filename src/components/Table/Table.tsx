import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import { TTable } from './TableTypes'
import { ButtonPrimary } from '..'

const useStyles = makeStyles({
  table: {
    maxHeight: '100%',
  },
})

export const CustomTable: React.FC<TTable> = ({
  handlerOpenEdit,
  handlerOpenAdd,
  children,
  tableHeadData,
  tableData,
}) => {
  const classes = useStyles()
  return (
    <TableContainer className={classes.table}>
      <Table stickyHeader size="small" aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>
              <ButtonPrimary
                className={'buttonInTable'}
                onClick={handlerOpenEdit}
              >
                <AddIcon />
              </ButtonPrimary>
            </TableCell>
            {tableHeadData.map((item) => {
              return <TableCell>{item}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <ButtonPrimary
                className={'buttonInTable'}
                onClick={handlerOpenAdd}
              >
                <CreateIcon />
              </ButtonPrimary>
            </TableCell>
            {tableData.map((item) => {
              return <TableCell>item</TableCell>
            })}
            {/* {children} */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
