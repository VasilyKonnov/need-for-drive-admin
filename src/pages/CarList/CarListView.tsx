import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { ButtonPrimary } from '../../components'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import styles from './CarList.module.scss'

export const CarListView: React.FC = () => {
  return (
    <>
      <h1 className="admin-page-title">Список машин</h1>
      <div className="content-wrap">
        <div className="content-wrap--header">
          <div>
            <FormControl>
              <InputLabel id="demo-customized-select-label">Age</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                IconComponent={() => <UnfoldMoreIcon />}
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ButtonPrimary>Применить</ButtonPrimary>
        </div>
        <div className="content-wrap--body">
          <p>content</p>
        </div>
        <div className="content-wrap--footer"></div>
      </div>
    </>
  )
}
