import { Grid } from '@material-ui/core'
import logo from '../../assets/image/LogoIcon.svg'
import avatar from '../../assets/image/avatar.jpg'
import { Link } from 'react-router-dom'
import {
  IconButton,
  InputBase,
  Avatar,
  Popover,
  Button,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuIcon from '@material-ui/icons/Menu'
import { Alert, Menu } from '../'
import styles from './Layout.module.scss'
import { TLayoutView } from './LayoutTypes'
import { AlertError } from '../AlertError'

export const LayoutView: React.FC<TLayoutView> = ({
  id,
  handleMenuClose,
  handlerMenuOpen,
  classes,
  open,
  anchorMenu,
  logOut,
  children,
  messageSuccess,
  messageError,
}) => {
  return (
    <>
      <Grid container className={styles.container}>
        <Grid item className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Link className={styles.logoWrap} to="/orders">
              <img src={logo} alt="logo" />
              <span>Need for car</span>
            </Link>
          </div>
          <Menu />
        </Grid>
        <Grid item className={styles.pageContent}>
          <header>
            <div className={styles.search}>
              <IconButton className={classes.searchBtn}>
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Поиск ..."
                className={classes.searchInput}
              />
            </div>
            <div className={styles.features}>
              <div className={styles.notificationWrap}>
                <IconButton className={styles.notification}>
                  <NotificationsIcon />
                </IconButton>
              </div>
              <div className={styles.avatarWrap}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar}
                  className={styles.avatar}
                />
                <span className={styles.nameAdmin}>Admin</span>
                <IconButton
                  aria-describedby={id}
                  className={styles.select}
                  onClick={handlerMenuOpen}
                >
                  <ArrowDropDownIcon />
                </IconButton>
                <IconButton
                  aria-describedby={id}
                  className={styles.mobileMenu}
                  onClick={handlerMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorMenu}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <div className={styles.menuWrap}>
                    <Menu className={styles.mobileMenuList} />
                    <Button
                      startIcon={<ExitToAppIcon />}
                      className={styles.exitBtn}
                      onClick={logOut}
                    >
                      Выйти
                    </Button>
                  </div>
                </Popover>
              </div>
            </div>
          </header>
          <div className={styles.content}>
            <Alert message={messageSuccess} />
            <AlertError message={messageError} />
            {children}
          </div>
          <footer>
            <Link className={styles.footerLink} to="/">
              Главная страница
            </Link>
            <p className={styles.copyRight}>Copyright © 2020 Simbirsoft</p>
          </footer>
        </Grid>
      </Grid>
    </>
  )
}
