const Thumbnail = ({ video }) => {
  const { snippet } = video;

  return (
    <div>
      <img
        className="video-thumbnail rounded"
        src={snippet.thumbnails.maxres?.url || snippet.thumbnails.standard?.url}
        alt="video thumbnail"
      />
    </div>
  );
};

export default Thumbnail;
