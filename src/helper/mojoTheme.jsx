import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
//import { colors } from '@mui/material'

export const mojoTheme = (mode) => {
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                margin: 0,
                mode,
                ...(mode === "light"
                  ? {
                      backgroundColor: "#31254a",
                      backgroundImage: "url(./src/img/background.svg)",
                    }
                  : {
                      backgroundColor: "#1f1530",
                      backgroundImage: "url(./src/img/background.svg)",
                    }),
              },
            },
          },
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#3b2a61",
                  second: "#3b2a61",
                  third: "#1f1530",
                  fourth: "#aab4be",
                  orangeBorder: "1px solid #f3973b",
                  orangeBorderShadow: "0px 0px 2px #f8f9fa",
                  mainTextColor: "#000000",
                  secondaryTextColor: "#eb9148",
                  yellowColor: '#bd8a47',
                  greenColor: '#7db03b',
                  orangeGradient:
                    "-webkit-linear-gradient(270deg, #ea8417 10%, #fbcf3d 60%)",
                  tabBoxShadow:
                    "inset -6px 0px 4px -6px #f8f9fa, inset 0px 6px 4px -6px #f8f9fa, inset 6px 0px 4px -6px #f8f9fa",
                  mojoDividerBorder: "5px solid #644b93",
                  pinkButton: "#ff2b9f",
                  pinkButtonHover: "#e01484",
                  imgBoxBorder: "linear-gradient(360deg, #c30d6b, #efd614) 1",
                  gameLabelBorder: "1px solid #ff2b9f",
                  gameLabelBg: "#20183a",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#1f1530",
                  second: "#17141f",
                  third: "#493370",
                  fourth: "#8796A5",
                  orangeBorder: "1px solid #e56d1d",
                  orangeBorderShadow: "0px 0px 2px #f8f9fa",
                  mainTextColor: "#fff",
                  secondaryTextColor: "#eb9148",
                  yellowColor: '#d2923e',
                  greenColor: '#7db03b',
                  orangeGradient:
                    "-webkit-linear-gradient(270deg, #ea8417 10%, #fbcf3d 60%)",
                  tabBoxShadow:
                    "inset -6px 0px 4px -6px #f8f9fa, inset 0px 6px 4px -6px #f8f9fa, inset 6px 0px 4px -6px #f8f9fa",
                  mojoDividerBorder: "5px solid #291E3C",
                  pinkButton: "#ff2b9f",
                  pinkButtonHover: "#e01484",
                  imgBoxBorder: "linear-gradient(360deg, #c30d6b, #efd614) 1",
                  gameLabelBorder: "1px solid #ff2b9f",
                  gameLabelBg: "#20183a",
                },
              }),
        },
      }),
    [mode]
  );

  return theme;
};
