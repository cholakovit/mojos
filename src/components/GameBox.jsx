import {
  ImageBox,
  ImageBoxContent,
  ImageBoxGameName,
  GamePlayersQty
} from "../helper/styles";
import { Typography } from "@mui/material";
import Skeletons from "./Skeletons";
import GameLabels from "./GameLabels";
import { useState } from "react";
import GamePic from './GamePic'

const GameBox = ({ game }) => {
  const [showThumb, setShowThumb] = useState(true);
    console.log('game', game.thumbnails[0].videoUrl)
  let content = "";
  showThumb
    ? (content = <GamePic game={game} type={1} />)
    : (content = <>
        {game.thumbnails[0].videoUrl ? 
            <GamePic game={game} type={2} />
        : 
        (content = <GamePic game={game} type={1} />) 
        }
    </>);

  return (
    <>
      {game ? (
        <ImageBox
          href={game.clientUrl}
          onMouseOver={() => {
            setShowThumb(false);
          }}
          onMouseOut={() => {
            setShowThumb(true);
          }}
        >
          <GameLabels game={game} type={2} />
          {content}
          <ImageBoxContent variant="span">
            <ImageBoxGameName variant="span">{game.name}</ImageBoxGameName>
            <GamePlayersQty>
              / <img src="/src/img/players.svg" alt="people playing" />
              <Typography variant="span">10</Typography>
            </GamePlayersQty>
          </ImageBoxContent>
        </ImageBox>
      ) : (
        <Skeletons flag={1} />
      )}
    </>
  );
};

export default GameBox;
