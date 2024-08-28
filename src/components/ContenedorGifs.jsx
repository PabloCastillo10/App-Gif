export const ContenedorGifs = ({gifs, nombreCategoria}) => {
  
    return (
    <>
         <div className="d-flex flex-row justify-content-center alig-items-center">
           {gifs.map(({id, title, url})=>{
               return (
                    <img key={id} className="img-thumbnail w-10 m-5 border border-primary" src={url} alt="image" />
               )
           })}
       </div>
    </>
  )
}
