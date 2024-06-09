import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import {
  YOUTUBE_API,
  YOUTUBE_CHANNELS_LIST_API,
} from "../../utils/constants/ApiConstants";

const VideoList = () => {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const videosList = await fetch(YOUTUBE_API);
    const videosData = await videosList.json();

    const ids = videosData.items.map((v) => "&id=" + v.snippet.channelId);

    const channelsList = await fetch(YOUTUBE_CHANNELS_LIST_API + ids);
    const channelsData = await channelsList.json();

    let mapData = new Map();
    channelsData?.items?.forEach((c) => {
      mapData.set(c.id, {
        title: c.snippet.title,
        imageUrl: c.snippet.thumbnails.high.url,
      });
    });

    videosData.items.forEach(
      (v) => (v.channel = mapData.get(v.snippet.channelId))
    );

    setVideos(videosData);
  };

  return (
    <div className="grid p-6 sm:grid-cols-1  md:grid-cols-3  md:gap-4">
      {videos?.items?.map((video) => {
        return <VideoCard key={video.id} video={video} />;
      })}
    </div>
  );
};

export default VideoList;
