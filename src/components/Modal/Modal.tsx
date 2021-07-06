import Dialog from '@material-ui/core/Dialog'
import { TModalTypes } from './ModalTypes'
import styles from './Modal.module.scss'

export const Modal: React.FC<TModalTypes> = ({ open, onClose, children }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={styles.modal}>{children}</div>
    </Dialog>
  )
}
