import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../Utils/cartSlice"

export default function Cart() {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()
    function handleClearCart() {
        dispatch(clearCart())
    }

    return <div className="text-center m-5 p-5">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            {
                cartItems.length === 0 ? <h1>Empty cart is a grave sin</h1> : <button className="p-2 m-2 bg-black text text-white rounded-lg"
                    onClick={handleClearCart}
                >Clear Cart</button>
            }
            <ItemList props={cartItems} />
        </div>
    </div>
} 