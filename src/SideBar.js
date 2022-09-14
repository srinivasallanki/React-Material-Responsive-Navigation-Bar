import React, { useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
const PAGES = ['Project', 'Services', 'About', 'Contact', 'Login', 'Register']
const SideBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            width: 240,
          },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText>{page}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default SideBar
