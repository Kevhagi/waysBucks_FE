import React, { useState } from 'react';

import { API } from '../../config/api'

function AddProductBody() {

    const [preview, setPreview] = useState(null); //For image preview

    // Store data with useState here ...
    const [form, setForm] = useState({
    toppingName: "",
    toppingPrice: "",
    toppingImage: ""
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
          formData.set("toppingImage", form.toppingImage[0], form.toppingImage[0].name)
          formData.set("toppingName", form.toppingName)
          formData.set("toppingPrice", form.toppingPrice)
    
          // Insert topping data
          const response = await API.post('/topping', formData, config)

          if(response?.status == 200){
            //Clear data after insert
            let clearForm = () => { 
            document.getElementById("inputTopping").reset();
            setPreview(null)
            setForm({
                toppingName: "",
                toppingPrice: 0,
                toppingImage: ""
            })
            }
            alert("Topping successfully added to database!")
            clearForm()
          }

        } catch (error) {
            let errorAlert1 = error.response.data.message
            if (errorAlert1) {
                return alert(errorAlert1)
            }
            let errorAlert2 = error.response.data.error.message
            errorAlert2 = errorAlert2.replace('"toppingName"', 'Topping name')
            errorAlert2 = errorAlert2.replace('"toppingPrice"', 'Topping price')
            if (errorAlert2) {
                return alert(errorAlert2)
            }   
        }
    };
       
    return(
        <div className='container d-flex'>
            <div className='col-7 px-5'>
                <h1 className='color1'>Topping</h1>
                <form id="inputTopping" onSubmit={handleSubmit}>
                    <div className='mt-5'>
                        <input 
                            className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5' 
                            type="text" 
                            placeholder='Name Topping'
                            name="toppingName"
                            onChange={handleChange}
                        />
                        <input 
                            className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5'
                            type="number"
                            placeholder='Price'
                            name="toppingPrice"
                            onChange={handleChange}
                        />
                        <input 
                            className='col-12 px-2 py-2 bg-1 border-2 border-danger rounded-3 mb-5 form-control'
                            type="file"
                            placeholder='Photo Topping'
                            name="toppingImage"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='row justify-content-center'>
                        <button type="submit" className='col-10 py-1 rounded-3 bg-2 text-white fw-bold'>Add Topping</button> 
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
