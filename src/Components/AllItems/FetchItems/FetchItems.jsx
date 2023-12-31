import React, { useEffect, useState } from 'react';

import '../FetchItems/FetchItems.css'
import { Link } from 'react-router-dom';



const FetchItems = ({ product }) => {
    const [customer, setCustomer] = useState([]);
    const [finalStock, setFinalStock] = useState(0);
  
    useEffect(() => {
        // Fetch customer data
        fetch('http://localhost:5000/customer')
          .then((res) => res.json())
          .then((data) => {
            // Calculate the sum of quantities purchased by all customers for the product
            const totalQuantityPurchased = data
              .filter((customerProduct) => customerProduct.product_name === product.name)
              .reduce((total, customerProduct) => total + customerProduct.quantity, 0);
    
            // Calculate the new stock after all purchases
            const newStock = product.stock - totalQuantityPurchased;
            setFinalStock(newStock);
          });
      }, [product.name, product.stock]);
    
    
    return (
     



        <tbody className=''>

<tr className='grid grid-cols-7 gap-10 mt-5 ml-5 shadow-lg shadow-indigo-500/40 '>
    <td>
        <div className="flex items-center space-x-3">
            <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={product.img} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div>
                <div className="font-bold w-80">{product.name}</div>
                <div className="text-sm opacity-50">{product.brand}</div>
            </div>
        </div>
    </td>
    <td>
        {product.country}
        <br />
        {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
    </td>
    <td className='mt-1'>{product.color}</td>
    <td className='mt-2'>Available: {finalStock}</td>
    <td className='font-semibold mt-1 text-xl'>৳{product.price}</td>
    <th>
        <th>
            <div className='button-container'>
                {/* <button className='update-button'>Update</button>
                <button className='delete-button'>Delete</button> */}
                <button className='print-button'>UPDATE</button>
                <button className='details-button'>DETAILS</button>
            </div>
        </th>
    </th>
</tr>
</tbody>

        


    );
};

export default FetchItems;