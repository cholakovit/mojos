import {
  BoxLine,
  FeaturedGameBox,
  BoxLineTitleContainer,
  FeaturedGamesContainer,
} from "../helper/styles";
import { getGames, getAllGameStatus, getGamesError } from "../store/gameSlice";
import { useSelector } from "react-redux";
import Skeletons from "./Skeletons";

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
              {" "}
              {game.thumbnails[6] ? (
                <img
                  src={game.thumbnails[6]?.imageUrl}
                  alt={game.name}
                  loading="lazy"
                />
              ) : game.thumbnails[3] ? (
                <img
                  src={game.thumbnails[3]?.imageUrl}
                  alt={game.name}
                  loading="lazy"
                />
              ) : (
                ""
              )}
            </FeaturedGameBox>
          ))
        )}
      </FeaturedGamesContainer>
    </>
  );
};

export default FeaturedGames;
