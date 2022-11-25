import instance from "./instances";

export const listCate = () => {
    const url = `/categories`;
    return instance.get(url)
}
export const createCate = (category:any) => {
    const url = `/category}`;
    return instance.post(url,category)
}