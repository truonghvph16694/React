import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../../interfaces/products";
// import { Button, Form, Input } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { read } from "../../../../api/product";

type Inputs = { // kiểu dữ liệu của từng input
    name: string,
    image: string,
    price: number,
    description: string,
};

type ProductEditProps = {
    onUpdate: (product: IProduct) => void
}


const UpdateProduct = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IProduct>();
    const { _key } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(_key);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<IProduct> = data => {
        props.onUpdate(data)

        navigate("/admin/products");

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('name', { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ảnh</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('image', { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="number" {...register("price", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="text" {...register("description", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button>Update</button>
            </form>
            <hr />
        </div>
    );
};

export default UpdateProduct

