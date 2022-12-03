import { Link } from "react-router-dom";
import { Button, Table, Popconfirm, message, Space } from "antd";
import Column from "antd/es/table/Column";
import { PlusCircleOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { IProduct } from "../../../../interfaces/products";

type ProductManagerProps = {
    products: IProduct[];
    onRemove: (_id: number) => void

}
//   const onRemove = (id: number) => {
//     console.log("id", id);
//     message.info("Anh Trường đẹp trai");

// };


const ProductAdmin = (props: ProductManagerProps) => {
    return (
        <div>
            <Button type="primary"> <Link to={"add"}><PlusCircleOutlined /></Link> </Button>
            {/* {products.map((product) => (
        <div key={product.id}>{product.name}</div>
    ))} */}

            <Table



                dataSource={
                    props.products.map((item) => ({
                        key: item.id,
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        description: item.description

                    }))
                }
            >

                <Column title="Tên Sản Phẩm" dataIndex="name" key="name" />
                <Column title="Hình Ảnh" dataIndex="image" key="image"></Column>
                <Column title="Giá" dataIndex="price" key="price" />
                <Column title="Mô tả" dataIndex="description" key="description" />

                <Column
                    title="Action"
                    key="action"
                    render={(product) => (

                        <Space size="middle">
                            <button><Link to={`${product.key}/update`}>Sửa </Link> </button>
                            <a><Popconfirm
                                placement="top"
                                title="Mày có muốn xóa không?"
                                onConfirm={() => props.onRemove(product.key)}
                                okText="Đồng Ý"
                                cancelText="Cancel"
                            >
                                <Button type="primary" danger>
                                    <DeleteOutlined />
                                </Button>
                            </Popconfirm></a>
                        </Space>
                    )}
                />



            </Table >
        </div >
    )
}

export default ProductAdmin