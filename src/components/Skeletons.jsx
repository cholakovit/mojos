import {
  ImageBox,
  BoxLine,
  BoxLineTitleContainer,
  LiveCasinoImgSection,
  FeaturedGameBox,
} from "../helper/styles";
import { Grid, Skeleton } from "@mui/material";

const Skeletons = ({ flag }) => {
  return (
    <>
      {
        {
          1: (
            <>
              <ImageBox>
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={170}
                />
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={30}
                  sx={{ mt: 1 }}
                />
              </ImageBox>
            </>
          ),
          2: (
            <>
              <FeaturedGameBox>
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={500}
                />
              </FeaturedGameBox>
              <FeaturedGameBox>
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={500}
                />
              </FeaturedGameBox>
              <FeaturedGameBox>
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={500}
                />
              </FeaturedGameBox>
              <FeaturedGameBox>
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={500}
                />
              </FeaturedGameBox>
            </>
          ),
          3: (
            <>
              <BoxLine>
                <BoxLineTitleContainer>
                  <Skeleton
                    variant="rectangle"
                    animation="wave"
                    width={120}
                    height={20}
                  />
                </BoxLineTitleContainer>
              </BoxLine>
              <LiveCasinoImgSection>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Skeleton
                      variant="rectangle"
                      animation="wave"
                      width={260}
                      height={120}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Skeleton
                      variant="rectangle"
                      animation="wave"
                      width={260}
                      height={120}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Skeleton
                      variant="rectangle"
                      animation="wave"
                      width={260}
                      height={120}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Skeleton
                      variant="rectangle"
                      animation="wave"
                      width={260}
                      height={120}
                    />
                  </Grid>
                </Grid>
              </LiveCasinoImgSection>
            </>
          ),
          4: (
            <>
              <ImageBox>
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={177}
                />
              </ImageBox>
              <ImageBox>
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={177}
                />
              </ImageBox>
              <ImageBox>
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={177}
                />
              </ImageBox>
              <ImageBox>
                <Skeleton
                  variant="rectangle"
                  animation="wave"
                  width={260}
                  height={177}
                />
              </ImageBox>
            </>
          ),
          5: (
            <>
              <Skeleton
                variant="rectangle"
                animation="wave"
                width={120}
                height={20}
              />
              <Skeleton
                variant="rectangle"
                animation="wave"
                width={120}
                height={20}
              />
            </>
          ),
        }[flag]
      }
    </>
  );
};

export default Skeletons;
