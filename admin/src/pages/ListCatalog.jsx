import React, {useEffect, useState} from "react";
import { backendUrl } from "../App";
import { toast } from 'react-toastify'
import { MdDeleteForever } from 'react-icons/md'

const ListCatalog = ({token}) => {
    const [list, setList] = useState ([])
    const fetchList = async (params) => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list', {headers: {token}})
            if(response.data.success) {
                setList(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect (()=> {
        fetchList()
    }, [])

    return (
        <div>
            <p>Catalog List</p>
            <div>
                <div>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>

                {list.map((item, index)
                <div key={index}>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <MdDeleteForever />
                </div> )}
            </div>
        </div>
    )
}

export default ListCatalog