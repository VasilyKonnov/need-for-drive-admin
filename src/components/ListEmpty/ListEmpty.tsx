const style = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  сolor: '#3d5170',
  fontSize: '16px',
}

export const ListEmpty = () => {
  return (
    <div style={style}>
      <span>Пусто...</span>
    </div>
  )
}
