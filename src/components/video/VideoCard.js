import Thumbnail from "./Thumbnail";
import VideoInfo from "./VideoInfo";
const VIDEO_DATA = {
  thumbnail: {
    url: "",
    runTime: "",
    videoUrl: "",
  },
  info: {
    videoTitle:
      "Some test title Some test titleSome test titleSome test titleSome test titleSome test titleSome test titleSome test titleSome test titleSome test title",
    channelUrl: "https://www.youtube.com/@Firstpost",
    channelAvatarUrl:
      "https://yt3.ggpht.com/ECkjlnETOWq_v2UuToBHeR_UY42J47UNashpSkdQpcMEMh0eBdBag-81bRs65BOhZzsbGxUW=s68-c-k-c0x00ffffff-no-rj",
    channelName: "First Post",
    channelVerified: true,
    viewsCount: "50k",
    publishedAt: "2 hours ago",
  },
};

const VideoCard = () => {
  return (
    <div>
      <Thumbnail info={VIDEO_DATA.thumbnail} />
      <VideoInfo info={VIDEO_DATA.info} />
    </div>
  );
};

export default VideoCard;
