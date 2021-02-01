import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css';

function SearchPage({ videos }) {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpvAne7gyvvtNPdRHDyioOgoF1W_TEjbPlA&usqp=CAU"
        channelTitle="Clever Elena"
        verified
        subs="650k"
        numOfVideos={65}
        description="In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, fully-featured messenger application using React,"
      />
      <hr />
      {videos.map((video) => {
        const {
          id,
          image,
          title,
          description,
          channelTitle,
          timestamp,
          videoId,
        } = video;
        const published = new Date(timestamp).toDateString();
        const desc = `${description.slice(0, 100)}...`;
        return (
          <VideoRow
            image={image}
            title={title}
            channel={channelTitle}
            published={published}
            key={id}
            description={desc}
            videoId={videoId}
            views={2000}
            subs="650K"
          />
        );
      })}
    </div>
  );
}

export default SearchPage;
