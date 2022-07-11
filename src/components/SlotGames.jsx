import { GameLine, BoxLine, FeaturedGameBox, BoxLineTitleContainer, FilterButton, SlotsLabel, FilterBox, LinesFilterBox, 
    FeaturedGamesFilterBox, MojoDivider, SlotGameBox, FeaturedGames, FilterOptions, ImageBox } from '../helper/styles'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSlotGames, getGameStatus, filterByLines, filteredByGameFeatures, getFilteredGames, 
    getGames, getAllGameStatus, selectGames } from "../store/gameSlice"

import { Box, Button } from '@mui/material'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import Portal from '@mui/base/Portal';

const SlotGames = () => {
    const dispatch = useDispatch()
    const [slotGames, setSlotGames] = useState()
    const [showFilters, setShowFilters] = useState(false)
    const [allGames, setAllGames] = useState()
    const container = useRef(null)
    const gameStatus = useSelector(getGameStatus)
    const allGameStatus = useSelector(getAllGameStatus)
    const mojoGames = useSelector(getGames)    

    console.log('mojoGames', mojoGames)

    const handleFilters = () => {
        setShowFilters(!showFilters)
    }

    useEffect(() => {
        if(gameStatus === 'idle') {
            dispatch(selectSlotGames())
        }
        if(allGameStatus === 'idle') {
            dispatch(selectGames())
        }
    }, [])

    //const allGames = useSelector(getGames)

    const featuredSlotGames = mojoGames?.filter(game => game.isFeatured === true)
    //console.log('featuredSlotGames', featuredSlotGames)

    const handleLines = (lineValue) => {
        if(lineValue) {
            dispatch(filterByLines(lineValue))        
        }
    }

    const handleGameFeatures = (gameFeature) => {
        if(gameFeature) {
            dispatch(filteredByGameFeatures(gameFeature))
        }
    }

    const filteredGames = useSelector(getFilteredGames)

    useEffect(() => {
        if(filteredGames.length > 0) {
            setSlotGames(filteredGames)
        } else {
            //setSlotGames(allSlotGames)
            //setSlotGames(null)
            setSlotGames(mojoGames)
        }
    }, [filteredGames])

    return (
        <Box>
            <BoxLine>
                <BoxLineTitleContainer>Featured Games</BoxLineTitleContainer>
            </BoxLine>
            <FeaturedGames>
                {featuredSlotGames?.map((game, index) => 
                    <FeaturedGameBox key={index} href={game.clientUrl}>
                                            { 
                    game.thumbnails[6] ?
                        <img src={game.thumbnails[6]?.imageUrl} alt={game.name}
                            loading="lazy" />
                            : game.thumbnails[3] ?
                                <img src={game.thumbnails[3]?.imageUrl} alt={game.name}
                                loading="lazy" /> 
                            : ''}
                    </FeaturedGameBox>
                )}
            </FeaturedGames>
            
            <BoxLine>
                <BoxLineTitleContainer>
                    <SlotsLabel variant='span'>Slots</SlotsLabel>
                    <FilterButton onClick={handleFilters}> 
                        Filters
                        {showFilters ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </FilterButton>
                </BoxLineTitleContainer>
                
            </BoxLine> 
            
            <GameLine>

                {showFilters ? (
                <FilterOptions container={container.current}>

                    <LinesFilterBox>
                        <FormLabel component="legend">Lines</FormLabel> 
                        <MojoDivider />
                        <RadioGroup column  name="position" defaultValue="top">
                            <FormControlLabel value="1" control={<Radio />} label="5-9" 
                                onClick={ (e) => { handleLines(e.target.value) } } />
                            <FormControlLabel value="2" control={<Radio />} label="10-29" 
                                onClick={ (e) => { handleLines(e.target.value) } } />
                            <FormControlLabel value="3" control={<Radio />} label="29-50" 
                                onClick={ (e) => { handleLines(e.target.value) } } />
                            <FormControlLabel value="4" control={<Radio />} label=">50" 
                                onClick={ (e) => { handleLines(e.target.value) } } />
                        </RadioGroup>
                    </LinesFilterBox>


                    <GameLine>
                        <FeaturedGamesFilterBox component="fieldset">
                            <FormLabel component="legend">Game Features</FormLabel>
                            <MojoDivider />
                            <FormGroup column>
                                <FormControlLabel value="1" control={<Checkbox />} label="FreeSpins" labelPlacement="end" 
                                    onClick={ (e) => { handleGameFeatures(e.target.value) } } />
                                <FormControlLabel value="2" control={<Checkbox />} label="BonusGame" labelPlacement="end"
                                    onClick={ (e) => { handleGameFeatures(e.target.value) } } />
                                <FormControlLabel value="3" control={<Checkbox />} label="Scatter Paysui" labelPlacement="end"
                                    onClick={ (e) => { handleGameFeatures(e.target.value) } } />
                                <FormControlLabel value="4" control={<Checkbox />} label="Gamble" labelPlacement="end"
                                    onClick={ (e) => { handleGameFeatures(e.target.value) } } />
                                <FormControlLabel value="5" control={<Checkbox />} label="Mysteries" labelPlacement="end"
                                    onClick={ (e) => { handleGameFeatures(e.target.value) } } />
                                <FormControlLabel value="6" control={<Checkbox />} label="Wild" labelPlacement="end"
                                    onClick={ (e) => { handleGameFeatures(e.target.value) } } />
                                <FormControlLabel value="7" control={<Checkbox />} label="Fruits" labelPlacement="end"
                                    onClick={ (e) => { handleGameFeatures(e.target.value) } } />
                            </FormGroup>
                        </FeaturedGamesFilterBox>
                    </GameLine>
                </FilterOptions>
                ) : null}

                <FilterBox ref={container} />

            </GameLine>

            <SlotGameBox>
            {slotGames?.map((game, index) => 
                <ImageBox key={index} href={game.clientUrl}>
                    {game.thumbnails[0] ?
                        <img src={game.thumbnails[0]?.imageUrl} alt={game.name} loading="lazy" />
                    : game.thumbnails[1] ?
                        <img src={game.thumbnails[1]?.imageUrl} alt={game.name} loading="lazy" /> 
                    : ''}
                </ImageBox>
            )}
            </SlotGameBox>
        </Box>
    )
}

export default SlotGames


{/* <Box>Line Count: {game.slotData?.linesCount}</Box>
<Box>Game Tags: {game.slotData?.tags}</Box> */}