import { $host, $authHost } from "./index";
import { jwtDecode}  from "jwt-decode";

export const createCat = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCat = async () => {
    const {data} = await $host.get('api/category')
    return data
}
export const createFlavour = async (flavour) => {
    const {data} = await $authHost.post('api/flavour', flavour)
    return data
}

export const fetchFlavour = async () => {
    const {data} = await $host.get('api/flavour')
    return data
}
export const createBasketProduct = async (basketProduct) => {
    const {data} = await $authHost.post('api/basketproduct', basketProduct)
    return data
}
export const createOrder = async (order) => {
    const {data} = await $authHost.post('api/ordertable', order)
    return data
}
export const fetchOrder = async () => {
    const {data} = await $authHost.get('api/ordertable')
    return data
}
export const deleteOrder = async (id) => {
    const {data} = await $authHost.delete('api/ordertable',{
        params: {id}
    })
    return data
}
export const fetchBasketProduct = async (userId) => {
    const { data } = await $authHost.get('api/basketproduct',{
        params: {userId}
    })
    console.log("Fetched Data:", data); 
    return data;
}

export const deleteBasketProduct = async (userId, productId) => {
    const { data } = await $authHost.delete('api/basketproduct',{
        params: {userId, productId}
    })
    return data;
}
export const deleteAllBasketProducts = async (userId) => {
    const { data } = await $authHost.delete('api/order',{
        params: {userId}
    })
    return data;
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}
export const fetchProduct = async (flavourId, categoryId, page, limit = 5) => {
    const { data } = await $host.get('api/product', {
        params: { flavourId, categoryId, page, limit }
    });
    console.log("Fetched Data:", data); 
    return data;
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}

  
  