'use client'
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCart();
        //  console.log(cart);
    }, []);

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
            );
            window.location.href = "http://localhost:3000";
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
            );
            window.location.href = "http://localhost:3000";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="*:w-full">
            <div className="flex flex-row justify-around">
                <h1 className="p-2">Cart</h1>
                <button onClick={clearCart} className="hover:bg-red-600 hover:text-white rounded-md p-2">Clear Cart</button>   
            </div>
            
            <table>
                <thead>
                    <tr className="*:px-5">
                        <th>Name</th>
                        <th>Colorway</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>-</th>
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
    );
};

export default Cart;