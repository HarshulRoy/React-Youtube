let apikey = process.env.REACT_APP_API_KEY 
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+apikey;
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q="

const COMMENT_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${apikey}&textFormat=plainText&part=snippet&maxResults=50&videoId=`

const video_suggestion_api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=iphone&type=video&key=${apikey}`