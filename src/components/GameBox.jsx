import { BoxLine, BoxLineTitleContainer, LiveCasinoImgSection, ImageBox, ImageBoxContent, ImageBoxGameName,
    GamePlayersQty } from '../helper/styles'
import { Grid, styled, Paper, Typography } from '@mui/material'
import Skeletons from './Skeletons'

const GameBox = ({game}) => {

    return (
        <>
            {game ? 
                <ImageBox href={game.clientUrl}>
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
            : 
                <Skeletons flag={1} />
            }
        </>
    )
}

export default GameBox


{/* <ImageBox href={game.clientUrl}>
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
</ImageBox> */}