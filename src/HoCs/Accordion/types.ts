import React from "react";

export interface AccordionsProps {
    children: React.ReactNode;
    accordionTitle: string | React.ReactNode;
    accordionTitle2?: string | React.ReactNode;
    icon?: any;
    icon2?: any;
    expand?: boolean;
    accordianType?: any;
    onExpandChange?: (event: React.SyntheticEvent, newExpanded: boolean) => void;
}
