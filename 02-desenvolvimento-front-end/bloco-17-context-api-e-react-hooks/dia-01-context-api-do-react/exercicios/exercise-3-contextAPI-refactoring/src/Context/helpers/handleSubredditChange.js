export function handleSubredditChange(selectedSubreddit) {
  this.setState({ selectedSubreddit });
}

export function handleRefreshSubreddit() {
  this.setState({ shouldRefreshSubreddit: true });
}