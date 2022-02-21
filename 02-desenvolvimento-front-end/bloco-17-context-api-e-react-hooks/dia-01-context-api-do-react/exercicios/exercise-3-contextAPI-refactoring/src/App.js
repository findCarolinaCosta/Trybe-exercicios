import React from 'react';

import Posts from './components/Posts';
import Selector from './components/Selector';
import Context from './Context';
import Provider from './Context/Provider';

function App() {
  const isEmpty = (postsBySubreddit) => {
    const { items: posts = [] } = postsBySubreddit;
    return  posts.length === 0;
  }

  return (
      <Provider >
        <div>
          <Selector/>
          <Context.Consumer>
            {({lastUpdated, renderLastUpdatedAt, isFetching, postsBySubreddit, selectedSubreddit, refreshSubreddit }) => {
              return (
                <>
                  <div>
                      {lastUpdated && renderLastUpdatedAt()}
                      <button
                        type="button"
                        onClick={(event) => refreshSubreddit(event)}
                        disabled={isFetching}
                        >
                        Refresh
                      </button>
                  </div>
                  {isFetching && <h2>Loading...</h2>}
                  {!isFetching && isEmpty(postsBySubreddit[selectedSubreddit]) && <h2>Empty.</h2>}
                  {!isFetching && !isEmpty(postsBySubreddit[selectedSubreddit]) && <Posts />}
                </>
              )
            }}
          </Context.Consumer>
        </div>
      </Provider>
    );
}

export default App;
