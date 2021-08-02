import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { TSelect } from './SelectTypes'
import './Select.scss'

export const CustomSelect: React.FC<TSelect> = ({
  handlerChange,
  labelId,
  id,
  children,
  label,
  value,
}) => {
  return (
    <FormControl className="CustomSelect" variant="outlined">
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        IconComponent={() => <UnfoldMoreIcon />}
        onChange={handlerChange}
        defaultValue={value ? value : null}
      >
        <MenuItem value="">
          <em>-----</em>
        </MenuItem>
        {children}
      </Select>
    </FormControl>
  )
}
