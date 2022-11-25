import React from 'react'
import { Link } from 'react-router-dom';
import { ICategory } from '../../../../interfaces/category';

type CategoryManagerProps = {
    category: ICategory[];
    onRemove: (_id: number) => void

}
const CateManager = (props: CategoryManagerProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md -ml-96 sm:rounded-lg">
            <div className="bg-gray-100 dark:bg-gray-800 py-6 lg:py-8">
                <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div>
                        <p className="flex items-center text-indigo-700 text-xs">
                            <span>Home</span>
                            <span className="mx-2">&gt;</span>
                            <span>Category</span>
                            <span className="mx-2">&gt;</span>
                            <span>List</span>
                        </p>
                        <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">Product List</h4>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <div className=" flex justify-start items-center py-0 relative">
                            <input
                                className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
                                type="text" placeholder="Search" />
                            <svg className="absolute right-3 z-10 cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                                    stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/* <button className="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 py-2 text-sm">Back</button> */}
                        <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 mt-2 text-sm"><Link to={"add"} >  Add More Category</Link></button>
                    </div>
                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Category name
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th> */}
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Remove</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.category.map((item, index) => {
                        return <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {item.name}
                            </th>
                            {/* <td className="px-6 py-4">
                Color
              </td>
              <td className="px-6 py-4">
                Category
              </td> */}
                            {/* <td className="px-6 py-4">
                {item.price}
              </td> */}
                            <td className="px-6 py-4 text-right">
                                <button><Link to={`/admin/product/${item.id}/edit`} className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 mt-2 text-sm">Edit</Link></button>
                            </td>
                            <td className="px-6 py-4 text-left">
                                <button type='submit' className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 -ml-6 mb-1 mt-2 text-sm">Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default CateManager