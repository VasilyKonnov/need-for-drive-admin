import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import CreateIcon from '@material-ui/icons/Create'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import { TMenu } from './MenuTypes'
import classNames from 'classnames'
import styles from './Menu.module.scss'

export const Menu: React.FC<TMenu> = ({ className }) => {
  const menuClasses = classNames(className ? className : '', styles.menu)
  return (
    <div className={menuClasses}>
      <NavLink to="/add-car" exact activeClassName={styles.active}>
        <Button startIcon={<CreateIcon />} className={styles.menuItem}>
          Карточка автомобиля
        </Button>
      </NavLink>
      <NavLink to="/list-cars" exact activeClassName={styles.active}>
        <Button startIcon={<VerticalSplitIcon />} className={styles.menuItem}>
          Список авто
        </Button>
      </NavLink>
      <NavLink to="/orders" exact activeClassName={styles.active}>
        <Button startIcon={<NoteAddIcon />} className={styles.menuItem}>
          Заказы
        </Button>
      </NavLink>
    </div>
  )
}
