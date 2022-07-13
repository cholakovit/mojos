import { grey, orange, purple } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
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
                                ...(mode === 'light' ? { 
                                    backgroundColor: "#9e82e9",
                                    backgroundImage:'url(./src/img/background.svg)',
                                } : { 
                                    backgroundColor: "#1f1530",
                                    backgroundImage:'url(./src/img/background.svg)',
                                }),
                            }
                        }
                    }
                },
                palette: {
                    mode,
                    ...(mode === 'light'
                    ? {
                        // palette values for light mode
                        text: {
                          primary: {
                            light: '#59468f',
                            main: '#372e50',
                            dark: '#17141f'
                        },
                          secondary: grey[800],
                        },
                        primary: {
                            orangeBorder: '1px solid #110e0c',
                            main: '#fff',
                            orangeBorderShadow: '0px 0px 2px #f8f9fa',
                            tabBoxShadow: 'inset -6px 0px 6px -6px #f8f9fa, inset 0px 6px 6px -6px #f8f9fa, inset 6px 0px 6px -6px #f8f9fa',
                            orangeGradient: '-webkit-linear-gradient(270deg, #fbcf3d 60%, #ea8417 10%)',
                            mojoDividerBorder: '5px solid #6c3fba',
                            imgBoxBorder: 'linear-gradient(360deg, #620334, #a89500) 1'
                        },
                        secondary: {
                            light: '#785fbc',
                            tab: '#9e82e9',
                            main: '#8383ae',
                            dark: '#17141f'
                        },
                      }
                    : {
                        // palette values for dark mode
                        primary: {
                            light: '#f0f0f0',
                            main: '#e2e2e2',
                            dark: '#1f1530',
                            pinkButton: '#ff2b9f',
                            pinkButtonHover: '#e01484',
                            orangeBorder: '1px solid #e56d1d',
                            orangeBorderShadow: '0px 0px 2px #f8f9fa',
                            tabBoxShadow: 'inset -6px 0px 4px -6px #f8f9fa, inset 0px 6px 4px -6px #f8f9fa, inset 6px 0px 4px -6px #f8f9fa',
                            orangeGradient: '-webkit-linear-gradient(270deg, #ea8417 10%, #fbcf3d 60%)',
                            mojoDividerBorder: '5px solid #291E3C',
                            imgBoxBorder: 'linear-gradient(360deg, #c30d6b, #efd614) 1'
                        },
                        secondary: {
                            light: '#59468f',
                            main: '#856bc6',
                            dark: '#17141f'
                        },
                        cardHeadDark: grey[600],
                        // divider: grey[700],
                        // background: {
                        //   default: grey[900],
                        //   paper: grey[900],
                        // },
                        // text: {
                        //   primary: '#fff',
                        //   secondary: grey[500],
                        // },
                      }),

                }
            }),
        [mode]
    )

    return theme

}
