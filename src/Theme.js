import { createTheme } from "@mui/material";
import { deepOrange, grey, pink, yellow } from "@mui/material/colors";
export default {
	user: createTheme({
		palette: {
			mode: "dark",
			// primary: deepOrange,
			// divider: deepOrange[700],
			// background: {
			// 	default: deepOrange[900],
			// 	paper: deepOrange[900],
			// },
			// text: {
			// 	primary: "#fff",
			// 	secondary: grey[500],
			// },
			// secondary: pink,
		},
	}),
	admin: createTheme({
		palette: {
			secondary: yellow,
		},
	}),
	pgmanagement: createTheme({
		palette: {
			secondary: yellow,
		},
	}),
};
