
import placer from '../../../../image.svg'
let arrayAvatars = []
let apiKey = process.env.REACT_APP_API_KEY
const ApiAvatars = () => {
    fetch('https://api.unsplash.com/search/photos?page=1&query=headshot', {
        method: 'GET',
        headers: {
            'Authorization': 'Client-ID ' + apiKey,
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
        }
    }).then((response) => {
        let getData = response.json()
        // console.log(getData)
        getData.then((data) => {
            // console.log(data)
            arrayAvatars.push(...data.results)
            // console.log(arrayAvatars)
            getAvatarsAll()
        })
    }).catch((err) => console.error(err))
    return (
        <section id="list-avatars">
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>
            <div className="clip">
                <img src={placer} className="profile" alt="description" />
            </div>

        </section>
    )
}
const getAvatarsAll = () => {
    let getList = document.getElementById("list-avatars")
    let getImgs = getList.querySelectorAll("img")
    for (let i = 0; i < getImgs.length; i++) {
        console.log(arrayAvatars[i])
        getImgs[i].src = arrayAvatars[i].urls.full
    }
}
export default ApiAvatars;