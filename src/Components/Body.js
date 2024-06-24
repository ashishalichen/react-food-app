import RestaurantCard, { TopRated } from "./RestaurantCard"
import useRestaurantList from "../Utils/useRestaurantList"
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react"
import useRestaurantMenu from "../Utils/useRestaurantMenu"
import { Link } from "react-router-dom"

export default function Body() {
    const resList = useRestaurantList()
    const [restaurantList, setRestaurantList] = useState()
    const [filterBtn, setFilterBtn] = useState('Top Rated')
    const [searchText, setSearchText] = useState('')
    const RestaurantCardTopRated = TopRated(RestaurantCard)

    useEffect(() => {
        if (resList) {
            setRestaurantList(resList)
        }
    }, [resList])


    if (!restaurantList) {
        return <Shimmer />
    }

    // console.log(RestaurantCardCostForTwo)
    return (
        <div className="body">
            <div className="flex py-4 items-center justify-center">
                <div className="search">
                    <input
                        className="border border-solid border-black rounded-l-sm"
                        data-testid="searchInput"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                            setRestaurantList(resList)
                        }}
                    >
                    </input>
                    <button
                        className="bg-rose-400 px-4 border border-solid border-rose-400 rounded-r-sm"

                        onClick={() => {
                            setRestaurantList(restaurantList.filter((res) =>
                                res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                            )
                            console.log(searchText)
                        }}
                    >
                        Search
                    </button>
                </div>

                {/* filter button */}

                <button
                    className="bg-orange-400 px-4 border mx-4 border-solid border-orange-400 rounded-sm"
                    onClick={() => {
                        if (filterBtn === 'Top Rated') {
                            setFilterBtn('Clear Filter')
                            setRestaurantList(restaurantList.filter(res => res.info.avgRating > 4.3))
                        } else {
                            setFilterBtn('Top Rated')
                            setRestaurantList(resList)
                        }
                    }
                    }
                >
                    {filterBtn}
                </button>

            </div>

            {/* cards */}
            <div className="res-container flex flex-wrap justify-center">
                {
                    restaurantList.map(res =>
                        <Link
                            key={res.info.id}
                            to={'/restaurants/' + res.info.id}
                        >
                            {
                                res?.info?.avgRating > 4.3 ? (<RestaurantCardTopRated props={res} />) : (<RestaurantCard props={res} />)
                            }
                        </Link>
                    )
                }
            </div>
        </div>
    )
}