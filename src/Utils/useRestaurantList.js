import { RES_API } from "./constant";
import { useEffect, useState } from "react";

export default function useRestaurantList() {
    const [resList, setRestList] = useState(null)

    useEffect(() => {
        fetchRestaurant()
    }, [])

    async function fetchRestaurant() {
        const data = await fetch(RES_API)
        const json = await data.json()

        // console.log(json)
        // console.log(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants)

        // const restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        const restaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

        setRestList(restaurantList)
        // console.log(resList)

    }

    return resList
}

