import "./App.css";
import User from "./users/Index";
import HotelManagement from "./hotelManagement/Index.js";
import Admin from "./admin/Index";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import userReducer from "./users/userProvider/action";
import pgmanagementReducer from "./hotelManagement/reduxStateProvider/action";
import adminReducer from "./admin/adminProvider/action";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme.js";
import { grey } from "@mui/material/colors";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_hotelManagementCOMPOSE__ || compose;
const userStore = createStore(userReducer, composeEnhancers(compose(applyMiddleware(thunk))));
const pgmanagementStore = createStore(
	pgmanagementReducer,
	composeEnhancers(compose(applyMiddleware(thunk)))
);
const adminStore = createStore(adminReducer, composeEnhancers(compose(applyMiddleware(thunk))));
const App = (props) => {
	if (props.isUser) {
		return (
			<ThemeProvider theme={theme.user}>
				<Provider store={userStore}>
					<div
						style={{
							minHeight: "100vh",
							backgroundColor:
								theme.user.palette.mode === "dark" ? grey[900] : grey['A100'],
						}}
					>
						<User />
					</div>
				</Provider>
			</ThemeProvider>
		);
	} else if (props.isAdmin) {
		return (
			<ThemeProvider theme={theme.admin}>
				<Provider store={adminStore}>
					<Admin />
				</Provider>
			</ThemeProvider>
		);
	} else if (props.isPGManagement) {
		return (
			<ThemeProvider theme={theme.pgmanagement}>
				<Provider store={pgmanagementStore}>
					<HotelManagement />
				</Provider>
			</ThemeProvider>
		);
	}
};

export default App;
