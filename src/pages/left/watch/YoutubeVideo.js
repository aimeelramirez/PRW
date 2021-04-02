import React, { useState, useEffect, useCallback } from "react";
import Spinner from "./../../../components/spinner/spinner";
import { useHistory } from "react-router-dom";

let apiKey = process.env.REACT_APP_API_YOUTUBE;
const clientKey = process.env.REACT_APP_API_CLIENT
// let secretKey = process.env.REACT_APP_API_CLIENT_SECRET

const YouTubeVideo = () => {
    let peopleApiDiscovery;

    const handleClientLoad = useCallback(() => {
        // Load the API client and auth2 library.
        let loadGapiClient = new Promise(function (resolve, reject) {
            window.gapi.load('client:auth2', resolve);
        });
        let fetchPeopleApiDiscovery =
            fetch('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest').then(
                function (resp) {
                    return resp.json();
                }).then(function (json) {
                    // eslint-disable-next-line
                    peopleApiDiscovery = json;
                    return Promise.resolve();
                });

        // When both the gapi.client is loaded and the discovery JSON object
        // is ready, call initClient to start API call.
        Promise.all([loadGapiClient, fetchPeopleApiDiscovery]).then(authenticate)
    }, [])


    // let [state, setState] = useState();
    let [videoId, setVideoId] = useState([]);
    let history = useHistory();
    const LoadVideo = useCallback(() => {
        console.log(videoId)

        history.push("/Watch", { videos: videoId });
        return history.goBack()
    }, [videoId, history]);


    //Get activities
    const loadClient = () => {
        console.log("load client:", window.gapi.client.youtube)
        window.gapi.client.setApiKey(apiKey);
        window.gapi.client
            .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest").then(() => {
                window.gapi.client.youtube.playlistItems
                    .list({
                        part: ["snippet,contentDetails"],
                        maxResults: 25,
                        apiKey: apiKey,
                        key: apiKey,
                        //playlist can only exist with certain keys
                        playlistId: "PLfCyPgplkH5DOl1VqMDGn5mcOMtEYishH",
                    }).then((response) => {
                        console.log(response)
                        const listItems = response.result.items;
                        if (listItems) {
                            listItems.forEach((item) => {
                                if (listItems.length - 1 >= videoId.length || videoId.length === 0) {
                                    //store it for records

                                    videoId.push(item);
                                    localStorage.setItem("videos", JSON.stringify(item));
                                    setVideoId(videoId);
                                    return LoadVideo()
                                }
                            });
                        }
                    }).catch((err) => {
                        console.error("Error loading GAPI client for API", err);
                        // });
                    })
            })

    }
    //reads on authenticatation then loadclient or playlist. playlist exists because of client on rest.
    const authenticate = () => {
        //authenticate the  api
        console.log("auth")
        window.gapi.load("client:auth2", () => {
            return window.gapi.auth2
                .init({
                    client_id:
                        clientKey + ".apps.googleusercontent.com",
                    apiKey: apiKey,
                    key: apiKey,
                    discoveryDocs: [peopleApiDiscovery],
                    scope: "email"
                })
                .then(() => {
                    loadClient()

                })
                .catch((error) => console.error(error));
        });
    }

    const componentDidMount = useCallback(() => {
        // On mount, check to see if the API script is already loaded
        if (!window.YT) {
            // If not, load the script asynchronously
            const tag = document.createElement("script");
            tag.attr = "defer"
            tag.src = 'https://apis.google.com/js/api.js?onload=handleClientLoad'
            tag.onload = ""
            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = handleClientLoad
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } handleClientLoad()
    }, [handleClientLoad]);


    //use effect to make sure to clean up the code after running the api
    useEffect(() => {
        setTimeout(() => {
            componentDidMount();
        }, 1000)
    }, [handleClientLoad, componentDidMount])
    return <Spinner />;
};

export default YouTubeVideo;
