import React, { useEffect, useState } from 'react';
import '../BtoBhistory/Btobhistory.css'

const Btobhistory = () => {
    const [dealers, setDealers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/supplyproducts')
        .then(res => res.json())
        .then(data => setDealers(data) )
    },[])




    return (
        <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
          <table
              className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
          <thead className="border-b bg-green-600 font-medium dark:border-neutral-500">
                <tr>
                 
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500">
                    Dealer Name
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500">
                    Product Name
                  </th>
                  <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">Product Price</th>
                  <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">Delaer NID</th>
                  <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">Phone Number</th>
                  <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">Date</th>
                </tr>
              </thead>
              
            {
                dealers.map(dealer =>

                   
              
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {dealer.dealerName}
                  </td>
                  <td
                    className="whitespace-nowrap border-r  px-6 py-4 dark:border-neutral-500">
                    {dealer.productName}
                    <br/>
                    <span className='bg-yellow-400 rounded-xl p-1'>Quantity: {dealer.quantity}</span>
                  </td>

                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {dealer.price.toLocaleString('en-IN')} tk
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {dealer.nid}
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {dealer.phone}
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {dealer.date}
                  </td>
                  <td>
                    <button className="whitespace-nowrap bg-red-500 border-r px-6 py-4 dark:border-neutral-500">DELETE</button>
                    
                  </td>
                  <td>
                    <button className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">UPDATE</button>
                    
                  </td>
                  
                </tr>
                
                
              </tbody>
            
                    
                    
                    
                    )
            }
            </table>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Btobhistory;