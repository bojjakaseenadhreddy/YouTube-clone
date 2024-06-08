const VideoInfo = ({ info }) => {
  const { videoTitle, channelAvatarUrl, channelName, viewsCount, publishedAt } =
    info;
  return (
    <div className="flex mt-2">
      <div>
        <img
          width={180}
          height={180}
          src={channelAvatarUrl}
          className="rounded-full border-2"
          alt={channelName}
        />
      </div>
      <div className="pl-3">
        <div className="flex flex-col">
          <h2 className=" font-bold line-clamp-2">{videoTitle}</h2>
          <p>{channelName}</p>
          <p>
            {viewsCount} views <span>{publishedAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
