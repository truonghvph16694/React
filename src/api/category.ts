import instance from "./instances";

export const listCate = () => {
    const url = `/category`;
    return instance.get(url)
}
export const createCate = (category:any) => {
    const url = `/category`;
    return instance.post(url,category)
}
export const removeCate = (_id: any) => {
    const url = `/category/${_id}`;
    return instance.delete(url);
}

export const readCate = (_key: any) => {
    const url = `/category/${_key}`;
    return instance.get(url);
}
export const updateCate = (category: any) => {
    const url = `/category/${category.id}`;
    return instance.patch(url, category);
}
