import React, { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider, Consumer } = Context;

const INITIAL_POSTS = {
  frontend: {},
  reactjs: {},
}

function RedditProvider({ children }) {
  const [postsBySubreddit, setPostsBySubreddit] = useState(INITIAL_POSTS);
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

//useCallback retornará uma versão memorizada do retorno de chamada que só muda se uma das entradas for alterada.

  const shouldFetchPosts = useCallback(() => {
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  }, [isFetching, postsBySubreddit, selectedSubreddit, shouldRefreshSubreddit])

  const handleFetchSuccess = useCallback((json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);
    
    const newPostsBySubreddit = {
      ...postsBySubreddit,
      [selectedSubreddit]: { items, lastUpdated },
    };
    setPostsBySubreddit(newPostsBySubreddit);
    setShouldRefreshSubreddit(false);
    setIsFetching(false);
  }, [postsBySubreddit, selectedSubreddit])

  const handleFetchError = useCallback((error) => {
    const newPostsBySubreddit = {
      ...postsBySubreddit,
      [selectedSubreddit]: {
        error: error.message,
        items: [],
      },
    };
    setPostsBySubreddit(newPostsBySubreddit)
    setShouldRefreshSubreddit(false);
    setIsFetching(false);
  }, [postsBySubreddit, selectedSubreddit])

  const fetchPosts = useCallback(() => {
    if (!shouldFetchPosts()) return;
    setShouldRefreshSubreddit(false);
    setIsFetching(true);

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess, handleFetchError);
  }, [handleFetchError, handleFetchSuccess, selectedSubreddit, shouldFetchPosts])

  function handlRefreshSubreddit() {
    setShouldRefreshSubreddit(true);
  }

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts, selectedSubreddit, shouldRefreshSubreddit]);


  const context = {
    postsBySubreddit,
    selectedSubreddit,
    shouldRefreshSubreddit,
    isFetching,
    selectSubreddit: setSelectedSubreddit,
    fetchPosts,
    refreshSubreddit: handlRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

    return (
      <Provider value={context}>
        {children}
      </Provider>
    );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Consumer, Context };