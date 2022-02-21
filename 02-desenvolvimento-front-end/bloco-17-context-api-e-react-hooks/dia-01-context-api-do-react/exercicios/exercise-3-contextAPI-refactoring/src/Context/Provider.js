import React, { Component } from 'react';
import Context from '.';
import fetchPosts from './helpers/fetchPosts';
import handleFetchError from './helpers/handleFetchError';
import handleFetchSuccess from './helpers/handleFetchSuccess';
import { handleRefreshSubreddit, handleSubredditChange } from './helpers/handleSubredditChange';
import renderLastUpdatedAt from './helpers/renderLastUpdatedAt';
import shouldFetchPosts from './helpers/shouldFetchPosts';

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postsBySubreddit: {
        frontend: {},
        reactjs: {},
      },
      selectedSubreddit: 'reactjs',
      shouldRefreshSubreddit: false,
      isFetching: false,
    };

    this.fetchPosts = fetchPosts.bind(this);
    this.shouldFetchPosts = shouldFetchPosts.bind(this);
    this.handleFetchSuccess = handleFetchSuccess.bind(this);
    this.handleFetchError = handleFetchError.bind(this);
    this.renderLastUpdatedAt = renderLastUpdatedAt.bind(this);
    this.handleSubredditChange = handleSubredditChange.bind(this);
    this.handleRefreshSubreddit = handleRefreshSubreddit.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(_prevProps, prevState) {
    const { state } = this;
    const { shouldRefreshSubreddit } = state;
    const selectedSubredditChanged = prevState.selectedSubreddit !== state.selectedSubreddit;

    if (selectedSubredditChanged || shouldRefreshSubreddit) {
      this.fetchPosts();
    }
  }

  render() {
    const {children} = this.props;
    const {
      selectedSubreddit,
      postsBySubreddit,
    } = this.state;

    const context = {
      ...this.state,
      selectSubreddit: this.handleSubredditChange,
      refreshSubreddit: this.handleRefreshSubreddit,
      availableSubreddits: Object.keys(postsBySubreddit),
      posts: postsBySubreddit[selectedSubreddit].items,
    };

    return(
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    )
  }
}
 
export default Provider;