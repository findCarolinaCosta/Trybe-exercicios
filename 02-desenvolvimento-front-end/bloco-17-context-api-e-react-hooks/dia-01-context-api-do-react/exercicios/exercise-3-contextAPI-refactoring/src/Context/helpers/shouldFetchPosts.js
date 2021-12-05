export default function shouldFetchPosts() {
  const {
    selectedSubreddit,
    postsBySubreddit,
    shouldRefreshSubreddit,
    isFetching,
  } = this.state;
  const posts = postsBySubreddit[selectedSubreddit];

  if (!posts.items) return true;
  if (isFetching) return false;
  return shouldRefreshSubreddit;
}
