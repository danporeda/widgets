import { useState, Fragment } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return <Fragment key={item.title}>
      <div className={`title ${active}`} onClick={() => handleClick(index)}>
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.content}</p>
      </div>
    </Fragment>
  })

  return (
  <div className="ui container styled accordion">
    {renderedItems}
  </div>
);
}

export default Accordion;