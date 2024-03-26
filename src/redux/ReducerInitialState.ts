import { InitialState } from "./types";

export const initialState: InitialState = {
    modal: {
        open: false,
        modelTitle: "",
        type: "Credit Card"
    },
    theme: {
        paperTheme: {
            dark: {
                borderRadius: 0
            },
            light: {
                borderRadius: 10
            }
        },
        mode: "dark",
        testBoxSelected: {
            dark: { bgcolor: "#619C8A", color: "white" },
            light: { bgcolor: "#243D4D", color: "White" }
        },
        testBoxDisabled: {
            dark: { bgcolor: "#1d1d1d4d", color: "white" },
            light: { bgcolor: "#4343434a", color: "black" }
        },
        testBoxNotSelected: {
            dark: { bgcolor: "#646363", color: "white" },
            light: { bgcolor: "white", color: "black" }
        },
        locationHeader: {
            dark: { bgcolor: "#243D4D", color: "white" },
            light: { bgcolor: "#243D4D", color: "white" }
        },
        checkBoxAndRadioBox: {
            dark: {
                color: "yellow",
                "&.Mui-checked": {
                    color: "yellow"
                },
                "&.Mui-disabled": {
                    color: "green"
                }
            },
            light: {
                color: "#646464",
                "&.Mui-checked": {
                    color: "#619C8A"
                },
                "&.Mui-disabled": {
                    color: "#E2E2E2"
                }
            }
        },
        switchComponent: {
            dark: {
                width: 28,
                height: 16,
                marginRight: 4,
                marginLeft: 4,
                display: "flex",
                padding: 0,
                "& .MuiSwitch-switchBase": {
                    padding: 2,
                    "&.Mui-checked": {
                        transform: "translateX(12px)",
                        color: "#101010",
                        "& + .MuiSwitch-track": {
                            opacity: 1,
                            backgroundColor: "yellow"
                        }
                    }
                },
                "& .MuiSwitch-thumb": {
                    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: "#101010"
                },
                "& .MuiSwitch-track": {
                    borderRadius: 16 / 2,
                    opacity: 1,
                    backgroundColor: "red",
                    boxSizing: "border-box"
                }
            },
            light: {
                width: 28,
                height: 16,
                marginRight: 4,
                marginLeft: 4,
                display: "flex",
                padding: 0,
                "& .MuiSwitch-switchBase": {
                    padding: 2,
                    "&.Mui-checked": {
                        transform: "translateX(12px)",
                        color: "#fff",
                        "& + .MuiSwitch-track": {
                            opacity: 1,
                            backgroundColor: "#619C8A"
                        }
                    }
                },
                "& .MuiSwitch-thumb": {
                    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: "#FFFF"
                },
                "& .MuiSwitch-track": {
                    borderRadius: 16 / 2,
                    opacity: 1,
                    backgroundColor: "#646464",
                    boxSizing: "border-box"
                }
            }
        },
        dropDownList: {
            light: {
                notSelected: {
                    bgcolor: "white",
                    color: "black"
                },
                selected: {
                    bgcolor: "#FAC21A !important",
                    color: "black"
                },
                disabled: {
                    opacity: 0.5,
                    cursor: "not-allowed",
                    pointerEvents: "all !important"
                }
            }
        },
        backGroundTheming: {
            dark: {
                text: {
                    primary: "#487A99",
                    secondary: "#C7C7C7",
                    disabled: "#E0E0E0"
                },
                background: { default: "#121212", paper: "#1E1E1E" },
                divider: "#619C8A"
            },
            light: {
                background: {
                    default: "#FFFFFF",
                    paper: "#FFF"
                },
                divider: "#243D4D",
                text: {
                    primary: "#010101",
                    secondary: "#010101",
                    disabled: "#101010"
                }
            }
        },

        chip: {},
        primaryColor: {
            light: {
                main: "#243D4D"
            },
            dark: {
                main: "#619C8A"
            }
        },
        secondaryColor: {
            light: {
                main: "#243D4D"
            },
            dark: {
                main: "#619C8A"
            }
        },
        errorColor: {
            light: {
                main: "#d32f2f"
            },
            dark: {
                main: "#f44336"
            }
        },
        warningColor: {
            light: {
                main: "#ed6c02"
            },
            dark: {
                main: "#ffa726"
            }
        },
        infoColor: {
            light: {
                main: "#0288d1"
            },
            dark: {
                main: "#29b6f6"
            }
        },
        successColor: {
            light: {
                main: "#248900",
                contrastText: "#fff"
            },
            dark: {
                main: "#68FF89"
            }
        },
        customToggleButton: {
            light: {
                padding: "10px 5px",
                backgroundColor: "#FFFFFF",
                color: "#FFFFFF",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
                justifyContent: "center",
                "&.Mui-selected": {
                    padding: "10px 5px",
                    backgroundColor: "#5093FF",
                    color: "#FFFFFF",
                    "&:hover": { backgroundColor: "#5093FF" }
                },
                "&.Mui-disabled": {
                    padding: "10px 5px",
                    backgroundColor: "#9DA3AC",
                    color: "#FFFF"
                }
            },
            dark: {}
        },
        buttonTheme: {
            dark: {
                filled: {
                    main: {
                        bgcolor: "#FF8C42",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    hover: {
                        bgcolor: "#FAC21A",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    focus: {
                        bgcolor: "#FCA523",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    active: {
                        bgcolor: "#FF802E",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    disabled: {
                        bgcolor: "#1010101F",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                outlined: {
                    main: {
                        bgcolor: "#FF802E",
                        color: "rgba(255, 255, 255, 1)"
                    },
                    hover: {
                        bgcolor: "#004069",
                        color: "#101010"
                    },
                    focus: {
                        bgcolor: "#243D4D",
                        color: "#101010"
                    },
                    active: {
                        bgcolor: "#619C8A",
                        color: "#101010"
                    },
                    disabled: {
                        bgcolor: "#FF802E29",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                elavated: {
                    main: {
                        bgcolor: "#FFFFFF",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    hover: {
                        bgcolor: "#FAC21A8C",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    focus: {
                        bgcolor: "#004069",
                        color: "rgba(255, 255, 255, 1)"
                    },
                    active: {
                        bgcolor: "#243D4D",
                        color: "rgba(255, 255, 255, 1)"
                    },
                    disabled: {
                        bgcolor: "#E2E2E2",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                tonal: {
                    main: {
                        bgcolor: "#FAC21A",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    hover: {
                        bgcolor: "#FAC21A8C",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    focus: {
                        bgcolor: "#FAC21ACC",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    active: {
                        bgcolor: "#FAC21A",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    disabled: {
                        bgcolor: "#E2E2E2",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                text: {
                    main: {
                        bgcolor: "#FFFFFF",
                        color: "rgba(255, 255, 255, 1)"
                    },
                    hover: {
                        bgcolor: "#C7C7C7",
                        color: "rgba(0, 64, 105, 1)"
                    },
                    focus: {
                        bgcolor: "#FAC21A",
                        color: "rgba(0, 64, 105, 1)"
                    },
                    active: {
                        bgcolor: "#FAC21A26",
                        color: "rgba(0, 64, 105, 1)"
                    },
                    disabled: {
                        bgcolor: "#E2E2E2",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                defaultOptions: {
                    ":disabled": {
                        cursor: "not-allowed",
                        pointerEvents: "all"
                    }
                }
            },
            light: {
                filled: {
                    main: {
                        bgcolor: "#FF8C42",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    hover: {
                        bgcolor: "#FAC21A",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    focus: {
                        bgcolor: "#FCA523",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    active: {
                        bgcolor: "#FF802E",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    disabled: {
                        bgcolor: "#1010101F",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                outlined: {
                    main: {
                        bgcolor: "#FF802E",
                        color: "#101010"
                    },
                    hover: {
                        bgcolor: "#004069",
                        color: "#101010"
                    },
                    focus: {
                        bgcolor: "#243D4D",
                        color: "#101010"
                    },
                    active: {
                        bgcolor: "#619C8A",
                        color: "#101010"
                    },
                    disabled: {
                        bgcolor: "#FF802E29",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                elavated: {
                    main: {
                        bgcolor: "#FFFFFF",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    hover: {
                        bgcolor: "#FAC21A8C",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    focus: {
                        bgcolor: "#004069",
                        color: "rgba(255, 255, 255, 1)"
                    },
                    active: {
                        bgcolor: "#243D4D",
                        color: "rgba(255, 255, 255, 1)"
                    },
                    disabled: {
                        bgcolor: "#E2E2E2",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                tonal: {
                    main: {
                        bgcolor: "#FAC21A",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    hover: {
                        bgcolor: "#FAC21A8C",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    focus: {
                        bgcolor: "#FAC21ACC",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    active: {
                        bgcolor: "#FAC21A",
                        color: "rgba(16, 16, 16, 1)"
                    },
                    disabled: {
                        bgcolor: "#E2E2E2",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                text: {
                    main: {
                        bgcolor: "#FFFFFF",
                        color: "rgba(0, 64, 105, 1)"
                    },
                    hover: {
                        bgcolor: "#C7C7C7",
                        color: "rgba(0, 64, 105, 1)"
                    },
                    focus: {
                        bgcolor: "#FAC21A",
                        color: "rgba(0, 64, 105, 1)"
                    },
                    active: {
                        bgcolor: "#FAC21A26",
                        color: "rgba(0, 64, 105, 1)"
                    },
                    disabled: {
                        bgcolor: "#E2E2E2",
                        color: "rgba(16, 16, 16, 0.12)"
                    }
                },
                defaultOptions: {
                    ":disabled": {
                        cursor: "not-allowed",
                        pointerEvents: "all"
                    }
                }
            }
        },
        textFields: {
            dark: {
                borderRadius: "0px !important"
            },
            light: {
                borderRadius: "0px !important"
            }
        },
        alert: {
            dark: {
                error: {
                    backgroundColor: "transparent",
                    border: "1px solid red"
                }
            },
            light: {
                error: {
                    backgroundColor: "red",
                    color: "white"
                }
            }
        }
    },
    breakPoints: {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false
    },
    alertNotification: {
        open: false,
        position: { vertical: "top", horizontal: "right" },
        message: "",
        duration: 5000,
        closableOnBackDropClick: true,
        type: "info",
        transitionState: {
            grow: true
        }
    },
    redirect: {}
};
