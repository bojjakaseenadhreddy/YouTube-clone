const Thumbnail = ({ video }) => {
  const { snippet } = video;
  const thumbnails = snippet.thumbnails;
  const url =
    thumbnails.maxres?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.default?.url;

  return (
    <div>
      <img
        className="video-thumbnail rounded"
        src={url}
        alt="video thumbnail"
      />
    </div>
  );
};

export default Thumbnail;
