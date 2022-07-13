
import { MojoTabsSection, MojoBox, LogoBox, MojoContainer, TopRightBox, Username, Wallet, MaterialUISwitch, TabActive, Tab,
    MojoTabs, Test } from '../helper/styles'
import { useTheme, FormControlLabel, Box, Skeleton } from '@mui/material'

import { useContext, useEffect } from "react"
import { ColorModeContext } from '../helper/Context'
import LiveCasino from '../components/LiveCasino'
import SlotGames from '../components/SlotGames'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getUser, selectUser, getUserStatus, getUserError } from "../store/userSlice"
import Error from '../components/Error'

const Lobby = () => {
    const dispatch = useDispatch()

    const mojoTheme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const [openLiveCasino, setOpenLiveCasino] = useState(false)
    const [slotGames, setSlotGames] = useState(true)

    const status = useSelector(getUserStatus)
    const error = useSelector(getUserError)
    
    const handleLiveCasino = () => {
        setOpenLiveCasino(true)
        setSlotGames(false)
    }

    const handleSlotGames = () => {
        setSlotGames(true)
        setOpenLiveCasino(false)
    }

    useEffect(() => {
        if(status === import.meta.env.VITE_IDLE) {
            dispatch(selectUser())
        }
    }, [])

    const user = useSelector(getUser)

    return (
        <>
            <MojoBox>
                {/* <Test /> */}
                <MojoContainer>
                    <LogoBox variant="div" href='/'>
                        <img src="/src/img/logo.png" alt='Mojo logo' />
                    </LogoBox>

                    <MojoTabsSection>
                        {/* <MojoTabs onClickAway={handleLiveCasino}> */}
                        <MojoTabs onClickAway=''>
                            {openLiveCasino ? 
                                <TabActive>Live Casino Games</TabActive> 
                                : 
                                <Tab onClick={handleLiveCasino}>Live Casino Games</Tab>
                            }
                        </MojoTabs>
                        <MojoTabs onClickAway=''>
                            {slotGames ? 
                                <TabActive>Slot Games</TabActive>
                                :
                                <Tab onClick={handleSlotGames}>Slot Games</Tab>
                            }
                        </MojoTabs>
                    </MojoTabsSection>
                    <TopRightBox>
                            {
                                status === import.meta.env.VITE_FAILED ? 
                                    <Error error={error} />
                                : 
                                    status === import.meta.env.VITE_LOADING ?
                                        <>
                                            <Skeleton variant='rectangle' animation='wave' width={120} height={20} />
                                            <Skeleton variant='rectangle' animation='wave' width={120} height={20} />
                                        </>
                                    :
                                        <>
                                            <Username variant='span'>{user?.username + ','}</Username>
                                            <Wallet>{user?.currency === 'USD' ? '$' + user?.balance : ''}</Wallet>
                                        </>
                            }
                        <FormControlLabel onClick={colorMode.toggleColorMode} control={<MaterialUISwitch defaultChecked />} />
                    </TopRightBox>
                </MojoContainer>
            </MojoBox>
            {openLiveCasino ? <LiveCasino /> : <SlotGames />}
        </>
    )
}

export default Lobby