import React from "react";
// import { FormikProps } from "formik";

export interface FormData {
    Label: string;
    Required: boolean;
    Name: string;
    InitialValue: any;
    Regex: null | Array<any>;
    RegExError: string;
    ErrorMessage: string;
    Tooltip: string;
    HelperText: string;
    Type: string;
    List: null | Array<any>;
    Categery: string;
    Group: string;
    MinValue: null | string;
    MaxValue: null | string;
    Multiple: number;
    PlaceHolder: string;
    Disabled?: boolean;
    additionalData?: any;
}

export interface SelectOptions {
    label: string;
    value: any;
    additional?: any;
}

export interface TypoGraphyProps {
    title?: string;
    type?: "heading" | "subHeading" | "normal";
    divider?: "TOP" | "BOTTOM";
    marginTop?: number;
    marginBottom?: number;
}

export interface RadioBox {
    Title1: string;
    Title2: string;
    Title3: string;
    disabled?: boolean | null;
    disabledText?: string;
    value: any;
    tooltip?: any;
}

export interface buttonProps {
    text: string;
    onClick?: () => void;
    icon?: { position: "right" | "left"; icon: React.ReactNode };
    className?: string;
    type?: "button" | "reset" | "submit";
    disabled?: boolean;
    style?: React.CSSProperties;
    InputBoxSize?: "small" | "large";
}
