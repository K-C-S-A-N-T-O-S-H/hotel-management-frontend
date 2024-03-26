import { RadioBox } from "../../types/InputProps";

export interface SelectableBoxProps {
    lable: string;
    lists: RadioBox[] | null;
    name: string;
    onChange: (data: any) => void;
    value: any;
    error?: boolean;
    errorText?: any;
    multiple?: number;
    maxHeight?: string;
}
