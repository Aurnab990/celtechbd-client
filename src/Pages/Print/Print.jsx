import React, {useEffect, useRef, useState} from 'react';
import '../Print/Print.css'
import ReactToPrint from 'react-to-print';
import Barcode from 'react-barcode';

const Print = () => {
    const componentRef = useRef();
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/customer')
        .then((res) => res.json())
        .then((data) => {
          // Check if the data array is not empty
          if (data.length > 0) {
            // Set only the first item in the products state
            setProducts([data[data.length - 1]]);
          }
        });
    }, []);

    


  return (
    <div>
        

    
    <div ref={componentRef} className="receipt-content">
      
        {
          products.map(product =>
            <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="col-md-12">
            <div className="invoice-wrapper">
              <div className=' w-full'>
              <div className='flex gap-44'>
              <div className="intro ">
                <strong><span className='text-green-600 text-2xl'>CELLTECH</span> <span className=''>BD</span></strong>
                <br />
                <p className='text-black text-sm'>Level #5, Block#C, Shop#69,
                <br /> Bashundhara City, Panthapath Dhaka, Bangladesh</p>
              </div>
              <div className=''>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX///9AtkhNTUv//f////5KSkg+Pjw+t0cutDlBtUuq2apJSUlkZGO1tbP9//v/+/9wcHDe8eEpsjDBwcFDQ0Pi4uA/Pzx8y4JbW1mioqL39/Wy37EzsTs9uFD5//inp6dXu2A5OTdUVFJiwHGLi4ru7u6CgoD4//+UlJQ0tUXq9Ofb29tDs03q6uqSkpHy/fXZ7NTJ6s6/7MUpr0IvLy+KyIu7u7vE38rm9uXS8NBsu3Frx2+Fz494eHeR0J0dsSSi1Z1UumRwuHip1rJEqU7l/+a/37jh6t90xnZszoJIsFgsrDLb+dTL5saj5aWa1p+azaI2pEGy3Ll9yoy15LtYuVJktmj5/+5vx4q63rGCwIaJ1Y43r09HrDzs++Ld+un89yNWAAANjUlEQVR4nO2da0PaShqAJ2QgE9CkYECFMXJRYyDIrZwDFq3U1vXIcbHW2rNd1P//L/adCTetYFBE6M7zoQYSZB5n3rkmU4QEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUDw/8LK1pIX3m1trmCEMH7r9E5KPp0y/N4wAqmtPFo0w6jh93nG7zNSy2+d4klZCnkX5Cya4nJgQkGfz8i9daInAS9NUEZ7hjtvnepJiBoTC/p8oe23TvYErExeSCESF6mYDoVhaDxDpTmwgjQNI1l+69R7oW9o+N6NZ23QqoAhQrK+EIJ9w9jek7GVW/MPG2JtBsmbAl1DYws/1RnDKDpkiM3wn3/+GS5mC+7HZLc3N4fZ2jUM5b1cvOcfysNCrZ6o7lP1+4dG8Dxc4HaaxeJzvnAN/QeeLl6JDfLQDUScLR02P0YidnL/qHQH78ny3BnyRBu7ni7O3TfUNJZjmhkONikBnE/HXzRkvXKKJ8U1jHnrakYHhhB1msbbC95m3B1+popkf6wkg1+QjuapqLqGAY+GxlAc3kNGd8EzqpypduXzap2F5NxkpRuHXvNwpCGrRwttSlRFoaSyX9fw3NSqruGL8xBrGMtyMUMcVVIVQldvp57S5zIlQ4YGVWuVSI7CHDsnUAfNRZ9gSnHYowCKABTWz/U5qW+mbCjHm1TikNW5yMGpG2J0wjJRUeCf7Mz7cI92qKZsiFDNlrqZWJzxpByr68DSfPCt0zaUC0nFNWzN3lC3auF/vbYhKjhvZWgh8/i4Zj4ctk6xtWBgVKf9UjrLTji2rHjiw/kjZ6ZsaKJGNwslJTtTQ3SePM0+dmbKhnLhezcPlYz5zMQ+i8JfrSPZemzmaNpxmGg5riE91GfTIMqWpqOTSKU8oocxVUML/TgjzFBRJVqaVSGVceGwpZZH1WtTMszlWCjIqFoBOTB07OZsCinUMKh2HaF/In3EeG0acZjbPWBTxDBguiQKL6SqagdfmHSPwJfWm4SO+baXGsZzu+nQH90XJSrZqsJL6ffabLpsmn7n2OTTmJB/lmFsxV0Izq9spd8b63H2TZqF6me26tajaisxoyiUf1zbivO3PvqKZ8Whsckyb/OdPxAI7PKZZA1Z+ORzVxAq0qSpz8YQ/ySKUh03o/AsQ5/vYCltGH4j1Zsp13S5bdu8lpFgBHxT12fUZTunikTKo2oZxjMN2aJ+ILa+3de4y8BXSYo7cmr9W9e0149DDE3hBnylGh437zWZYW9aPxQyjCW3fsFYw3KhXbF5X0bdUFQlMqN6FFqnEv/W8LiLJjLMdzPQMNLr3SVElomFhERUnn+S6ihEupJnNJWIUYONt2lp3EUTGeIliL2A7936YIVUt+6Czo1qK66hTexkGd59Wcq9YuIMMyQXUM+NXFiaqLVAKwc7m7k8+12ym324/E0hDveD+FNVha5+mdnCG7ZQk+fhGTS+Iyf2JjPswtYrsCxr2WCG9CYtJMmBHHQSs5x/slCGxyE51eSRlfdzDLEmwy8snK9u0BtpgENoNYtnuTJsob+4oUIbJh7VxZhoVr+PrNUvzoiqSupAUIlcF9m5GQ57LdSGRKjQz6entzIytcdm95bfQ78k8P5pQ3dwqfERw9/BJCH2hu0O5yEQHdUmZ2Uss1mgWRrKX6jdrcU7ZU3XHwvG7Sjn6RtkWOxBMw51Z7v5lZCh0ql+VggE4EyH9N006XiVupOzG4R+KpkvujtEBlChfpH8SgmrNocUSeT60tTfYPEX/uK3HeI2U45KaKb0onrOLAZXzyihzM5Rlb6fTTOXBRhov8EqBbSB8hWVWCjCP5CUSrNdZMmA8iaP66syLIsN2dmvYK+08FUjCbFG+W9ii0us7QOkiP3tXBsxnz4LLK1dgXT0ihSESyZYLCBd1mB0M2bxC3oITI//FbLFq29JlcndR7lRVUovim+72Aud77aqkEHQKJAP142TGj85JiyhVQPFQvE/jYxjRyLwR1Lv+zkSsUkyUbDwrDqhj2PJGrr6OjCEEqtCz4PQ76dH57UxH8wWL9unScgjm/WmHV4g72WgHaHVMDSzUJzffj07+ykClYOiSEOpVBRKSWsj0zhKnJTC4RrjS7FeOr8Mtlczagv+CFR5WC77fycp0mmM7c/PGvP8O+RFd4A6nBGEkEiE0hbltFotQm12Y8wvMfcwBK/voHk152QJFEEnEmmXTeo8FJSgK8Kztl+EWd6ykHOcEWbdn7SsW3NzNwlic90gqZVWHcKb6m4vh8uwwHSPeKC5bwxKtNuwu6egJawkuwFN67o5j88k1BKrDgVLSe3mlPqg/ui+hBhVnL66xAqwXelkGsFSNskbHjUSnsEszMSwIY9WKx9mnIpNIaE2dEwelMFujbnhdBxW01BaIVRN7jfaiXoNqk1ZNufbkFUMsq5bhfLRX8lK5Yb+QqVSYWYfI/ZGBryOEuVw1uz2CyzGfBsixLsyGOs6DIfNL/VS+erq+DjYI5G4OimXi8XbW6bEgwyGuWDmDmn5NIjprtHPryEKF+PsboUffAYQTX5H7/wbysV/VoOlcJwVWIsJWmyOynulOP+GFjLLyY8faXO/2g6W68VaNj5RSuffkI2FrNI+9Mls1gjYqpPMrDbawZOStwnO+Tdk6MgMn7LGnw9joXuqOuSmUvT02cUwNNlNkrXgdYsSdx1FsaF1HzvzP/jsQhhCQdXY8I/ffg4dctZNU+zfynCAWQo2muyu3t/WEJp+lCAsGn9XQw16ZAnKeti/qyFr6sHwNy6ljARfnPZq2JR+c8PCvI8tHmMiw5q6oIaKVCnip1Y12Kx9yaGLabhxYx8h3Ry/eMRmwdsqWUxDNitelp+4HRTLOHxm8xvzFs9QUlRbatw9MT+Ii0nqztMtoCGbNLSlzOpYTh0qLa7hYK5tHL0LF9bQMwtr6DEHF9jw989DYbighldEfVrpoSHJLpBh+GNn4kykjjkHS9teKSTVyQ1XrXnc4mMUF5MXU/qfeVweHUntjN3B7B1JocmCvED77smo9NVm899euSFn3ibI5wYZF7/znUk8QalTHXcfzlyC0Y9y0COJy9IdetuboJ4BnmyTDnmm98gKBAKBQDAFNCzPx0Y/rwdepGHO81i0HtaE1ILf9qtlU7eweXERPGb36R2b6DIY7C5R4OOLy6FCvNnnD7TSO+QPU+KVrXc7y+ypdLS8uRl3L+49K7Wyzi9cYW/H+8ezGF/pJ+yGWdL6VENaNmJTdpcvOSugJiHdZaa43fowtB7jCxgugQO0m3IPU+twIr/E9jQP+JltOpDmhv7UWtz92HoqBhiBEJyOv48ZRiwWCCzPIvyLkYiUbKqErIIhUVVnQ1Ht7zWUUWzTjc74hjJsmAYN/phvYAetGz53E3YwjC8Z/vQSnGV7gK75XbO0f6lnCGfTab8/BOrxFHvO2zB8qc3XFzQz5CZYMIvXpFVEWSI1iuF6uFjU7htmBoY4Go3mQCAfjeYh2YEcf6oNpDYD/p1tFN+LsS0yHzMM5OLx6EEolQND/wF8fj3mi73ybspY08s35Ce7CbbcilyAoX2E2HAXCg8zdK/S7hlyZxDoJju13X8v5GPHcV/K97hhKorYrtKBFWa4475nbL2yoaW3b0iZHZrhcBZDHF70zk1qGE2F3NRu591SykPsnmHe/ZHrG8aNUC9MXwkZ4VOlwrdn1GRdgzhUPrSrh4f/vRw2jI8zNPbWd3d39/KQOcbQI6Zr/vQevL/rGzKES9e3QqEl1DdEByHD08a9L0D7YHd+sNZQZk8/QRyqJEKkSNWzYYjXpe9zaNMY3o9mjVUkwLAh24PACPnyQ4ZboUD0lQ3NpNIxuaFmyhbkodqx1ZvKT+zV0BfybAhVcMgIhd71DTHa8r+yoWxpw6UUDO3Gj9va7Zes5zwM5LYZcbRs3C+la/k4vH2/psHy9k4osDwwfOc3XnfzfdmSG1K3psnWCqwuPXTP4IlrmlwqtOee3N4eU5fmjdDOUE3TP/1KyJZ+RUmVdbxLEuWtxQXfv5ntQ6Copj5kONw3f7S1gBYdemGs1VjzargZi3nbXvolFDrka0KTs/uRVokZNmp37ClDaPFp5+/sXTZ7G2eGt/Du3W3v7z1cSqN5DtQa0LiB4npgVIufimo4vmcY69wwvp1fjvn8r13RAMcR0mlmOiTyD2J9Gqez4ShKJcz2knAcZ2PDLuENyT47gxefe/e1DRm6e9GwJiBv+I21g6XYqF5bzL+2tpY2QtAsgqEvnfYZs/mvWrSLCr25oXS/JqNshPI5eXITZj1vQuB1q45t94nKCOnN1MfTsTQ/2A2EoFsaChlst/acEYMXMd4RW4u5PW9frN/zDvDaNZZa4XUp683GZiII4VX81kx+uDJlrGWr1UYVaBwW0EXV5WdNO+QHh1V4t2u4t+XGzx9bXfhOQtvrS+mldR6Yu1u73Kx3IXTXdviFm6yFj/PjveX47CbG3apyeLA2OIR3NfTL+QXD6j3NOrSjv6wPnnViT90vrh1iNxTqXIBNR/F9/jHf3AHzn3zff348bvOBBQHjXw65Gf71vEAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQDAf/A81vo9urmB6sgAAAABJRU5ErkJggg=='></img>
              </div>
                </div>


              <div className="payment-info">
                <div className="flex justify-between">
                  <div>
                    <span>IMEI No.</span>
                    <strong>{product.imeiNumber}</strong>
                  </div>
                  <div className="text-right">
                    <span>Payment Date</span>
                    <strong>{product.date}</strong>
                  </div>
                </div>
              </div>
              </div>

              <div className="payment-details">
                <div className="flex justify-between">
                  <div>
                    <span>CUSTOMER</span>
                    <strong className='text-black'>{product.customer_name}</strong>
                    <p className='text-black text-sm'>
                      {product.address} <br />
                      City of monterrey <br />
                      {product.phone} <br />
                      Bangladesh <br />
                      <a href="#">{product.email}</a>
                    </p>
                  </div>
                  <div className="text-right text-black">
                    <span className=''>BILLED BY</span>
                    <strong>Rashid Khan</strong>
                    <p className='text-black text-sm'>
                    Shop#69 <br />
                    Bashundhara City<br />
                    01732-167888<br />
                      <a href="#">celltechbd23@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="line-items">
                <div className="headers flex">
                  <div className="w-1/2 text-black">Description</div>
                  <div className="w-1/4 text-black">Quantity</div>
                  <div className="w-1/4 text-black text-right">Amount</div>
                </div>
                <div className="items">
                  <div className="flex">
                    <div className="w-1/2 text-black">{product.product_name}</div>
                    <div className="w-1/4 text-black">{product.quantity}</div>
                    <div className="w-1/4 text-black text-right">{product.price}</div>
                  </div>
                  
                </div>
                <div className="total text-black text-right">
                  <p className="extra-notes">
                    <strong>Extra Notes</strong>
                    Please send all items at the same time to the shipping address by next week.
                    Thanks a lot.
                    <Barcode value={product.imeiNumber} />
                  </p>
                  <div className="field text-black">
                    Subtotal <span className='text-black'>TK {product.price}</span>
                  </div>
                  <div className="field text-black">
                    Shipping <span className='text-black'>0.00</span>
                  </div>
                  <div className="field text-black">
                    Discount <span className='text-black'>0.00%</span>
                  </div>
                  <div className="field grand-total text-black">
                    Total <span className='text-black'>TK {product.price}</span>
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>
            
            )
        }
          
      
    </div>
    <ReactToPrint
        trigger={()=>{
            return <button className='bt btn-primary content-end'>Print</button>
        }}
        content={()=>componentRef.current}
        documentTitle="CELLTECH BD"
        pageStyle="print"

        >

        </ReactToPrint>
    </div>
  );
};

export default Print;
