import React from "react";

import { Dialog, DialogContent, DialogTitle } from "@mui/material";

import { DailogProps } from "./types";

const DailogBox: React.FC<DailogProps> = ({ children, open, onClose, title }) => {
    if (!open) return <div />;
    return (
        <Dialog open={open || false} onClose={onClose} aria-labelledby="" aria-describedby="alert-dialog-description">
            {title && (
                <DialogTitle id="alert-dialog-title" color="secondary">
                    {title}
                </DialogTitle>
            )}
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};

export default DailogBox;
