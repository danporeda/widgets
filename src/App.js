import { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
  
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;