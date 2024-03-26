import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import type { FormData } from "../../types/InputProps";
import HoC from "..";

import { generateFormProps } from "./types";

const GenerateForm: React.FC<generateFormProps> = ({ FormData, FormikProps, lg = 12, sm = 12, xs = 12, xl = 12, md = 12 }) => {
    const { values, errors, touched, handleBlur, setFieldValue, setFieldTouched, submitCount } = FormikProps;
    // const {
    //     appointmentData: { data }
    // } = useAppSelector((state) => state);
    if (!FormData?.length) return <> </>;
    return (
        <Grid spacing={2} container>
            {FormData.map((item: FormData, i: any) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid
                    item
                    lg={item.additionalData?.reduceGridSize ? item.additionalData?.reduceGridSize : lg}
                    sm={sm}
                    xs={xs}
                    xl={item.additionalData?.reduceGridSize ? item.additionalData?.reduceGridSize : xl}
                    md={item.additionalData?.reduceGridSize ? item.additionalData?.reduceGridSize : md}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${i}`}
                >
                    <Box key={item.Name}>
                        {item.Type === "text" || item.Type === "password" || item.Type === "search" ? (
                            item.Multiple ? (
                                <HoC.MultipleInput
                                    helperText={item.HelperText}
                                    id={item.Name + item.Categery}
                                    name={item.Name}
                                    value={values?.[item.Name]?.length ? values?.[item.Name]?.map((e: string) => e) : []}
                                    error={Boolean(touched[item.Name] && errors[item.Name])}
                                    label={item.Label}
                                    onChange={(value) => setFieldValue(item.Name, value)}
                                    onBlur={handleBlur}
                                    regEx={item.Regex}
                                    errorText={errors[item.Name]}
                                    toolTip={item.Tooltip}
                                    required={item.Required}
                                    item={item}
                                />
                            ) : (
                                <HoC.Input
                                    value={values[item.Name] || ""}
                                    label={item.Label}
                                    name={item.Name}
                                    type={item.Type}
                                    toolTip={item.Tooltip}
                                    required={item.Required}
                                    onChange={(value: any) => setFieldValue(item.Name, value)}
                                    error={Boolean(touched[item.Name] && errors[item.Name])}
                                    helperText={item.HelperText}
                                    errorText={errors[item.Name] || ""}
                                    id={item.Label}
                                    disabled={item.Disabled}
                                    onBlur={handleBlur}
                                    MultiLine={item?.additionalData?.MultiLine}
                                />
                            )
                        ) : item.Type === "select" ? (
                            item.Multiple ? (
                                <HoC.SelectMultiple
                                    value={values[item.Name]}
                                    label={item.Label}
                                    name={item.Name}
                                    toolTip={item.Tooltip}
                                    required={item.Required}
                                    onChange={(value: any) => {
                                        setFieldValue(item.Name, value);
                                    }}
                                    error={Boolean(touched[item.Name] && errors[item.Name])}
                                    helperText={item.HelperText}
                                    errorText={errors[item.Name]}
                                    id={item.Label}
                                    onBlur={handleBlur}
                                    list={item.List || []}
                                />
                            ):(<>select</>)
                        ) : item.Type === "date" ? (
                            item.Multiple ?<>multiple date picker</> : (
                                <>date picker</>
                            )
                        ) : item.Type === "checkbox" ? (
                            <HoC.CheckBox
                                toolTip={item.Tooltip}
                                id={item.Label + item.Group}
                                checked={values[item.Name] || false}
                                onChange={(value) => {
                                    setFieldValue(item.Name, value, false);
                                }}
                                label={item.Label}
                                error={Boolean(touched[item.Name] && item.Required && !values[item.Name])}
                                errorText={errors[item.Name]}
                                name={item.Name}
                                onBlur={handleBlur}
                                disabled={item.Disabled}
                            />
                        ) : item.Type === "radio" ? (
                            <HoC.RadioButtons
                                toolTip={item.Tooltip}
                                id={item.Group + item.Label}
                                name={item.Name}
                                value={values[item.Name]}
                                error={Boolean(touched[item.Name] && item.Required && !values[item.Name])}
                                errorText={errors[item.Name]}
                                list={item.List}
                                label={item.Label}
                                onChange={(value) => {
                                    setFieldValue(item.Name, value);
                                }}
                                onBlur={handleBlur}
                            />
                        ) : item.Type === "header" ? (
                            <Box width="100%" display="flex" paddingY={0.5} justifyContent="start" gap={2} alignItems="start" position="relative">
                                <Typography variant="h6">{item.Label}</Typography>
                            </Box>
                        ) : (
                            <HoC.SelectableBox
                                lists={item.List}
                                lable={item.Label}
                                value={!item.Multiple ? values[item.Name]?.TestNumber : values[item.Name]}
                                onChange={(selectedValue) => {
                                    setFieldValue(item.Name, selectedValue);
                                }}
                                name={item.Name}
                                error={Boolean(submitCount && item.Required && errors[item.Name])}
                                multiple={item.Multiple}
                                errorText={errors[item.Name] || ""}
                            />
                        )}
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default GenerateForm;
