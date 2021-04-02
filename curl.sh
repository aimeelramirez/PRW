#!/bin/bash
$TOKEN = `1/fFAGRNJru1FTz70BzhT3Zg`
curl \
-H "Authorization: Bearer $TOKEN" \
'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&forMine=true&maxResults=50'