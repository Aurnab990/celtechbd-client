import React, { useState } from 'react';
import '../AddItems/Additems.css'

const AddItems = () => {

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const model = event.target.model.value;
        const storage = event.target.storage.value;
        const price = event.target.price.value;
        const color = event.target.color.value;
        const imageurl = event.target.imageurl.value;
        

        const product= {name,model,storage,price,color,imageurl}

        fetch('http://localhost:5000/products', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                /*const newBook = [user, data];
                setUsers(newBook); */
                //console.log("Sucess", data);
                alert("Your data Added to Server", data);
                
            })

    };

    return (
        <div className="add-items-container">
            <h1 className='btn btn-secondary w-full'>Add Items</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                    className='w-full rounded-xl'
                        type="text"
                        name='name'
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Model</label>
                    <input
                    className='w-full rounded-xl'
                        type="text"
                        name='model'
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Storage</label>
                    <input
                    className='w-full rounded-xl'
                        type="text"
                        
                        name='storage'
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                    className='w-full rounded-xl'
                        type="text"
                        
                        name='price'
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <input
                    className='w-full rounded-xl'
                        type="text"
                        
                        name='color'
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image url</label>
                    <input
                    className='w-full rounded-xl w-full'
                        type="url"
                        
                        name='imageurl'
                        required
                    />
                </div>
                
                <button className='btn btn-primary w-1/3' type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItems;
