import { CDN_URL } from "../Utils/constant"

export default function RestaurantCard({ props }) {
    const { name, cloudinaryImageId, avgRating, cuisines, sla } = props?.info
    console.log(props)

    return (
        <div className="m-4 p-4 w-[250px] h-[450px] border border-slate-300 rounded-lg bg-slate-200 hover:bg-slate-300">
            <img
                className="object-cover w-full rounded-lg"
                alt='res-image'
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-2">{name}</h3>
            <h3>{cuisines.slice(0, 3).join(', ')}</h3>
            <h3>{avgRating}</h3>
            <h3>Delivery Time</h3>
        </div>
    )
}


// Higher order component
export function TopRated(RestaurantCard) {
    return function (props) {
        return (
            <>
                <label className="absolute bg-black text-white m-2 p-1 rounded-sm">Top Rated</label>
                <RestaurantCard {...props} />
            </>
        )
    }
}