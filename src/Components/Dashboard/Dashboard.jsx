// Dashboard.js
import React, { useEffect, useState } from 'react';
import '../Dashboard/Dashboard.css';
import Displaydashboard from './Displaydashboard';
import ChartBar from './ChartBar';

const Dashboard = () => {
  const [products, setProduct] = useState([]);
  const [sales, setSales] = useState([]);
  const [dealer, setDealer] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalStockSum, setTotalStockSum] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [todayCash, setTodayCash] = useState(0);

  const clearTodayValues = () => {
    setTotalSales(0);
    // setTotalQuantity(0);
    setTotalCost(0);
    setTodayCash(0);
    setDealer([]);
  };


  useEffect(() => {
    fetch('http://localhost:5000/supplyproducts')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setDealer(data);

        // Calculate the total sum
        const sum = data.reduce((acc, sale) => acc + Number(sale.price.replace(/,/g, '')), 0);
        setTotalCost(sum);
      });
  }, []);


  useEffect(() => {
    fetch('http://localhost:5000/customer')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSales(data);
        const sum = data.reduce((acc, sale) => acc + Number(sale.price.replace(/,/g, '')), 0);
        setTotalSales(sum);

        const quantitySum = data.reduce((acc,sale) => acc + Number(sale.quantity.replace(/,/g, '')), 0);
        setTotalQuantity(quantitySum);


        // Calculate today's cash
        if (sum > totalCost) {
          setTodayCash(sum - totalCost);
        } else {
          // Display alert or handle the condition where sales are not greater than expenses
          alert("Today's sales should be greater than today's expenses.");
        }
      });
  }, [totalCost]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then((data) => {
        // console.log(data[0].stock);
        setProduct(data);

        const sum = data.reduce((acc, product) => acc + (product.stock ? Number(product.stock.replace(/,/g, '')) : 0), 0);
        setTotalStockSum(sum);
      })
  }, []);




  return (
    <div className=''>
      <button onClick={clearTodayValues}>Clear Today's Values</button>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <div className="dashboard-card bg-gray-700 ">
          <h2>Today's Sales</h2>
          <p>{totalSales.toLocaleString('en-IN')} tk</p>
        </div>
        <div className="dashboard-card bg-gray-600">
          <h2>Product sale</h2>
          <p>{totalQuantity}</p>
        </div>
        <div className="dashboard-card bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <h2>New Customer</h2>
          <p>{sales.length}</p>
        </div>
        <div className="dashboard-card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h2>Today's Expenses</h2>
          <p>{totalCost.toLocaleString('en-IN')} tk</p>
        </div>
        <div className="dashboard-card bg-gray-700 ">
          <h2>Product stocks</h2>
          <p>{totalStockSum-totalQuantity}</p>
        </div>
        <div className="dashboard-card bg-gray-600">
          <h2>Today Dealer</h2>
          <p>{totalCost.toLocaleString('en-IN')} tk</p>
        </div>
        <div className="dashboard-card bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <h2>Today's Cash</h2>
          <p>{todayCash.toLocaleString('en-IN')} tk</p>
        </div>
        <div className="dashboard-card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h2>Monthly Sales</h2>
          <p>{totalSales.toLocaleString('en-IN')} tk</p>
        </div>
        <div>

        </div>
        
      </div>
      <div className='flex gap-24 mt-10'>
      <div className=''>
          <h1></h1>
          

<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                {
                  sales.map(sale => 
                    <div class="flex items-center">
                    
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {sale.customer_name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {sale.email}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {sale.price} tk
                    </div>
                </div>
                    )
                }
            </li>
            
            
            
            
        </ul>
   </div>
</div>

        </div>
        <div className='chartbar'>
          <ChartBar></ChartBar>
        </div>
      </div>
      {
        sales.map(sale => <Displaydashboard
          key={sale._id}
          sale={sale}
        >

        </Displaydashboard>)
      }

    </div>
  );
};

export default Dashboard;
