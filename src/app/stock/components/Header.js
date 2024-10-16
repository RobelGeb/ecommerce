export const Header = (props) => {
    return(
        <div className="w-full h-10 bg-slate-300 flex justify-end fixed top-0">
            <button className="hover:bg-blue-500 hover:text-white " onClick={() => props.setShowCart(!props.showCart)}>Cart 🛒</button>
        </div>
    )
}