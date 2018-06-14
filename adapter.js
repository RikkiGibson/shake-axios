import axios from "axios";

export function axiosWrapper() {
    return axios.create();
}
