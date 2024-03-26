import { differenceInYears, format } from "date-fns";
import { isArray } from "lodash";

import { globalConfig } from "../globalConfig";
import { FormData } from "../types/InputProps";

export const DateValidation = (item: FormData, value: string | string[]) => {
    let error = "";
    if (typeof value === "string") {
        const currentDate = new Date(format(new Date(), globalConfig.dateFormat));
        const userDate = new Date(format(new Date(value), globalConfig.dateFormat));
        if (item.MaxValue) {
            if (item.MaxValue === "now" && currentDate < userDate) error = `${item.Label} should not be a future date`;
            else if (item.MaxValue?.includes("/") && new Date(item.MaxValue) < userDate) error = `${item.Label} must be below ${item.MaxValue}`;
            else if (
                !item.MaxValue?.includes("/") &&
                item.MaxValue !== "now" &&
                differenceInYears(currentDate, userDate) > parseInt(item.MaxValue, 10)
            )
                error = `${item.Label} must be ${item.MaxValue} years old or above`;
        }
        if (item.MinValue) {
            if (item.MinValue === "now" && currentDate > userDate) error = `${item.Label} should be a current/future date`;
            else if (item.MinValue?.includes("/") && userDate < new Date(item.MinValue || "")) error = `${item.Label} must be above ${item.MinValue}`;
            else if (
                !item.MinValue?.includes("/") &&
                item.MinValue !== "now" &&
                differenceInYears(currentDate, userDate) < parseInt(item.MinValue, 10)
            )
                error = `${item.Label} must be under ${item.MinValue} years old`;
        }
        return error;
    }
    if (typeof value === "object" && value.length) {
        value.forEach((date: string) => {
            const currentDate = new Date(format(new Date(), globalConfig.dateFormat));
            const userDate = new Date(format(new Date(date), globalConfig.dateFormat));

            if (item.MaxValue) {
                if (item.MaxValue === "now" && currentDate < userDate) error = `${item.Label} should not be a future date`;
                else if (item?.MaxValue?.includes("/") && new Date(item.MaxValue) < userDate) error = `${item.Label} must be below ${item.MaxValue}`;
                else if (
                    !item.MaxValue?.includes("/") &&
                    item.MaxValue !== "now" &&
                    differenceInYears(currentDate, userDate) > parseInt(item.MaxValue, 10)
                )
                    error = `${item.Label} must be ${item.MaxValue} years old or above`;
            }
            if (item.MinValue) {
                if (item.MinValue === "now" && currentDate > userDate) error = `${item.Label} should be a current/future date`;
                else if (item.MinValue?.includes("/") && userDate < new Date(item.MinValue)) error = `${item.Label} must be above ${item.MinValue}`;
                else if (
                    !item.MinValue?.includes("/") &&
                    item.MinValue !== "now" &&
                    differenceInYears(currentDate, userDate) < parseInt(item.MinValue, 10)
                )
                    error = `${item.Label} must be under ${item.MinValue} years old`;
            }
        });
        if (!error && value.length < item.Multiple) return `Minimum ${item.Multiple} ${item.Label} record is Required*`;
        return error ? item.RegExError || `Incorrect ${item.Label}` : "";
    }
    return "";
};
export const RegExValidation = (item: FormData, value: any) => {
    let error: string = "";
    const regex: RegExp = new RegExp(item?.Regex?.join("\\") || "");
    if (item?.Regex?.length && typeof value === "string") {
        if (!regex.test(value)) error = item.RegExError || `Please enter correct ${item.Label}`;
    } else if (isArray(value) && item?.Regex?.length) {
        const someOne = value.some((e: any) => !regex.test(e));
        if (value && value?.length === 0) error = item.ErrorMessage;
        else if (someOne) error = `Incorrect ${item.Label}`;
        else if (value.length < item.Multiple) error = `Minimum ${item.Multiple} ${item.Label} record is Required*`;
    }
    return error;
};
export const validateFormOnSubmit = (values: any, ArrayRecord: Array<any>) => {
    const errors: any = {};

    ArrayRecord.forEach((FieldData) => {
        FieldData.forEach((item: FormData) => {
            if (item.Type === "date") {
                if (item.Required && !isArray(values[item.Name])) {
                    if (
                        !values[item.Name] ||
                        (parseInt(values?.[item.Name] !== null ? values?.[item.Name]?.split("/")?.[2] : "0", 10) || 0) <= 1000
                    ) {
                        errors[item.Name] = item.ErrorMessage;
                    } else if ((parseInt(values?.[item.Name] !== null ? values?.[item.Name]?.split("/")?.[2] : "0", 10) || 0) > 1000) {
                        const errorData = DateValidation(item, values[item.Name]);
                        if (errorData) errors[item.Name] = errorData;
                    }
                } else if (item.Required && isArray(values[item.Name])) {
                    if (!values[item.Name]?.length) {
                        errors[item.Name] = item.ErrorMessage;
                    } else if (values[item.Name]?.some((e: string) => parseInt(e?.split("/")?.[2], 10) <= 1000)) {
                        errors[item.Name] = item.RegExError || `Incorrect ${item.Label}`;
                    } else {
                        const errorData = DateValidation(item, values[item.Name]);
                        if (errorData) errors[item.Name] = errorData;
                    }
                } else if (typeof values[item.Name] === "string" ? values[item.Name] : values[item.Name]?.length) {
                    const errorData = DateValidation(item, values[item.Name]);
                    if (errorData) errors[item.Name] = errorData;
                }
            }
            if (item.Type === "text" || item.Type === "password" || item.Type === "search") {
                if ((item.Required && typeof values[item.Name] === "string") || values[item.Name] === undefined) {
                    if (values[item.Name]) {
                        const error: string = RegExValidation(item, values[item.Name]);
                        if (error) errors[item.Name] = error;
                    } else {
                        errors[item.Name] = item.ErrorMessage;
                    }
                } else if (item.Required && typeof values[item.Name] === "object") {
                    if (values[item.Name]?.length) {
                        const error: string = RegExValidation(item, values[item.Name]);
                        if (
                            !error &&
                            values[item.Name].length !== [...(new Set(values[item.Name].map((e: string) => e?.trim()?.toLowerCase())) as any)].length
                        ) {
                            errors[item.Name] = "Duplicate Entry";
                        } else if (error) errors[item.Name] = error;
                    } else {
                        errors[item.Name] = item.ErrorMessage;
                    }
                } else if (typeof values[item.Name] === "string" ? values[item.Name] : values[item.Name]?.filter((e: string) => e)?.length) {
                    const error: string = RegExValidation(item, values[item.Name]);
                    if (error) errors[item.Name] = error;
                }
            }
            if (item.Type === "select") {
                if (item.Required) {
                    if (isArray(values[item.Name])) {
                        if (!values?.[item.Name]?.length) {
                            errors[item.Name] = item.ErrorMessage;
                        } else if (values?.[item.Name]?.length < item.Multiple)
                            errors[item.Name] = `Minimum ${item.Multiple} ${item.Label} record is Required*`;
                    } else if (!(typeof values?.[item.Name] === "string" ? values?.[item.Name] : values?.[item.Name]?.label))
                        errors[item.Name] = item.ErrorMessage;
                } else if (values?.[item.Name]) {
                    if (item.Multiple && values?.[item.Name]?.length && values?.[item.Name].length < item.Multiple)
                        errors[item.Name] = `Minimum ${item.Multiple} ${item.Label} record is Required*`;
                }
            }
            if (item.Type === "checkbox") {
                if (item.Required && !values[item.Name]) errors[item.Name] = item.ErrorMessage;
            }
            if (item.Type === "radio" || item.Type === "button") {
                if (item.Required && !values[item.Name]) errors[item.Name] = item.ErrorMessage;
            }
            if (item.Type === "checkboxContainer") {
                if (!item.Multiple) {
                    if (item.Required && !values[item.Name]?.TestNumber) errors[item.Name] = item.ErrorMessage;
                } else if (item.Required && !values[item.Name]?.length) errors[item.Name] = item.ErrorMessage;
                else if (values[item.Name]?.length ? values[item.Name]?.length < item.Multiple : false)
                    errors[item.Name] = "Please choose atlease 2 items";
            }
            if (item.Type === "file" && item.Required) {
                if (item?.additionalData?.mainObject && !values?.[item?.additionalData?.mainObject]?.[item?.Name]) {
                    errors[item.Name] = item.ErrorMessage;
                } else if (!item?.additionalData?.mainObject && !values?.[item?.Name]) {
                    errors[item.Name] = item.ErrorMessage;
                }
            }
        });
    });
    return errors;
};

export const validatePassword = (password: string) => {
    // Define your password complexity requirements
    // eslint-disable-next-line const-case/uppercase
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()\-_=+{};:,<.>]/.test(password);
    // Perform password validation
    if (password.length >= minLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
        // Password meets the complexity requirements
        return true;
    }
    return false;
};
