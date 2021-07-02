import { ButtonPrimary, Select } from '../../components'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import FastForwardIcon from '@material-ui/icons/FastForward'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import { CarsTable } from '../../components'
import styles from './CarList.module.scss'

const data = ['раз', 'два', 'три', 'четыре', 'пять']

export const CarListView: React.FC = () => {
  const [model, setModel] = useState<string | null>(null)

  const handlerModel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setModel(event.target.value as string)
  }

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
              data={data}
              handlerChange={handlerModel}
            />
          </div>
          <ButtonPrimary>Применить</ButtonPrimary>
        </div>
        <div className="content-wrap--body">
          <CarsTable />
        </div>
        <div className="content-wrap--footer">
          <ReactPaginate
            previousLabel={<FastRewindIcon />}
            nextLabel={<FastForwardIcon />}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={50}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={(e: any) => console.log(e)}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </>
  )
}
