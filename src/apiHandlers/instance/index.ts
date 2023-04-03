import axios from "axios";
import { baseURL } from "../baseUrl";

export const instance = axios.create({
    baseURL,
    headers: {
        Authorization: "ddc58e6a-2e69-4f44-97e8-1454eb352069",
    },
});