import { useState } from "react"
import { reqGif } from "../service/gif"

export const useGif = () => {

    const [gifs, setGifs] = useState([])
    const [nombreCategoria, setNombreCategoria] = useState('')

    const handleGetGif = (e, categoria) =>{
        e.preventDefault()
        reqGif(categoria).then((gifs) => {
            setGifs(gifs)
        })

        setNombreCategoria(categoria)
    }

    return {
        handleGetGif,
        gifs,
        nombreCategoria
    }
}