export const fetchAndReturnData = async (url, setData) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setData(data)
}

export const convertFilterToUrl = (lenguage, typeImage, setFiltros) => {
    const urlFilter = "&lang=" + lenguage + "&image_type=" + typeImage;
    setFiltros(urlFilter)
    console.log(urlFilter)
}