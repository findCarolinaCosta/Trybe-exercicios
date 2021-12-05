import { getPostsBySubreddit } from "../../services/redditAPI";

export default function fetchPosts() {
  if (!this.shouldFetchPosts()) return;

  this.setState({
    shouldRefreshSubreddit: false,
    isFetching: true,
  });

  const { selectedSubreddit } = this.state;
  getPostsBySubreddit(selectedSubreddit)
    .then(this.handleFetchSuccess, this.handleFetchError);
}
