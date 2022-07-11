import { ImageBox, ImageBoxContent, GameLine, BoxLine, ImageBoxGameName, GamePlayersQty, 
    LiveCasinoImgSection } from '../helper/styles'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames, selectGames } from "../store/gameSlice"

import { Box, Typography, Skeleton } from '@mui/material'

const LiveCasino = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        dispatch(selectGames())
    }, [])

    const games = useSelector(getGames)

    useEffect(() => {
        
        setTimeout(() => {
            setIsLoading(true)
        }, 2500)
        console.log(isLoading)
      }, [isLoading])

    const groupedGames = games.reduce((group, game) => {
        group[game.gameType] = group[game.gameType] ?? []
        group[game.gameType].push(game)

        return group
    }, {})

    //console.log('groupedGames', groupedGames );

    return (
        <Box>
            <BoxLine></BoxLine>
            <LiveCasinoImgSection>
                {isLoading ?
                    groupedGames[0] && groupedGames[0]?.map((game, index) => 
                        <ImageBox key={index} href={game.clientUrl}>
                            {game.thumbnails[0] ?
                                <img src={game.thumbnails[0]?.imageUrl} alt={game.name} loading="lazy" />
                            : game.thumbnails[1] ?
                                <img src={game.thumbnails[1]?.imageUrl} alt={game.name} loading="lazy" /> 
                            : ''}
                            <ImageBoxContent variant='span'>
                                <ImageBoxGameName variant='span'>{game.name}</ImageBoxGameName>
                                <GamePlayersQty>/ <img src="/src/img/players.svg" alt='people playing' /> 
                                    <Typography variant='span'>10</Typography>
                                </GamePlayersQty>
                            </ImageBoxContent>
                        </ImageBox>
                    ) : <Skeleton variant='rectangle' animation='wave' width={1120} height={220} />}
            </LiveCasinoImgSection>
            <BoxLine></BoxLine>
            <GameLine>
                {isLoading ?
                    groupedGames[10] && groupedGames[10]?.map((game, index) =>  
                        <ImageBox key={index} href={game.clientUrl}>
                            <img src={game.thumbnails[1]?.imageUrl} srcSet={`${game.thumbnails[1]?.imageUrl} 2x`} alt={game.name}
                                loading="lazy" />
                            <ImageBoxContent variant='span'>
                                <ImageBoxGameName variant='span'>{game.name}</ImageBoxGameName>
                                <GamePlayersQty>/ <img src="/src/img/players.svg" alt='people playing' /> 
                                    <Typography variant='span'>10</Typography>
                                </GamePlayersQty>
                            </ImageBoxContent>
                        </ImageBox>
                        
                    )
                : <Skeleton variant='rectangle' animation='wave' width={260} height={220} /> }
            </GameLine>
        </Box>
    )
}

export default LiveCasino