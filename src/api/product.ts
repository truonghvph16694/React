import instance from "./instances";

export const list = () =>{
    const url = `/products`;
    return instance.get(url)
}
export const add = (product: any) => {
    const url = `/products`;
    return instance.post(url, product);
}
export const remove = (_id: any) => {
    const url = `/products/${_id}`;
    return instance.delete(url);
}
export const read = (_key: any) => {
    const url = `/products/${_key}`;
    return instance.get(url);
}
export const update = (products: any) => {
    const url = `/products/${products.id}`;
    return instance.patch(url, products);
}