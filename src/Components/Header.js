import { Link } from "react-router-dom"
import { LOGO_URL } from "../Utils/constant"
import { useContext, useState } from "react"
import UserContext from "../Utils/UserContext"
import { useSelector } from "react-redux";

export default function Header() {

    const data = useContext(UserContext);
    const [setLogin, setLoginStatus] = useState('Login')
    // console.log(data)

    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)

    return (
        <div className="header flex justify-between bg-pink-200 m-2">
            <div className="logo-container p-4">
                <img className='logo w-28' src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-5">
                        <Link to='/'>Home </Link>
                    </li>
                    <li className="px-5">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className="px-5">
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className="px-5 font-bold">
                        <Link to='/cart'>Cart({cartItems.length} items)</Link>
                    </li>
                    <li className="px-5 font-bold">
                        <Link>{data?.loggedInUser}</Link>
                    </li>
                    <li className="px-5 font-bold" >
                        <button onClick={() => setLoginStatus(setLogin == 'Login' ? 'Logout' : 'Login')}>{setLogin}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}