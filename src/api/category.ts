import instance from "./instances";

export const listCate = () => {
    const url = `/categories`;
    return instance.get(url)
}
export const createCate = (categories:any) => {
    const url = `/categories`;
    return instance.post(url,categories)
}
export const removeCate = (_id: any) => {
    const url = `/categories/${_id}`;
    return instance.delete(url);
}

export const readCate = (_key: any) => {
    const url = `/categories/${_key}`;
    return instance.get(url);
}
export const updateCate = (categories: any) => {
    const url = `/categories/${categories.id}`;
    return instance.patch(url, categories);
}
