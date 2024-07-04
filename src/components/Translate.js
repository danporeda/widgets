import { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

function Translate() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown 
        options={options}
        selectedLabel={selected.label}
        selectedValue={selected.value}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default Translate;