import Dialog from '@material-ui/core/Dialog'
import { TModalTypes } from './ModalTypes'
import styles from './Modal.module.scss'
import { ButtonPrimary } from '../ButtonPrimary'

export const Modal: React.FC<TModalTypes> = ({
  open,
  onClose,
  title,
  children,
  buttonClick,
  buttonTitle,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={styles.modal}>
        <h3 className="modalTitle">{title}</h3>
        {children}
        <ButtonPrimary onClick={buttonClick} className="modalBtn">
          {buttonTitle}
        </ButtonPrimary>
      </div>
    </Dialog>
  )
}
