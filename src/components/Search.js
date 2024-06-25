import { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      const results = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        }
      });
      console.log(results.data.query.search);
    };
    search();
  }, [term])

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            className="input" 
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;