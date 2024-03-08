// import { Link } from 'react-router-dom';
// import Starred from './Starred';
import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async (q, searchOption) => {
    // ev.preventDefault(); //preventDeafault will help us to stop redirecting

    // const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
    // const body = await response.json();
    // console.log(body)

    // const body = awaut apiGet(`/search/shows?q=${searchStr}`)

    try {
      setApiDataError(null);

      let result;

      if (searchOption == 'shows') {
        result = await searchForShows(q);
        setApiData(result);
      } else {
        result = await searchForPeople(q);
      }
      setApiData(result);
      
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>ERROR OCCURED: {apiDataError.message}</div>;
    }

    if (apiData && apiData.length > 0) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
