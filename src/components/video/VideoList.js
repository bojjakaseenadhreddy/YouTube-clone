import VideoCard from "./VideoCard";

const VideoList = () => {
  return (
    <div className="grid p-6 sm:grid-cols-1 sm:gap-y-4 md:grid-cols-3  md:gap-4">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default VideoList;
