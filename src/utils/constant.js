let apikey = process.env.REACT_APP_API_KEY 

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+apikey;
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q="
export const YOUTUBE_SUGGESTION_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${apikey}&q=`
export const YOUTUBE_COMMENT_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${apikey}&textFormat=plainText&part=snippet&maxResults=20&videoId=`
export const YOUTUBE_SINGLE_VIDEO_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${apikey}&id=` 
export const YOUTUBE_CHANNEL_PROFILE_PICTURE_API = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails&key=${apikey}&id=`
export const YOUTUBE_SUBSCRIPTION_COUNT_API = `https://www.googleapis.com/youtube/v3/channels?part=statistics&key=${apikey}&id=` 