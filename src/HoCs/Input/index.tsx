import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { Box, IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";

import { InputFieldProps } from "./types";

const Input: React.FC<InputFieldProps> = ({
    id,
    value,
    name,
    label,
    onChange,
    required,
    error,
    toolTip,
    placeHolder,
    helperText,
    defaultValue,
    disabled,
    onBlur,
    errorText,
    type = "text",
    MultiLine,
    minRows = 3
}: any) => {
    const [showIcons, setShowIcons] = useState(false);
    return (
        <Box paddingY={1} width="100%" display="flex" justifyContent="space-around" gap={2} alignItems="center" position="relative">
            <Tooltip title={toolTip || ""} placement="top-start">
                <TextField
                    onBlur={onBlur}
                    id={id}
                    name={name}
                    InputProps={{
                        endAdornment:
                            type === "password" ? (
                                <InputAdornment position="end">
                                    <Box component="span" sx={{ cursor: "pointer" }}>
                                        <IconButton aria-label="toggle password visibility" onClick={() => setShowIcons((e) => !e)} edge="end">
                                            {showIcons ? <MdVisibilityOff /> : <MdVisibility />}
                                        </IconButton>
                                    </Box>
                                </InputAdornment>
                            ) : (
                                <div />
                            )
                    }}
                    defaultValue={defaultValue}
                    type={showIcons ? "text" : type}
                    onChange={(inputValue) => onChange(inputValue.target.value)}
                    disabled={disabled}
                    placeholder={placeHolder}
                    required={required}
                    label={label}
                    error={error}
                    helperText={!error ? helperText : errorText}
                    value={value}
                    multiline={MultiLine}
                    minRows={minRows}
                />
            </Tooltip>
        </Box>
    );
};

export default Input;
