import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import {
  YOUTUBE_API,
  YOUTUBE_CHANNELS_LIST_API,
  YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API,
  YOUTUBE_API_WITH_IDS,
} from "../../utils/constants/ApiConstants";
import { useSelector } from "react-redux";

const VideoList = () => {
  const [videos, setVideos] = useState({});
  const searchText = useSelector((state) => state.search.value);

  useEffect(() => {
    fetchVideos();
  }, [searchText]);

  const fetchVideos = async () => {
    let videoIds = "";
    if (searchText) {
      const videosList = await fetch(
        YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchText
      );
      const videoData = await videosList.json();
      videoData.items.forEach(
        (v) => (videoIds = videoIds + "&id=" + v.id.videoId)
      );
    }

    let API_URL = YOUTUBE_API;
    if (videoIds) {
      API_URL = YOUTUBE_API_WITH_IDS + videoIds;
    }

    const videosList = await fetch(API_URL);
    const videosData = await videosList.json();
    const channelIds = videosData.items.map(
      (v) => "&id=" + v.snippet.channelId
    );

    const channelsList = await fetch(YOUTUBE_CHANNELS_LIST_API + channelIds);
    const channelsData = await channelsList.json();

    let mapData = new Map();
    channelsData?.items?.forEach((c) => {
      mapData.set(c.id, {
        title: c.snippet.title,
        imageUrl:
          c.snippet.thumbnails.maxres?.url ||
          c.snippet.thumbnails.high?.url ||
          c.snippet.thumbnails.medium?.url ||
          c.snippet.thumbnails.default.url,
      });
    });

    videosData.items.forEach(
      (v) => (v.channel = mapData.get(v.snippet.channelId))
    );

    setVideos(videosData);
  };

  return (
    <div className="grid p-6 sm:grid-cols-1  md:grid-cols-3  md:gap-4">
      {videos?.items?.map((video, index) => {
        return <VideoCard key={video.id + index} video={video} />;
      })}
    </div>
  );
};

export default VideoList;
