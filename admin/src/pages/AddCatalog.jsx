import React, { useState } from 'react'
import upload_img from '../assets/upload-img.jpeg'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const AddCatalog = ({token}) => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()

    const OnSubmitHandler = async (e) => {
        e.preventDefault();

        try{
            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            if(image) formData.append("image", image)
                const response = await axios.post(`${backendUrl}/api/product/add`, formData, {headers: {token}})
                if (response.data.success) {
                    TransformStream.success(response.data.message)
                    setName("")
                    setDescription("")
                    setPrice("")
                    setImage(null)
                } else {
                    toast.error(response.data.message)
                }
        } catch (error) {
            console.log(error);
            toast.error(error.message)   
        }
    }

  return (
    <div>
       <form onSubmit={OnSubmitHandler}>
            <div>
                <p>Upload Image</p>
                <div>
                    <label htmlFor="image">
                        <img src={!image ? upload_img : URL.createObjectURL(image)} alt="" />
                        <input onChange={(e)=> setImage(e.target.files[0])} type="file" id="image" hidden />
                    </label>
                </div>

                <div>
                    <p>Product Name</p>
                    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter product name' required />
                </div>

                <div>
                    <p>Product Description</p>
                    <input value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder='Enter product description' required />
                </div>

                <div>
                    <p>Product Price</p>
                    <input value={price} onChange={(e)=> setPrice(e.target.value)} type="number" placeholder='100'/>
                </div>
            </div>
            <button type="submit"></button>
       </form>
    </div>
  )
}

export default AddCatalog
