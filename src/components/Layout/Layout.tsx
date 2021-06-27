import { Grid } from '@material-ui/core'
import { TOrders } from '../../pages/Orders/OrdersTypes'
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
import { makeStyles } from '@material-ui/core/styles'
import { Menu } from '../'
import styles from './Layout.module.scss'
import { useState } from 'react'

const useStyles = makeStyles({
  searchBtn: {
    color: '#CACEDB',
  },
  searchInput: {
    fontFamily: 'Helvetica',
    fontSize: '13px',
    color: '#767F9D',
    width: 'calc(100% - 60px)',
  },
})

export const Layout: React.FC<TOrders> = ({ children }) => {
  const classes = useStyles()
  const [anchorMenu, setAnchorMenu] = useState<HTMLButtonElement | null>(null)
  const handlerMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorMenu(null)
  }
  const open = Boolean(anchorMenu)
  const id = open ? 'menu-popover' : undefined

  return (
    <>
      <Grid container className={styles.container}>
        <Grid item className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Link className={styles.logoWrap} to="/">
              <img src={logo} alt="logo" />
              <span>Need for car</span>
            </Link>
          </div>
          <Menu />
        </Grid>
        <Grid className={styles.pageContent}>
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
                    >
                      Выйти
                    </Button>
                  </div>
                </Popover>
              </div>
            </div>
          </header>
          <div className={styles.content}>{children}</div>
        </Grid>
      </Grid>
    </>
  )
}
