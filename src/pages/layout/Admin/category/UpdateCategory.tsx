import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../../interfaces/products";
// import { Button, Form, Input } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { read } from "../../../../api/product";
import { ICategory } from "../../../../interfaces/category";
import { readCate } from "../../../../api/category";

type Inputs = { // kiểu dữ liệu của từng input
    name: string,
    image: string,

};

type CategoryEditProps = {
    onUpdateCategory: (category: ICategory) => void
}


const UpdateCategory = (props: CategoryEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ICategory>();
    const { _key } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCategory = async () => {
            const { data } = await readCate(_key);
            reset(data);
        }
        getCategory();
    }, []);

    const onSubmit: SubmitHandler<ICategory> = data => {
        props.onUpdateCategory(data)

        navigate("/admin/category");
        //bắn data ra app.js
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('name', { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button>Update</button>
            </form>
            <hr />
        </div>
    );
};

export default UpdateCategory

