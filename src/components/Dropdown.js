import { useState, useEffect, useRef } from 'react';

function Dropdown ({ options, selectedLabel, onSelectedChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedOptions = options.map((option => {
    if (option.label === selectedLabel) {
      return null;
    }

    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => {
          onSelectedChange(option)
        }}
      >
        {option.label}
      </div>
    )
  }));

  return (
    <div ref={ref} className="ui container">
      <div className="ui form">
        <div className="field">
          <label className="label">Select a Color</label>
          <div 
            onClick={() => {
              setOpen(!open)
            }} 
            className={`ui selection dropdown ${open && 'visible active'}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selectedLabel}</div>
            <div className={`menu ${open && 'visible transition'}`}>{renderedOptions}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dropdown;