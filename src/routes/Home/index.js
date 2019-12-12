import React, {
  useState, useEffect,
} from 'react';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { useSelector, useDispatch } from 'react-redux';
import { SearchByHotel } from './components/SearchByHotel';
import './reducer';

const SEARCH_OPTIONS = {
  HOTEL: 'HOTEL',
  LOCATION: 'LOCATION',
};

export const Home = () => {
  const [searchOption, setSearchOption] = useState(SEARCH_OPTIONS.HOTEL);

  const counter = useSelector((state) => state.auth.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'INCREMENT' });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  // console.log(counter);
  return (
    <div>
      <div>
        Search by
        {counter}
        <div>
          <button
            disabled={searchOption === SEARCH_OPTIONS.HOTEL}
            type="button"
            onClick={() => setSearchOption(SEARCH_OPTIONS.HOTEL)}
          >
            Specific Hotel
          </button>
          <button
            disabled={searchOption === SEARCH_OPTIONS.LOCATION}
            type="button"
            onClick={() => setSearchOption(SEARCH_OPTIONS.LOCATION)}
          >
            Location
          </button>
        </div>
        {searchOption === SEARCH_OPTIONS.HOTEL
          ? <SearchByHotel />
          : <div>location</div>}

      </div>
    </div>
  );
};

// export default Home;
