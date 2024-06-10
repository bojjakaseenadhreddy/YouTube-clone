export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&key=" +
  YOUTUBE_API_KEY;
export const YOUTUBE_API_WITH_IDS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=30&key=" +
  YOUTUBE_API_KEY;
export const CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  YOUTUBE_API_KEY;
export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${YOUTUBE_API_KEY}&id=`;
export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&key=${YOUTUBE_API_KEY}&relatedToVideoId=`;
export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&key=${YOUTUBE_API_KEY}&q=`;
export const YOUTUBE_CHANNELS_LIST_API = `https://content-youtube.googleapis.com/youtube/v3/channels?part=snippet&key=${YOUTUBE_API_KEY}`;
