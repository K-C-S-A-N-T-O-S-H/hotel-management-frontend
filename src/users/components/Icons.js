import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AccountCircle, Key, Person } from "@mui/icons-material";
function Icons({ icon }) {
	if(icon === 'Visibility')
        return <Visibility/>
    if(icon === 'VisibilityOff')
        return <VisibilityOff/>
    if(icon === 'Person')
        return <Person/>
    if(icon === 'AccountCircle')
        return <AccountCircle />
    if(icon === 'Key')
        return <Key/>

}

export default Icons;
