const api_key = 'gcK5CfmIpgqBJZAHYGG1qlm0sFQLthci'
const limit = 5

export const reqGif = async(categoria) =>{
   try {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
    const { data } = await resp.json()
    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url : gif.images.fixed_width.url
    }))
        return gifs
    } catch (err) {
        console.error(err)
   }
}
