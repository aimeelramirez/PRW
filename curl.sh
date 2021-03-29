#!/bin/bash
TOKEN = `119854572788-3gb167v22fpthddcimcn261oae2rm7fm.apps.googleusercontent.com`
 curl GET curl \
  'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyB_GbBCE2h64IhuQqEdNcUJDnvuF1cz7NY' \
  --header 'Authorization: Bearer  119854572788-3gb167v22fpthddcimcn261oae2rm7fm.apps.googleusercontent.com'\
  --header 'Accept: application/json' \
  --compressed

  #https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.playlistItems.list?part=snippet,contentDetails,status&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA

