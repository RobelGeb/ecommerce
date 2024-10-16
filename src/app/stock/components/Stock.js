import { useState, useEffect } from "react";
import Image from "next/image";
import Shoes from '../../data/listings.json'
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Stock = () => {

    const addToCart = async (shoe) => {
        try {
            await fetch(`http://localhost:8000/cart`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(shoe)
                }
            ).then(
                toast.success(`Added "${shoe.name}" to cart!`, 
                    {
                        position: "top-left",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Zoom,
                    }
                )
            )
            //window.location.href = "http://localhost:3000"
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="mt-14">
            <ToastContainer
                position="top-left"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                stacked
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Zoom}
            />

            <div className="grid grid-cols-3 grid-flow-row justify-items-center">
                {Shoes.map(shoe => {
                    return(
                        <div key={shoe.shoe_id} className="w-1/2">
                            <img src={shoe.pic_url} alt="shoepic" className="max-w-72 max-h-72"/>
                            <h1>{shoe.name}</h1>
                            <h2>{shoe.colorway}</h2>
                            <div className="flex flex-row w-full h-10 items-center justify-between">
                                <h3>{shoe.price}</h3>
                                <button onClick={() => addToCart(shoe)} className="w-8 hover:bg-slate-600 hover:text-white">+</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Stock;