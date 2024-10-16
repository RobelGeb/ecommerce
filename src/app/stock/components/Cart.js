'use client'
import { useState } from "react";
import { useEffect } from "react";
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCart();
    }, [cart]);

    const getCart = async () => {
        try {
            const response = await fetch("http://localhost:8000/cart", {mode: 'cors'})
            .then((res) => res.json())
            .then(data => {
                setCart(data);
                console.log(data[0]);
            })
            
        } catch (err) {
            console.error(err.message);
        }
    }

    const clearCart = async () => {
        try {
            const response_delete = await fetch("http://localhost:8000/cart", 
                {
                    method: "DELETE", 
                    headers: { "Content-Type": "application/json" }
                }
            )
        } catch (err) {
            console.error(err.mesage);
        }
    }

    const deleteItem = async (id) => {
        try {
            const response_delete = await fetch(`http://localhost:8000/cart/${id}`,
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                }
            )
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="flex justify-end fixed top-10 right-0">
            <div className="bg-slate-400 flex flex-row px-3">
                <div className="flex flex-col justify-around items-center">
                    <h1 className="p-2 font-bold">CART</h1>
                    <button onClick={clearCart} className="hover:bg-red-600 hover:text-white bg-slate-300 rounded-md p-2">Clear Cart</button>   
                </div>
                <table>
                    <thead>
                        <tr className="*:px-5">
                            <th>Name</th>
                            <th>Colorway</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((shoe) => {
                                return(
                                    <tr className="*:text-center" key={shoe.shoe_id}>
                                        <td>{shoe.shoe_name}</td>
                                        <td>{shoe.color}</td>
                                        <td>{shoe.shoe_size}</td>
                                        <td>{shoe.price}</td>
                                        <td><button className="hover:bg-red-600 hover:text-white rounded-md p-2" onClick={() => deleteItem(shoe.shoe_id)}>Remove</button></td>
                                    </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Cart;