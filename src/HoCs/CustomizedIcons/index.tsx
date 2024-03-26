import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

import { Icons, IconType } from "./types";

const RenderIcons: React.FC<IconType> = ({ type }) => {
    if (type === "Back") {
        return <ArrowBackIcon />;
    }
    return <> </>;
};
const CustomizedIcons: React.FC<Icons> = ({ onClick, type }) => {
    return (
        <IconButton onClick={() => onClick?.()}>
            <RenderIcons type={type} />
        </IconButton>
    );
};

export default CustomizedIcons;
