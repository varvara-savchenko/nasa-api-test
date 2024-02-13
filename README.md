### TEST CASES:

1. write to the console 5 photographs taken in 2018, where is the visible planet Mars surface or were taken from Mars's surface.
2. check that NASA records with the keyword Mars taken in 2018 with media_type="video" include only links to videos.

### TEST STRUCTURE:
There is main `fetchData` function with the following functionality:
 - assign reusable variables
 - fetch api
 - return parsed JSON

`fetchData("image")` function does the following:
- filters out image items with "surface" in description
- stores it in the new array
- gets first 5 items of this array
- logs the results

`fetchData("video")` function does the following:
-  extracts href property from each item
-  fetches the JSON data from each extracted href
-  checks if there are links within each fetched JSON data that end with '.mp4'
-  logs the results



