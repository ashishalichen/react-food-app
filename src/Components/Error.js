import { useRouteError } from "react-router-dom"

export default function () {

    const err = useRouteError()
    return (
        <>
            <h1>Wrong Place Kid!!!</h1>
            <h2>{err.status}:{err.statusText}</h2>
        </>
    )
}