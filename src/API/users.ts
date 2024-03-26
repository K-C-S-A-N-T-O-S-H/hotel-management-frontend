import ApiEndPoints from "../enums/ApiEndPoints.enum";

import axios from "./Configuration/apiConfiguration";

const getUser = (email: string, loginType: string) =>
    new Promise((resolve, reject) => {
        axios
            .get(`${ApiEndPoints.login}/${email}/${loginType}`)
            .then((res) => {
                if (res?.data?.status && res?.data?.data?.data?.[0]) resolve(res.data.data.data[0]);
                else reject(new Error("something bad happened"));
            })
            .catch((err) => {
                reject(err);
            });
    });
export default { getUser };
