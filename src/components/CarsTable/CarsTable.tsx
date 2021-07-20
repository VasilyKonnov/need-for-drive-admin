import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { Table } from '../../components'
import CreateIcon from '@material-ui/icons/Create'
import { ButtonPrimary } from './../ButtonPrimary/ButtonPrimary'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

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
  const addCar = () => {
    history.push('/add-car')
  }
  const history = useHistory()
  return (
    <Table
      handlerOpenAdd={addCar}
      tableHeadData={[
        'Модель',
        'Изображение',
        'Мин. цена',
        'Макс. цена',
        'Номер',
        'Описание',
        'Категория',
      ]}
    >
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
    </Table>
  )
}
