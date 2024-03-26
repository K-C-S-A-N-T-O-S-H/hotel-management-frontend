export type TypeConfirmBoxProps = {
    open: boolean;
    handleChange?: () => void;
    handleClose?: () => void;
    children?: React.ReactNode;
    targetElement?: any;
    Title?: string | any;
    bodyContent?: any;
    cancelText?: string;
    confirmText?: string;
    loading?: boolean;
    icon?: any;
};
