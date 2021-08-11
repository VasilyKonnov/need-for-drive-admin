import { CircularProgress } from '@material-ui/core'

const style = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const Spinner = () => {
  return (
    <div style={style}>
      <CircularProgress style={{ color: '#007BFF' }} />
    </div>
  )
}
