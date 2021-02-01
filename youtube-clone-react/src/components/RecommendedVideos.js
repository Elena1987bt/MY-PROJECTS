import React from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function RecommendedVideos({ videos }) {
  return (
    <div className="recommendedVideos">
      <h2>Recommended </h2>
      <div className="recommendedVideos__container">
        {videos.map((video) => {
          const { id, image, title, channelTitle, timestamp, videoId } = video;
          const published = new Date(timestamp).toDateString();

          return (
            <VideoCard
              image={image}
              title={title}
              channel={channelTitle}
              published={published}
              key={id}
              videoId={videoId}
              views={2000}
              channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpvAne7gyvvtNPdRHDyioOgoF1W_TEjbPlA&usqp=CAU"
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecommendedVideos;
