import React from "react";

// import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

import { PageNotFoundInterface } from "./types";

const PageNotFound: React.FC<PageNotFoundInterface> = ({ textMessage = "Location Not Found", error = false, errorText = "" }) => {
    // const navigate = useNavigate();
    return (
        <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <Paper
                component="div"
                variant="elevation"
                elevation={1}
                sx={{
                    paddingX: 10,
                    paddingY: 2
                }}
            >
                <Grid container display="flex" justifyContent="space-between" alignItems="center">
                    <Grid item component="div" lg={8} xl={8} md={8} sm={10} xs={12}>
                        <img src="./images/pageNotFound.png" alt="Page not found" width="100%" />
                    </Grid>
                    <Grid item component="div" lg={4} xl={4} md={4} sm={8} xs={10}>
                        <Typography variant="h3">{textMessage || ""}</Typography>
                        {error && (
                            <Typography variant="h6" color="red">
                                {errorText}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
                <Button
                    variant="filled"
                    onClick={() => {
                        window.location.reload();
                    }}
                    fullWidth
                >
                    Refresh
                </Button>
            </Paper>
        </Box>
    );
};
export default PageNotFound;
