function Dropdown ({ options }) {
  const renderedOptions = options.map((option => {
    return (
      <div key={option.label} className="item">
        {option.value}
      </div>
    )
  }));

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">

        </div>
      </div>
    </div>
  )
};

export default Dropdown;