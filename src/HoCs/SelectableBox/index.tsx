import React, { FC } from "react";

import { Box, Checkbox, Divider, Grid, Paper, Radio, Tooltip, Typography } from "@mui/material";

import { useAppSelector } from "../../redux/hooks";

import { SelectableBoxProps } from "./types";

const SelectableBox: FC<SelectableBoxProps> = ({ lable, lists, name, onChange, value, error, errorText, multiple, maxHeight }) => {
    const { theme } = useAppSelector((state) => state);
    if (!lists) {
        return <> </>;
    }
    return (
        <>
            <Typography variant="h5" mt={2} fontWeight={700} color="primary">
                {lable}
            </Typography>
            <Box maxHeight={maxHeight} component="div" marginY={1} className="scrollbox">
                <Grid container spacing={1.5} justifyContent="center" marginY={0.5} className="scrollbox-content">
                    {lists.map((list: any, index) => (
                        <Grid item lg={11} md={11} sm={11} xs={12} key={JSON.stringify(JSON.stringify(list))}>
                            <Tooltip title={list.tooltip}>
                                <Paper
                                    elevation={list.disabled ? 1 : 3}
                                    variant="elevation"
                                    sx={
                                        list.disabled
                                            ? theme.testBoxDisabled?.[theme.mode]
                                            : (
                                                  multiple
                                                      ? value?.length
                                                          ? value?.some((ee: any) => ee.TestNumber === list.TestNumber)
                                                          : false
                                                      : list.TestNumber === value
                                              )
                                            ? theme.testBoxSelected?.[theme.mode]
                                            : theme.testBoxNotSelected?.[theme.mode]
                                    }
                                >
                                    <Box
                                        component="label"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            cursor: "pointer",
                                            position: "relative"
                                        }}
                                        htmlFor={list.CustomerFacingName + list.TestNumber + index}
                                    >
                                        <Divider
                                            variant="fullWidth"
                                            orientation="vertical"
                                            sx={{
                                                position: "absolute",
                                                left: 45,
                                                height: "100%"
                                            }}
                                        />
                                        {multiple ? (
                                            <Checkbox
                                                name={name}
                                                id={list.CustomerFacingName + list.TestNumber + index}
                                                disabled={list.disabled ?? false}
                                                onChange={(event) => {
                                                    let selectedList = value || [];
                                                    if (event.target.checked) {
                                                        selectedList = [...selectedList, list];
                                                    } else {
                                                        selectedList = selectedList?.filter((e: any) => e.TestNumber !== list?.TestNumber);
                                                    }
                                                    onChange(selectedList);
                                                }}
                                                hidden
                                                sx={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: 0,
                                                    transform: "translateY(-50%)"
                                                }}
                                                checked={value?.length ? value?.some((ee: any) => ee.TestNumber === list.TestNumber) : false}
                                            />
                                        ) : (
                                            <Radio
                                                hidden
                                                name={name}
                                                id={list.CustomerFacingName + list.TestNumber + index}
                                                disabled={list.disabled || false}
                                                onChange={() => {
                                                    onChange(list);
                                                }}
                                                sx={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: 0,
                                                    transform: "translateY(-50%)"
                                                }}
                                                checked={list.TestNumber === value}
                                            />
                                        )}
                                        <Box position="relative" padding={1} paddingLeft={7}>
                                            <Typography variant="h6" color="inherit" mr={2} fontWeight={500}>
                                                {list?.CustomerFacingName || ""}
                                            </Typography>
                                            <Divider variant="fullWidth" orientation="horizontal" light sx={{ marginY: 0.5 }} />
                                            <Box display="flex" gap={2} justifyContent="space-between">
                                                <Typography variant="body1" color="inherit" fontWeight={500}>
                                                    {list?.TurnaroundTime || ""}
                                                </Typography>
                                                <Typography variant="body1" mr={2} color="inherit" fontWeight={500}>
                                                    Price: ${list?.Price || 0}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Tooltip>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ mt: 2 }}>
                {error && (
                    <Typography variant="body1" color="red" ml={2}>
                        {errorText}
                    </Typography>
                )}
                <Divider variant="fullWidth" orientation="horizontal" />
            </Box>
        </>
    );
};

export default SelectableBox;
