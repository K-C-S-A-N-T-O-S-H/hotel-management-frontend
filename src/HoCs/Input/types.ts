export interface InputFieldProps {
    id: string;
    value: string | null;
    name: string;
    label: string;
    onChange: (value: string) => void;
    required?: boolean | null;
    error?: boolean;
    toolTip?: string;
    placeHolder?: string;
    helperText?: string;
    defaultValue?: string;
    disabled?: boolean;
    onBlur?: any;
    errorText?: any;
    type?: string;
    MultiLine?: boolean;
    minRows?: number;
}
