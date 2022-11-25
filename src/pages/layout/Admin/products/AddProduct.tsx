import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../../interfaces/products";
// import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

type Inputs = { // kiểu dữ liệu của từng input
    name: string,
    image: string,
    price: number,
    description: string,
};

type AddProductProps = {
    onAdd: (product: Inputs) => void
}


const AddProduct = (props: AddProductProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    // sử dụng hook useNavigate để chuyển sang
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        props.onAdd(dataInput);
        // chuyển trang
        navigate("/admin/products");
    }

    // const onSubmit: SubmitHandler<IProduct> = (data) => { };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="file" {...register("image", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="number" {...register("price", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="text" {...register("description", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button>Submit</button>
            </form>
            <hr />
        </div>
    );
};

export default AddProduct;
