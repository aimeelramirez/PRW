let arrayAvatars = []
let apiKey = process.env.REACT_APP_API_KEY
const FetchCardAvatars = () => {
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
            let getList = document.getElementById("list-avatars")
            let getList2 = document.getElementById("list-avatars-2")
            if (getList != null) {
                getAvatarsAll1()

            } if (getList2 != null) {
                getAvatarsAll2()

            }
        })
    }).catch((err) => console.error(err))
    const getAvatarsAll1 = () => {
        let getList = document.getElementById("list-avatars")
        let getImgs = getList.querySelectorAll("img")
        for (let i = 0; i < getImgs.length; i++) {
            // console.log("calling in fetchAvatar.js", arrayAvatars[i])
            getImgs[i].src = arrayAvatars[i].urls.regular
            getImgs[i].alt = arrayAvatars[i].alt_description
            // getImgs[i].style.cssText = `width: 50%`
        }
    }
    const getAvatarsAll2 = () => {
        let getList = document.getElementById("list-avatars-2")
        let getImgs = getList.querySelectorAll("img")
        for (let i = 0; i < getImgs.length; i++) {
            // console.log("calling in fetchAvatar.js", arrayAvatars[i])
            getImgs[i].src = arrayAvatars[i].urls.regular
            getImgs[i].alt = arrayAvatars[i].alt_description
            // getImgs[i].style.cssText = `width: 50%`
        }
    }

}
export { FetchCardAvatars }