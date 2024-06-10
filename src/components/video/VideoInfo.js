import { numbersToText, dateToText } from "../../utils/HumanReadable";

const VideoInfo = ({ video }) => {
  const { snippet, statistics, channel } = video;
  const readableViewCount = numbersToText(statistics?.viewCount);
  const readableDate = dateToText(snippet?.publishedAt);
  return (
    <div className="flex mt-2">
      <div>
        <img
          src={channel.imageUrl}
          className="rounded-full channel-avatar border-2"
          alt={snippet.channelTitle}
        />
      </div>
      <div className="pl-3">
        <div className="flex flex-col">
          <h2 className=" font-bold line-clamp-2">{snippet.title}</h2>
          <p>{channel.title}</p>
          <p className="items-center views-separator">
            {readableViewCount ? `${readableViewCount} views` : ""}
            <span>{readableDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
