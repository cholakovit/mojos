import {
  BoxLine,
  BoxLineTitleContainer,
  LiveCasinoImgSection,
} from "../helper/styles";
import { Grid } from "@mui/material";
import GameBox from "./GameBox";

const ShowGridGames = ({ games, gameType }) => {
  return (
    <>
      <BoxLine>
        <BoxLineTitleContainer>{gameType}</BoxLineTitleContainer>
      </BoxLine>
      <LiveCasinoImgSection>
        <Grid container spacing={2}>
          {games.map((game, index) => (
            <Grid item xs={3} key={index}>
              <GameBox game={game} />
            </Grid>
          ))}
        </Grid>
      </LiveCasinoImgSection>
    </>
  );
};

export default ShowGridGames;
