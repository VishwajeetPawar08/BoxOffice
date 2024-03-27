import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadios from './CustomRadios';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr('');
  const [searchOption, setSearchOption] = useState('shows');

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSetSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSetSearchInputChange} />
      {/* value is used to make two way data binding */}

      <CustomRadios 
          label = "Shows"
          type="radio"
          value="shows"
          name="search-option"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}/>

      
      <CustomRadios 
          label = "Actors"
          type="radio"
          value="actors"
          name="search-option"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}/>

      
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
