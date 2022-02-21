export default function handleFetchError(error) {
  this.setState((state) => {
    const newState = {
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: false,
    };

    newState.postsBySubreddit[state.selectedSubreddit] = {
      error: error.message,
      items: [],
    };

    return newState;
  });
}
