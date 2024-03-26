export interface ButtonOptionProps {
    text: string;
    selectedText: string;
    disabled: boolean;
    icon: React.ReactNode;
    selectedIcon: React.ReactNode;
    selected: boolean;
    onClick: () => void;
}
export interface ModalButtonProps {
    okText: string;
    disableOkBtn?: boolean;
    disableDelete?: boolean;
    cancelText: string;
    deleteText?: string;
    onDelete?: () => void;
    onCancel?: () => void;
    deleteAlertText?: string;
}
export interface ConfirmationProps {
    heading?: string;
    id: null | any;
    idName?: string;
}
