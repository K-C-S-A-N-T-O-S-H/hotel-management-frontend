import { Box, Grid, Paper } from "@mui/material";

import { TypeBoxButtonProps } from "./types";

const BoxButton: React.FC<TypeBoxButtonProps> = ({ label, onClick }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: "background.default",
                        display: "grid"
                    }}
                >
                    <Paper variant="elevation" elevation={6} sx={{ padding: 1, cursor: "pointer", textAlign: "center" }} onClick={onClick}>
                        {label}
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
};

export default BoxButton;
