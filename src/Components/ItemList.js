import { useDispatch } from "react-redux";
import { addItems } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constant";

export default function ItemList({ props }) {

    const dispatch = useDispatch()

    function handleAddItem(item) {
        // dispatch an action
        dispatch(addItems(item))
    }

    return (
        <div>
            {
                props.map(item =>
                    <div key={item.card.info.id} className="m-2 p-2 border-black border-b-2  flex justify-between">

                        <div className="text-left">
                            <span>{item?.card?.info?.name}</span>
                            <span className="px-2">- ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div>
                            <div className=" w-40 h-40">
                                <img
                                    className="w-full h-full rounded-lg object-cover"
                                    src={CDN_URL + item.card.info.imageId}></img>
                            </div>
                            <button className="px-2 py-1  bg-white shadow-lg text-lime-600 rounded-xl ml-auto mr-auto -mt-5 border  font-bold"
                                onClick={() => handleAddItem(item)}
                            >ADD</button>
                        </div>

                    </div>
                )
            }
        </div>
    )
}