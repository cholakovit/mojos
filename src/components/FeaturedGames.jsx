import {
  BoxLine,
  FeaturedGameBox,
  BoxLineTitleContainer,
  FeaturedGamesContainer,
} from "../helper/styles";
import { getGames, getAllGameStatus, getGamesError } from "../store/gameSlice";
import { useSelector } from "react-redux";
import Skeletons from "./Skeletons";
import GameLabels from "./GameLabels";
import GamePic from "./GamePic";

const FeaturedGames = () => {
  const fGames = useSelector(getGames);
  const status = useSelector(getAllGameStatus);
  const error = useSelector(getGamesError);

  const featuredGames = fGames?.filter((game) => game.isFeatured === true);

  return (
    <>
      <BoxLine>
        <BoxLineTitleContainer>Featured Games</BoxLineTitleContainer>
      </BoxLine>
      <FeaturedGamesContainer>
        {status === import.meta.env.VITE_FAILED ? (
          <BoxLine>
            <BoxLineTitleContainer>
              <Error error={error} />
            </BoxLineTitleContainer>
          </BoxLine>
        ) : status === import.meta.env.VITE_LOADING ? (
          <Skeletons flag={2} />
        ) : (
          featuredGames?.map((game, index) => (
            <FeaturedGameBox key={index} href={game.clientUrl}>
              <GameLabels game={game} type={1} />
              {" "}
              <GamePic game={game} type={3} />
            </FeaturedGameBox>
          ))
        )}
      </FeaturedGamesContainer>
    </>
  );
};

export default FeaturedGames;