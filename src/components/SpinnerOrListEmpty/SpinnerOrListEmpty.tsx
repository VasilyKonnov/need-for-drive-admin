import { CircularProgress } from '@material-ui/core'

const styleSpinner = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const styleListEmpty = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  сolor: '#3d5170',
  fontSize: '16px',
}
type TSpinnerOrListEmty = {
  isSpin: boolean
}
export const SpinnerOrListEmpty: React.FC<TSpinnerOrListEmty> = ({
  isSpin,
}) => {
  if (isSpin) {
    return (
      <div style={styleSpinner}>
        <CircularProgress />
      </div>
    )
  } else {
    return (
      <div style={styleListEmpty}>
        <span>Пусто...</span>
      </div>
    )
  }
}
