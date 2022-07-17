import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Container,
  Typography,
  Switch,
  FormControl,
  Divider,
  tooltipClasses,
  Tooltip,
} from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";

export const Test = styled(Box)(({ theme }) => {
  console.log("theme", theme);
});

export const MojoBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.second,
  borderBottom: theme.palette.primary.orangeBorder,
  boxShadow: theme.palette.primary.orangeBorderShadow,
}));

export const MojoContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  gap: "80px",
}));

export const TopRightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "30%",
  margin: "0 0 10px 0",
}));

export const Username = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.secondaryTextColor,
  margin: "20px 10px 0px 10px",
  fontSize: "14px",
}));

//Wallet
export const Wallet = styled(Typography)(({ theme }) => ({
  margin: "16px 20px 10px 0px",
  fontSize: "20px",
  fontWeight: "bold",
  background: theme.palette.primary.orangeGradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const LogoBox = styled(Link)({
  margin: "0px 100px",

  "& img": {
    width: "102px",
    height: "77px",
    position: "absolute",
    margin: "10px 0 0 0",
  },
});

export const MojoTabsSection = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  margin: "3px 0 -3px 0",
}));

export const MojoTabs = styled(ClickAwayListener)({});

export const Tab = styled(Typography)(({ theme }) => ({
  margin: "16px 0 0px 0px",
  width: "50%",
  height: "50px",
  //orangeGradient
  background: theme.palette.primary.orangeGradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  fontWeight: "bold",
  borderLeft: theme.palette.primary.orangeBorder,
  borderTop: theme.palette.primary.orangeBorder,
  borderRight: theme.palette.primary.orangeBorder,
  borderRadius: "0",
  cursor: "pointer",
  textAlign: "center",
  textTransform: "uppercase",
  padding: "15px",
}));

export const TabActive = styled(Typography)(({ theme }) => ({
  margin: "16px 0 0 0",
  width: "50%",
  height: "50px",
  borderLeft: theme.palette.primary.orangeBorder,
  borderTop: theme.palette.primary.orangeBorder,
  borderRight: theme.palette.primary.orangeBorder,
  boxShadow: theme.palette.primary.tabBoxShadow,
  color: theme.palette.primary.mainTextColor,
  borderRadius: "0",
  cursor: "pointer",
  padding: "15px",
  textAlign: "center",
  textTransform: "uppercase",
  backgroundColor: theme.palette.primary.main,
  backgroundImage: "url(./src/img/background.svg)",
}));

export const BoxLine = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.second,
  display: "flex",
  width: "100%",
  height: "50px",
  margin: "40px 0 20px 0",
  //mojoDividerBorder
  borderTop: theme.palette.primary.mojoDividerBorder,
  borderBottom: theme.palette.primary.mojoDividerBorder,
}));

export const BoxLineTitleContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.mainTextColor,
  padding: "8px 0px",
  display: "flex",
}));

export const SlotsLabel = styled(Typography)(({ theme }) => ({
  width: "10%",
  fontSize: "18px",
  flexGrow: 1,
}));

export const FilterButton = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.pinkButton,
  borderRadius: 0,
  padding: "2px 10px",
  fontSize: "12px",
  display: "flex",
  margin: "0 20px 0 0",
  cursor: "pointer",
  height: "28px",
  width: "10%",
  ":hover": {
    backgroundColor: theme.palette.primary.pinkButtonHover,
  },
}));

export const FilterOptions = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.second,
  display: "flex",
  width: "100%",
  margin: "40px 0 20px 0",
  borderTop: theme.palette.primary.mojoDividerBorder,
  borderBottom: theme.palette.primary.mojoDividerBorder,
}));

export const FilterBox = styled(Box)(({ theme }) => ({}));

export const LinesFilterBox = styled(FormControl)(({ theme }) => ({
  margin: "20px",
  color: theme.palette.primary.mainTextColor,
  width: "30%",
  "& legend": {
    color: theme.palette.primary.mainTextColor,
  },
}));

export const FeaturedGamesFilterBox = styled(FormControl)(({ theme }) => ({
  margin: "20px",
  color: theme.palette.primary.mainTextColor,
  width: "30%",
  "& legend": {
    color: theme.palette.primary.mainTextColor,
  },
}));

export const MojoDivider = styled(Divider)(({ theme }) => ({
  margin: "5px 0 10px 0",
}));

export const FeaturedGamesContainer = styled(Container)({
  overflow: "hidden",
  display: "flex",
  width: "2200px",
});

export const LiveCasinoImgSection = styled(Container)({
  overflow: "hidden",
  display: "flex",
  width: "75%",
});

export const GameLine = styled(Container)({
  overflow: "hidden",
  display: "flex",
});

export const SlotGameBox = styled(Container)({
  display: "flex",
  flexWrap: "wrap",
});

export const FeaturedGameBox = styled(Link)(({ theme }) => ({
  margin: "10px 35px 0 0",
  width: "260px!important",
  position: "relative",
  display: "block",
  textDecoration: "none",
  "& img": {
    width: "258px",
    height: "499px",
    display: "block",
  },
}));

export const FeaturedGameBox2 = styled(Link)(({ theme }) => ({
  margin: "10px 30px 0 0",
  width: "100%",
  display: "block",
  textDecoration: "none",
  "& img": {
    width: "258px",
    height: "499px",
    display: "block",
  },
}));

export const ImageBox = styled(Link)(({ theme }) => ({
  margin: "10px 10px",
  width: "260px",
  display: "block",
  border: "1px solid",
  position: "relative",
  overflow: "hidden",
  borderImage: theme.palette.primary.imgBoxBorder,
  textDecoration: "none",
  "& img": {
    width: "258px",
    height: "177px",
    display: "block",
  },
}));

export const ImageHolder = styled(Link)(({ theme }) => ({
  border: "1px solid red",
  display: "block",
}));

export const VideoHolder = styled(Link)(({ theme }) => ({
  border: "1px solid green",
  display: "none",
}));

export const GameLabelTags = styled(Typography)(({ theme }) => ({
  position: "absolute",
  left: "54%",
  width: "52%",
  margin: "-2px 0 0 0",
  padding: "3px 8px",
}));

export const GameLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "12px",
  textAlign: "right",
  textTransform: "uppercase",
  border: theme.palette.primary.gameLabelBorder,
  backgroundColor: theme.palette.primary.gameLabelBg,
  padding: "2px 6px",
  margin: "2px",
  overflow: "hidden",
  opacity: "0.8",
  color: theme.palette.primary.greenColor,
  "& span": {
    color: theme.palette.primary.yellowColor,
  },
  "& h6": {
    color: theme.palette.primary.mainTextColor,
    fontSize: '12px',
    float: 'right'
  },
  "& h5": {
    color: theme.palette.primary.greenColor,
    fontSize: '12px',
    float: 'right',
    margin: '1px 5px 0 0',
    fontWeight: 'bolder'
  }
}));

export const GameTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.third,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.third,
  },
}));

export const ImageBoxContent = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.second,
  width: "100%",
  display: "flex",
  padding: "10px 5px",
}));

export const ImageBoxGameName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.mainTextColor,
  width: "72%",
}));

export const GamePlayersQty = styled(Typography)(({ theme }) => ({
  width: "28%",
  display: "flex",
  color: theme.palette.primary.mainTextColor,
  fontSize: "24px",
  margin: "-5px 0 0 0",
  "& img": {
    width: "18px",
    height: "18px",
    margin: "10px 5px",
    fill: theme.palette.primary.mainTextColor,
  },
  "& span": {
    fontSize: "12px",
    padding: "10px 5px",
  },
}));

//Switcher
export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: theme.palette.primary.mainTextColor,
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          theme.palette.primary.mainTextColor
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.fourth,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.primary.third,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.primary.fourth,
    borderRadius: 20 / 2,
  },
}));
