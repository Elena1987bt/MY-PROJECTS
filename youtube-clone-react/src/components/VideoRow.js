import React from 'react';
import './VideoRow.css';

function VideoRow({
  image,
  title,
  channel,
  published,
  videoId,
  views,
  description,
  subs,
}) {
  return (
    <a
      className="videoRow"
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
    >
      <img src={image} alt={title} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} • <span className="videoRow__subsNumber">{subs} </span>
          Subscribers • {views} views • {published}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </a>
  );
}

export default VideoRow;
