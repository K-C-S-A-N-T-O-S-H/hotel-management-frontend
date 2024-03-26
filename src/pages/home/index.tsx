import { Box, Button, Grid } from "@mui/material";

const Home: React.FC<any> = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<Box
					sx={{
						p: 2,
						display: "grid",
					}}>
					<Button variant="muiText" disabled>Contained</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Home;
