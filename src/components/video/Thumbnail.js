const Thumbnail = ({ video }) => {
  const { snippet } = video;

  return (
    <div>
      <img
        className="video-thumbnail rounded"
        src={snippet.thumbnails.maxres.url}
        alt="video thumbnail"
      />
    </div>
  );
};

export default Thumbnail;
