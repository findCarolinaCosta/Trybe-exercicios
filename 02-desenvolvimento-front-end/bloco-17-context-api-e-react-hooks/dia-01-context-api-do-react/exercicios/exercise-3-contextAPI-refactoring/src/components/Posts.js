import React from 'react';
import Context from '../Context';

const Posts = () => (
  <ul>
    <Context.Consumer>
      {({posts}) => posts.map(({ id, title }) => <li key={id}>{title}</li>)}
    </Context.Consumer>
  </ul>
);

export default Posts;