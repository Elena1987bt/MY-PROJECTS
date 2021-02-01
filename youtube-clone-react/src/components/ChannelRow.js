import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import './ChannelRow.css';

function ChannelRow({
  image,
  channelTitle,
  subs,
  verified,
  description,
  numOfVideos,
}) {
  return (
    <div className="channelRow">
      <Avatar alt={channelTitle} src={image} className="channelRow__logo" />
      <div className="chnnelRow__text">
        <h4>
          {channelTitle} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>

        <p>
          {subs} subscribers • {numOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
