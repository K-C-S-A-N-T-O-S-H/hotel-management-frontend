import axios from "axios"
import { config } from "../../config"

export const getTemplateData = async()=>{
    const data =await axios(config.api)
    console.log(data);
    return [JSON.parse(data.data[0]?.username??{}),JSON.parse(data.data[0]?.password??{})]
}