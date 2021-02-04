import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatRow.css';
import { Link } from 'react-router-dom';

function ChatRow({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chatRow">
        <Avatar src={profilePic} alt={name} className="chatRow__image" />
        <div className="chatRow__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chatRow__timestamp"> {timestamp}</p>
      </div>
    </Link>
  );
}

export default ChatRow;
