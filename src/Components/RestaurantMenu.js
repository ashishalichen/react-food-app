import { useParams } from "react-router-dom"
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react"

export default function RestaurantMenu() {
    // console.log(props)
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0)

    if (!resInfo) {
        return <Shimmer />
    }


    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info
    // console.log(resInfo?.cards[2]?.card?.card?.info)
    // const { itemCards } = resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card 

    // console.log(resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(category => category?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');


    return (
        <div className="text-center ">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(', ')} ---- {costForTwo}
            </p>
            {
                categories.map((category, index) => <RestaurantCategory
                    key={category?.card?.card.title}
                    props={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(index)}
                />)
            }
        </div>
    )
}