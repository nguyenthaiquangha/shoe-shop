import axios from "axios"


export const getProductByIdApi = async (id) => {
    try {
        const res = axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`);
        return res
    } catch (error) {
        throw new Error(error);
    }
}