// import { Link } from 'react-router-dom';
// import Starred from './Starred';
import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const onSetSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault(); //preventDeafault will help us to stop redirecting

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
    const body = await response.json();
    console.log(body)    
      
  };

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
      </form>
    </div>
  );
};

export default Home;
