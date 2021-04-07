
// let arrayAvatars = []

// let apiKey = 'nBAYk2vkWhWn_frzSCYPHRU5bwFjHjSCrsCDEEyJcbA'
// const FetchCardAvatars = () => {
//     fetch('https://api.unsplash.com/search/photos?page=1&query=happy', {
//         method: 'GET',
//         headers: {
//             'Authorization': 'Client-ID ' + apiKey,
//             'Accept': 'application/json',
//             'Cache-Control': 'no-cache'
//         }
//     }).then((response) => {
//         let getData = response.json()
//         // //console.log(getData)
//         getData.then((data) => {
//             // //console.log(data)
//             arrayAvatars.push(...data.results)
//             // //console.log(JSON.stringify(arrayAvatars[0]))
//             let getList = document.getElementById("list-feed-picture")
//             if (getList != null) {
//                 getAvatarsAll1()

//             }
//         })
//     }).catch((err) => console.error(err))
//     const getAvatarsAll1 = () => {
//         let getList = document.getElementById("list-feed-picture")
//         let getImgs = getList.querySelectorAll("img")
//         for (let i = 0; i < getImgs.length; i++) {
//             // //console.log("calling in fetchAvatar.js", arrayAvatars[i])
//             getImgs[i].src = arrayAvatars[i].urls.regular
//             getImgs[i].alt = arrayAvatars[i].alt_description
//             // getImgs[i].style.cssText = `width: 50%`
//         }
//     }




//     //Replace to the api on actionApi



// }
// // const FetchAds = () => {
// //     fetch(`https://api.unsplash.com/search/photos?page=1&query=house`, {
// //         method: 'GET',
// //         headers: {
// //             'Authorization': 'Client-ID ' + apiKey,
// //             'Accept': 'application/json',
// //             'Cache-Control': 'no-cache'
// //         }
// //     }).then((response) => {
// //         let getData = response.json()
// //         // //console.log(getData)
// //         getData.then((data) => {
// //             // //console.log(data)
// //             arrayAds.push(...data.results)
// //             //getAds()
// //             //console.log(typeof arrayAds)

// //         })
// //     }).catch((err) => console.error(err))
// //     const getAds = () => {
// //         let getList = document.getElementById("list-ads")
// //         let getImgs = getList.querySelectorAll("img")
// //         let getP = document.querySelectorAll(".ad-description")

// //         for (let i = 0; i < getImgs.length; i++) {
// //             // //console.log("calling in fetchAvatar.js", arrayAvatars[i])
// //             let getRand = Math.floor(Math.random() * Math.floor(10));
// //             if (arrayAds[getRand].alt_description !== null) {
// //                 getImgs[i].src = arrayAds[getRand].urls.regular
// //                 getImgs[i].alt = arrayAds[getRand].alt_description
// //                 getP[i].innerText = arrayAds[getRand].alt_description
// //             }
// //         }
// //     }
// // }
// export {
//     FetchCardAvatars
//     // FetchAds
// }