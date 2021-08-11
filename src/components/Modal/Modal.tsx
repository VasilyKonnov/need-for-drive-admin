import Dialog from '@material-ui/core/Dialog'
import { TModalTypes } from './ModalTypes'
import styles from './Modal.module.scss'
import { ButtonPrimary } from '../ButtonPrimary'
import { ButtonSecondary } from '../ButtonSecondary'

export const Modal: React.FC<TModalTypes> = ({
  open,
  onClose,
  title,
  children,
  buttonClick,
  buttonTitle,
  isBtnDisable,
  buttonClickRemove,
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
        <div className={styles.btnWrap}>
          <ButtonPrimary
            disabled={isBtnDisable}
            onClick={buttonClick}
            className="modalBtn"
          >
            {buttonTitle}
          </ButtonPrimary>

          {buttonClickRemove ? (
            <ButtonSecondary onClick={buttonClickRemove} className="modalBtn">
              Удалить
            </ButtonSecondary>
          ) : null}
        </div>
      </div>
    </Dialog>
  )
}
