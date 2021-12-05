import React from 'react';
import Context from '../Context';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = () => (
  <Context.Consumer>
    {({availableSubreddits, selectSubreddit, selectedSubreddit})=> (
       <span>
       <h1>{`Selected: ${selectedSubreddit}`}</h1>
       <select
         onChange={(e) => selectSubreddit(e.target.value)}
         value={selectedSubreddit}
       >
         {renderOptions(availableSubreddits)}
       </select>
     </span>
    )}
  </Context.Consumer>
);

export default Selector;