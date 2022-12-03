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

        const formData = new FormData();
        formData.append("file", dataInput.image[0]);
        formData.append("upload_preset", "s44cgkqu");
        formData.append("cloud_name", "dufcivzn4");

        fetch("https://api.cloudinary.com/v1_1/dufcivzn4/image/upload", {
            method: "post",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                fetch("http://localhost:3000/products", {
                    method: "POST",
                    headers: {},
                    body: JSON.stringify({ ...data, image: data.url }),
                });

            });
        props.onAdd(dataInput);

        navigate("/admin/products");
    }

    // const onSubmit: SubmitHandler<IProduct> = (data) => { };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="file" {...register("image", { required: true })} />
                {errors.image && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="number" {...register("price", { required: true })} />
                {errors.price && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <input type="text" {...register("description", { required: true })} />
                {errors.description && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button>Submit</button>
            </form>
            <hr />
        </div>
    );
};

export default AddProduct;
