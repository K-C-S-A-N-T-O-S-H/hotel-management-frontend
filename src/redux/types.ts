import { MRT_ColumnOrderState, MRT_ColumnPinningState, MRT_ColumnSizingState, MRT_VisibilityState } from "material-react-table";

import { themeObject } from "../Theme/CustomTheme";

export interface modelProps {
    open?: boolean;
    type?:
        | "Edit AppointmentDetails"
        | "Change Locations"
        | "AppointmentDateAndTime"
        | "Credit Card"
        | "UploadInsuranceProof"
        | "Insurance"
        | "InsuranceHistory"
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
export interface DaywiseTableSettings {
    type?: "Resize" | "Visibility" | "Pin" | "Order" | "density" | "showFilter" | any;
    columnSizing?: MRT_ColumnSizingState | undefined;
    columnPinning?: MRT_ColumnPinningState | undefined;
    columnVisibility?: MRT_VisibilityState | undefined;
    columnOrder?: MRT_ColumnOrderState | string[];
    showColumnFilters?: boolean;
    density?: string | any;
}
export interface pVerifyProps {
    verifying?: boolean;
    loading?: boolean;
    apiResponse?: any;
    list?: any;
    lastApiPayload?: any;
    error?: any;
    pverifyCount?: number;
    verified?: boolean;
}
export interface daywiseProps {
    loading?: boolean;
    data?: any | null;
    errorStatus?: boolean;
    currentPage: number;
    pageSize: number;
    totalRecords: number;
    search: any;
}
export interface editApptProps {
    editPersonalDetails?: boolean;
    editInsurance?: boolean;
    editPreData?: boolean;
    editPostData?: boolean;
    viewHistoryOfInsurance?: boolean;
}
export interface searchProps {
    date?: boolean;
    confirmationId?: boolean;
    status?: number | [] | string;
    firstName?: boolean;
    LastName?: boolean;
    Email?: boolean;
    Phone?: boolean;
    Dob?: boolean;
    isCheckedIn?: boolean;
    LocationId?: any;
}
export interface tableActionProps {
    checkin?: boolean;
    completeLabOrder?: boolean;
    allowAddNote?: boolean;
    allowReleaseResult?: boolean;
}
export interface dayWiseAccessProps {
    searchCriteria?: searchProps;
    tableActions?: tableActionProps;
    editAppointment?: editApptProps;
}
export interface accessProps {
    dayWise?: dayWiseAccessProps;
}
export interface editAppointment {
    loading?: boolean;
    data?: any;
    error?: any;
}
export interface AdminUser {
    email: string | undefined;
    sub?: string;
    Admin_Id?: any;
    AdminUser_Id?: number;
    Email?: string;
    Role?: string;
    Settings?: {
        daywise?: DaywiseTableSettings;
    };
    Access?: accessProps;
    email_verified?: boolean;
    picture?: any;
    nickname?: any;
    name?: string;
    locale?: any;
    given_name?: any;
    loading?: boolean;
    Name?: string;
    Phone?: string;
    Address?: string;
    City?: string;
    State?: string;
    Country?: string;
    ZipCode?: string;
    LastLogin?: string;
    LoginType?: string;
    password?: string;
    LastChangedPassword?: string;
}

export interface insuranceReportProps {
    loading?: boolean;
    data?: any[] | null;
    errorStatus?: boolean;
    StartDate?: string;
    EndDate?: string;
}
export interface patientReportProps {
    loading?: boolean;
    data?: any[] | null;
    errorStatus?: boolean;
    StartDate?: string;
    EndDate?: string;
}
export interface stateReportProps {
    loading?: boolean;
    data?: any[] | null;
    errorStatus?: boolean;
}
export interface InitialState {
    modal: modelProps;
    theme: themeObject;
    alertNotification?: alertNotificationProps;
    dailog?: dailogProps;
    breakPoints: BreakPointsProps;
    parameterValues?: any;
    redirect: any;
    initalLocationApiStatus?: any;
}
