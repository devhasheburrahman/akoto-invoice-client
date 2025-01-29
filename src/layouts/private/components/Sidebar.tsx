import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InvoicesIcon from './icons/InvoicesIcon'
import ThemesIcon from './icons/ThemesIcon'
import SettingsIcon from './icons/SettingsIcon'
import EstimatesIcon from './icons/EstimatesIcon'
import DashboardIcon from './icons/DashboardIcon'
import { Link, useLocation } from 'react-router-dom'
import { Paths } from '../../../constants/paths'

export default function Sidebar() {

  const location = useLocation()
  const pathname = location.pathname;

  return (
    <Box>
       <List>
          <Link to={Paths.DASHBOARD}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.DASHBOARD && 'border-r-[2px]'}`}>Dashboard</Box>} />
              </ListItemButton>
            </ListItem>      
          </Link>
          <Link to={Paths.INVOICES}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InvoicesIcon />
                </ListItemIcon>
                <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.INVOICES && 'border-r-[2px]'}`}>Invoices</Box>} />
              </ListItemButton>
            </ListItem>      
          </Link>
          <Link to={Paths.ESTIMATES}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EstimatesIcon />
              </ListItemIcon>
              <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.ESTIMATES && 'border-r-[2px]'}`}>Estimates</Box>} />
            </ListItemButton>
          </ListItem>    
          </Link>
          <Link to={Paths.THEMES}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ThemesIcon />
              </ListItemIcon>
              <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.THEMES && 'border-r-[2px]'}`}>Themes</Box>} />
            </ListItemButton>
          </ListItem>   
          </Link>  
          <Link to={Paths.SETTINGS}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.SETTINGS && 'border-r-[2px]'}`}>Settings</Box>} />
            </ListItemButton>
          </ListItem>      
          </Link>   
        </List>
    </Box>
  )
}
