import * as React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

import { AccordionsProps } from "./types";

const AccordionComponent: React.FC<AccordionsProps> = ({ children, accordionTitle, accordionTitle2, icon, icon2, expand, onExpandChange }) => {
    return (
        <Box component={Paper} variant="outlined" overflow="hidden">
            <Accordion expanded={expand} onChange={onExpandChange} sx={{ width: "100%" }}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                    <Box component="div" width="100%" display="flex" height="100%" alignItems="center" gap={2}>
                        <Box component="div" width="100%" display="flex" height="100%" alignItems="center" gap={2}>
                            {icon}
                            <Typography variant="h5" fontWeight={700}>
                                {accordionTitle}
                            </Typography>
                        </Box>
                        <Box display="flex" width="100%" height="100%" alignItems="end" justifyContent="flex-end" gap={1}>
                            <Typography variant="h6" fontWeight={500}>
                                {accordionTitle2}
                            </Typography>
                            <Box component="div">{icon2}</Box>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ borderTop: "1px solid #000" }}>{children}</AccordionDetails>
            </Accordion>
        </Box>
    );
};
export default AccordionComponent;
