import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { TSelect } from './SelectTypes'
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles'
import './Select.scss'

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     margin: {
//       margin: theme.spacing(1),
//     },
//   }),
// )

export const CustomSelect: React.FC<TSelect> = ({
  handlerChange,
  labelId,
  id,
  data,
  label,
}) => {
  // const classes = useStyles()
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
