import { useState } from "react"
import ItemList from "./ItemList"

export default function RestaurantCategory({ props, showItems, setShowIndex }) {

    function handleClick() {
        setShowIndex()

    }

    return (<div>
        {/* Accordion Header */}
        <div className="w-6/12 bg-slate-300 p-4 mx-auto my-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">
                    {props.title}({props.itemCards.length})
                </span>
                <span>🔽</span>
            </div>
            {/* {Accordion Body} */}
            {showItems && <ItemList props={props.itemCards} />}
        </div>


    </div>)
}