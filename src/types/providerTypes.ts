import { themeObject } from "./CustomTheme";

export interface apiResponsePayload {
    apiSuccessStatus: boolean;
    apiMessage?: string;
    apiPayload?: any;
}

export interface modelProps {
    open?: boolean;
    type?:
        | "Insurance"
        | "Contact Details"
        | "Address"
        | "EmailOTP"
        | "MobileOTP"
        | "UploadGovtProof"
        | "UploadInsuranceProof"
        | "HIPPA"
        | "Credit Card"
        | null;
    modelTitle?: string;
}

export interface alertNotificationProps {
    open?: boolean;
    message?: string | any[];
    type?: "error" | "info" | "success" | "warning";
    duration?: number;
    onAction?: (data?: any) => void;
    actionText?: string;
    closeIcon?: boolean;
    closableOnBackDropClick?: boolean;
    position?: { vertical: "top" | "bottom"; horizontal: "center" | "right" | "left" };
    transitionState?: {
        slide?: "up" | "down" | "right" | "left";
        grow?: boolean;
        zoom?: boolean;
    };
}
export interface dailogProps {
    open?: boolean;
    title?: string;
}
export interface BreakPointsProps {
    lg: boolean;
    xl: boolean;
    xs: boolean;
    md: boolean;
    sm: boolean;
}
export interface InitialState {
    modal: modelProps;
    theme: themeObject;
    alertNotification?: alertNotificationProps;
    dailog?: dailogProps;
    breakPoints: BreakPointsProps;
}
