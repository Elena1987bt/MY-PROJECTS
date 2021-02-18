import React from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
// import { data } from '../response'; // Mock API CALL
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './SearchPage.css';
function SearchPage() {
  const [{ term, dispatch }] = useStateValue();

  //LIVE API CALL
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwd36WakPm043kyPHZRzbO2way9Xvs2WCvJA&usqp=CAU"
            alt="logo"
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}seconds) for {term}
          </p>
          {data?.items.map((item) => {
            return (
              <div className="searchPage__result" key={item.cacheId}>
                <a href={item.link} className="searchPage__resultLink">
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        src={item.pagemap?.cse_image[0]?.src}
                        alt=""
                        className="searchPage__resultImage"
                      />
                    )}
                  <span>{item.displayLink} ▽</span>
                </a>
                <a className="searchPage__resultTitle" href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
