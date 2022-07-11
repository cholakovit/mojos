import { AppBar, Toolbar, Typography, IconButton, Box, useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import AdbIcon from '@mui/icons-material/Adb'
import { Logo } from '../Helper/styles'

import { ColorModeContext } from '../Helper/Context'
import { useContext } from "react"

const Header = () => {
    const mojoTheme = useTheme()
    const colorMode = useContext(ColorModeContext)
    return (
        <AppBar position="static">
            <Toolbar>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Logo variant="h6" noWrap component="a" href="/">LOGO</Logo>
                {mojoTheme.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {mojoTheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header