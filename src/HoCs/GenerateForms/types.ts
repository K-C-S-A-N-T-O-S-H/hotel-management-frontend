import type { FormikProps } from "formik";

import type { FormData } from "../../types/InputProps";

export interface generateFormProps {
    FormData: FormData[];
    FormikProps: FormikProps<any>;
    lg?: number;
    sm?: number;
    xs?: number;
    xl?: number;
    md?: number;
}
