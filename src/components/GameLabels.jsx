import { GameLabelTags, GameLabel } from "../helper/styles";
import { Typography } from "@mui/material";

const GameLabels = ({ game, type }) => {
  return (
    <>
      {
        {
          1: (
            <>
              <GameLabelTags>
                {game?.slotData?.linesCount && (
                  <GameLabel>
                    <Typography variant="span">
                      {game.slotData.linesCount}
                    </Typography>{" "}
                    lines
                  </GameLabel>
                )}
                {game?.slotData?.tags.map((tag, index) => (
                  <GameLabel key={index}>
                    {
                      {
                        0: import.meta.env.VITE_GAME_TAG_0_FREESPINS,
                        1: import.meta.env.VITE_GAME_TAG_1_BONUSGAME,
                        2: import.meta.env.VITE_GAME_TAG_2_SCATTERPAYS,
                        3: import.meta.env.VITE_GAME_TAG_3_GAMBLE,
                        4: import.meta.env.VITE_GAME_TAG_4_MYSTERIES,
                        5: import.meta.env.VITE_GAME_TAG_5_WILD,
                        6: import.meta.env.VITE_GAME_TAG_6_FRUITS,
                      }[tag]
                    }
                  </GameLabel>
                ))}
              </GameLabelTags>
            </>
          ),
          2: (
            <GameLabelTags>
              {game?.categories?.map((cat, index) => (
                <GameLabel key={index}>
                  {
                    {
                      0: import.meta.env.VITE_GAME_CATEGORY_0_SLOTS,
                      1: import.meta.env.VITE_GAME_CATEGORY_1_LIVE,
                      2: import.meta.env.VITE_GAME_CATEGORY_2_DEALER,
                      3: import.meta.env.VITE_GAME_CATEGORY_3_CARDS,
                    }[cat]
                  }
                </GameLabel>
              ))}
            </GameLabelTags>
          ),
        }[type]
      }
    </>
  );
};

export default GameLabels;
