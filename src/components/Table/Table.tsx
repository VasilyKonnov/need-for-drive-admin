import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import AddIcon from '@material-ui/icons/Add'
import { TTable } from './TableTypes'
import { ButtonPrimary } from '..'

const useStyles = makeStyles({
  table: {
    maxHeight: '100%',
  },
})

export const CustomTable: React.FC<TTable> = ({
  handlerOpenAdd,
  children,
  tableHeadData,
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
                onClick={handlerOpenAdd}
              >
                <AddIcon />
              </ButtonPrimary>
            </TableCell>
            {tableHeadData.map((item) => {
              return <TableCell>{item}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  )
}
