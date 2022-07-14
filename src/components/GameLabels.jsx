import { GameLabelTags, GameLabel } from '../helper/styles'
import { Typography } from '@mui/material'

const GameLabels = ({game}) => {

    return (
        <GameLabelTags>
            {game?.slotData?.linesCount && 
                <GameLabel>
                    <Typography variant='span'>{game.slotData.linesCount}</Typography> lines
                </GameLabel>
            }
            {game?.slotData?.tags.map((tag, index) => 
                    <GameLabel key={index}>
                        {
                            {
                                0 : import.meta.env.VITE_GAME_TAG_0_FREESPINS,
                                1 : import.meta.env.VITE_GAME_TAG_1_BONUSGAME,
                                2 : import.meta.env.VITE_GAME_TAG_2_SCATTERPAYS,
                                3 : import.meta.env.VITE_GAME_TAG_3_GAMBLE,
                                4 : import.meta.env.VITE_GAME_TAG_4_MYSTERIES,
                                5 : import.meta.env.VITE_GAME_TAG_5_WILD,
                                6 : import.meta.env.VITE_GAME_TAG_6_FRUITS,
                            }[tag]
                        }
                    </GameLabel>
                )
            }
        </GameLabelTags>
    )
}

export default GameLabels