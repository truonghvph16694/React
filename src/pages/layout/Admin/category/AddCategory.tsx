import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ICategory } from '../../../../interfaces/category'



type AddCateProps = {
    onAddCate: (category: ICategory) => void
}


const AddCategory = (props: AddCateProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICategory>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<ICategory> = (dataInput) => {


        props.onAddCate(dataInput);
        navigate("/admin/category")
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button>Add More</button>
            </form>
        </div>
    )
}

export default AddCategory