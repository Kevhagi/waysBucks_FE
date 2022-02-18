import React, { useState } from 'react';

import { API } from '../../config/api'

function AddProductBody() {

    const [preview, setPreview] = useState(null); //For image preview

    // Store data with useState
    const [form, setForm] = useState({
    productName: "",
    productPrice: "",
    productImage: ""
    });

    // Handle change data on form
    const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });

        // Create image url for preview
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    };

    //Handle submit button
    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
    
          // Create Configuration Content-type here ...
          // Content-type: multipart/form-data
          const config = {
            headers: {
              "Content-type": "multipart/form-data",
            },
          };
    
          // Create store data with FormData as object here ...
          const formData = new FormData()
          formData.set("productImage", form.productImage[0], form.productImage[0].name)
          formData.set("productName", form.productName)
          formData.set("productPrice", form.productPrice)
    
          // Insert product data
          const response = await API.post('/product', formData, config)

          if(response?.status == 200){
            //Clear data after insert
            let clearForm = () => { 
            document.getElementById("inputProduct").reset();
            setPreview(null)
            setForm({
                productName: "",
                productPrice: 0,
                productImage: ""
            })
            }
            alert("Product successfully added to database!")
            clearForm()
          }

        } catch (error) {
            let errorAlert1 = error.response.data.message
            if (errorAlert1) {
                return alert(errorAlert1)
            }
            let errorAlert2 = error.response.data.error.message
            errorAlert2 = errorAlert2.replace('"productName"', 'Product name')
            errorAlert2 = errorAlert2.replace('"productPrice"', 'Product price')
            if (errorAlert2) {
                return alert(errorAlert2)
            }   
        }
    };
       
    return(
        <div className='container d-flex'>
            <div className='col-7 px-5'>
                <h1 className='color1'>Product</h1>
                <form id="inputProduct" onSubmit={handleSubmit}>
                    <div className='mt-5'>
                        <input 
                            className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5' 
                            type="text" 
                            placeholder='Name Product'
                            name="productName"
                            onChange={handleChange}
                        />
                        <input 
                            className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5'
                            type="number"
                            placeholder='Price'
                            name="productPrice"
                            onChange={handleChange}
                        />
                        <input 
                            className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5 form-control'
                            type="file"
                            placeholder='Photo Product'
                            name="productImage"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='row justify-content-center'>
                        <button type="submit" className='col-10 py-1 rounded-3 bg-2 text-white fw-bold'>Add Product</button> 
                    </div>    
                </form>
            </div>

            <div className='d-flex align-items-center col-5 px-5'>
                <img src={preview} style={{maxWidth: "430px"}} alt="" />
            </div>
        </div>
    )
}

export default AddProductBody;
