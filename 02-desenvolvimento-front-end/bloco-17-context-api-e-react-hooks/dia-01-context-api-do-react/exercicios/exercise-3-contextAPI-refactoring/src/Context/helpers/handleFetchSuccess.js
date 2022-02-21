export default function handleFetchSuccess(json) {
  const lastUpdated = Date.now();
  const items = json.data.children.map((child) => child.data);

  this.setState((state) => {
    const newState = {
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: false,
    };

    newState.postsBySubreddit[state.selectedSubreddit] = {
      items,
      lastUpdated,
    };

    return newState;
  });
}