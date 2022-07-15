import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGames,
  selectGames,
  getAllGameStatus,
  getGamesError,
} from "../store/gameSlice";

import { BoxLine, BoxLineTitleContainer } from "../helper/styles";
import { Box } from "@mui/material";
import ShowGridGames from "./ShowGridGames";
import Error from "./Error";
import Skeletons from "./Skeletons";

const LiveCasino = () => {
  const dispatch = useDispatch();

  const status = useSelector(getAllGameStatus);
  const error = useSelector(getGamesError);

  useEffect(() => {
    if (status === import.meta.env.VITE_IDLE) {
      dispatch(selectGames());
    }
  }, []);

  const games = useSelector(getGames);

  const groupedGames = games?.reduce((group, game) => {
    group[game.gameType] = group[game.gameType] ?? [];
    group[game.gameType].push(game);

    return group;
  }, {});

  return (
    <Box>
      {status === import.meta.env.VITE_FAILED ? (
        <BoxLine>
          <BoxLineTitleContainer>
            <Error error={error} />
          </BoxLineTitleContainer>
        </BoxLine>
      ) : status === import.meta.env.VITE_LOADING ? (
        <Skeletons flag={3} />
      ) : (
        <>
          {groupedGames[0] ? (
            <ShowGridGames
              games={groupedGames[0]}
              gameType={import.meta.env.VITE_GAME_TYPE_O}
            />
          ) : (
            ""
          )}
          {groupedGames[1] ? (
            <ShowGridGames
              games={groupedGames[1]}
              gameType={import.meta.env.VITE_GAME_TYPE_1}
            />
          ) : (
            ""
          )}
          {groupedGames[2] ? (
            <ShowGridGames
              games={groupedGames[2]}
              gameType={import.meta.env.VITE_GAME_TYPE_2}
            />
          ) : (
            ""
          )}
          {groupedGames[3] ? (
            <ShowGridGames
              games={groupedGames[3]}
              gameType={import.meta.env.VITE_GAME_TYPE_3}
            />
          ) : (
            ""
          )}
          {groupedGames[4] ? (
            <ShowGridGames
              games={groupedGames[4]}
              gameType={import.meta.env.VITE_GAME_TYPE_4}
            />
          ) : (
            ""
          )}
          {groupedGames[5] ? (
            <ShowGridGames
              games={groupedGames[5]}
              gameType={import.meta.env.VITE_GAME_TYPE_5}
            />
          ) : (
            ""
          )}
          {groupedGames[6] ? (
            <ShowGridGames
              games={groupedGames[6]}
              gameType={import.meta.env.VITE_GAME_TYPE_6}
            />
          ) : (
            ""
          )}
          {groupedGames[7] ? (
            <ShowGridGames
              games={groupedGames[7]}
              gameType={import.meta.env.VITE_GAME_TYPE_7}
            />
          ) : (
            ""
          )}
          {groupedGames[8] ? (
            <ShowGridGames
              games={groupedGames[8]}
              gameType={import.meta.env.VITE_GAME_TYPE_8}
            />
          ) : (
            ""
          )}
          {groupedGames[9] ? (
            <ShowGridGames
              games={groupedGames[9]}
              gameType={import.meta.env.VITE_GAME_TYPE_9}
            />
          ) : (
            ""
          )}
          {groupedGames[10] ? (
            <ShowGridGames
              games={groupedGames[10]}
              gameType={import.meta.env.VITE_GAME_TYPE_1O}
            />
          ) : (
            ""
          )}
        </>
      )}
    </Box>
  );
};

export default LiveCasino;
