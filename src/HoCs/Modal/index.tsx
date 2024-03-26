import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

import { ModelProps } from "./types";

const ModalComponent: React.FC<ModelProps> = ({
    title,
    onClose,
    open,
    children,
    xl = 6,
    sm = 11.5,
    xs = 11.5,
    lg = 8,
    disableEscapeKeyDown = true,
    closeIcon
}) => {
    return (
        <Modal open={open || false} onClose={onClose} disableEscapeKeyDown={disableEscapeKeyDown} closeAfterTransition>
            <Box component="div">
                <Grid container justifyContent="center" height="100vh" width="100vw" overflow="auto" paddingBottom={4}>
                    <Grid item xl={xl} sm={sm} xs={xs} lg={lg}>
                        <Paper
                            component="div"
                            variant="elevation"
                            elevation={1}
                            sx={{
                                paddingX: 2,
                                paddingY: 1,
                                marginY: 4
                            }}
                        >
                            {(title || closeIcon) && (
                                <>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography variant="h5" margin={1} fontWeight={600} color="primary">
                                            {title}
                                        </Typography>
                                        {closeIcon && (
                                            <Box sx={{ position: "relative" }}>
                                                <IconButton onClick={() => onClose?.()}>
                                                    <CloseIcon fontSize="large" sx={{ position: "absolute" }} />
                                                </IconButton>
                                            </Box>
                                        )}
                                    </Box>
                                    {title && <Divider variant="fullWidth" orientation="horizontal" sx={{ mb: 2 }} />}
                                </>
                            )}
                            {children}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ModalComponent;
