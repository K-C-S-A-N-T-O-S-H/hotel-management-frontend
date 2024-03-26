import React from "react";

export interface ModelProps {
    children?: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
    title?: string;
    disableEscapeKeyDown?: boolean;
    xl?: number;
    sm?: number;
    xs?: number;
    lg?: number;
    closeIcon?: boolean;
}

export interface ModalButtonProps {
    okText: string;
    loading?: boolean;
    disableOkBtn?: boolean;
    disableDelete?: boolean;
    cancelText?: string;
    deleteText?: string;
    onDelete?: () => void;
    onCancel?: () => void;
    deleteAlertText?: string;
    cancelAlertText?: string;
    onOk?: () => void;
    disableCancel?: boolean;
}
