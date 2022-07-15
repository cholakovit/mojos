import {
  GameLine,
  BoxLine,
  BoxLineTitleContainer,
  FilterButton,
  SlotsLabel,
  FilterBox,
  LinesFilterBox,
  FeaturedGamesFilterBox,
  MojoDivider,
  SlotGameBox,
  FilterOptions,
  ImageBox,
} from "../helper/styles";
import {
  filterByLines,
  filteredByGameFeatures,
  getFilteredGames,
  getFilteredGamesMsg,
  getGames,
  getAllGameStatus,
  getGamesError,
  selectGames,
} from "../store/gameSlice";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedGames from "./FeaturedGames";
import GameLabels from "./GameLabels";
import Skeletons from "./Skeletons";

import { Box, Typography } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GamePic from "./GamePic";

const SlotGames = () => {
  const dispatch = useDispatch();
  const [filteredGamesNotFoundMsg, setFilteredGamesNotFoundMsg] = useState();
  const [slotGames, setSlotGames] = useState();
  const [showFilters, setShowFilters] = useState(true);
  const container = useRef(null);

  const games = useSelector(getGames);
  const status = useSelector(getAllGameStatus);
  const error = useSelector(getGamesError);

  //temporary
  useEffect(() => {
    if (status === import.meta.env.VITE_IDLE) {
      dispatch(selectGames());
    }
  }, []);

  const handleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleLines = (lineValue) => {
    if (lineValue) {
      dispatch(filterByLines(lineValue));
    }
  };

  const handleGameFeatures = (gameFeature) => {
    if (gameFeature) {
      dispatch(filteredByGameFeatures(gameFeature));
    }
  };

  let filteredGames = useSelector(getFilteredGames);
  const filteredGamesMsg = useSelector(getFilteredGamesMsg);

  useEffect(() => {
    if (filteredGames.length > 0) {
      filteredGames = Array.from(new Set(filteredGames));

      setSlotGames(filteredGames);
    } else {
      if (filteredGamesMsg == null) {
        setSlotGames(games);
      } else {
        setSlotGames(null);
      }
    }
  }, [filteredGames, filteredGamesMsg]);

  console.log("games", games[0].slotData);

  return (
    <Box>
      <FeaturedGames />

      <BoxLine>
        <BoxLineTitleContainer>
          <SlotsLabel variant="span">Slots</SlotsLabel>
          <FilterButton onClick={handleFilters}>
            <Typography>Filters</Typography>
            {showFilters ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </FilterButton>
        </BoxLineTitleContainer>
      </BoxLine>

      <GameLine>
        {showFilters ? (
          <FilterOptions container={container.current}>
            <LinesFilterBox>
              <FormLabel component="legend">Lines</FormLabel>
              <MojoDivider />
              <RadioGroup column name="position" defaultValue="top">
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="5-9"
                  onClick={(e) => {
                    handleLines(e.target.value);
                  }}
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="10-29"
                  onClick={(e) => {
                    handleLines(e.target.value);
                  }}
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="29-50"
                  onClick={(e) => {
                    handleLines(e.target.value);
                  }}
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label=">50"
                  onClick={(e) => {
                    handleLines(e.target.value);
                  }}
                />
              </RadioGroup>
            </LinesFilterBox>

            <GameLine>
              <FeaturedGamesFilterBox component="fieldset">
                <FormLabel component="legend">Game Features</FormLabel>
                <MojoDivider />
                <FormGroup column>
                  <FormControlLabel
                    value="1"
                    control={<Checkbox />}
                    label="FreeSpins"
                    labelPlacement="end"
                    onClick={(e) => {
                      handleGameFeatures(e.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="2"
                    control={<Checkbox />}
                    label="BonusGame"
                    labelPlacement="end"
                    onClick={(e) => {
                      handleGameFeatures(e.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="3"
                    control={<Checkbox />}
                    label="Scatter Paysui"
                    labelPlacement="end"
                    onClick={(e) => {
                      handleGameFeatures(e.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="4"
                    control={<Checkbox />}
                    label="Gamble"
                    labelPlacement="end"
                    onClick={(e) => {
                      handleGameFeatures(e.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="5"
                    control={<Checkbox />}
                    label="Mysteries"
                    labelPlacement="end"
                    onClick={(e) => {
                      handleGameFeatures(e.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="6"
                    control={<Checkbox />}
                    label="Wild"
                    labelPlacement="end"
                    onClick={(e) => {
                      handleGameFeatures(e.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="7"
                    control={<Checkbox />}
                    label="Fruits"
                    labelPlacement="end"
                    onClick={(e) => {
                      handleGameFeatures(e.target.value);
                    }}
                  />
                </FormGroup>
              </FeaturedGamesFilterBox>
            </GameLine>
          </FilterOptions>
        ) : null}

        <FilterBox ref={container} />
      </GameLine>

      <SlotGameBox>
        {status === import.meta.env.VITE_FAILED ? (
          <BoxLine>
            <BoxLineTitleContainer>
              <Error error={error} />
            </BoxLineTitleContainer>
          </BoxLine>
        ) : status === import.meta.env.VITE_LOADING ? (
          <Skeletons flag={4} />
        ) : filteredGamesMsg ? (
          <BoxLine>
            <BoxLineTitleContainer>{filteredGamesMsg}</BoxLineTitleContainer>
          </BoxLine>
        ) : (
          slotGames?.map((game, index) => (
            <ImageBox key={index} href={game.clientUrl}>
              <GameLabels game={game} type={1} />
              <GamePic game={game} type={1} />
            </ImageBox>
          ))
        )}
      </SlotGameBox>
    </Box>
  );
};

export default SlotGames;
