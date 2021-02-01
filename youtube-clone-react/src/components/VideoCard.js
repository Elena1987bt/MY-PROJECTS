import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

function VideoCard({
  image,
  title,
  channel,
  published,
  videoId,
  views,
  channelImage,
}) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      className="videoCard"
    >
      <img src={image} alt="" className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <Avatar
          alt={channel}
          src={channelImage}
          className="videoCard__Avatar"
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {published}
          </p>
        </div>
      </div>
    </a>
  );
}

export default VideoCard;
