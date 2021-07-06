import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { TSelect } from './SelectTypes'
import './Select.scss'

export const CustomSelect: React.FC<TSelect> = ({
  handlerChange,
  labelId,
  id,
  data,
  label,
}) => {
  return (
    <FormControl className="CustomSelect" variant="outlined">
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        IconComponent={() => <UnfoldMoreIcon />}
        onChange={handlerChange}
      >
        <MenuItem value="">
          <em>-----</em>
        </MenuItem>
        {data
          ? data.map((item: string, id: number) => {
              return <MenuItem value={item}>{item}</MenuItem>
            })
          : null}
      </Select>
    </FormControl>
  )
}
