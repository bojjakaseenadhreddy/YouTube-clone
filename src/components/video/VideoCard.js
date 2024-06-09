import Thumbnail from "./Thumbnail";
import VideoInfo from "./VideoInfo";

const VideoCard = ({ video }) => {
  return (
    <div className="mb-2">
      <Thumbnail video={video} />
      <VideoInfo video={video} />
    </div>
  );
};

export default VideoCard;
