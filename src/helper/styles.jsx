import { styled } from '@mui/material/styles'
import { Box, Link, Container, Typography, Switch, Button, FormControlLabel } from '@mui/material'

import ClickAwayListener from '@mui/base/ClickAwayListener'
import { borderTop } from '@mui/system'
import Portal from '@mui/base/Portal'
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';

export const MojoBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    borderBottom: '1px solid #e56d1d',
    boxShadow: '0px 0px 1px #f8f9fa',
}))

export const MojoContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    gap: '80px',
}))

export const TopRightBox = styled(Box)(({theme}) => ({
    display: 'flex',
    width: '30%',
    margin: '0 0 10px 0'
}))

export const Username = styled(Typography)(({theme}) => ({
    margin: '20px 10px 0px 10px',
    fontSize: '14px'
}))

//Wallet
export const Wallet = styled(Typography)(({theme}) => ({
    margin: '16px 20px 10px 0px',
    fontSize: '20px',
    fontWeight: 'bold',
    background: '-webkit-linear-gradient(270deg, #ea8417 10%, #fbcf3d 60%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}))

export const LogoBox = styled(Link)({
    margin: '0px 100px',

    '& img': {
        width: '102px',
        height: '77px',
        position: 'absolute',
        margin: '10px 0 0 0'
    }
})

export const MojoTabsSection = styled(Box)(({theme}) => ({
    width: '50%',
    display: 'flex',
    margin: '2px 0 -2px 0',
}))

export const MojoTabs = styled(ClickAwayListener)({
    
})

export const Tab = styled(Typography)(({theme}) => ({
    margin: '16px 0 0px 0px',
    width: '50%',
    height: '50px',
    
    background: '-webkit-linear-gradient(270deg, #ea8417 10%, #fbcf3d 60%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',

    fontWeight: 'bold',
    borderLeft: '1px solid #fd6e0f',
    borderTop: '1px solid #e56d1d',
    borderRight: '1px solid #e56d1d',
    borderRadius: '0',
    cursor: 'pointer',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '15px',
}))

export const TabActive = styled(Typography)(({theme}) => ({
    margin: '16px 0 0 0',
    width: '50%',
    height: '50px',
    borderLeft: '1px solid #e56d1d',
    borderTop: '1px solid #e56d1d',
    borderRight: '1px solid #e56d1d',
    boxShadow: 'inset -6px 0px 6px -6px #888, inset 0px 6px 6px -6px #888, inset 6px 0px 6px -6px #888',
    borderRadius: '0',
    cursor: 'pointer',
    padding: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.secondary.tab,
    backgroundImage:'url(./src/img/background.svg)',
}))

export const BoxLine = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    display: 'flex',
    width: '100%',
    height: '50px',
    margin: '40px 0 20px 0',
    borderTop: '5px solid #291E3C',
    borderBottom: '5px solid #291E3C'
}))

export const BoxLineTitleContainer = styled(Container)(({theme}) => ({
    padding: '8px 0px',
    display: 'flex',
}))

export const SlotsLabel = styled(Typography)(({theme}) => ({
    width: '10%',
    fontSize: '18px',
    flexGrow: 1,
}))

export const FilterButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.pinkButton : theme.palette.primary.pinkButton,
    borderRadius: 0,
    padding: '12px',
    fontSize: '12px',
    width: '10%',
    ':hover': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.pinkButtonHover : theme.palette.primary.pinkButtonHover,
    }
}))

export const FilterOptions = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    display: 'flex',
    width: '100%',
    margin: '40px 0 20px 0',
    borderTop: '5px solid #291E3C',
    borderBottom: '5px solid #291E3C'
}))

export const FilterBox = styled(Box)(({theme}) => ({

}))

export const LinesFilterBox = styled(FormControl)(({theme}) => ({
    margin: '20px',
    color: '#fff',
    width: '30%',
    '& legend': {
        color: '#fff',
    }
}))

export const FeaturedGamesFilterBox = styled(FormControl)(({theme}) => ({
    margin: '20px',
    color: '#fff',
    width: '30%',
    '& legend': {
        color: '#fff'
    }
}))

export const MojoDivider = styled(Divider)(({theme}) => ({
    margin: '5px 0 10px 0'
}))

export const FeaturedGames = styled(Container)({
    overflow: 'hidden',
    display: 'flex',
})

export const LiveCasinoImgSection = styled(Container)({
    overflow: 'hidden',
    display: 'flex',
    width: '75%'
})

export const GameLine = styled(Container)({
    overflow: 'hidden',
    display: 'flex'
})

export const SlotGameBox = styled(Container)({
    display: 'flex',
    flexWrap: 'wrap',
})


export const FeaturedGameBox = styled(Link)(({theme}) => ({
    margin: '10px 30px 0 0',
    width: '100%',
    display: 'block',
    textDecoration: 'none',
    '& img': {
        width: '258px',
        height: '499px',
        display: 'block'
    }
}))

export const ImageBox = styled(Link)(({theme}) => ({
    margin: '10px 10px',
    width: '260px',
    display: 'block',
    border: '1px solid',
    borderImage: 'linear-gradient(360deg, #c30d6b, #efd614) 1',
    textDecoration: 'none',
    '& img': {
        width: '258px',
        height: '177px',
        display: 'block'
    }
}))

export const ImageBoxContent = styled(Typography)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    color: theme.palette.mode === 'dark' ? theme.palette.grey : theme.palette.secondary.dark,
    width: '100%',
    display: 'flex',
    padding: '10px 5px',
    //border: '1px solid yellow',
}))

export const ImageBoxGameName = styled(Typography)(({theme}) => ({
    width: '72%',
}))

export const GamePlayersQty = styled(Typography)(({theme}) => ({
    width: '28%',
    display: 'flex',
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
    fontSize: '24px',
    margin: '-5px 0 0 0',
    '& img': {
        width: '18px',
        height: '18px',
        margin: '10px 5px',
        fill: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
    },
    '& span': {
        fontSize: '12px',
        padding: '10px 5px'
    }
}))



//Switcher
export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      //backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));