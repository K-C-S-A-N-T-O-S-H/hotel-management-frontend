import React, { FC } from "react";

import { Autocomplete, Box, Chip, TextField, Tooltip } from "@mui/material";

import { useAppSelector } from "../../redux/hooks";

import { SelectMultipleComponentProps } from "./types";

const SelectMultiple: FC<SelectMultipleComponentProps> = ({
    id,
    value,
    name,
    label,
    onChange,
    required,
    error,
    toolTip,
    helperText,
    defaultValue,
    list,
    errorText
}) => {
    const { theme } = useAppSelector((state) => state);
    const handleTags = (index: number) => onChange(value?.filter((e: any, i: number) => index !== i) || null);
    return (
        <Box paddingY={1} width="100%" display="flex" justifyContent="space-around" gap={2} alignItems="center" position="relative">
            <Tooltip title={toolTip || ""} placement="top-start">
                <Autocomplete
                    multiple
                    id={id}
                    value={value || []}
                    defaultValue={defaultValue}
                    options={list || []}
                    onChange={(event, newValue) => onChange(newValue)}
                    filterSelectedOptions
                    getOptionDisabled={(option) => typeof option === "object" && option?.additional?.disabled}
                    renderOption={(props, option, { selected }) => (
                        <Box
                            {...props}
                            component="li"
                            sx={
                                selected
                                    ? theme.dropDownList?.[theme.mode]?.selected
                                    : props["aria-disabled"]
                                    ? theme.dropDownList?.[theme.mode]?.disabled
                                    : theme.dropDownList?.[theme.mode]?.notSelected
                            }
                        >
                            {typeof option === "object" ? option?.label : option}
                        </Box>
                    )}
                    renderTags={(tagValue) => (
                        <Box overflow="clip" width="100%" display="flex">
                            {tagValue.map((option, index) => (
                                <Box margin={0.5} key={option.label}>
                                    <Chip
                                        style={{ cursor: "pointer" }}
                                        size="small"
                                        label={option.label || ""}
                                        onDelete={() => handleTags(index)}
                                        variant="outlined"
                                        color="primary"
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            helperText={error ? errorText : helperText}
                            defaultValue={defaultValue}
                            required={required || false}
                            value={value || ""}
                            name={name}
                            error={error}
                            label={label}
                        />
                    )}
                />
            </Tooltip>
        </Box>
    );
};

export default SelectMultiple;
