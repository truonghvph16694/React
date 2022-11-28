import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import { Link } from "react-router-dom";
import { ICategory } from '../../../../interfaces/category';

type CategoryManagerProps = {
    category: ICategory[];
    onRemoveCate: (id: number) => void

}
const CateManager = (props: CategoryManagerProps) => {
    return (
        <div>
            <Button type="primary"> <Link to={"add"}><PlusCircleOutlined /></Link> </Button>
            <Table
                dataSource={
                    props.category.map((item) => ({
                        key: item.id,
                        name: item.name,
                    }))
                }
            >

                <Column title="Tên Sản Phẩm" dataIndex="name" key="name" />
                <Column
                    title="Action"
                    key="action"
                    render={(category) => (
                        <Space size="middle">
                            <button><Link to={`${category.key}/update`}>Sửa </Link> </button>
                            <a><Popconfirm
                                placement="top"
                                title="Mày có muốn xóa không?"
                                onConfirm={() => props.onRemoveCate(category.key)}
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

export default CateManager