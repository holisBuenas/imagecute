export const returnPrevImgages = (state) => {
    return state.hits.map(item => {

        return (
            <div className="prev-image" key={item.id}>
                <img
                    src={item.previewURL}
                    alt={item.title}
                />
                <h1>{item.id}</h1>
            </div>
        )
    })

}
export const returnUrlNew = (data) => {
    const listWords = data.split(" ");
    let textWordsPlus = "";
    listWords.forEach(element => {
        textWordsPlus = textWordsPlus + element + "+"
    });
    console.log(textWordsPlus)
    return textWordsPlus
}