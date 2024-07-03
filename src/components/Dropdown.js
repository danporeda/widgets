function Dropdown ({ options, selectedLabel, onSelectedChange }) {
  const renderedOptions = options.map((option => {
    if (option.label === selectedLabel) {
      return null;
    }

    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  }));

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label className="label">Select a Color</label>
          <div className="ui selection dropdown visible active">
            <i className="dropdown icon"></i>
            <div className="text">{selectedLabel}</div>
            <div className="menu visible transition">{renderedOptions}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dropdown;