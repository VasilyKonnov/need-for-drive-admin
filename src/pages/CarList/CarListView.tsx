import { ButtonPrimary, Select, Table, ListEmpty } from '../../components'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import FastForwardIcon from '@material-ui/icons/FastForward'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import { MenuItem, TableCell, TableRow } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import { TCarListView } from './CarListTypes'
import styles from './CarList.module.scss'
import { imgUrl } from '../../constans/constans'

export const CarListView: React.FC<TCarListView> = ({
  cars,
  handlerCategory,
  addCar,
  handlePaginationClick,
  amountPages,
  carsCategoty,
  handleFilterCategory,
}) => {
  return (
    <>
      <h1 className="admin-page-title">Список машин</h1>
      <div className="content-wrap">
        <div className="content-wrap--header">
          <div className="select-wrap">
            <Select
              label="Категория"
              labelId="labelId-1"
              id="select-1"
              handlerChange={handlerCategory}
            >
              {carsCategoty.map((category) => {
                return <MenuItem value={category.id}>{category.name}</MenuItem>
              })}
            </Select>
          </div>
          <ButtonPrimary
            className={'prymaryBtn'}
            onClick={handleFilterCategory}
          >
            Применить
          </ButtonPrimary>
        </div>
        <div className="content-wrap--body">
          {cars.length > 0 ? (
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
              {cars.map((car: any, id: number) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    <Link to="/add-car">
                      <ButtonPrimary className={'buttonInTable'}>
                        <CreateIcon />
                      </ButtonPrimary>
                    </Link>
                  </TableCell>
                  <TableCell>{car.name}</TableCell>
                  <TableCell>
                    {car.thumbnail.path ? (
                      <img
                        src={
                          car.thumbnail.path.toString().slice(0, 4) === 'data'
                            ? car.thumbnail.path
                            : imgUrl + car.thumbnail.path
                        }
                        alt={car.thumbnail.originalname}
                        className={styles.tableImg}
                      />
                    ) : (
                      '---'
                    )}
                  </TableCell>
                  <TableCell>{car.priceMin ? car.priceMin : '---'}</TableCell>
                  <TableCell>{car.priceMax ? car.priceMax : '---'}</TableCell>
                  <TableCell>{car.number ? car.number : '---'}</TableCell>
                  <TableCell>
                    {car.description ? car.description : '---'}
                  </TableCell>
                  <TableCell>
                    {car.categoryId ? car.categoryId.name : '---'}
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          ) : (
            <ListEmpty />
          )}
        </div>
        <div className="content-wrap--footer">
          {cars.length > 0 ? (
            <ReactPaginate
              previousLabel={<FastRewindIcon />}
              nextLabel={<FastForwardIcon />}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={amountPages}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handlePaginationClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}
