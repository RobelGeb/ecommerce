import { useState, useEffect } from "react";
import Image from "next/image";
import Shoes from '../data/listings.json'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Stock = () => {
    // try {
    //     const file = await fs.readFile(process.cwd() + '../data/listings.json', 'utf8');
    //     const data = JSON.parse(file);
    // } catch (err) {
    //     console.error(err.message());
    // }

    const addToCart = async (shoe) => {
        try {
            const add = await fetch(`http://localhost:8000/cart`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: shoe
                }
            )
            .then(
                toast("Added to cart!")
            )
            window.location.href = "http://localhost:3000"
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className="grid grid-cols-3">
                {Shoes.map(shoe => {
                    return(
                        <div key={shoe.shoe_id} className="w-1/2">
                            <img src={shoe.pic_url} alt="shoepic" className="max-w-72 max-h-72"/>
                            <h1>{shoe.name}</h1>
                            <h2>{shoe.colorway}</h2>
                            <div className="flex flex-row w-full h-10 items-center justify-between">
                                <h3>{shoe.price}</h3>
                                <button onClick={() => addToCart(JSON.stringify(shoe))} className="w-8 hover:bg-slate-600 hover:text-white">+</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Stock;