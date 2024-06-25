import { useState } from 'react';

function Search() {
  const [term, setTerm] = useState('');

  console.log(term);

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