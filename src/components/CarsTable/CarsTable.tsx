import TableCell from '@material-ui/core/TableCell'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import styles from './CarList.module.scss'
import { ButtonPrimary } from './../ButtonPrimary/ButtonPrimary'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  table: {
    maxHeight: '100%',
  },
})

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export const CarsTable = () => {
  const classes = useStyles()

  return (
    <TableContainer className={classes.table}>
      <Table stickyHeader size="small" aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to="/add-car">
                <ButtonPrimary className={'buttonInTable'}>
                  <AddIcon />
                </ButtonPrimary>
              </Link>
            </TableCell>
            <TableCell>Модель</TableCell>
            <TableCell>Изображение</TableCell>
            <TableCell>Мин. цена</TableCell>
            <TableCell>Макс. цена</TableCell>
            <TableCell>Номер</TableCell>
            <TableCell>Описание</TableCell>
            <TableCell>Категория</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Link to="/add-car">
                  <ButtonPrimary className={'buttonInTable'}>
                    <CreateIcon />
                  </ButtonPrimary>
                </Link>
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
