// import { Link } from 'react-router-dom';
// import Starred from './Starred';
import { useState } from 'react';
import { searchForShows } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);

  const onSetSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault(); //preventDeafault will help us to stop redirecting

    
    // const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
    // const body = await response.json();
    // console.log(body)    
    
    // const body = awaut apiGet(`/search/shows?q=${searchStr}`)

    try{
      setApiDataError(null)

      const result = await searchForShows(searchStr);
      setApiData(result)
    }catch(error){
      setApiDataError(error)
    }
      
  };

  const renderApiData = () => {

    if(apiDataError){
      return <div>ERROR OCCURED: {apiDataError.message}</div>
    }

    if (apiData){
        return apiData.map((data) =>(
          <div key={data.show.id}>{data.show.name}</div>
        ))
    }

    return null;
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchStr}
          onChange={onSetSearchInputChange}
        />
        {/* value is used to make two way data binding */}

        <button type="submit">Search</button>

        <div>{ renderApiData() }</div>
      </form>
    </div>
  );
};

export default Home;
