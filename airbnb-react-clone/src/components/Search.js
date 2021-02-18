import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import './Search.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className="search__bottom">
        <h2>
          Number of guests
          <PeopleIcon />
        </h2>

        <input type="number" defaultValue={2} min={0} />
      </div>
      <Button onClick={() => history.push('/search')}>Search AirBnb</Button>
    </div>
  );
}

export default Search;
