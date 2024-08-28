import { BuscarGif } from "./BuscarGif"
import { useGif } from "../hooks/useGif"
import { ContenedorGifs} from "./ContenedorGifs"

export const GifApp = () => {
   

   const {handleGetGif, gifs, nombreCategoria} = useGif()

    
  return (
    <>
     <BuscarGif handleGetGif={handleGetGif}/>
     <ContenedorGifs gifs={gifs} nombreCategoria={nombreCategoria}/>         
    </>
  )
}
