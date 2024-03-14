// import { Link } from 'react-router-dom';
// import Starred from './Starred';
import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const [filter, setFilter] = useState(null);
 
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    // ev.preventDefault(); //preventDeafault will help us to stop redirecting

    // const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
    // const body = await response.json();
    // console.log(body)

    // const body = awaut apiGet(`/search/shows?q=${searchStr}`)

    // ---

    // try {
    //   setApiDataError(null);

    //   let result;

    //   if (searchOption == 'shows') {
    //     result = await searchForShows(q);
    //   } else {
    //     result = await searchForPeople(q);
    //   }
    //   setApiData(result);
    // } catch (error) {
    //   setApiDataError(error);
    // }

    // ----

    setFilter({ q, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>ERROR OCCURED: {apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      <div> Data Not Found </div>;
    }

    if (apiData && apiData.length > 0) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
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
