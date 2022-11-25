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