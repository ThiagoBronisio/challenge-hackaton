import axios from "axios";

export const url = () => {
    return "http://localhost:5062/api/Financa"
}

export const getDespesas = () => {
    return axios.get(url() + "/" + "Despesas")
        .then(
            (response) => {
                response.data
            }
        )
}