
import { MojoTabsSection, MojoBox, LogoBox, MojoContainer, TopRightBox, Username, Wallet, MaterialUISwitch, TabActive, Tab,
    MojoTabs } from '../helper/styles'
import { useTheme, FormControlLabel, Box } from '@mui/material'

import { useContext, useEffect } from "react"
import { ColorModeContext } from '../helper/Context'
import LiveCasino from '../components/LiveCasino'
import SlotGames from '../components/SlotGames'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getUser, selectUser } from "../store/userSlice"

const Lobby = () => {
    const dispatch = useDispatch()

    const mojoTheme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const [openLiveCasino, setOpenLiveCasino] = useState(true)
    const [slotGames, setSlotGames] = useState(false)
    
    const handleLiveCasino = () => {
        setOpenLiveCasino(true)
        setSlotGames(false)
    }

    const handleSlotGames = () => {
        setSlotGames(true)
        setOpenLiveCasino(false)
    }

    useEffect(() => {
        dispatch(selectUser())
    }, [])

    const user = useSelector(getUser)

    return (
        <>
            <MojoBox>
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
                        <Username variant='span'>{user?.username},</Username>
                        <Wallet>{user?.currency === 'USD' ? '$' : ''}{user?.balance}</Wallet>
                        <FormControlLabel onClick={colorMode.toggleColorMode} control={<MaterialUISwitch defaultChecked />} />
                    </TopRightBox>
                </MojoContainer>
            </MojoBox>
            {openLiveCasino ? <LiveCasino /> : <SlotGames />}
        </>
    )
}

export default Lobby