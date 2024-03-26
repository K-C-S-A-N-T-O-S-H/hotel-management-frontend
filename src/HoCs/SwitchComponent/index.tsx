import React from "react";

import { Switch, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { SwitchInterface } from "./types";

const SwitchComponent: React.FC<SwitchInterface> = ({ id, name, checked, onChange, disabled, error, label, toolTip, errorText, onBlur }) => {
    return (
        <Box paddingY={0.8} width="100%" display="flex" justifyContent="start" gap={2} alignItems="start" position="relative">
            <Tooltip title={toolTip || ""} placement="top-start">
                <Box display="flex" gap={1} alignItems="center">
                    <Switch
                        onBlur={onBlur}
                        name={name}
                        id={id}
                        disabled={disabled}
                        checked={checked}
                        sx={{ cursor: !disabled ? "pointer" : "not-allowed" }}
                        onChange={(e) => {
                            onChange(e.target.checked);
                        }}
                    />
                    <Typography
                        htmlFor={id}
                        variant="body1"
                        color={error ? "error" : "primary"}
                        component="label"
                        sx={{ cursor: "pointer" }}
                        dangerouslySetInnerHTML={{ __html: label }}
                    />
                    {error && (
                        <Typography variant="body1" color="red">
                            {errorText}
                        </Typography>
                    )}
                </Box>
            </Tooltip>
        </Box>
    );
};

export default SwitchComponent;
