import { useState } from 'react';

const SearchForm = ({onSearch}) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSetSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options ={
        q: searchStr,
        searchOption
    }

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSetSearchInputChange} />
      {/* value is used to make two way data binding */}

      <label>
        Shows
        <input
          type="radio"
          value="shows"
          name="search-option"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
      </label>

      <label>
        Actors
        <input
          type="radio"
          value="actors"
          name="search-option"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
