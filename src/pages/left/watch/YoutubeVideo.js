import React, { useState } from "react";
import Spinner from "./../../../components/spinner/spinner";
import { useHistory } from "react-router-dom";
import { backup } from "./backup";

const YouTubeVideo = () => {
    let [videoId, setVideoId] = useState([]);
    let history = useHistory();

    const componentDidMount = () => {
        // On mount, check to see if the API script is already loaded
        console.log("component");
        if (!window.YT) {
            // If not, load the script asynchronously
            const tag = document.createElement("script");
            tag.src = "https://apis.google.com/js/api.js";
            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = window.onload;

            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        authenticate()
    };
    //reads on authenticatation then loadclient or playlist. playlist exists because of client on rest.
    const authenticate = async () => {
        //authenticate the  api
        console.log("auth");
        await window.gapi.load("client:auth2", () => {
            return window.gapi.auth2
                .init({
                    client_id:
                        "119854572788-3gb167v22fpthddcimcn261oae2rm7fm.apps.googleusercontent.com",
                    scope: "email",
                })
                .then((data) => {
                    console.log("on success: ", data);
                    loadClient();
                })
                .catch((error) => console.error(error));
        });
    };
    //Get activities
    const loadClient = () => {
        window.gapi.client.setApiKey("AIzaSyB_GbBCE2h64IhuQqEdNcUJDnvuF1cz7NY");
        return window.gapi.client
            .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(
                function () {
                    console.log("GAPI client loaded for API");
                    return window.gapi.client.youtube.activities
                        .list({
                            part: ["snippet,contentDetails"],
                            //my channel id
                            channelId: "UCDDSe8H1IfQJ1KA0f0AAafw",
                            maxResults: 25,
                        })
                        .then(
                            function (response) {
                                // Handle the results here (response.result has the parsed body).
                                console.log("Response: ", response);
                                //forward to execute to playlist
                                execute();
                            },
                            function (err) {
                                console.error("Execute error", err);
                            }
                        );
                },
                function (err) {
                    console.error("Error loading GAPI client for API", err);
                }
            );
    };
    //get playlist
    const execute = () => {
        return window.gapi.client.youtube.playlistItems
            .list({
                part: ["snippet,contentDetails"],
                maxResults: 25,
                //playlist can only exist with certain keys
                playlistId: "PLfCyPgplkH5DOl1VqMDGn5mcOMtEYishH",
            })
            .then(
                function (response) {
                    const listItems = response.result.items;
                    console.log(response);
                    if (listItems) {
                        listItems.forEach((item) => {
                            if (listItems.length - 1 >= videoId.length || videoId.length === 0) {
                                //store it for records
                                videoId.push(item);
                                localStorage.setItem("videos", JSON.stringify(item));
                                setVideoId(videoId);
                                LoadVideo();
                            }
                        });
                    }
                },

                function (err) {
                    console.error("Execute error", err);
                }
            );
    };

    const LoadVideo = () => {
        if (videoId === "") {
            //just incase there is a reload or wifi/network goes down
            videoId = backup;
        }
        return history.push("/Watch", { video: videoId });
    };

    componentDidMount();
    return <Spinner />;
};

export default YouTubeVideo;
