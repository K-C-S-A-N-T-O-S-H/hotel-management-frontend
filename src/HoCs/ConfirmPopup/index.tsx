import React from "react";

import { Box, Button, Popover, Typography } from "@mui/material";

import { TypeConfirmBoxProps } from "./types";

const ConfirmPopup: React.FC<TypeConfirmBoxProps> = ({
    children,
    Title,
    bodyContent,
    cancelText,
    confirmText,
    icon,
    open,
    loading,
    handleClose,
    handleChange,
    targetElement
}) => {
    return (
        <Box component="div">
            <Popover
                elevation={2}
                open={open}
                onClose={handleClose}
                anchorEl={targetElement}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
            >
                <Box component="div" display="flex" alignItems="center" p={1.5} gap={1}>
                    {icon || ""}
                    <Typography variant="body1">{Title || ""}</Typography>
                </Box>
                {bodyContent && (
                    <Box component="div" display="flex" justifyContent="center">
                        <Typography>{bodyContent}</Typography>
                    </Box>
                )}
                <Box display="flex" justifyContent="flex-end" p={1} gap={2}>
                    {cancelText && (
                        <Button variant="elevated" size="small" onClick={handleClose}>
                            {cancelText}
                        </Button>
                    )}
                    {confirmText && (
                        <Button variant="filled" size="small" disabled={loading} onClick={handleChange}>
                            {loading ? "Processing..." : confirmText}
                        </Button>
                    )}
                </Box>
            </Popover>
            <Box component="div">{children}</Box>
        </Box>
    );
};
export default ConfirmPopup;
