import { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 1000)

    return () => {
      clearTimeout(timeoutId);
    }
  }, [term])
  
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        }
      });
      setResults(data.query.search);
    };
    
    if (debouncedTerm) search();
    
  }, [debouncedTerm])

  const renderedItems = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a 
            className="ui button" 
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    );
  })

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
      <div className="ui celled list">{renderedItems}</div>
    </div>
  );
}

export default Search;