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
                                    //backgroundColor: "#1f1530",
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
                            pinkButtonHover: '#e01484'
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
