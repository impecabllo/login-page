import { useNavigate } from "react-router"
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar } from "@mui/material"
import AccountCircle from "@mui/icons-material/AccountCircle"

import { useState, type FC } from "react"
import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "@/routes"

type Props = {
  isLogin: boolean
  logOut: () => void
}

export const Header: FC<Props> = ({ isLogin, logOut }) => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleNavigate = (to: string) => {
    navigate(to)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Button variant="text" sx={{ color: "#fff" }} onClick={() => handleNavigate(HOME_ROUTE)}>
            Главная страница
          </Button>
        </Box>
        {isLogin ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose()
                  navigate(PROFILE_ROUTE)
                }}
              >
                Профиль
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose()
                  logOut()
                }}
              >
                Выйти
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Button variant="contained" color="secondary" onClick={() => handleNavigate(LOGIN_ROUTE)}>
            Войти
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
