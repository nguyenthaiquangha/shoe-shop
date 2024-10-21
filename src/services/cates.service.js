import axios from "axios"

export const getProductByCateApi = async (id) => {
    try {
        const res = await axios.get(`https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${id}`);
        return res
    } catch (error) {
        console.log(error);
    }
}