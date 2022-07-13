import { BoxLine, BoxLineTitleContainer, LiveCasinoImgSection, ImageBox, ImageBoxContent, ImageBoxGameName,
    GamePlayersQty } from '../helper/styles'
import { Grid, styled, Paper, Typography } from '@mui/material'
import GameBox from './GameBox'

const ShowGridGames = ({games, gameType}) => {

    // console.log('show grid games', games)
    // console.log('show grid gametype', gameType)

    return (
        <>
            <BoxLine>
                <BoxLineTitleContainer>{gameType}</BoxLineTitleContainer>
            </BoxLine>
            <LiveCasinoImgSection>
                <Grid container spacing={2}>
                    {games.map((game, index) =>
                        <Grid item xs={3} key={index}>
                            <GameBox game={game} />
                        </Grid>
                    )}
                </Grid>
            </LiveCasinoImgSection>
        </>
    )
}

export default ShowGridGames