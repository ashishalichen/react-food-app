import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

export default function useRestaurantMenu(resid) {
    const [resMenu, setResMenu] = useState(null)
    useEffect(() => {
        fetchMenu()
    }, [])

    async function fetchMenu() {
        const data = await fetch(MENU_API + resid)
        const json = await data.json()

        // console.log(json?.data)
        setResMenu(json?.data)
    }

    return resMenu
}