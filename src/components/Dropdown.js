function Dropdown ({ options, selectedLabel, onSelectedChange }) {
  const renderedOptions = options.map((option => {
    return (
      <div 
        key={option.label} 
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.value}
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