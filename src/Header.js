import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SideBar from './SideBar'
const PAGES = ['Project', 'Services', 'About', 'Contact']
const Header = () => {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <AppBar position='static'>
      <Toolbar>
        <ShoppingCartIcon />
        {isMatch ? (
          <>
            <Typography>SHOPE</Typography>
            <SideBar />
          </>
        ) : (
          <>
            <Tabs
              textColor='white'
              value={value}
              indicatorColor='secondary'
              onChange={(e, val) => setValue(val)}
            >
              {PAGES.map((page, index) => (
                <Tab key={index} label={page} />
              ))}
            </Tabs>
            <Button
              sx={{ marginLeft: 'auto' }}
              color='secondary'
              variant='contained'
            >
              Login
            </Button>
            <Button
              sx={{ marginLeft: '10px' }}
              color='secondary'
              variant='contained'
            >
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
