import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const APP_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP&maxResults=50&key=${API_KEY}`;

function App() {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(APP_URL);
    const jsonData = await response.json();
    //console.log(jsonData);
    const data = jsonData.items;
    const items = data.map((item) => {
      return {
        id: item.id,
        channelTitle: item.snippet.channelTitle,
        description: item.snippet.description,
        timestamp: item.snippet.publishedAt,
        image: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        videoId: item.snippet.resourceId.videoId,
      };
    });
    setVideoList(items);
  };
  //console.log(videoList);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos videos={videoList} />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage videos={videoList} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
