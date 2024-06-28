import { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among developers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const options = [
  {
    label: 'The color Purple',
    value: 'purple'
  },
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  },
]

function App() {
  const [selected, setSelected] = useState(options[0]);

  return <div>
    <Dropdown 
      options={options} 
      selectedLabel={selected.label}
      onSelectedChange={setSelected}
    />
  </div>;
};

export default App;